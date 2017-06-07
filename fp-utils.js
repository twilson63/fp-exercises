const { curry } = require('ramda')

module.exports = {
  forEach: forEach,
  map: curry(map),
  filter: curry(filter),
  reduce: log(curry(reduce), 'reduce is called'),
  compose: log(compose, 'compose is called')
}

function log(fn, desc) {
  console.log(desc)
  return fn
}

// pure functions
function compose(...fns) {
  function execReducer(acc, fn) {
    return fn(acc)
  }

  return function(x) {
    return reduce(execReducer, x, fns.reverse())
  }
}

function reduce(reducer, acc, list) {
  forEach(function(x) {
    acc = reducer(acc, x)
  }, list)
  return acc
}

function filter(fn, list) {
  let results = []
  forEach(function(v) {
    if (fn(v)) {
      results.push(v)
    }
  }, list)
  return results
}

function map(fn, list) {
  let results = []
  forEach(function(v) {
    const result = fn(v)
    results.push(result)
  }, list)
  return results
}

function forEach(fn, list) {
  for (let i = 0; i < list.length; i++) {
    fn(list[i])
  }
}
