import React from 'react'

function Card({altImage, person, onClickhandler}) {
  return (
    <div className='card'>
        <img src={require(`../images/${person}.jpeg`)} alt={altImage} onClick={() => onClickhandler()}/>
        <div className="info-name">Baby {person}</div>
    </div>
  )
}

export default Card