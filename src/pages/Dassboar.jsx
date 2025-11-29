import React from 'react'
import "../estilos/dassboar.css"
import SidebarDashboard from '../component/SidebarDashboard'
import HeaderDashboard from '../component/HeaderDashboard'
import CardActivos from '../component/CardActivos'
import CardOrdenes from '../component/CardOrdenes'
import CardMantenimiento from '../component/CardMantenimiento'
import CardGafrica from '../component/CardGafrica'
import CardCategorias from '../component/CardCategorias'
import CardActividadReciente from '../component/CardActividadReciente'
import CardAlertas from '../component/CardAlertas'
export default function Dassboar() {

  return (
  <div className='cuerpo'>
    <header className="encabezado-mafis">
      <HeaderDashboard />
      <section className="contenido-mafis">
          <CardActivos />
          <CardOrdenes />
          <CardMantenimiento />
          <CardGafrica />
          <CardCategorias />
          <CardActividadReciente />
          <CardAlertas />
      </section>
    </header>
      <section className="panel-control">
        <SidebarDashboard />
      </section>
  </div>

  )
}
