import { messageBox } from "./messageBox.js";

export const gestionDeErrores=(errorCodeFirebase)=>{
    switch (errorCodeFirebase) {
        case 'auth/email-already-in-use':
            messageBox('Este correo electrónico ya fue usado en otra cuenta');
            break;
        case 'auth/invalid-email':
            messageBox('El correo electrónico proporcionado no es válido');
            break;
        case 'auth/weak-password':
            messageBox('La contraseña proporcionada es debil');
            break;
        case 'auth/wrong-password':
            messageBox('La contraseña ingresada no es correcta');
            break;
        case 'auth/user-not-found':
                messageBox('El usuario ingresado no existe');
                break;
        default:
            messageBox(errorCodeFirebase);
            console.log(errorCodeFirebase);
    }
}