import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="services section" id="services">
        <h2 className='section_title'>Services</h2>
    <span className="section_subtitle">What i offer</span>

    <div className="services_container container grid">
        <div className="services_content">
            <div>
                <i className="uil uil-web-grid services_icon"></i>
                <h3 className="services_title">
                    Frontend  <br /> Developer </h3>
            </div>

            <span className="services_button" onClick={() => toggleTab(1)}>View More 
            <i className="uil uil-arrow-right services_button-icon"></i></span>

            <div className={toggleState ===1 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">Frontend Developer</h3>
                    <p className="services_modal-description">Areas that I am improving myself more and more. 
                    Striving to always achieve excellence.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Interactivity Implementation.</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Implementation of Animations and Effects.</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Technological Update.</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>

        <div className="services_content">
            <div>
                <i className="uil uil-arrow services_icon"></i>
                <h3 className="services_title">Ui/Ux <br /> Designer</h3>
            </div>

            <span onClick={() => toggleTab(2)} className="services_button">View More
             <i className="uil uil-arrow-right services_button-icon"></i>
             </span>

            <div className={toggleState ===2 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">Ui/Ux Designer</h3>
                    <p className="services_modal-description">Areas that I am improving myself more and more. 
                    Striving to always achieve excellence.</p>

                    <ul className="services_modal-services grid">
                    

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">I keep up to date on the latest trends in design.</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">I create ux element interactions.</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">I create the visual appearance of digital interfaces.</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="services_content">
            <div>
                <i className="uil uil-edit services_icon"></i>
                <h3 className="services_title">Web <br /> Developer</h3>
            </div>

            <span onClick={() => toggleTab(3)} className="services_button">View More
             <i className="uil uil-arrow-right services_button-icon"></i></span>

            <div className={toggleState ===3 ? "services_modal active-modal" : "services_modal"}>
                <div className="services_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                    <h3 className="services_modal-title">Web Developer</h3>
                    <p className="services_modal-description">Areas that I am improving myself more and more. 
                    Striving to always achieve excellence.</p>

                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">I'm up to date on technologies and development tools.</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">Web page development.</p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">I implement the design and interactivity of the interfaces.</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>

    </div>
    </section>
  )
}

export default Services