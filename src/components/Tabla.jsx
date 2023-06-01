
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Tabla = ({ seleccionado, setSeleccionado }) => {

  return (
    <div className='mx-8 lg:mx-0 overflow-x-auto'>
    <table id='tabla-precios' className='mx-auto w-10/12 overflow-x-auto rounded-lg' style={{backgroundColor: '#FF5F2C'}}>
      <thead>
        <tr className='text-white text-xl'>
          <th className='py-3'>Características</th>
          <th className='py-3'>Plan Bronze <br/>
              2 meses<br/>
              <button
                className='bg-white rounded-lg px-3 py-1 mx-2 my-1' style={{color: '#FF5F2C'}}
                onClick={() => {
                  setSeleccionado('Bronze')
                }}>
                  {seleccionado === 'Bronze' ? 'Seleccionado' : 'Seleccionar'}
              </button>
          </th>
          <th className='py-3' style={{backgroundColor: '#F83C00'}}>Plan Silver<br/>
              6 meses<br/>
              <button
                className='bg-white rounded-lg px-3 py-1 mx-2 my-1' style={{color: '#FF5F2C'}}
                onClick={() => {
                  setSeleccionado('Silver');
                }}>
                  {seleccionado === 'Silver' ? 'Seleccionado' : 'Seleccionar'}
              </button>
          </th>
          <th className='py-3'>Plan Gold<br/>
              12 meses<br/>
              <button
                className='bg-white rounded-lg px-3 py-1 mx-2 my-1' style={{color: '#FF5F2C'}}
                onClick={() => {
                  setSeleccionado('Gold');
                }}>
                  {seleccionado === 'Gold' ? 'Seleccionado' : 'Seleccionar'}
              </button>
          </th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200'>
        <tr className='text-center bg-gray-200' style={{color: '#F83C00'}}>
          <td className='px-6 py-4 font-bold whitespace-nowrap text-left'>Precio por hora</td>
          <td className='px-6 py-4 whitespace-nowrap'>$450</td>
          <td className='px-6 py-4 bg-gray-300 font-bold whitespace-nowrap'>$1.170</td>
          <td className='px-6 py-4 whitespace-nowrap'>$1.800</td>
        </tr>
        <tr className='text-center bg-gray-100' style={{color: '#535353'}}>
          <td className='px-6 py-4 font-bold whitespace-nowrap text-left'>Bolsa de horas</td>
          <td className='px-6 py-4 whitespace-nowrap'>30 horas</td>
          <td className='px-6 py-4 bg-gray-200 font-bold whitespace-nowrap'>90 horas</td>
          <td className='px-6 py-4 whitespace-nowrap'>180 horas</td>
        </tr>
        <tr className='text-center bg-gray-200' style={{color: '#F83C00'}}>
          <td className='px-6 py-4 font-bold whitespace-nowrap text-left'>Precio a pagar</td>
          <td className='px-6 py-4 whitespace-nowrap'>$450</td>
          <td className='px-6 py-4 bg-gray-300 font-bold whitespace-nowrap'>$1.170</td>
          <td className='px-6 py-4 whitespace-nowrap'>$1.800</td>
        </tr>
        <tr className='text-center bg-gray-100' style={{color: '#535353'}}>
          <td className='px-6 py-4 font-bold whitespace-nowrap text-left'>Comunicación por Slack</td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 bg-gray-200 font-bold whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
        </tr>
        <tr className='text-center bg-gray-200' style={{color: '#F83C00'}}>
          <td className='px-6 py-4 font-bold whitespace-nowrap text-left'>Control de incidencias</td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 bg-gray-300 font-bold whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
        </tr>
        <tr className='text-center bg-gray-100' style={{color: '#535353'}}>
          <td className='px-6 py-4 font-bold whitespace-nowrap text-left'>Análisis de los problemas desde la raíz</td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 bg-gray-200 font-bold whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
        </tr>
        <tr className='text-center bg-gray-200' style={{color: '#F83C00'}}>
          <td className='px-6 py-4 font-bold whitespace-nowrap text-left'>Descuento del 5% en la implementación<br/> de nuevos robots</td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 bg-gray-300 font-bold whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
        </tr>
        <tr className='text-center bg-gray-100' style={{color: '#535353'}}>
          <td className='px-6 py-4 font-bold whitespace-nowrap text-left'>Descuento del 8% en la implementación<br/> de nuevos robots</td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 bg-gray-200 font-bold whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
        </tr>
        <tr className='text-center bg-gray-200 rounded-b-lg' style={{color: '#F83C00'}}>
          <td className='px-6 py-4 font-bold whitespace-nowrap text-left rounded-bl-lg'>Descuento del 10% en la implementación<br/> de nuevos robots</td>
          <td className='px-6 py-4 whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 bg-gray-300 font-bold whitespace-nowrap'><FontAwesomeIcon icon={faCheck} /></td>
          <td className='px-6 py-4 whitespace-nowrap rounded-br-lg'><FontAwesomeIcon icon={faCheck} /></td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Tabla;