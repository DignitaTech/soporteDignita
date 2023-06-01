import Problema from './Problema'
import Operaciones from '../img/Operaciones.png'
import  RobotConfundido from '../img/RobotConfundido.png'
import DeteccionProblemas from '../img/DeteccionProblemas.png'

const Problemas = () => {
  return (
    <div className='bg-orange-600 h-full lg:h-screen w-screen relative'>
      <div>
        <h2 className="pt-14 text-3xl text-white font-bold text-center ">Olvídate de estos problemas</h2>

        <div className='flex items-center flex-col mt-10 mx-auto'>
          <Problema
            clases= 'lg:absolute lg:bottom-0 lg:left-20 w-3/4'
            imagen={DeteccionProblemas}
            titulo='No poder detectar los problemas a tiempo'
          />
          <Problema
            clases= 'lg:absolute lg:bottom-0 lg:right-20 w-3/4'
            imagen={RobotConfundido}
            titulo='Pérdida de confianza en el robot implementado'
          />
          <Problema
            clases= 'lg:absolute lg:top-1/5 lg:left-2/5 w-3/4'
            imagen={Operaciones}
            titulo='Repercusión en  las operaciones del área de trabajo'
          />
        </div>
      </div>
    </div>
  )
}

export default Problemas