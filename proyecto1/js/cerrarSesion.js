import { signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "./firebase.js";

const cerrarSesion=document.getElementById('menuCerrarSesion');

cerrarSesion.addEventListener('click',async ()=>{
    console.log("se cerró la sesión");
    await signOut(auth);
})