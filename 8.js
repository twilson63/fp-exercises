const utils = require('./fp-utils')
const characters = ['Mickey', 'Donald', 'Goofy', 'Minnie', 'Daisy']

function count(acc, value) {
  return acc + 1
}

const total = utils.reduce(count, 0, characters)
console.log(total)
