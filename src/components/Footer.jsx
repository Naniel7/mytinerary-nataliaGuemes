import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  return (
    <>
      <footer>
        <div className='links-container'>
          <p><b>Links</b></p>
          <div className='d-flex'>
            <Link to={"/"}>
              <p>Home</p>
            </Link>
            <Link to={"/cities"}>
              <p>Cities</p>
            </Link>
          </div>
        </div>

        <div className='sm-container'>
          <BsInstagram className="mr-1 bg-transparent" />
          <BsFacebook className="mr-1 bg-transparent" />
          <BsWhatsapp className="mr-1 bg-transparent" />
        </div>

      </footer>

    </>
  )
}