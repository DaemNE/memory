import React from 'react'

function Header({score, highScore}) {
  return (
    <React.Fragment>
      <div className='header'>

      <div className='scores'><span>Current Score: {score}</span> HighScore: {highScore} </div>
      <div>Ken jij het verbond al?</div>
      <div className='info-game'>Klik elk lid max 1 maal aan. Repeat = Game Over!</div>
      </div>
    </React.Fragment>
  )
}

export default Header