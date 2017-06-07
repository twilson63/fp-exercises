const { filter, compose, map } = require('./fp-utils')
const trace = function (v) {
  console.log(v)
  return v
}
/* 3. Filter all buzzwords that contains cloud, html, and data */
const h = require('hyperscript')
const buzzwords = require('buzzwords')
const li = (w) => h('li', w)

const renderBuzzwords = compose(
  map(li),
  filter(contains(['cloud', 'html', 'data']))
)

console.log(h('ul', renderBuzzwords(buzzwords)).outerHTML)

function contains (keepers) {
  return function (buzzword) {
    return keepers.find(keeper => hasText(buzzword, keeper))
  }
}

function hasText (compareString, queryString) {
  return RegExp(queryString).test(compareString)
}
//const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

/* 2. Show only numbers divisible by 5 */
// const isDivisibleBy5 = function (v) {
//   return v % 5 === 0
// }
//
// compose(
//   trace,
//   filter(isDivisibleBy5)
// )(numbers)



/* 1. Show only even numbers */
// const numbers = [1,2,3,4,5,6,7,8,9,10]
//
// const isEven = function (v) {
//   return v % 2 === 0
// }
//
// compose(
//   trace,
//   filter(isEven)
// )(numbers)
