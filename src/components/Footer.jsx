import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs';

export default function Footer() {
  return (
    <>
    <footer>
      <div className='links-container'>
        <p>Links</p>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/cities"}>
          <p>Cities</p>
        </Link>
      </div>

      <div className='footer'>
        <p>All rights reserved</p>
      </div>

      <div className='sm-container'>
      <BsInstagram className="mr-1 bg-transparent"/>{<i className="bi bi-instagram"></i>}
      <BsFacebook className="mr-1 bg-transparent"/>{<i className="bi bi-facebook"></i>}
      <BsWhatsapp className="mr-1 bg-transparent"/>{<i className="bi bi-whatsapp"></i>}
      </div>
      
      </footer>

    </>
  )
}
