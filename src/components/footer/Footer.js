import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                <div className="navItem">
            <img src='https://karma.co.ke/wp-content/uploads/2022/03/Karma-Website-Logo.png' alt="" width={250} height={100} />
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            </div>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                    </div>
                </div>
                

                    
                
            </div>
        </div>
    )
}

export default Footer
