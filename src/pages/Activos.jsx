import React from "react";
import { useEffect,useState } from "react";
import {baseDatos} from "../base_datos";
import {useNavigate } from "react-router-dom";

export default function Activos(){
    const [datos, setDatos] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http.//localhost:5000/activos") //que nospermite conectarnos a la api o flask 
    }, [])
    // fetch es la funcion nativa del navegador para hacerse peticiones http y traer o recibir datos de un servidor: que haces:
    // 1 debuelve un promise 2: por defecto hace un get pero puedes cambiar metodos, header, body etc. 3: la respuesta la tienes que convertir a formato json, text, blob
    // 4: se gestiona con .then .catch . await 
        
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