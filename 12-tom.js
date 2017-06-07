// map exercises
const converter = require('number-to-words')
const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]
const { map, compose } = require('./fp-utils')
const trace = function (v) {
  console.log(v)
  return v
}

/*
5. Use the map function transform a list of movies objects from a movie
*/
const h = require('hyperscript')
const request = require('request')
const search = (query, callback) => {
  request({
    method: 'GET',
    json: true,
    url: 'http://www.omdbapi.com/?r=json&s=' + query + '&apikey=21d70f1a'
  }, (e,r,b) => callback(e,b))
}

const img = (url) => h('img', {src: url})

search('batman', (err, body) => {
  // map over results and show movie posters
  console.log(body)
})

/*
4. Use the map function to convert a list of colors to their rgb code.

*/
// const convert = require('color-convert')
// const cssColorList = require('css-color-list')
// const colors = ['red', 'peru', 'orange', 'rebeccapurple']
// // ex: convert.keyword.rgb('red')
// compose(
//   trace,
//   map(toRGB)
// )(cssColorList())
//
// function toRGB (name) {
//   return `${name} - ${convert.keyword.rgb(name)}`
// }
/*
3. Use the map function and hyperscript to tranform a list of strings to

an unordered list

*/

// const h = require('hyperscript')
// const buzzwords = require('buzzwords')
// const li = (w) => h('li', w)
//
// console.log(h('ul', map(li, buzzwords) ).outerHTML)

/*
2. Use the map function to add 10 to array of numbers

const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]
*/

// need function will add 10 to a number
// map over numbers and apply this add10 function

function add10 (n) {
  return n + 10
}

// compose(
//   trace,
//   map(converter.toWords),
//   map(add10)
// )(numbers)

/*
1. Use the number to words module and map, to transform this
array of number to array of words
*/

// trace(
//   map(converter.toWords, numbers)
// )
