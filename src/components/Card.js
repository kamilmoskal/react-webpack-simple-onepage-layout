import React from 'react'

const Card = () => {
  return (
    <div className="card">
        <img src={require('../img/got.jpg')} alt=""/>
        <h1>Game of Thrones</h1>
        <p>seasons 7</p>
        <div className="rate">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        </div>
        <div className="play">
            <i className="fas fa-play-circle"></i>
        </div>
        
    </div>
  )
}

export default Card
