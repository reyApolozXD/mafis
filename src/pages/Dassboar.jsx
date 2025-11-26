import React from 'react'
import "../estilos/dassboar.css"

export default function Dassboar() {
  return (
   <div>
  <div classname="cuerpo-dassboar">
    <header className="encabezado-mafis">
      <div className="encabezado">
        <h2 className="tuitulo -encabezado">Gestion de mantenimientos de Activos </h2>
        <div className="nav-busqueda">
          <form action="/buscar" method="get" className="form-buscar">
            <input type="text" name="q" placeholder="Buscar activos, tareas, ubicaciones..." className="input-buscar" />
            <button type="submit" className="boton-buscar"><img src="img/lupa.png" alt width="20px" /></button>
          </form>
          <img src="img/campana.png" alt width="20px" height="20px" />
        </div>
        <div className="imagen-usuario">
          <img className="imagen-usuario" src="img/horses-from-this-angle-are-weird-v0-4dav7z3btend1.jpg" alt width="50px" />
          <select name="opcione" id="opcione" className="opcione-encabezado">
            <option> 
            </option><optgroup>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
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
          <button className="boton-contenido">Ver Todos los Activos</button>
        </div>
        <div className="contenido">
          <h3 className="tuitulo-barra">Órdenes de Trabajo</h3>
          <h2 className="datos-barra">85</h2>
          <article className="orders-list">
            <div className="Ordenes-trabajo">
              <p className="Ordenes"><img src="img/peligro.png" width="20px" alt />Urgentes:</p> <strong>0</strong>
            </div>
            <div className="Ordenes-trabajo">
              <p className="Ordenes"><img src="img/calendario.png" width="20px" alt />Programadas:</p> <strong>0</strong>
            </div>
            <div className="Ordenes-trabajo">
              <p className="Ordenes"><img src="img/alarma.png" width="20px" alt />Retrasadas:</p> <strong>0</strong>
            </div>
            <div className="Ordenes-trabajo">
              <p className="Ordenes"><img src="img/plus.png" width="20px" alt />Abiertas Hoy:</p> <strong>0</strong>
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
      </section></header></div>
  <div className="contenido">
    <h3 className="tuitulo-barra">Activos por categoria</h3>
    <article className="categorias">
      <div className="categoria-activos">
        <p className="categoria"><img src="img/cavador.png" width="20px" alt />Maquinaria pesada: <strong>400 (32%)</strong></p> 
      </div>
      <div className="categoria-activos">
        <p className="categoria"><img src="img/coche.png" width="20px" alt />Vehiculos:<strong>300 (24%)</strong></p> 
      </div>
      <div className="categoria-activos">
        <p className="categoria"><img src="img/teleconferencia.png" width="20px" alt />Equipos de oficina:<strong>200 (16%)</strong></p> 
      </div>
      <div className="categoria-activos">
        <p className="categoria"><img src="img/infraestructura.png" width="20px" alt />Infraestructura:<strong>150 (12%)</strong></p> 
      </div>
      <div className="categoria-activos">
        <p className="categoria"><img src="img/herramientas-manuales.png" width="20px" alt />Herramientas:<strong>95 (8%)</strong></p> 
      </div>
      <div className="categoria-activos">
        <p className="categoria"><img src="img/conexion.png" width="20px" alt />Otros:<strong>100 (8%)</strong></p> 
      </div>
    </article>
    <button className="boton-contenido gestionar">Gestionar categorias</button>
  </div>
  <div className="contenido historial">
    <h3 className="tuitulo-barra">actividad reciente </h3>
    <article className="actividad-reciente">
      <div className="actividad">
        <img src="img/conexion.png" width="20px" height="20px" alt />
        <p>
          <strong>Orden #OT-2024-005 completada para 'Generador G-1'</strong><br />
          Hace 10 min por Juan Pérez</p>
      </div>
      <div className="actividad">
        <img src="img/coche.png" width="20px" height="20px" alt />
        <p>
          <strong>Nuevo activo 'motor V-12' añadido</strong><br />
          Ayer 14:30 por María López</p>
      </div>
      <div className="actividad">
        <img src="img/conexion.png" width="20px" height="20px" alt />
        <p>
          <strong>Alerta crítica: 'Compresor B-2' con nivel de aceite bajo</strong><br />
          Hace 3 horas por Sistema</p>
      </div>
      <div className="actividad">
        <img src="img/infraestructura.png" width="20px" height="20px" alt />
        <p>
          <strong>Mantenimiento preventivo programado para 'Línea de Producción 2'</strong><br />
          Hoy 09:00 por Pedro García</p>
      </div>
      <div className="actividad">
        <img src="img/infraestructura.png" width="20px" height="20px" alt />
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
        <p className="alertas"><img src="img/marca.png" width="20px" height="20px" alt />Nivel de aceite bajo en 'Compresor B-2'</p> 
      </div>
      <div className="alertas-criticas">
        <p className="alertas"><img src="img/marca.png" width="20px" height="20px" alt />Fallo de sensor en 'Linea de produccion 3'</p> 
      </div>
      <div className="alertas-criticas">
        <p className="alertas"><img src="img/marca.png" width="20px" height="20px" alt />Activo 'Vehiculo V-5' con ITV caducada</p> 
      </div>
    </article>
    <button className="boton-contenido">Resolver alertas</button>
  </div>
  <section className="panel-control">
    <div className="titulo-mafis">
      <img src="img/Sena_Colombia_logo.svg.png" width="50px" height="50px" alt />
      <h1>MAFIS</h1>
    </div>
    <div className="boton-registros">
      <button className="regitros-boton">+ Reportar Falla</button>
    </div>
    <div className="opciones-dashboard">
      <nav className="navegacion-dashboard">
        <button className="boton-paneles"><a href="#"><img src="./img/analisis-de-datos.png" alt width="30px" /></a>Dashboard</button>
        <button className="boton-paneles"><a href="#"><img src="./img/informe-seo.png" alt width="30px" /></a>Reportes de falla</button>
        <button className="boton-paneles"><a href="#"><img src="./img/carpeta.png" alt width="30px" /></a>Ordenes de trabajo</button>
        <button className="boton-paneles"><a href="#"><img src="./img/hoja-de-papel.png" alt width="30px" /></a>Gestion de activos</button>
        <button className="boton-paneles"><a href="#"><img src="./img/llave-inglesa.png" alt width="30px" /></a>Gestion de repuestos</button>
      </nav>
      <div>
        <h3 className="contactos">Contactos</h3>
        <nav className="administracion-configuracion">
          <button className="boton-paneles"><a href="#"><img src="img/silueta-de-multiples-usuarios.png" alt width="30px" /></a>Administracion</button>
          <button className="boton-paneles"><a href="#"><img src="./img/engranaje.png" alt width="30px" /></a>Configuracion</button>
        </nav></div>
    </div>
  </section>
</div>

  )
}
