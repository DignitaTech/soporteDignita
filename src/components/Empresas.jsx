import SwiperEmpresas from "./SwiperEmpresas"

const Empresas = () => {
  return (
    <div>
      <div>
        <h2 style={{color: '#2E475D'}} className="font-bold text-white text-3xl text-center pt-10 mx-auto w-10/12 mb-10"><span style={{color: '#FF5F2C'}}>Empresas</span> que <span style={{color: '#FF5F2C'}}>confían</span> en nosotros</h2>

        <div>
          <SwiperEmpresas />
        </div>

      </div>
    </div>
  )
}

export default Empresas