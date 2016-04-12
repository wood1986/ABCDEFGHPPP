## Question

      AB
    - CD
    ----
      EF
    + GH
    ----
     PPP

* A, B, C, D, E, F, G, H, P are unique and single digit.
* Find all the answers

## Filter

      | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
    A |   |   |   |   |   |   |   | V | P | T | -> 1111111000
    B |   |   |   |   |   |   |   |   | P |   | -> 1111111101
    C |   |   |   |   |   |   |   |   | P |   | -> 1111111101
    D |   |   |   |   |   |   |   |   | P | Q | -> 1111111100
    G | U |   |   |   |   |   |   |   | P | S | -> 0111111100
    H |   |   |   |   |   |   |   |   | P | R | -> 1111111100
    E | U |   |   |   |   |   |   |   | P | S | -> 0111111100
    F |   |   |   |   |   |   |   |   | P | R | -> 1111111100

* All empty cells are possible.
* Reasons are the followings:
  * `P: P = 1`
    * The largest 2-digit number = `98`
    * The sum of two largest 2-digit numbers = `183`
        * `97 + 86 = 183`
    * The sum of two smallest 2-digit numbers = `15`
        * `02 + 13 = 15`
    * `15 < [EF] + [GH] < 183`
  * `Q: D != 0`
    * if `D == 0`, then `B = F`
  * `R: F, H != 0`
    * if `F = 0`, then `H = 1`
  * `S: E, G != 0`
    * if `E = 0`, then `102 <= 111 - F = [GH] < 111`
  * `T: A != 0`
    * if `A == 0`
      * `02 < [AB] < 09`
      * `[CD] > 10`
      * `[AB] - [CD] < 0`
  * `U: E, G != 9`
    * if `E = 9`
      * `[GH] = 111 - 90 - F = 21 - X`
      * `12 <= [GH] = 21 - F <= 21`
  * `V: A != 2`
    * if `A = 2`
      * `[CD] < 20 + B = [AB]`
      * `[CD] < 10`

