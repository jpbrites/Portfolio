import React from 'react'
import './feature.css'

function Feature({titulo,cor}) {
  return (
    <div className='features-container'>
        <div className='features-container__feature-title'>
            <div />
            <h1 style={{color: cor}}>{titulo}</h1>
        </div>
    </div>
  )
}

export default Feature