 const elementosLogin=document.querySelectorAll('.login');
 const elementosLogout=document.querySelectorAll('.logout');

 export const loginCheck= (user)=>{
    if(user)
    {
        elementosLogin.forEach(link=>link.style.display='none');
        elementosLogout.forEach(link=>link.style.display='block');           
    }else
    {
        elementosLogin.forEach(link=>link.style.display='block');
        elementosLogout.forEach(link=>link.style.display='none');                   
    }

}
