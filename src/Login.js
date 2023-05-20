import React, {useEffect} from "react";
import { app } from "./fb";
import './App.css';
import foot from "./img/foot.png";
import Swal from "sweetalert2";

function Login(props) {

    const [isRegistered, setIsRegistered] = React.useState(false);

    const crearUsuario = (email, pass) => {
        app
            .auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(userFirebase => {
                console.log("Usuario Creado: ", userFirebase);
                props.setUser(userFirebase);
                registrado();
            })
            .catch(error => {
                errorUsuario();
            });
    };

    const iniciarSesion = (email, pass) => {
        app
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then(userFirebase => {
                console.log("Usuario Iniciado: ", userFirebase.user);
                props.setUser(userFirebase);
                iniciado();
            })
            .catch(error => {
                errorSesion();
            });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email,pass);

        if(isRegistered) {
            crearUsuario(email, pass);
        }

        if(!isRegistered) {
            iniciarSesion(email, pass);
        }
    };

    const registrado = () => {
        Swal.fire({
            title: "¡Usuario registrado con éxito!",
            text: app.auth().currentUser.email,
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false,
        });
    }

    const iniciado = () => {
        Swal.fire({
            title: "¡Bienvenido!",
            text: app.auth().currentUser.email,
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            allowOutsideClick: false,
        });
    }

    const errorSesion = () => {
        Swal.fire({
            title: "¡Error!",
            text: "Usuario o contraseña incorrectos",
            icon: "error",
            button: "Aceptar",
            allowOutsideClick: false,
        });
    }

    const errorUsuario = () => {
        Swal.fire({
            title: "¡Error!",
            text: "El usuario ya existe",
            icon: "error",
            button: "Aceptar",
            allowOutsideClick: false,
        });
    }

    return (
        <div className='d0'>
            <div className='div1'>
                {isRegistered ?
                (<h1 className='i-r'>Regístrate</h1>) :
                (<h1 className='i-r2'>Inicia Sesión</h1>)}
                <form onSubmit={submitHandler}>
                    <div className='form-group1'>
                        <label className='correo'>Correo</label>
                        <input className='mail' type='email' id='email' placeholder='Ingresa tu correo electrónico'/>
                    </div>
                    <div className='form-group2'>
                        <label className='contraseña'>Contraseña</label>
                        <input className='pass' type='password' id='password' placeholder='Ingresa una contraseña' />
                    </div>
                    <button className='inicia' type='submit'>
                        {" "}
                        {isRegistered ? "Regístrate" : "Ingresar"}{" "}
                        </button>
                </form>
                {isRegistered ?
                    (<><a className='text-1'>Si ya tienes una cuenta.</a>
                    <button id='iniciasesion' className='extra-1' onClick={() => setIsRegistered(!isRegistered)}>Inicia Sesión</button></>) :
                    (<><a className='text-2'>Si aún no tienes una cuenta.</a>
                    <button id='registrate' className='extra-2' onClick={() => setIsRegistered(!isRegistered)}>Regístrate</button></>)}
            </div>
            <img className='foot-1' src={foot} alt='univcon'></img>
            <a className='home' href='/'>Regresar a Inicio ></a>
        </div>
    );
};

export default Login;
