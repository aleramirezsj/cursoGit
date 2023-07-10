import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

import { messageBox } from "./messageBox.js";

const formRegistrarse=document.getElementById("formRegistrarse");
//console.log(formRegistrarse);
formRegistrarse.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const email=formRegistrarse['txtEmail'].value;
    const password=formRegistrarse['txtPassword'].value;
    console.log(`email: ${email},password:${password}`);
    try{
        const credencialesUsuario = await createUserWithEmailAndPassword(auth, email, password);
        const ventanaRegistrarse=document.getElementById("registrarseModal");
        const formReg= bootstrap.Modal.getInstance(ventanaRegistrarse);
        formReg.hide();
        console.log(credencialesUsuario);
        messageBox(`El usuario ${credencialesUsuario.user.email} fue creado correctamente`,'notificacion');
    } catch (error) {
        switch (error.code) {
            case 'auth/email-already-in-use':
                messageBox('Este correo electrónico ya fue usado en otra cuenta');
                break;
            case 'auth/invalid-email':
                messageBox('El correo electrónico proporcionado no es válido');
                break;
            case 'auth/weak-password':
                messageBox('La contraseña proporcionada es debil');
                break;
            default:
                messageBox('error en validación del registro');
        }

    }
    
});
