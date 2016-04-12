/*

#COMBINATION: 362880 = 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2
#ACTUAL     : 3471

P: P = 1                      <-- 99 + 99 < 200
                                  0 - Z + Z = 000
Q: A != 0                     <-- 09 - 12 < 0
R: D != 0                     <-- Z - 0 = Z
S: F, H != 0                  <-- Z + 0 = Z
T: E, G != 0                  <-- 09 + 102 = 111
U: E, G != 1                  <-- MIN + MAX = 111
                                  MAX = 87
                                  MIN = 24
V: A != 2                     <-- A * 10 + B > C * 10 + D
                                  B > D -> A = E
                                  D > B -> E = 1

  | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
A |   |   |   |   |   |   |   | V | P | Q | -> 1111111000
B |   |   |   |   |   |   |   |   | P |   | -> 1111111101
C |   |   |   |   |   |   |   |   | P |   | -> 1111111101
D |   |   |   |   |   |   |   |   | P | R | -> 1111111100
E | U |   |   |   |   |   |   |   | P | T | -> 0111111100
F |   |   |   |   |   |   |   |   | P | S | -> 1111111100
G | U |   |   |   |   |   |   |   | P | T | -> 0111111100
H |   |   |   |   |   |   |   |   | P | S | -> 1111111100

*/

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

let R = 0;

let abcdefghppp = (bit, index, actual, expected, backtrace) => {
  R++;

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
console.log(R);
