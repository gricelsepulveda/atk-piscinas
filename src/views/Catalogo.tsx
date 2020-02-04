import React from "react"
import Banner, { BannerProps } from "../components/Banner/Banner"
import _bannerData from "./bannerData"

const Catalogo:React.FunctionComponent = () => {
  let bannerData:BannerProps = {
    data: _bannerData,
    active: 0
  }

  return (
    <section className="atk-catalogo">
      <h2 className="atk-titles color-1">Catálogo</h2>
      <Banner data={bannerData.data} active={bannerData.active}/>
    </section>
  )
}

export default Catalogo