import React from 'react'
import './DestinationsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>The Kenya Association Of Records Managers & Archivists (KARMA)</h1>
                <p>We are a non-profit making organization registered in October 2010 with the aim of organizing, representing and acting as the professional body for persons working in or interested in records and archives management and to govern members in all matters of professional practice. The association also fosters and promotes education, research, training and invention in records and archives management through partnering with public and private institutions. The association draws its membership from records managers and archivists in public and private institutions.</p>
                <h1>Become a Member of KARMA</h1>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/"/>
                    <img src={BoraBora2} alt="/"/>
                    <img src={Maldives} alt="/"/>
                    <img src={Maldives2} alt="/"/>
                    <img src={KeyWest} alt="/"/>
                    
 
                </div>
            </div>
        </div>
    )
}

export default Destinations
