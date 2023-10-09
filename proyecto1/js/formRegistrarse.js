import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

import { messageBox } from "./messageBox.js";
import { gestionDeErrores } from "./gestionDeErrores.js";

const formRegistrarse=document.getElementById("formRegistrarse");
//console.log(formRegistrarse);
formRegistrarse.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const email=formRegistrarse['txtEmail'].value;
    const password=formRegistrarse['txtPassword'].value;
    console.log(`email: ${email},password:${password}`);
    try{
        await createUserWithEmailAndPassword(auth, email, password)
        .then((credencialesUsuario)=>{
            sendEmailVerification(auth.currentUser).then(()=>{
                messageBox('La verificacion del correo fue enviada')
            })
        });
        const ventanaRegistrarse=document.getElementById("registrarseModal");
        const formReg= bootstrap.Modal.getInstance(ventanaRegistrarse);
        formReg.hide();
        //console.log(credencialesUsuario);
        //messageBox(`El usuario ${credencialesUsuario.user.email} fue creado correctamente`,'notificacion');
    } catch (error) {
        gestionDeErrores(error.code);
    }
    
});
