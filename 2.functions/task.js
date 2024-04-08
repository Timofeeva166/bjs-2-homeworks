function getArrayParams(...arr) {
  let sum = 0;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  sumEvenElement = 0;
  sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return Number((sumEvenElement / countEvenElement).toFixed(2));
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let max = func(...arrOfArr[i]);
    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
  }
  return maxWorkerResult;
}
