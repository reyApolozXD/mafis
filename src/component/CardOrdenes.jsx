import React from 'react'
import alarma from "../assets/alarma.png"
import calendario from "../assets/calendario.png"
import peligro from "../assets/peligro.png"
import plus from "../assets/plus.png"

export default function CardOrdenes() {
  return (
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
  )
}
