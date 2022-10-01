window.addEventListener('scroll', function(){
    let animacion = document.getElementById('jettcita');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla = window.innerHeight/3;

    if(posicionObj1 < tamañoDePantalla){
        animacion.style.animation = 'mover 1s ease-out'
    }
})