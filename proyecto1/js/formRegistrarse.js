import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from "./firebase.js";

const formRegistrarse=document.getElementById("formRegistrarse");
//console.log(formRegistrarse);
formRegistrarse.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const email=formRegistrarse['txtEmail'].value;
    const password=formRegistrarse['txtPassword'].value;
    console.log(`email: ${email},password:${password}`);
    try{
        const credencialesUsuario = await createUserWithEmailAndPassword(auth, email, password);
        console.log(credencialesUsuario);
    } catch (error) {
        console.log(error);
    }
    
});
