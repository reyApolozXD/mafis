import React from 'react'
import "../estilos/dassboar.css"
import alarma from "../assets/alarma.png"
import lupa from "../assets/lupa.png"
import campana from "../assets/campana.png"
import perfil from "../assets/horses-from-this-angle-are-weird-v0-4dav7z3btend1.jpg"
import peligro from "../assets/peligro.png"
import calendario from "../assets/calendario.png"
import plus from "../assets/plus.png"
import cavador from "../assets/cavador.png"
import coche from "../assets/coche.png"
import teleconferencia from "../assets/teleconferencia.png"
import infraestructura from "../assets/infraestructura.png"
import herramientas from "../assets/herramientas-manuales.png"
import conexion from "../assets/conexion.png"
import marca from "../assets/marca.png"
import senaLogo from "../assets/Sena_Colombia_logo.svg.png"
import analisis from "../assets/analisis-de-datos.png"
import informeSeo from "../assets/informe-seo.png"
import carpeta from "../assets/carpeta.png"
import hoja from "../assets/hoja-de-papel.png"
import llave from "../assets/llave-inglesa.png"
import usuarios from "../assets/silueta-de-multiples-usuarios.png"
import engranaje from "../assets/engranaje.png"
import { useNavigate } from 'react-router-dom';

export default function Dassboar() {
  const navigate = useNavigate();

  const handleActivosClick = () => {
    navigate("/activos");
  }
  const handleRetgreso = () => {
        navigate("/login");
    };

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
            
            <optgroup>
              <option> opciones</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option onClick={handleRetgreso}><button >Cerrar Sesión</button></option>
            </optgroup>
          </select>
        </div>
      </div> 
      <section className="contenido-mafis">
        <div className="contenido">
          <h3 className="tuitulo-barra">Estado General de Activos</h3>
          <h2 className="datos-barra">1,245</h2>
          <article className="status-list">
            <div className="barra-progreso">
              Operativos: <progress value={80} max={100} className="barra" /> <strong>980 (80%)</strong>
            </div>
            <div className="barra-progreso">
              En <br /> Mantenimiento: <progress value={12} max={100} className="barra" /> <strong>150 (12%)</strong>
            </div>
            <div className="barra-progreso">
              Fuera de <br /> Servicio: <progress value={5} max={100} className="barra" /> <strong>60 (5%)</strong>
            </div>
            <div className="barra-progreso">
              Pendientes de <br /> Revisión: <progress value={3} max={100} className="barra" /> <strong>55 (3%)</strong>
            </div>
          </article>
          <button className="boton-contenido" onClick={handleActivosClick}>Ver Todos los Activos</button>
        </div>
        <div className="contenido">
          <h3 className="tuitulo-barra">Órdenes de Trabajo</h3>
          <h2 className="datos-barra">85</h2>
          <article className="orders-list">
            <div className="Ordenes-trabajo">
              <p className="Ordenes"><img src={peligro} width="20px" alt="urgente" />Urgentes:</p> <strong>0</strong>
            </div>
            <div className="Ordenes-trabajo">
              <p className="Ordenes"><img src={calendario} width="20px" alt="calendario" />Programadas:</p> <strong>0</strong>
            </div>
            <div className="Ordenes-trabajo">
              <p className="Ordenes"><img src={alarma} width="20px" alt />Retrasadas:</p> <strong>0</strong>
            </div>
            <div className="Ordenes-trabajo">
              <p className="Ordenes"><img src={plus} width="20px" alt="abiertas" />Abiertas Hoy:</p> <strong>0</strong>
            </div>
          </article>
          <button className="boton-contenido">Gestionar Órdenes</button>
        </div>
        <div className="contenido"> 
          <h3 className="tuitulo-barra">Próximos Mantenimientos</h3>
          <article className="informacion-lista">
            <div className="informacion">
              <strong>Compresor A-3</strong><br />
              Tipo: Preventivo<br />
              Fecha: 24/07/2024 - <a href="#" className="link">Pendiente</a>
            </div>
            <div className="informacion">
              <strong>aire acondicionado - samsung</strong><br />
              Tipo: Correctivo<br />
              Fecha: 25/07/2024 - <a href="#" className="link">Pendiente</a>
            </div>
            <div className="informacion">
              <strong>bomba de agua</strong><br />
              Tipo: Predictivo<br />
              Fecha: 26/07/2024 - <a href="#" className="link">Pendiente</a>
            </div>
            <div className="informacion">
              <strong>Equipo de aula 5</strong><br />
              Tipo: Preventivo<br />
              Fecha: 27/07/2024 - <a href="#" className="link">Pendiente</a>
            </div>
          </article>
          <button className="boton-contenido">Ver Calendario</button>
        </div>
        <div className="contenido grafica">
          <div className="titulo-grafica">
            <h3 className="tuitulo-barra">Costos de Mantenimiento mensual</h3>
            <select name="opcione" id="opcione" className="opcione">
              <option> Meses  
              </option><optgroup> 
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Mayo</option>
              </optgroup>
            </select>
          </div>
          <div className="sub_board">
            <div className="graf_board">
              <div className="barra-grafica">
                <div className="sub_barra b1">
                  <div className="tag_g">35%</div>
                  <div className="tag_leyenda">Enero</div>
                </div>
              </div>
              <div className="barra-grafica">
                <div className="sub_barra b2">
                  <div className="tag_g">45%</div>
                  <div className="tag_leyenda">Febrero</div>
                </div>
              </div>
              <div className="barra-grafica">
                <div className="sub_barra b3">
                  <div className="tag_g">55%</div>
                  <div className="tag_leyenda">Marzo</div>
                </div>
              </div>
              <div className="barra-grafica">
                <div className="sub_barra b4">
                  <div className="tag_g">75%</div>
                  <div className="tag_leyenda">Abril</div>
                </div>
              </div>
              <div className="barra-grafica">
                <div className="sub_barra b5">
                  <div className="tag_g">85%</div>
                  <div className="tag_leyenda">Mayo</div>
                </div>
              </div>
            </div>
          </div>    
        </div> 
  <div className="contenido">
    <h3 className="tuitulo-barra">Activos por categoria</h3>
    <article className="categorias">
      <div className="categoria-activos">
        <p className="categoria"><img src={cavador} width="20px" alt="maquinaria" />Maquinaria pesada: <strong>400 (32%)</strong></p> 
      </div>
      <div className="categoria-activos">
        <p className="categoria"><img src={coche} width="20px" alt="vehiculos" />Vehiculos:<strong>300 (24%)</strong></p> 
      </div>
      <div className="categoria-activos">
        <p className="categoria"><img src={teleconferencia} width="20px" alt="equipos" />Equipos de oficina:<strong>200 (16%)</strong></p> 
      </div>
      <div className="categoria-activos">
        <p className="categoria"><img src={infraestructura} width="20px" alt="infraestructura" />Infraestructura:<strong>150 (12%)</strong></p> 
      </div>
      <div className="categoria-activos">
        <p className="categoria"><img src={herramientas} width="20px" alt="herramientas" />Herramientas:<strong>95 (8%)</strong></p> 
      </div>
      <div className="categoria-activos">
        <p className="categoria"><img src={conexion} width="20px" alt="otros" />Otros:<strong>100 (8%)</strong></p> 
      </div>
    </article>
    <button className="boton-contenido gestionar">Gestionar categorias</button>
  </div>
  <div className="contenido historial">
    <h3 className="tuitulo-barra">actividad reciente </h3>
    <article className="actividad-reciente">
      <div className="actividad">
        <img src={conexion} width="20px" height="20px" alt="conexion" />
        <p>
          <strong>Orden #OT-2024-005 completada para 'Generador G-1'</strong><br />
          Hace 10 min por Juan Pérez</p>
      </div>
      <div className="actividad">
        <img src={coche} width="20px" height="20px" alt="coche" />
        <p>
          <strong>Nuevo activo 'motor V-12' añadido</strong><br />
          Ayer 14:30 por María López</p>
      </div>
      <div className="actividad">
        <img src={conexion} width="20px" height="20px" alt="conexion" />
        <p>
          <strong>Alerta crítica: 'Compresor B-2' con nivel de aceite bajo</strong><br />
          Hace 3 horas por Sistema</p>
      </div>
      <div className="actividad">
        <img src={infraestructura} width="20px" height="20px" alt="infraestructura" />
        <p>
          <strong>Mantenimiento preventivo programado para 'Línea de Producción 2'</strong><br />
          Hoy 09:00 por Pedro García</p>
      </div>
      <div className="actividad">
        <img src={infraestructura} width="20px" height="20px" alt="infraestructura" />
        <p>
          <strong>Ubicación 'Almacén Principal' actualizada</strong><br />
          Hace 1 día por Ana Ruiz</p>
      </div>
    </article>
    <button className="boton-contenido">Ver Historial Completo</button>
  </div>
  <div className="contenido alerta">
    <h3 className="tuitulo-barra">Alertas criticas</h3>
    <article className="alertas-critica">
      <div className="alertas-criticas">
        <p className="alertas"><img src={marca} width="20px" height="20px" alt="marca" />Nivel de aceite bajo en 'Compresor B-2'</p> 
      </div>
      <div className="alertas-criticas">
        <p className="alertas"><img src={marca} width="20px" height="20px" alt="marca" />Fallo de sensor en 'Linea de produccion 3'</p> 
      </div>
      <div className="alertas-criticas">
        <p className="alertas"><img src={marca} width="20px" height="20px" alt="marca" />Activo 'Vehiculo V-5' con ITV caducada</p> 
      </div>
    </article>
    <button className="boton-contenido">Resolver alertas</button>
  </div>
  </section>
  </header>
  <section className="panel-control">
    <div className="titulo-mafis">
      <img src={senaLogo} width="50px" height="50px" alt="sena" />
      <h1>MAFIS</h1>
    </div>
    <div className="boton-registros">
      <button className="regitros-boton">+ Reportar Falla</button>
    </div>
    <div className="opciones-dashboard">
      <nav className="navegacion-dashboard">
        <button className="boton-paneles"><a href="#"><img src={analisis} alt="analisis" width="30px" /></a>Dashboard</button>
        <button className="boton-paneles"><a href="#"><img src={informeSeo} alt="informe" width="30px" /></a>Reportes de falla</button>
        <button className="boton-paneles"><a href="#"><img src={carpeta} alt="carpeta" width="30px" /></a>Ordenes de trabajo</button>
        <button className="boton-paneles" onClick={handleActivosClick}><a href="#"><img src={hoja} alt="hoja" width="30px" /></a>Gestion de activos</button>
        <button className="boton-paneles"><a href="#"><img src={llave} alt="llave" width="30px" /></a>Gestion de repuestos</button>
      </nav>
      <div>
        <h3 className="contactos">Contactos</h3>
        <nav className="administracion-configuracion">
          <button className="boton-paneles"><a href="#"><img src={usuarios} alt="usuarios" width="30px" /></a>Administracion</button>
          <button className="boton-paneles"><a href="#"><img src={engranaje} alt="engranaje" width="30px" /></a>Configuracion</button>
        </nav></div>
    </div>
  </section>
</div>

  )
}
