let arrOne = [1, 3, 40, 34, 100, 234, 35, 1020, 23];

let arrTwo = [1, 4, 40, 37, 100, 2342, 350, 10201, 23];

function resultExOne(arrOne, arrTwo) {
  let arrResult;
  return (arrResult = [...new Set(arrOne.concat(arrTwo))]);
}

function resultExTwo(arrOne, arrTwo) {
  let arrResult = [];
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrOne[i] === arrTwo[j]) {
        arrResult.push(arrOne[i]);
        break;
      } else continue;
    }
  }
  return arrResult;
}

function resultExThree(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrOne[i] === arrTwo[j]) {
        arrOne.splice(i, 1);
        break;
      } else continue;
    }
  }
  return arrOne;
}

document.write(`Array #1: ${arrOne} <br>`);
document.write(`Array #2: ${arrTwo} <br>`);

document.write(`<br> <br>`);

document.write(`ex1: ${resultExOne(arrOne, arrTwo)}<br>`);
document.write(`<br> <br>`);
document.write(`ex2: ${resultExTwo(arrOne, arrTwo)}<br>`);
document.write(`<br> <br>`);
document.write(`ex3: ${resultExThree(arrOne, arrTwo)}<br>`);
