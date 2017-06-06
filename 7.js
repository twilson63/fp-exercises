const { wordsToNumbers } = require('words-to-numbers')
const { map, compose } = require('ramda')

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

const printSumDivThree = compose(
  // tap(print),
  // sum,
  // filter(divisbleBy(3)),
  map(wordsToNumbers)
)

printSumDivThree(numbers)
