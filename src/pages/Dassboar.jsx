import React from 'react'
import "../estilos/dassboar.css"
import coche from "../assets/coche.png"
import infraestructura from "../assets/infraestructura.png"
import conexion from "../assets/conexion.png"
import marca from "../assets/marca.png"
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
      <div className="encabezado">
        <h2 className="tuitulo -encabezado">Gestion de mantenimientos de Activos </h2>
        <div className="nav-busqueda">
          <form action="/buscar" method="get" className="form-buscar">
            <input type="text" name="q" placeholder="Buscar activos, tareas, ubicaciones..." className="input-buscar" />
            <button type="submit" className="boton-buscar"><img src={lupa} alt="buscar" width="20px" /></button>
          </form>
          <img src={campana} alt="campana" width="20px" height="20px" />
        </div>
        <div className="imagen-usuario">
          <img className="imagen-usuario" src={perfil} alt="perfil" width="50px" />
          <select name="opcione" id="opcione" className="opcione-encabezado">
            <option> 
            </option><optgroup>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option onClick={handleRetgreso}><button >Cerrar Sesión</button></option>
            </optgroup>
          </select>
        </div>
      </div> 
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
