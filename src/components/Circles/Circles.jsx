import React from 'react'
import './Circles.css'

const Circles = (props) => {
  const {selects, selCircle} = props
  return (
    <div className="Circles">
      {selects.map((num, idx) => 
        <div className={selCircle === idx && 'selected'}>{num + 1}</div>
      )}
    </div>
  )
}

export default Circles