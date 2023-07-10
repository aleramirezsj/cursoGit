export const messageBox=(mensaje,tipo='error')=>{
    Toastify({
        text: mensaje,
        gravity: "bottom", 
        position: "right",            
        duration: 3000,
        style :{
            background: tipo==='error' ? '#fc5b5b' : '#70cf89' 
        }
        }).showToast();

}