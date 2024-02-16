import React from 'react';

const Info = () => {
  return (
   <div className="about_info grid">
    <div className='about_box'>
        <i className="bx bx-award about_icon"></i>

        <h3 className="about_title"> Experience</h3>
        <span className="about_subtitle">13 Months Studying</span>
    </div>

    <div className='about_box'>
        <i className="bx bx-briefcase-alt about_icon"></i>

        <h3 className="about_title">Working</h3>
        <span className="about_subtitle">4 + Projects</span>
    </div>

    <div className='about_box'>
        <i className='bx bxs-graduation about_icon' ></i>

        <h3 className="about_title">Graduation</h3>
        <span className="about_subtitle">2026</span>
    </div>
   </div>
  )
}

export default Info