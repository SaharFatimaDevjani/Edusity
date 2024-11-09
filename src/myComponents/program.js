import React from 'react'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'

export default function Program() {
  return (
    <div  id='program'className='program-main container'>
      <p className='head-p'>OUR PROGRAM</p>
      <h2 className='main-h2'>What We Offer</h2>
      <div className='program-div'>
        <div>
          <img src={p1} alt="graduation"/>
        </div>
        <div>
        <img src={p2} alt="master"/>
        </div>
        <div>
        <img src={p3} alt="phd"/>
        </div>
      </div>
    </div>
  )
}
