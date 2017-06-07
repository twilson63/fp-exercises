const { reduce } = require('./fp-utils')

function map(fn, list) {
  function reducer(acc, value) {
    //acc.push(fn(value))
    //return acc
    return acc.concat([fn(value)])
    //return [...acc, ...[fn(value)]]
  }

  return reduce(reducer, [], list)
}

const result = map(
  function(v) {
    console.log(v)
    return v + 1
  },
  [1, 2, 3]
)

console.log(result)
