import React from 'react'

//
import CardInicio from '../../components/CardInicio';
//Fotos
import Corporacion from "../../assets/Corporacion.png";
import Laboral from "../../assets/Laboral.png";
import imagen from '../../assets/Imagen.png';
import Impuesto from '../../assets/impuesto.png';
import Litigios from '../../assets/Litigios.png';
import Competencias from '../../assets/competencias.png';
import Bancario from '../../assets/Bancario.png';
import Finanzas from '../../assets/Finanzas.png';
import Construccion from '../../assets/Construccion.png';
import Comercio from '../../assets/comercioe.png';
export default function Practicas() {
  return (
    <div className='container mx-auto my-4'>
        <h1 className='text-center my-4'>NUESTRAS <span className='font-bold text-principal '>PRÁCTICAS</span></h1>
        <div className=' grid grid-cols-4 gap-x-4 '>
        
        <CardInicio
          titulo='Derecho corporativo'
          imagen={Corporacion} />
        <CardInicio
          titulo='Impuesto'
          imagen={Impuesto} />
        <CardInicio
          titulo='Asuntos laborales y de seguridad social'
          imagen={Laboral} />
        <CardInicio
          titulo='Propiedad intelectual'
          imagen={Laboral} />
        <CardInicio
          titulo='Litigios y controversias'
          imagen={Litigios} />
        <CardInicio
          titulo='Competencias y barreras burrocráticas'
          imagen={Competencias} />
        <CardInicio
          titulo='Comercio exterior'
          imagen={Comercio} />
        <CardInicio
          titulo='Financiamiento de proyectos y sindicaciones'
          imagen={Finanzas} />
        <CardInicio
          titulo='Mecado de Capitales y regulaciones Bancaria'
          imagen={Bancario} />
        <CardInicio
          titulo='Infrestructuras, APP, y Oxl'
          imagen={Construccion} />
      </div>
    </div>
  )
}
