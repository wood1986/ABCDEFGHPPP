"use strict";

const b = [0b1111111000,  // A * 10
           0b1111111101,  // B
           0b1111111101,  // C * -10
           0b1111111100,  // D
           0b0111111100,  // G * 10
           0b1111111100,  // H
           0b0111111100,  // E
           0b1111111100]; // F

const k = [10,
           1,
           -10,
           -1,
           10,
           1];

const m = {
  "0": "A",
  "1": "B",
  "2": "C",
  "3": "D",
  "4": "G",
  "5": "H",
  "6": "E",
  "7": "F"
};

let abcdefghppp = (bit, index, actual, expected, backtrace) => {
  if (index === 4) {
    if (actual < 24) {
      return;
    }

    let e = ~~(actual / 10),
        f = (actual % 10);

    if (e === f) {
      return;
    }

    e = 1 << e;
    f = 1 << f;

    if ((e & bit & b[6]) === 0 || (f & bit & b[7]) === 0) {
      return;
    }

    bit = bit ^ e ^ f;

    backtrace += `${m[6]} : ${~~(actual / 10)} | ${m[7]} : ${actual % 10} | `
  }

  if (index >= 6) {
    if (actual === expected) {
      console.log(backtrace);
      return;
    }

    return;
  }

  for (let i = 0; i < 10; i++) {
    let n = (1 << i) & b[index] & bit;
    if (!n) {
      continue;
    }
    abcdefghppp(bit ^ n, index + 1, actual + i * k[index], expected, backtrace + `${m[index]} : ${i} | `);
  }
}

abcdefghppp((1 << 10) - 1, 0, 0, 111, "| ");
