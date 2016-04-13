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
    A |   |   |   |   |   |   |   | W | P | U | -> 1111111000
    B |   |   |   |   |   |   |   |   | P |   | -> 1111111101
    C |   |   |   |   |   |   |   |   | P |   | -> 1111111101
    D |   |   |   |   |   |   |   |   | P | Q | -> 1111111100
    G | V |   |   |   | T |   |   |   | P | S | -> 0111011100
    H |   |   |   |   |   |   |   |   | P | R | -> 1111111100
    E | V |   |   |   | T |   |   |   | P | S | -> 0111011100
    F |   |   |   |   |   |   |   |   | P | R | -> 1111111100

* All empty cells are possible.
* Reasons are the followings:
  * `P: P = 1`
    * The largest 2-digit number = `99`
    * The sum of two largest 2-digit numbers = `198`
    * The sum of two smallest 2-digit numbers = `0`
    * `[EF], [GH] > 11`
      * `if [EF] <= 11`
        * `GH >= 100`
          * `CONTRADICTION`
      * `11 < [EF] + [GH] <= 198`
        * `[EF] + [GH] = 111`

  * `Q: D != 0`
    * `if D = 0
      * `B = F`
        * `CONTRADICTION`

  * `R: F, H != 0`
    * `if F = 0`
      * `H = 1`
        * `CONTRADICTION`

  * `S: E, G != 0`
    * `if E = 0`
      * `102 <= 111 - F = [GH] <= 111`
        * `CONTRADICTION`

  * `T: E, G != 5`
    * `if E = 5`
      * `52 <= [EF] = 111 - [GH] <= 59`
        * `52 <= [GH] <= 59`
          * `E = G`
            * `CONTRADICTION`

  * `U: A != 0`
    * `if A = 0`
      * `02 < [AB] < 09`
      * `[EF] = [AB] - [CD] > 11`
        * `09 > [AB] > [CD] > 00`
          * `A = B`
            * `CONTRADICTION`

  * `V: E, G != 9`
    * `if E = 9`
      * `12 <= [GH] = 111 - 90 - F = 21 - F <= 21`
        * `F < 2`
          * `if F >= 2
            * `G = 1`
              * `CONTRADICTION`
        * `F != 0`
        * `F != 1`
        * `CONTRADICTION`

  * `W: A != 2`
    * `if A = 2`
      * `20 <= [AB] <= 29`
    * `[AB] > [CD]`
      * `02 <= [CD] <= 09`
        * `C = 0`
    * `if B > D`
      * `A = C`
        * `CONTRADICTION`
    * `if B < D`
      * `C = 1`
        * `CONTRADICTION`
    * `B != D`
    * `CONTRADICTION`