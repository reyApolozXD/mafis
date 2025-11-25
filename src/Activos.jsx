import React from "react";

export default function Activos(){

    return(
    <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">nombre del activo</th>
                <th scope="col">ubicacion</th>
                <th scope="col">estado</th>
            </tr>
            </thead>
            <tbody>
            {
                baseDatos.map(activos => (
                <tr key={activos.id}> 
                <td>{activos.id}</td>
                <td>{activos.nombreActivo}</td>
                <td>{activos.ubicacion} </td>
                <td>{activos.estado}</td>
                </tr>
                )
                )
            }

            </tbody>
  </table>



    )
}