import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsBehance} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        
        <a href='' target="_blank"><BsInstagram/></a>
        <a href='' target="_blank"><BsBehance/></a>
        
    </div>
  )
}

export default HeaderSocials