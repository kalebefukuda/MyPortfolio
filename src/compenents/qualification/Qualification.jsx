import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personel journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification_icon"></i> Education
                </div>

                <div className={toggleState ===2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>

                    <div className="qualification_data">
                        
                        <div>
                            <h3 className="qualification_title"> Software Engineering</h3>
                            <span className="qualification_subtitle"> PUC - College</span>

                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - Studying
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Customer Service</h3>

                            <span className="qualification_subtitle"> Dakopeças - Company</span>

                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                            </div>
                        </div>  
                        
                    </div>

                    <div className="qualification_data">
                        
                        <div>
                            <h3 className="qualification_title"> Web Program</h3>
                            <span className="qualification_subtitle"> Rocketseat - Company</span>

                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - Finished
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Data Organizer</h3>

                            <span className="qualification_subtitle"> Dakopeças - Company</span>

                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                            </div>
                        </div> 
                        
                    </div>
                    <div className="qualification_data">
                        
                        <div>
                            <h3 className="qualification_title"> Pro Figma | UI Design</h3>
                            <span className="qualification_subtitle"> Udemy - Company</span>

                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2023 - Finished
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>
                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Industrial Automation Assistant</h3>

                            <span className="qualification_subtitle"> Realtec Automação - Company</span>

                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2023 -2024
                            </div>
                        </div>                      
                    </div>

                    <div className="qualification_data">
                        
                        <div>
                            <h3 className="qualification_title"> Tailwind CSS</h3>
                            <span className="qualification_subtitle"> Udemy - Company</span>

                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2024 - Finished
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">Internship in Software Development</h3>

                            <span className="qualification_subtitle"> Becomex - Company</span>

                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 2024 - Current
                            </div>
                        </div>                      
                    </div>
                    
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Qualification