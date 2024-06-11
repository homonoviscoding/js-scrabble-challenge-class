class Scrabble {
  // Write your implementation here

  result
  pointRef
  characters
  inputSplit

  constructor(characters, pointRef, inputSplit , result) {
    this.pointRef = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10
    }
    this.characters = characters
    this.inputSplit = inputSplit 
    this.result = result
  }

  score() {
    
    if (typeof this.characters !== 'string') {
      return 0
    }

    this.inputSplit = this.characters.toUpperCase().split('')
    this.result = 0
    for (let i = 0; i < this.inputSplit.length; i++) {
      if (!Object.keys(this.pointRef).includes(this.inputSplit[i])) {
        return 0
      }
      this.result += this.pointRef[this.inputSplit[i]]
    }
    return this.result
  } 
}
let scrabble = new Scrabble('f')
scrabble.score()


module.exports = Scrabble
