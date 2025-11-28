import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../estilos/login-renamed.css"

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
            navigate("/dassboar");
        } else {
            setError("Error en el inicio de sesión");
        }
    };

    return(
        <div className="login-cuerpo">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />
            <section className="login-cuerpo-inicio">
                <div className="login-parte-superior">
                    <div className="login-logo"> 
                        <p className="login-log">SENA</p>
                        <h1 className="login-titulo">
                            MAFIS
                        </h1>
                    </div>
                    <div className="login-parrafo-inicio">
                            <p className="login-parrafo">
                                Sistema de gestion de mantenimiento de activos fijos servicio nacional de aprendizaje sena
                            </p>
                            <h2 className="login-subtitulo">Inicio de Sesion</h2>
                    </div>
                </div>
                <div className="login-panel">
                <div className="login-usuario">
                    <label htmlFor="usuario" className="login-label-usuario">Correo Electronico</label>
                    <input type="email" id="usuario" className="login-input-usuario" placeholder="Correo electronico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <label htmlFor="contraseña" className="login-label-contraseña">Contraseña</label>
                    <input type="password" id="contraseña" className="login-input-contraseña" placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                    />
                    {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
                </div>
                <div className="login-boton-inicio-sesion">
                    <button className="login-boton-inicio" onClick={handleLogin}>Iniciar Sesion</button>
                    <div className="login-links">
                        <a href="#" className="login-link-olvido-contraseña">Crear cuenta</a>
                        <div className="login-separador">
                            |
                        </div>
                        <p>
                        <a href="#" className="login-link-crear-cuenta">Olvide mi contraseña</a>
                        </p>
                        
                    </div>
                </div>
                </div>
            </section>


        </div>
    )
}