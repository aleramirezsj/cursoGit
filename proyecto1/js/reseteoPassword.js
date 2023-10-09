import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { auth } from "./firebase.js";

import { messageBox } from "./messageBox.js";

const formReseteoPassord=document.getElementById('formReseteoPassword');

formReseteoPassord.addEventListener('submit', async (e)=>{
    e.preventDefault();
    console.log('reseteando password');
    const email=formReseteoPassord['txtEmailLogin'].value;
    console.log(email);
    try {
        await sendPasswordResetEmail(auth,email).then(()=>{
            messageBox('Se envió un email de reseteo')
        });
        
    } catch (error) {
        messageBox(error.code);
    }
} )