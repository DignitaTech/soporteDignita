
import CaracManos from './CaracManos'
import Calendario from '../img/Calendario.png'
import RobotFeliz from '../img/RobotFeliz.png'
import Atencion from '../img/Atencion.png'
import Alcancia from '../img/Alcancia.png'


const RobotsManos = () => {
  return (
    <div className='bg-gray-100 pb-10'>
      <h2 style={{color: '#FF5F2C'}} className='text-3xl font-bold pt-10 mb-10 text-center'>No dejes a los robots en las manos equivocadas</h2>
      <div className='w-11/12 mx-auto grid gap-8 grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
        <CaracManos
          imagen1={Calendario}
          imagen2={RobotFeliz}
          titulo='Más de 6 años supervisando robots RPA'
        />
        <CaracManos
          imagen1={Atencion}
          titulo='Atención personalizada'
        />
        <CaracManos
          imagen1={Alcancia}
          titulo='Ahorro de tiempo y costos'
        />
        <CaracManos
          imagen1={Atencion}
          imagen2={RobotFeliz}
          titulo='Más de 150 robots supervisando actualmente'
        />
      </div>
    </div>
  )
}

export default RobotsManos