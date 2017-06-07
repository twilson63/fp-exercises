const { wordsToNumbers } = require('words-to-numbers')
const { map, compose, tap, curry, filter } = require('ramda')

const numbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten'
]

function count(list) {
  function reducer(accumulator, value) {
    return accumulator + 1
  }
  return list.reduce(reducer, 0)
}

function sum(list) {
  function reducer(accumulator, value) {
    return accumulator + value
  }

  return list.reduce(reducer, 0)
}

const divisibleBy = curry(function(number, value) {
  return value % number === 0
})

const printSumDivThree = compose(
  tap(function(v) {
    console.log(v)
  }),
  sum,
  filter(divisibleBy(3)),
  map(wordsToNumbers)
)

printSumDivThree(numbers)
