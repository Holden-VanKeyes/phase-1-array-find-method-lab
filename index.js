// ex. const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]
// create a function that uses the .find method called superbowlWin()**
// the function should receive 1 argument which is an Array of Javascript Objects**
// each object has 2 properties (year, result)
// it should use find() to test each Object to see if the result is ==='W'**
// it should return a year when the win occured
// if no win is found it should return undefined

const superbowlWin = function (arr) {
  let winnings = arr.find((obj) => obj.result === 'W')
  if (winnings) return winnings.year
  return undefined
}
