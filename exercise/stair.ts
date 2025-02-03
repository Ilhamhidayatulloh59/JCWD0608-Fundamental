/*
n = 5
*****
 ****
  ***
   **
    *
*/

function stair(n: number) {
  for (let i = n; i > 0; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
}

stair(5);

/*
    *
   ***
  *****
 *******
*********   
 */