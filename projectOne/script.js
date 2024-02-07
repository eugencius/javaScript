'use strict'

// document.querySelector('.message').textContent = 'Correct Number!'

// const number = document.querySelector('.number')
// const score = document.querySelector('.score')
// const input = document.querySelector('.guess')

const body = document.querySelector('body')
const scoreElement = document.querySelector('.score')
const numberElement = document.querySelector('.number')
const messageElement = document.querySelector('.message')

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1
let randomNumber = generateSecretNumber()
let score = 20

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    messageElement.textContent = '⛔ No number!'
  } else {
    if (score > 0) {
      if (guess === randomNumber) {
        // Guess of the user is correct.
        const highscoreElement = document.querySelector('.highscore')
        const highscore = Number(highscoreElement.textContent)

        if (score > highscore) {
          highscoreElement.textContent = score
        }

        messageElement.textContent = '🎉 The number is correct!'
        numberElement.textContent = randomNumber
        body.style.backgroundColor = '#60b347'
        numberElement.style.width = '30rem'
      } else {
        // Guess of the user is wrong.
        if (guess > randomNumber) {
          messageElement.textContent = '📈 The number is too high!'
        } else if (guess < randomNumber) {
          messageElement.textContent = '📉 The number is too low'
        }

        score--
        scoreElement.textContent = score

        if (score <= 0) {
          body.style.backgroundColor = 'red'
          messageElement.textContent = '💥 You lost the game. Start again.'
        }
      }
    }
  }
})

document.querySelector('.again').addEventListener('click', () => {
  randomNumber = generateSecretNumber()
  score = 20
  scoreElement.textContent = score

  messageElement.textContent = 'Start guessing...'
  numberElement.textContent = '?'
  numberElement.style.width = '15rem'
  body.style.backgroundColor = '#222'
  document.querySelector('.guess').value = ''
})
