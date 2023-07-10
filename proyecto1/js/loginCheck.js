//obtenemos los elementos que deben visualizarse cuando estamos conectados y
//también obtenemos los elementos que deben visualizarse cuando estamos desconectados

 
 const elementosConectarse=document.querySelectorAll('.conectarse');
 const elementosDesconectarse=document.querySelectorAll('.desconectarse');

 export const loginCheck= (user)=>{
    if(user)//cuando nos conectamos
    {
        elementosConectarse.forEach(elemento=>elemento.style.display='none');
        elementosDesconectarse.forEach(elemento=>elemento.style.display='block');           
    }else //cuando nos desconectamos
    {
        elementosConectarse.forEach(elemento=>elemento.style.display='block');
        elementosDesconectarse.forEach(elemento=>elemento.style.display='none');                   
    }

}
