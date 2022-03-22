import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Lorem',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi nihil assumenda praesentium velit magni porro, dignissimos, sit hic laboriosam illum tenetur maiores odit placeat, expedita veniam neque consectetur eaque?'
  },
  {
    avatar: AVTR2,
    name: 'Lorem',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi nihil assumenda praesentium velit magni porro, dignissimos, sit hic laboriosam illum tenetur maiores odit placeat, expedita veniam neque consectetur eaque?'
  },
  {
    avatar: AVTR3,
    name: 'Lorem',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi nihil assumenda praesentium velit magni porro, dignissimos, sit hic laboriosam illum tenetur maiores odit placeat, expedita veniam neque consectetur eaque?'
  },
  {
    avatar: AVTR4,
    name: 'Lorem',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi nihil assumenda praesentium velit magni porro, dignissimos, sit hic laboriosam illum tenetur maiores odit placeat, expedita veniam neque consectetur eaque?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testinomials</h2>

      {/* <Swiper className="container testimonials_container">
      modules={Pagination}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt=''/>
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className="client_review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper> */}
    </section>
  )
}

export default Testimonials