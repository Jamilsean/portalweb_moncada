import React from 'react'

function CarProfesional(props) {
  return (
    <div className='group'>
        <img src={props.imagen} alt=""  className='h-20 mx-auto'/>
        <h1 className='font-bold opacity-0 text-principal group-hover:opacity-100 transition-opacity duration-500'>{props.nombre}</h1>
        <p className='text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold text-center text-principal'>{props.categoria}</p>
    </div>
  )
}

export default CarProfesional