

const PasoEmpieza = ({imagenPaso, titulo}) => {
  return (
    <div className='flex w-48 mb-10 flex-col justify-between mx-auto'>
      <img className='w-40 h-44 mx-auto' src={imagenPaso} alt="Imagen Paso" />
      <h3 className='text-xl font-semibold mt-3'>{titulo}</h3>
    </div>
  )
}

export default PasoEmpieza