import React from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {id: 1, image: "../../assets/certificates/Discover.png"},
    {id: 2, image: "../../assets/certificates/DataStructureC.jpg"},
    {id: 3, image: "../../assets/certificates/Git.jpg"},
    {id: 4, image: "../../assets/certificates/ProFigma.jpg"},
]

register()

const Certificate = () => {
  return (
    <section className='certificate section'>
        <h2 className="section_title">Certificate</h2>
        <span className="section_subtitle">My certificates</span>

        <Swiper slidesPerView={1} pagination={{clickable: true}}>
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <img src= {item.image} alt='slider' className='slide-item' />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}

export default Certificate;