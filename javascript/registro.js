
const btnForm=document.getElementById('btnForm');
const nombre=document.getElementById('nombre');
const mail=document.getElementById('email');
const tel=document.getElementById('telefono');
const pass=document.getElementById('pass');


btnForm.addEventListener('click',function(){
    if(nombre.value.trim()===''||mail.value.trim()===''||tel.value.trim()===''||pass.value.trim()===''){
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Revisá tus datos!",
  
});
}
  else{
    Swal.fire({
  position: "center",
  icon: "success",
  title: "registro Exitoso!",
  showConfirmButton: false,
  timer: 1500
  })

  }
});