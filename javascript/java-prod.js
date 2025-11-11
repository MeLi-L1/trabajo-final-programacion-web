
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




document.addEventListener('click', function(comprar){
    if (comprar.target.classList.contains('btn-comprar')){
        iziToast.error({
        title: 'Error',
        position: 'topCenter',
        message: 'ESTAMOS TRABAJANDO PARA BRINDARTE EL MEJOR SERVICIO.',});
        };
});



const listaCarrito = document.getElementById('lista-carrito');

document.addEventListener('click', function (agregarCarrito) {
    if (agregarCarrito.target.classList.contains('carrito')) {    
    const card = agregarCarrito.target.closest('.card');
       if (card) {
      const nombre = card.querySelector('.card-title').innerText;
      const li = document.createElement('li');
      li.classList.add('item-carrito');        
      li.innerHTML = `<div class="carrito-item"><span class="carrito-nombre">${nombre}</span></div>`;

      const botonEliminar = document.createElement('button');
      botonEliminar.textContent = '✖';
      botonEliminar.classList.add('btn-eliminar');

      botonEliminar.addEventListener('click', function() {
       li.remove();
       iziToast.info({
          title: 'Carrito',
          message: 'Producto eliminado del carrito.',
          position: 'topCenter',
        });
      });
       li.appendChild(botonEliminar);
       listaCarrito.appendChild(li);   
       iziToast.success({
       title: 'Carrito',
       message: `${nombre} agregado al carrito.`,
       position: 'topCenter',
      });
      const carroCanvas = document.getElementById('offcanvasRight');
      const bsOffcanvas = new bootstrap.Offcanvas(carroCanvas);
      bsOffcanvas.show();
    }}
});
