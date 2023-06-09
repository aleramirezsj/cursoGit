import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { loginCheck } from "./loginCheck.js";
import './formRegistrarse.js';
import './cerrarSesion.js';
import './iniciarSesion.js';
import './loginGoogle.js';
import './loginFacebook.js';
import './loginGithub.js';

onAuthStateChanged(auth, async (user)=>{
    loginCheck(user);
})