import React from "react";
import "../estilos/baseDatos.css";
import { useEffect,useState } from "react";
import {useNavigate } from "react-router-dom";
export default function Activos(){
    const [datos, setDatos] = useState([]);
    const navigate = useNavigate();
    const [mostrarForm, setMostrarForm] = useState(false);
    const [form, setFrom] = useState({
        nombreActivo: "",
        tipo: "",
        ubicacion: "",
        estado: "activo"

    })

    useEffect(() => {
        fetch("http://localhost:5000/activos") //que nospermite conectarnos a la api o flask 
        .then((res) => res.json()) // convertimos los datos a json 
        .then((data) => setDatos(data)); // llenamos la variable de datos y la pasamos a setdatos
    }, []);
    const crear = async () => {
        if (!form.nombreActivo.trim() || !form.tipo.trim() || !form.ubicacion.trim())
            return alert("completa los campos");
            const res = await fetch("http://localhost:5000/activos",{
                method: "POST",
                headers: {"content-type": "application/json"},
                bodt: JSON.stringify(form),
            });
            if(!res.ok ) return alert("error al crear el activo");
            const nueva = await fetch("http://localhost:5000/activos").then((r) => r.json)
            
        }
    // fetch es la funcion nativa del navegador para hacerse peticiones http y traer o recibir datos de un servidor: que haces:
    // 1 debuelve un promise 2: por defecto hace un get pero puedes cambiar metodos, header, body etc. 3: la respuesta la tienes que convertir a formato json, text, blob
    // 4: se gestiona con .then .catch . await 
        
    const handleLogout = () => {
        navigate("/dassboar");
    };

    return(
    <>
        
       <div>
        <div style={{padding: '10px', textAlign: 'right'}}>
            <button className="boton-regreso" onClick={handleLogout}><a href="#"></a>Regresar </button>
        </div>
        <button className="boton-regreso" onClick={() => setMostrarForm(true)}>
            nuevo activo
        </button>
        {mostrarForm && (
            <div className="card mb-3">
                <div className="card-body"> 
                    <h5>crear activo</h5>
                    <input className="form-control mb-2" placeholder="nombre" value={form.nombreActivo} onChange={(e) => setFrom({...form, nombreActivo: e.target.value})}/>
                    <input className="form-control mb-2" placeholder="tipo" value={form.tipo} onChange={(e) => setFrom({...form, tipo: e.target.value})}/>
                    <input className="form-control mb-2" placeholder="ubicacion" value={form.ubicacion} onChange={(e) => setFrom({...form, ubicacion: e.target.value})}/>
                    <select className="from-select mb-2"
                    value={form.estado}
                    onChange={(e) => setFrom({...form, estado: e.target.value})}>
                        <option >Activo</option>
                        <option >Inactivo</option>
                    </select>
                    <button className="editar">Guardar</button>

                    <button className="eliminar" onClick={() => setMostrarForm(false)}>Cancelar</button>
                </div>
                
            </div>
        )}

        <table className="table table-striped">
            <thead> 
            <tr>    
                <th scope="col">ID</th>
                <th scope="col">Nombre del activo</th>
                <th scope="col">Tipo</th>
                <th scope="col">Ubicacion</th>
                <th scope="col">Estado</th>
                <th scope="col">Accion</th>
            </tr>
            </thead>
            <tbody>
            {
                datos.map(activos => (
                <tr key={activos.id}> 
                <td>{activos.id}</td>
                <td>{activos.nombreActivo}</td>
                <td>{activos.tipo}</td>
                <td>{activos.ubicacion} </td>
                <td>{activos.estado}</td>
                <td><button className="editar">Editar</button><button className="eliminar">Eliminar</button></td>
                </tr>
                )
                )
            }

                </tbody>
            </table>
        </div>
    </>
 
        )
}