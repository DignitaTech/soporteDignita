

const Caracteristica = ( {icono, titulo, descripcion} ) => {
  return (
    <div style={{color: '2E475D'}} className="w-56 py-3 px-5 bg-gray-50 gap-2 flex flex-col items-center mx-auto mt-8 shadow-xl rounded-b-xl">
      <img className="h-24" src={icono} alt="Icono característica" />
      <h4 className="text-xl text-center">{titulo}</h4>
      <p className="text-center">{descripcion}</p>
    </div>
  )
}

export default Caracteristica