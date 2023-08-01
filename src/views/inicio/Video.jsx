import React, { useEffect, useRef } from 'react';
import Fondo from '../../assets/img/Fondo2.jpg'
export default function Video() {

  return (
    <div className='relative'>
      <div className="text-center  flex  items-center justify-center absolute w-full h-[420px] bg-principal/75">
        <div>
          <span className='text-lg text-white'>Los 5 principales guías legales nos consideran</span>
          <h1 className='text-2xl uppercase font-bold'>FIRMA LEGAL EN PERÚ</h1>
          <p className='text-sm'>Manteniendo un alto niveñ de especialización en varias área de Ley </p>
          <button className='px-2 py-4 bg-principal hover:bg-blue-gray-600 rounded-lg text-white'>Nosotros</button>
        </div>
        <div className='absolute right-0 bottom-0 flex items-center mr-2 my-2 space-x-4'>
          <span className='font-bold text-white'>Reconocimiento:</span>
          <img src={Fondo} className='h-20 w-20' alt="" />
        </div>
      </div>

      <img src={Fondo} alt="" className='w-full h-[420px]' />
    </div>
  );
}
