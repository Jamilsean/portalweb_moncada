import React from 'react'
import { motion } from 'framer-motion';
import {InView, useInView } from 'react-intersection-observer';

function CardInicio(props) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className='relative group'>
      <div className="container mt-4 text-xs flex px-2  py-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-justify bg-principal text-white rounded-2xl">
        Tenemos lo mejor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat expedita amet ipsa quod a architecto rem dolore esse incidunt nisi? Porro architecto, id beatae voluptates aspernatur assumenda rem rerum quidem. 
      </div>
      <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5, x:"20px"}}
        animate={{x:inView?0:"20px", opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{ duration: 1 }}
      >
        <span>{props.titulo}</span>
      </motion.div>


        <div className='text-center'>
        <motion.div
                initial={{ opacity: 0, scale: 0.5 ,x:"-20px"}}
                animate={{ x:inView?0:"-20px", opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                transition={{ duration: 1 }}
            >
               <img src={props.imagen} alt="" className='rounded-full w-40 h-40 mx-auto'/>
            </motion.div>
        </div>
      </div>
      
    </div>
  )
}
export default CardInicio