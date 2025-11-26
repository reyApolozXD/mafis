import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function Login(){
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!correo || !contraseña) {
            setError("Por favor completa todos los campos");
            return;
        }
        const loginExitoso = login(correo, contraseña);
        if (loginExitoso) {
            setError("");
            navigate("/activos");
        } else {
            setError("Error en el inicio de sesión");
        }
    };

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
                    <label htmlFor="usuario" className="label-usuario">Correo Electronico</label>
                    <input type="email" id="usuario" className="input-usuario" placeholder="Correo electronico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <label htmlFor="contraseña" className="label-contraseña">Contraseña</label>
                    <input type="password" id="contraseña" className="input-contraseña" placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                    />
                    {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
                </div>
                <div className="boton-inicio-sesion">
                    <button className="boton-inicio" onClick={handleLogin}>Iniciar Sesion</button>
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