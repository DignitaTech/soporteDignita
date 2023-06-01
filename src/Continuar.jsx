import { useLocation } from "react-router-dom"

const Continuar = ({ seleccionado, isOpen, setIsOpen, animar, setAnimar }) => {

  const ocultar = () => {
    setIsOpen(false);
    setTimeout(() => {
      setAnimar(false);
    }, 300);
  }

  return (
    <div className="top-0 left-0 right-0 bottom-0 fixed bg-black bg-opacity-90 transition-all duration-300 ease-in z-10">
      <div className="w-80 md:w-1/3 mx-auto bg-black text-white rounded-lg fixed p-8 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h3 className="text-3xl text-center">Comienza con:</h3>
        <p className="text-xl my-5">El 50% al inicio del primer mes</p>
        <p className="text-xl my-5">El 50% al finalizar el primer mes</p>

        <p className="text-xl absolute text-white top-5 right-5 bg-orange-500 rounded-full px-2 text-clip cursor-pointer"
          onClick={ocultar}>X</p>

        <form className="text-gray-800">
          <input className="my-5 block w-full rounded-md p-2" type="text" placeholder="Nombre" />
          <input className="my-5 block w-full rounded-md p-2" type="text" placeholder="Apellido" />
          <input className="my-5 block w-full rounded-md p-2" type="text" placeholder="Compañía" />
          <input className="my-5 block w-full rounded-md p-2" type="text" placeholder="Email" />
          <input className="my-5 block w-full rounded-md p-2" type="text" placeholder="País" />
          <select className="my-5 block w-full rounded-md p-2 text-gray-800" value={seleccionado} name="plan" id="plan">
            <option value="Bronze">Bronze</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Continuar