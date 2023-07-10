import { singInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "./firebase.js";

import { messageBox } from "./messageBox.js";

const formIniciarSesion=document.getElementById('iniciarSesionModal');

formIniciarSesion.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const email=document.getElementById('txtEmailLogin').value;
    const password=document.getElementById('txtPasswordLogin').value;

})