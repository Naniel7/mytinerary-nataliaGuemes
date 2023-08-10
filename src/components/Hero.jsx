import React from 'react'
import Call from './Call'
import { Button } from 'react-bootstrap';

export default function Hero() {
    return (
        <>
            <div className='hero-container'>
                <div className='hero'>
                    <div className='hero-text'><h3>Find the perfect destination</h3>
                        <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier. <b>Find your perfect trip, designed by insiders
                            who know and love their cities!.</b></p>
                        <Button className="log-btn" variant="info"> View More</Button></div>
                    <div className='hero-img'><img src="plane.png" alt="plane" /></div>
                </div>
                <div className='call-container'>
                    <Call />
                </div></div>
        </>
    )
}
