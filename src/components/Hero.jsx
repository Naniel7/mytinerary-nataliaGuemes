import React from 'react'
import Call from './Call'

export default function Hero() {
    return (
        <>
            <div className='hero'>
                <div className='hero-text'><h3>Find the perfect destination</h3>
                    <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                    <button>View More</button></div>
                <div className='hero-img'><img src="plane.png" alt="plane" /></div>
            </div>
            <div>
                <Call />
            </div>
        </>
    )
}
