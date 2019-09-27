import React from 'react'
import './CircleSelector.css'

const CircleSelector = (props) => {
  const {selects, selButton, handleClick} = props
  return (
    <div className="CircleSelector">
      {selects.map((num, idx) => 
        <button 
          className={selButton === idx && 'selected'}
          onClick={() => handleClick(idx)}
        >
          Select Circle {num + 1}
        </button>
      )}
    </div>
  )
}

export default CircleSelector