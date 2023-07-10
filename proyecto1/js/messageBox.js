export const messageBox=(mensaje)=>{
    Toastify({
        text: mensaje,
        gravity: "bottom", 
        position: "right",            
        duration: 3000
        }).showToast();

}