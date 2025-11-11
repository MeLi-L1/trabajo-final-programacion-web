
const btnHamburguesa = document.getElementById('hamburguesa');
  const nav = document.getElementById('nav');
  const icono = btnHamburguesa.querySelector('i');

  btnHamburguesa.addEventListener('click', function() {
    nav.classList.toggle('activo');
    icono.classList.toggle('bi-list');
    icono.classList.toggle('bi-x');
  });

  const cambiarFondo=document.getElementById('cambiar-fondo');
const body=document.body;
body.classList.add('tema-claro');

cambiarFondo.addEventListener('click',function() {
const icono=cambiarFondo.querySelector('i');
if(body.classList.contains('tema-claro')){
    body.classList.remove('tema-claro');
    body.classList.add('tema-oscuro');
    icono.className="bi bi-sun";
    cambiarFondo.innerHTML='<i class="bi bi-sun"></i>';
}
else{
    body.classList.remove('tema-oscuro');
    body.classList.add('tema-claro');
    cambiarFondo.innerHTML='<i class="bi bi-moon-stars-fill"></i>';
}


});
const btnSearch=document.getElementById('btn-search');

btnSearch.addEventListener('click', function(){
    iziToast.info({
    position: 'topCenter',
    message: 'ESTAMOS TRABAJANDO PARA BRINDARTE EL MEJOR SERVICIO.',
});
});



const btnEnviar=document.getElementById('btn-enviar');
const nombre=document.getElementById('nombre');
const mail=document.getElementById('email');
const mensaje=document.getElementById('mensaje');


btnEnviar.addEventListener('click',function(event){
  event.preventDefault();
    if(nombre.value.trim()===''||mail.value.trim()===''||mensaje.value.trim()===''){
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
  title: "Mensaje enviado! Te responderemos a la brevedad",
  showConfirmButton: false,
  timer: 5000
  })

  }
});
