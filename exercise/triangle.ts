function triangle(height: number) {
  for (let i = 1; i <= height; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
      res += `${j} `;
    }
    console.log(res);
  }
}

// triangle(5);

function triangle2(height: number) {
  let k: number = 0;
  for (let i = 1; i <= height; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
      k++;
      if (k < 10) {
        res += `0${k} `;
      } else {
        res += `${k} `;
      }
    }
    console.log(res);
  }
}

triangle2(4);
