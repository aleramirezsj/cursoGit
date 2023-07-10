import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

import { messageBox } from "./messageBox.js";
import { gestionDeErrores } from "./gestionDeErrores.js";

const btnLoginFacebook=document.getElementById('btnLoginFacebook');

btnLoginFacebook.addEventListener('click',async(e)=>{
    const provider= new FacebookAuthProvider();
    try {
        const credencialesUsuario=await signInWithPopup(auth,provider);
        console.log("credencial de usuario",credencialesUsuario);
        bootstrap.Modal.getInstance(document.getElementById('iniciarSesionModal')).hide();
        messageBox(`Bienvenido ${credencialesUsuario.user.displayName}`,'notificacion');
    } catch (error) {
        gestionDeErrores(error.code);
    }    
})