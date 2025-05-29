import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faThreads } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'bootstrap';


function Footer() {
    return (
        <>
            <div className='nav1'>
                <a href="#">ABOUT ROG </a>
                <a href="#">HOME  </a>
                <a href="#">NEWS ROOM  </a>
                <a href="#"> ACCESSIBILITY HELP </a>
                <h6>GET THE LATEST DEALS AND MORE</h6>
            </div>

            <div className='all'>
                <div className='footer'>
                    <FontAwesomeIcon icon={faFacebook} className='icons5' />
                    <FontAwesomeIcon icon={faXTwitter} className='icons5' />
                    <FontAwesomeIcon icon={faDiscord} className='icons5' />
                    <FontAwesomeIcon icon={faYoutube} className='icons5' />
                    <FontAwesomeIcon icon={faTwitch} className='icons5' />
                    <FontAwesomeIcon icon={faInstagram} className='icons5' />
                    <FontAwesomeIcon icon={faTiktok} className='icons5' />
                    <FontAwesomeIcon icon={faThreads} className='icons5' />
                </div>
                <div className='emial'>
                    <input type='emial' placeholder='ENTER YOUR EMIAL'></input>
                    <button>SIGN UP </button>
                </div>
            </div>
            <div className='rog1'>
                 <img src='./Image/Rog.png' />
              
            </div>



        </>
    )
}

export default Footer
