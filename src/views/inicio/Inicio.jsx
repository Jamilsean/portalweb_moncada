import React from 'react';

// Librerías

//Componentes
import Footer from '../../components/Footer';

//Parte
import Carousel from './CarouselApp';
import Carousel2 from './CarouselApp2';
import Persona from './Persona';
import Slide2 from './Slide2';
import Practicas from './Practicas';




import Video from './Video';
import NuestrosProfesionales from './NuestrosProfesionales';

function Inicio() {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      
      <div className=''>
        <Persona/>
      </div>
      
      <div className='mx-auto  grid grid-cols-3 space-x-2'>
      <Slide2 className=''/>
      </div>
      <div>
      <Practicas/>
      </div>
      <div>
        <Video/>
      </div>
      <div>
        <NuestrosProfesionales/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Inicio