const { curry, map, filter, compose, tap, multiply } = require('ramda')

// filters
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// concept called curry, partial application, auto curry
const divisibleBy = curry(function(number, value) {
  return value % number === 0
})

const isEven = divisibleBy(2)

function print(v) {
  console.log(v)
}

const double = multiply(2)

const printDoubleEvenNumbers = compose(
  map(tap(print)),
  map(double),
  map(tap(print)),
  filter(isEven)
)

printDoubleEvenNumbers(numbers)
