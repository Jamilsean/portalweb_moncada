import React from 'react'
import CarProfesional from '../../components/CarProfesional'

import Foto1 from '../../assets/img/Foto1.jpeg'
export default function NuestrosProfesionales() {
    return (
        <div className='my-4'>
            <div className='text-center font-bold uppercase'><span className='w-full text-principal'>Nuestros</span> <h1 className='text-2xl'>Profesionales</h1>
                <p className='text-xs my-2'>Contamos con el mayor equipo de profesionales expertos
                </p>
            </div>
            <div className='flex container mx-auto justify-center my-4'>
                <CarProfesional
                    imagen={Foto1}
                    nombre='Juan Alvarado'
                    categoria='Principal'
                />
                <CarProfesional
                    imagen={Foto1}
                    nombre='Juan Alvarado'
                    categoria='Principal'
                />

            </div>
        </div>
    )
}
