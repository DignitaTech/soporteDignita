import Continuar from '../Continuar';
import Tabla from './Tabla'

const EligePlan = ({ seleccionado, setSeleccionado, isOpen, setIsOpen, animar, setAnimar }) => {

  const handleContinuar = () => {
    setIsOpen(true);
    setTimeout(() => {
      setAnimar(true);
    }, 300);
  }

  return (
    <div className='mb-10 relative'>
      <h2 style={{color: '#ff5f2c'}} className='text-center text-3xl font-bold mb-10'>¡Elige tu mejor plan!</h2>
      <div>
        <Tabla
          seleccionado={seleccionado}
          setSeleccionado={setSeleccionado}
        />
      </div>
      <button onClick={handleContinuar} className='text-center mx-auto block w-56 bg-orange-600 rounded-lg mt-8 py-3 text-xl font-bold text-white'
      >Continuar
      </button>
      {isOpen && (<Continuar
                    seleccionado={seleccionado}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    animar={animar}
                    setAnimar={setAnimar}
                  />)}

    </div>
  )
}

export default EligePlan