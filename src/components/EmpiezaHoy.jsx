
import { useEffect, useState } from 'react'
import PasoEmpieza from './PasoEmpieza'
import Hito1 from '../img/Hito1.png'
import Hito2 from '../img/Hito2.png'
import Hito3 from '../img/Hito3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const EmpiezaHoy = () => {
  
  const [width, setWidth] = useState(window.innerWidth)

  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);


  return (
    <div className='text-white text-center font-bold' style={{backgroundColor: '#FF5F2C'}}>
      <h2 className='text-3xl pt-10 mb-10'>¡Empieza hoy!</h2>
      <div className='flex flex-col md:flex-row items-center'>
        <PasoEmpieza
          imagenPaso={Hito1}
          titulo='Elige un plan'
        />
        {width > breakpoint ?
          <FontAwesomeIcon className='mb-8' icon={faArrowRight} size='2xl' /> : 
          <FontAwesomeIcon className='mb-8' icon={faArrowDown} size='2xl'
        />}
        <PasoEmpieza
          imagenPaso={Hito2}
          titulo='Agenda una reunión'
        />
        {width > breakpoint ?
          <FontAwesomeIcon className='mb-8' icon={faArrowRight} size='2xl' /> :
          <FontAwesomeIcon className='mb-8' icon={faArrowDown} size='2xl'
        />}
        <PasoEmpieza
          imagenPaso={Hito3}
          titulo='Empecemos a supervisar el BOT'
        />
      </div>
    </div>
  )
}

export default EmpiezaHoy