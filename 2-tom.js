const utils = require('./utils')

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function print(value) {
  console.log(value)
}

function double(value) {
  console.log(value * 2)
}

//numbers.forEach(print)
utils.forEach(double, numbers)

// our own forEach
function forEach(fn, list) {
  for (let i = 0; i < list.length; i++) {
    fn(list[i])
  }
}
