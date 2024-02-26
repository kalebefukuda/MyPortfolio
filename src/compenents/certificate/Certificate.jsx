import React from 'react';
import './certificate.css';
import Discover from '../../assets/certificates/Discover.png'
import Git from "../../assets/certificates/Git.jpg"
import DataStructureC from "../../assets/certificates/DataStructureC.jpg"
import ProFigma from "../../assets/certificates/ProFigma.jpg"
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
register()

const data = [
    {id: 1, image: Discover},
    {id: 2, image: DataStructureC, class:'larger-image'},
    {id: 3, image: Git, class:'larger-image'},
    {id: 4, image: ProFigma, class:'larger-image'},
]

const Certificate = () => {
  return (
    <section className='certificate section'>
        <h2 className="section_title">Certificate</h2>
        <span className="section_subtitle">My certificates</span>

        <div className="certificate-container">
            <div className="certificate-images">
                <Swiper slidesPerView={1} pagination={{clickable: true}} className='swiper-container'>
                {data.map((item) => (
                        <SwiperSlide key={item.id} className='slider-pagination'>
                            <img src={item.image} alt='slider' className= {`slide-item ${item.class}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </div>
    </section>
  )
}

export default Certificate;
