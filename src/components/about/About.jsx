import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
import {FaFolder} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsFillAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about_card">
              <HiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <FaFolder className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure laborum provident architecto accusantium, officia quam numquam dolorem. Consequuntur, libero iure illo ullam debitis explicabo ab placeat repellendus vel nisi!</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About