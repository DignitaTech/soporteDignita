
import { useState } from 'react'
import BotonComoFunciona from './BotonComoFunciona'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const ComoFunciona = () => {

  const [seleccionado1, setSeleccionado1] = useState(false)
  const [seleccionado2, setSeleccionado2] = useState(false)
  const [seleccionado3, setSeleccionado3] = useState('')

  return (
    <div className='w-4/5 mx-auto my-10' style={{ color: '#FF5F2C' }}>
      <h2 className='text-3xl font-bold my-10 text-center'>¿Cómo funciona el soporte?</h2>

      <div className='w-4/5 mx-auto'>
        <div className='my-10'>
          <h3 className='text-xl font-bold mb-8'>1. ¿Quién detecta el problema?</h3>
          <div 
            className='flex flex-col md:flex-row justify-around'
          >
            <BotonComoFunciona
              click={() => setSeleccionado1(true)}
              letra='A'
              texto='Cliente'
            />
            <BotonComoFunciona
              click={() => setSeleccionado1(true)}
              letra='B'
              texto='Dignita'
            />
          </div>
        </div>
        <div id='comunicacion' className={`my-10 ${seleccionado1 ? 'block' : 'hidden'}`}>
          <h3 className='text-xl font-bold mb-8'>2. ¿Cómo se comunica la incidencia?</h3>
          <div 
            className='flex flex-col md:flex-row justify-around'
          >
            <BotonComoFunciona
              click={() => setSeleccionado2(true)}
              letra='A'
              texto='Slack'
            />
            <BotonComoFunciona
              click={() => setSeleccionado2(true)}
              letra='B'
              texto='Correo'
            />
          </div>
        </div>
        <div id='analiza' className={`my-10 ${seleccionado2 ? 'block' : 'hidden'}`}>
          <h3 className='text-xl font-bold mb-8'>3. Dignita analiza si el problema es {' '}
            <span style={{ color: '#2E475D' }}>Soporte</span> o {' '}
            <span style={{ color: '#2E475D' }}>Desarrollo</span></h3>
          <div 
            className='flex flex-col md:flex-row justify-around'
          >
            <BotonComoFunciona
              click={() => setSeleccionado3('A')}
              letra='A'
              texto='Si está en incidencias lo  solucionaremos en 24 horas'
            />
            <BotonComoFunciona
              click={() => setSeleccionado3('B')}
              letra='B'
              texto='Si es desarrollo el cliente tiene que aceptar via correo
              el cambio de alcance'
            />
          </div>
        </div>
        <div className={`flex flex-col md:flex-row justify-around ${seleccionado3 ? 'block' : 'hidden'}`}>
          <div className={`${seleccionado3=='A' ? 'block' : 'hidden'} w-80`}>
            <h3 className='text-2xl font-bold mb-8 text-left'>¿Cuándo es <span style={{color: '#2E475D'}}>soporte</span>?</h3>
            <h4 className='font-bold text-lg'>
              <FontAwesomeIcon icon={faAngleRight} /> Ejemplos de incidencias:
            </h4>
            <ul className='w-60'>
              <li className='list-disc mt-4 ml-8'>No se ejecutó por algún problema de la maquina (por errores humanos)</li>
              <li className='list-disc mt-4 ml-8'>Error de recepción de lectura input</li>
              <li className='list-disc mt-4 ml-8'>Error de conversión de datos</li>
              <li className='list-disc mt-4 ml-8'>Falla en los login de la pagina web</li>
              <li className='list-disc mt-4 ml-8'>Fallo en la conexión a sistemas externos</li>
              <li className='list-disc mt-4 ml-8'>Errores humanos como: Borrar carpetas, archivos, etc</li>
            </ul>
          </div>
          <div className={`${seleccionado3=='B' ? 'block' : 'hidden'} w-80`}>
            <h3 className='text-2xl font-bold mb-8 text-left'>¿Cuándo es <span style={{color: '#2E475D'}}>desarrollo</span>?</h3>
            <h4 className='font-bold text-lg'>
              <FontAwesomeIcon icon={faAngleRight} /> Ejemplos de incidencias:
            </h4>
            <ul className='w-60'>
              <li className='list-disc mt-4 ml-8'>Cambio de interfaz</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComoFunciona