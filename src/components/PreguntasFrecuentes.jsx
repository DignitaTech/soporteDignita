

const PreguntasFrecuentes = () => {
  return (
    <div style={{color: '#ff5f2c'}} >
      <h2 className='text-center text-3xl font-bold my-10'>Preguntas frecuentes</h2>
      <div className="w-3/4 mx-auto">
        <div className="mb-10">
          <h4 className="mb-5 text-xl font-bold">1. ¿Las horas de soporte son acumulables?</h4>
          <p style={{color: '#2E475D'}} className="ml-5">No, las horas de soporte no son acumulables.</p>
        </div>
        <div className="mb-10">
          <h4 className="mb-5 text-xl font-bold">2. ¿Se pueden canjear las horas de soporte con desarrollo?</h4>
          <p style={{color: '#2E475D'}} className="ml-5">No, no es posible canjear las horas de soporte con las horas de desarrollo.</p>
        </div>
        <div className="mb-10">
          <h4 className="mb-5 text-xl font-bold">3. ¿Qué significa el &quot;Alcance del robot RPA&quot;?</h4>
          <ul style={{color: '#2E475D'}} className="list-disc ml-10">  
            <li className="mb-3">Se hace referencia a la rutina del robot.</li>
            <li className="mb-3">Son los requerimientos levantados en el SSD</li>
            <li className="mb-3">Si está fuera del  alcance se considera como desarrollo</li>
          </ul>
        </div>
        <div className="mb-10">
          <h4 className="mb-5 text-xl font-bold">4. ¿Qué significa &quot;Cambio Alcance del robot RPA&quot;?</h4>
          <p style={{color: '#2E475D'}} className="ml-5">Desarrollo de nuevos requerimientos</p>
        </div>
      </div>
    </div>
  )
}

export default PreguntasFrecuentes