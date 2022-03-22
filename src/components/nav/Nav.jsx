import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {TiUser} from 'react-icons/ti'
import {ImBook} from 'react-icons/im'
import {RiServiceFill} from 'react-icons/ri'
import {RiContactsBook2Fill} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><TiUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImBook /></a>
      <a href='#service' onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceFill /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook2Fill /></a>
    </nav>
  )
}

export default Nav