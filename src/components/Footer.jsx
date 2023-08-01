import React from 'react'
import Logo2 from "../assets/Logo.jpeg";
import { motion } from 'framer-motion';
import { BsFillTelephoneFill, BsFillBuildingFill } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaSpotify } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
export default function Footer() {
  return (
    <div className='bg-principal py-10'>
      <div className='flex items-center justify-between sm:container mx-auto my-4 py-2 text-white'>
        <div className='flex  items-center'>
          <BsFillTelephoneFill className='text-xl' />
          <div className='flex flex-col mx-2 '>
            <span>Centro de llamadas</span>
            <span>+51 999 999 999</span>
          </div>
        </div>
        <div className='flex  items-center'>
          <BsFillBuildingFill className='text-xl' />
          <div className='flex flex-col mx-2 '>
            <span>Oficina Principal</span>
            <span>Lima - Perú</span>
          </div>
        </div>
        <div>
          <img className='h-14' src={Logo2} ></img>
        </div>
        <div className='flex  items-center'>
          <HiOutlineMail className='text-xl' />
          <div className='flex flex-col mx-2 '>
            <span>Servicio al cliente</span>
            <span>correo@coporacio.com</span>
          </div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='flex items-center'>
            <HiOutlineMail className='text-xl' />
            <p>Canal </p>
          </div>
          <div className='flex items-center'>
            <HiOutlineMail className='text-xl' />
            <p>Intranet </p>
          </div>
          <div className='flex items-center'>
            <HiOutlineMail className='text-xl' />
            <p>WebMail </p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 mt-4 pt-4 px-10 content-center '>
        <div className=''>
          © {new Date().getFullYear()} Estudio MONCADA todos los derechos reservados
        </div>
        <div className='flex py-2 space-x-2  justify-center'>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
          <FaInstagram />
          <FaSpotify />
        </div>
      </div>
    </div>

  )
}
