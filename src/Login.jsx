import React from "react";
import Activos from "./activos";

export default function Login(){

    return(
        <div className="cuerpo">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />
            <section className="cuerpo-inicio">
                <div className="parte-superior">
                    <div className="logo"> 
                        <p className="log">SENA</p>
                        <h1 className="titulo">
                            MAFIS
                        </h1>
                    </div>
                    <div className="parrafo-inicio">
                            <p className="parrafo">
                                Sistema de gestion de mantenimiento de activos fijos servicio nacional de aprendizaje sena
                            </p>
                            <h2 className="subtitulo">Inicio de Sesion</h2>
                    </div>
                </div>
                <div className="login">
                <div className="login-usuario">
                    <label for="usuario" className="label-usuario">Correo Electronico</label>
                    <input type="text" id="usuario" className="input-usuario" placeholder="Correo electronico"/>
                    <label for="contraseña" className="label-contraseña">Contraseña</label>
                    <input type="password" id="contraseña" className="input-contraseña" placeholder="Contraseña"/>
                </div>
                <div className="boton-inicio-sesion">
                    <button className="boton-inicio">Iniciar Sesion</button>
                    <div className="links">
                        <a href="#" className="link-olvido-contraseña">Crear cuenta</a>
                        <div className="separador">
                            |
                        </div>
                        <p>
                        <a href="#" className="link-crear-cuenta">Olvide mi contraseña</a>
                        </p>
                        
                    </div>
                </div>
                </div>
            </section>


        </div>
    )
}