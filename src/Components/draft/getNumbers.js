const getNumbersFunction = (initial, final) => {
  let numbers = [];
  for(let i = initial; i < final; i++){
    numbers.push(i);
  }
  return numbers;
}

export const getNumbers = getNumbersFunction(0, 531);
console.log(result);