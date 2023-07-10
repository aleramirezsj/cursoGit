import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

import { messageBox } from "./messageBox.js";
import { gestionDeErrores } from "./gestionDeErrores.js";

const formIniciarSesion=document.getElementById('formIniciarSesion');

formIniciarSesion.addEventListener('submit', async (e)=>{
    e.preventDefault();
    console.log('iniciando sesión');
    const email=document.getElementById('txtEmailLogin').value;
    const password=document.getElementById('txtPasswordLogin').value
    try {
        const credencialesUsuario=await signInWithEmailAndPassword(auth,email,password);
        const ventanaIniciarSesion=document.getElementById("iniciarSesionModal");
        const formIniciar= bootstrap.Modal.getInstance(ventanaIniciarSesion);
        formIniciar.hide();
    } catch (error) {
        gestionDeErrores(error.code);
    }
} )