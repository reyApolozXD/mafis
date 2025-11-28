import React from "react";
import {baseDatos} from "../base_datos";
import { useNavigate } from "react-router-dom";

export default function Activos(){


    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/dassboar");
    };

    return(
    <div>
        <div style={{padding: '10px', textAlign: 'right'}}>
            <button className="boton-regreso" onClick={handleLogout}><a href="#"></a>Regresar </button>
        </div>
    <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">nombre del activo</th>
                <th scope="col">tipo</th>
                <th scope="col">ubicacion</th>
                <th scope="col">estado</th>
                <th scope="col">accion</th>
            </tr>
            </thead>
            <tbody>
            {
                baseDatos.map(activos => (
                <tr key={activos.id}> 
                <td>{activos.id}</td>
                <td>{activos.nombreActivo}</td>
                <td>{activos.tipo}</td>
                <td>{activos.ubicacion} </td>
                <td>{activos.estado}</td>
                <td>{activos.button}{activos.eliminar}</td>
                </tr>
                )
                )
            }

            </tbody>
  </table>
        </div>
        )
}