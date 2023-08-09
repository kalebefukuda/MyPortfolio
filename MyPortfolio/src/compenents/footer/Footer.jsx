import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer_container container'>
            <h1 className="footer_title">Kalebe Fukuda</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer_link">Testimonials</a>
                </li>
            </ul>

            <div className="footer_social">
            <a href="https://www.instagram.com/kalebefukuda_/" className="footer_social-link" target='_blank'rel="noreferrer">
    <i className="bx bxl-instagram"></i>
    </a>

    <a href="https://www.linkedin.com/in/kalebefukuda/" className="footer_social-link" target='_blank'rel="noreferrer">
    <i className="bx bxl-linkedin"></i>
    </a>

    <a href="https://twitter.com/kalebefukuda" className="footer_social-link" target='_blank'rel="noreferrer">
    <i className="bx bxl-twitter"></i>
    </a>
            </div>

            <span className='footer_copy'>&#169; Crypticalcoder. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer