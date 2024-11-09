import React from 'react'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import arrow from '../images/arrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Campus() {
  return (
    <div id='campus'>
      <div className='container campus-main'>
        <p className='head-p'>GALLERY</p>
        <h2 className='main-h2'>Campus Photos</h2>
        <div className='campus-image'>
          <img src={c1} className='campus-img' />
          <img src={c2} className='campus-img' />
          <img src={c3} className='campus-img' />
          <img src={c4} className='campus-img' />
        </div>
        <div className='button-div'>
          <a className="button2" href="#">See more here <img className='arr-img' src={arrow}/></a>
        </div>
      </div>
    </div>
  )
}
