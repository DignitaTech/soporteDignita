import { useState, useEffect } from "react"
import Header from "./components/Header"
import Problemas from "./components/Problemas"
import Caracteristicas from "./components/Caracteristicas"
import Empresas from "./components/Empresas"
import EligePlan from "./components/EligePlan"
import EmpiezaHoy from "./components/EmpiezaHoy"
import ComoFunciona from "./components/ComoFunciona"
import RobotsManos from "./components/RobotsManos"
import PreguntasFrecuentes from "./components/PreguntasFrecuentes"
import { useNavigate } from "react-router-dom"

function App() {

  const navigate = useNavigate();


  const [seleccionado, setSeleccionado] = useState('Silver');
  const [isOpen, setIsOpen] = useState(false);
  const [animar, setAnimar] = useState(false);

  useEffect (() => {
    const body = document.body;
    if(isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }
  }, [isOpen])

  const handleClickContinuar = (e) => {
    navigate('/continuar', { state: { myState: seleccionado } });

    if (e.button === 1) {
      e.preventDefault();
    }
  }

  return (
    <div className={isOpen ? ' overflow-hidden' : ''}>
      <Header />
      <Problemas />
      <Caracteristicas />
      <Empresas />
      <EligePlan
        seleccionado={seleccionado}
        setSeleccionado={setSeleccionado}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        animar={animar}
        setAnimar={setAnimar}
      />
      <EmpiezaHoy />
      <ComoFunciona />
      <RobotsManos />
      <PreguntasFrecuentes />
    </div>
  )
}

export default App
