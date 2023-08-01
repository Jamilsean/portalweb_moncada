import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from "../assets/Logo.png";
import Logo2 from "../assets/Logo.jpeg";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaSpotify } from 'react-icons/fa';
function NavBar() {
  return (
    <div >
      <div className='py-4  absolute w-full bg-gradient-to-b from-blue-gray-900 z-10'>
        <div className='flex  w-full justify-between'>
          <div>
            <h1><img className='h-20' src={Logo2} ></img></h1>
          </div>
          <div className='flex flex-col text-white'>
            <div className='flex py-2 space-x-2 text-xs justify-end '>
              <div>Logo</div>
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaYoutube />
              <FaInstagram />
              <FaSpotify />
            </div>
            <div>
              <ul className='flex space-x-6 uppercase'>
                <li className='item-nav'><a href="nosotros">Nosotros</a></li>
                <li className='item-nav'><a href="practicas">Prácticas</a></li>
                <li className='item-nav'><a href="oficinas">Oficinas</a></li>
                <li className='item-nav'><a href="producto">Productos legales</a></li>
                <li className='item-nav'><a href="noticias">Noticias</a></li>
                <li className='item-nav'><a href="contactanos">Contactanos</a></li>
              </ul>
            </div>

          </div>
        </div>


      </div>
      <div className=''>
        <Outlet />
      </div>
    </div>
  )
}
export default NavBar