

const CaracManos = ({ imagen1, imagen2, titulo }) => {
  return (
    <div className='flex flex-col bg-white rounded-md pt-5 pb-7'>
      <div className='flex'>
        <img className='ml-5' src={imagen1} alt="Icono Características robots" />
        {imagen2 && <img className='ml-2' src={imagen2} alt="Icono Características robots" />}
      </div>
      <h3 style={{color: '#FF5F2C'}} className='text-lg font-bold mt-3 mx-5'>{titulo}</h3>
    </div>
  )
}

export default CaracManos