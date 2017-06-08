const { reduce } = require('./fp-utils')
const { curry } = require('ramda')

/* 2. Use reduce to count the number of items that are true */
const items = [false, true, false, true, true]

function equals (a, b) {
  return a === b
}

function add(a) {
  return a + 1
}

function identity (v) {
  return v
}

function ifElse (cond, success, reject) {
  return function (v) {
    if (cond(v)) {
      return success(v)
    } else {
      return reject(v)
    }
  }
}

const addIfTrue = function (acc, value) {
  if (value) {
    return acc + 1
  } else {
    return acc
  }
}

//return
// const curriedEquals = curry(equals)=
//return ifElse(curriedEquals(true), function(v) { add1(acc) }, identity)(value)

console.log(
  reduce(addIfTrue, 0, items)
)

/* 1. Use reduce to add the list of numbers together and return the sum */

// const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99]
//
// function add (a, b) {
//   return a + b
// }
//
// console.log(
//   // args = reducer, initialValue, list
//   reduce(add, 0, numbers)
// )
