import React from 'react'
import Foto from '../../assets/Foto.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Persona() {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    return (
        <div className='bg-[#41495c] py-6 m-0 flex  px-4 items-center'>
            <motion.div
            ref={ref}
                initial={{ opacity: 0, scale: 0.5 ,x:"-200px"}}
                animate={{
                    x: 0,
                    opacity: inView ? 1 : 0,
                    scale: inView ? 1 : 0.5                     
                 }}
                transition={{ duration: 1 }}
            >
                <img src={Foto} className='hover:shadow-2xl   h-auto max-w-lg  transition-all duration-700 rounded-lg ' />
            </motion.div>
            <div className="text-justify justify-self-start mr-28 w-full px-2 flex flex-col shadow-2xl ">
                {
                    inView?<TypeAnimation
                    style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                    sequence={[
                        'Hola, Soy Carlos Moncada Abogado Defensor Especialista en Derecho Penal, Con una maestría realizada en derecho Procesal,  Especialista en contrataciones del estado. Es un placer dirigirme a usted para presentar mi perfil como abogado comprometido y dispuesto a brindar ayuda y asistencia legal a aquellos que lo necesiten.\nEstoy comprometido a guiar a mis clientes a través de los complejos procesos legales, proporcionándoles el apoyo y la orientación necesarios en cada etapa.',
                        2000,

                        () => {
                            console.log('Sequence completed');
                        },
                    ]}
                    wrapper="span"
                    cursor={false}
                    speed={60}
                    className='text-white font-nuevo '
                />:null
                }
                
            </div>
            <div>

            </div>



        </div>
    )
}

export default Persona