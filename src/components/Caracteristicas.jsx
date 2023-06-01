import Caracteristica from "./Caracteristica"
import ErrorAtencion from "../img/ErrorAtencion.png"
import ReunionSoporte from "../img/ReunionSoporte.png"
import AnalisisRaiz from "../img/AnalisisRaiz.png"
import ControlIncidencias from "../img/ControlIncidencias.png"
import ContaHoras from "../img/ContaHoras.png"
import FondoCaracteristicas from "../img/FondoCaracteristicas.png"


const Caracteristicas = () => {
  return (
    <div style={{backgroundImage: `url(${FondoCaracteristicas})`}}>
      <div className="w-11/12 mx-auto mb-12">
        <h2
          style={{color: '#2E475D'}}
          className="pt-20 mb-10 text-3xl text-white font-bold text-center ">
          Características de nuestro servicio de soporte
        </h2>

        <div className="flex flex-wrap items-stretch gap-8">
          <Caracteristica
            icono={ErrorAtencion} 
            titulo='Errores del RPA'
            descripcion='Se verificará cualquier interrupción del robot RPA automatizado, y ​​se informará vía correo o slack de las medidas para solucionar las incidencias.'
          />

          <Caracteristica
            icono={ReunionSoporte}
            titulo='Soporte a través de Slack'
            descripcion='El soporte técnico en tiempo real a través de la plataforma de comunicación empresarial Slack.'
          />

          <Caracteristica
            icono={AnalisisRaiz}
            titulo='Análisis de la causa raíz'
            descripcion='Analizamos las causas de los errores e informamos la causa raíz para prevenir su repetición.'
          />

          <Caracteristica
            icono={ControlIncidencias}
            titulo='Control de incidencias'
            descripcion='Realizaremos seguimiento a las incidencias y enviaremos reporte mensual.'
          />

          <Caracteristica
            icono={ContaHoras}
            titulo='Contabilización de horas'
            descripcion='El contrato cubre 25 horas de soporte mensual. El exceso se cobra según la tarifa acordada, y las horas no son acumulables.'
          />
        </div>
          
      </div>
    </div>
  )
}

export default Caracteristicas