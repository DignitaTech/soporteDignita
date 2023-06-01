

const Problema = ({ clases, imagen, titulo }) => {
  return (
    <div className={`bg-white lg:w-1/4 flex flex-col items-center mb-8 rounded-xl shadow-xl ${clases}`}>
      <img src={imagen} alt="Operaciones" />
      <p className='text-2xl py-5 px-10 text-center' style={{color: '#2E475D'}}>{titulo}</p>
    </div>
  )
}

export default Problema