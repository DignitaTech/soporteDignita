import React from 'react'

const BotonComoFunciona = ({click, letra, texto}) => {
  return (
    <button onClick={click}
      className={`mb-4 md:mb-0 shadow-xl max-w-xs text-xl px-8 py-3 rounded-md font-semibold transition-colors duration-300 ease-in-out
      ${letra === 'A' ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-white hover:bg-gray-200 text-orange-600'}`}
        >{`${letra}. ${texto}`}
      </button>
  )
}

export default BotonComoFunciona