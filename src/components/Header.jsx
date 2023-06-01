import { Link } from "react-scroll"

const Header = () => {
  return (
    <div className="md:flex items-center h-screen justify-start w-11/12 container mx-auto">
      <div className="flex-1 pt-10">
        <h1 className="text-5xl text-left uppercase" style={{color: '#2E475D'}}>
          <span className="text-orange-500 text-7xl font-semibold" style={{color: '#FF5F2C'}}>Soporte</span><br></br>para robots RPA
        </h1>
        <h2 className="text-3xl mt-4 md:w-5/6 font-normal" style={{color: '#2E475D'}}>
          Nuestro equipo de <span className="font-semibold" style={{color: '#ff5f2c'}}>expertos</span> mantendrá a tus <span className="font-semibold" style={{color: '#ff5f2c'}}>robots trabajando</span> al <span className="font-semibold" style={{color: '#ff5f2c'}}>100%</span>, 365 días al año 24/7
        </h2>
        <div className="mt-7 flex flex-wrap">
          <Link to="tabla-precios" smooth={true} duration={750} spy={true} offset={-10}
            className="px-8 bg-gradient-to-b from-gray-50 to-gray-200 py-4 shadow-xl rounded-xl mr-4 hover:from-gray-100 hover:to-gray-300 transition-all"
            style={{color: '#FF5F2C'}}
            href="#tabla-precios">Revisa las ofertas de soporte</Link>
          <a
            className="mt-5 md:mt-0 px-8 py-4 bg-gradient-to-b from-orange-500 to-orange-700 shadow-xl text-white rounded-xl hover:from-orange-600 hover:to-orange-800 transition-colors"
            href="https://dignita.tech/contacto/">Contacta con nosotros</a>
        </div>
      </div>
      <div className="flex-1 mt-5 md:mt-0">
        <img src="https://i.imgur.com/4XZ2Z5a.png" alt="robot" className="w-full mx-auto"></img>
      </div>
    </div>
  )
}

export default Header