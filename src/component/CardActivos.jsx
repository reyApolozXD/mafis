import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function CardActivos() {
    const navigate = useNavigate();

    const handleActivosClick = () => {
    navigate("/activos");
  };
  return (
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
  )
}
