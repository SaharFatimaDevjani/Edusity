import React from 'react'
import v1img from '../images/v1-img.png'
import v2img from '../images/v2-img.png'
import v1 from '../videos/v1.mp4'

export default function AboutUs() {
  return (
    <div id='about'>
      <div className='about-main container'>
        <div className='about-video'>
          {/* <video src={v1} /> */}
          <img className="img1" src={v1img}/>
          <img className="img2" src={v2img}/>
        </div>
        <div className='about-text'>
          <h3 className='head-p'>ABOUT UNIVERSITY</h3>
          <h2 className='main-h2'>Nurturing Tomorrow's <br/>Leaders Today</h2>
          <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
          <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
          <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>


      </div>
    </div>
  )
}
