import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { loginCheck } from "./loginCheck.js";
import './formRegistrarse.js';
import './cerrarSesion.js';

onAuthStateChanged(auth, async (user)=>{
    loginCheck(user);
})