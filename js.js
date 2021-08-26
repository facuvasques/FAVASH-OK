`use strict`;

const item = localStorage.getItem("visitado") || false;

if (item) {
    swal ("¡Bienvenido!😁", "", "success");
    localStorage.setItem("visitado", true);
}



  window.addEventListener(`scroll`, function() {
      let efecto = this.document.getElementById(`efecto`);
      let posicion = efecto.getBoundingClientRect().top;
      console.log(posicion);
      let tamaño = this.window.innerHeight/13;

      if(posicion < tamaño) {
          efecto.style.animation = `mover 1s ease-out`
      }

  }) 


  window.sr = ScrollReveal();

  

  sr.reveal(`.imgF`, {
      duration: 6000,
      origin: `botoom`,
      distance: `-700px`
  })


  sr.reveal(`.img`, {
    duration: 4000,
    origin: `botoom`,
    distance: `-300px`
})

sr.reveal(`.rounded-circle`, {
    duration: 5000,
    origin: `botoom`,
    distance: `-200px`
})

sr.reveal(`.p`, {
    duration: 3000,
    origin: `botoom`,
    distance: `-100px`
})


sr.reveal(`.sueñ`, {
    duration: 3000,
    origin: `botoom`,
    distance: `-100px`
})

sr.reveal(`.proyect`, {
    duration: 3000,
    origin: `botoom`,
    distance: `-100px`
})

sr.reveal(`.foto1`, {
    duration: 3000,
    origin: `botoom`,
    distance: `-100px`
})

sr.reveal(`.foto2`, {
    duration: 3000,
    origin: `botoom`,
    distance: `-100px`
})

sr.reveal(`.foto3`, {
    duration: 3000,
    origin: `botoom`,
    distance: `-100px`
})

sr.reveal(`.prox`, {
    duration: 3000,
    origin: `botoom`,
    distance: `-100px`
})

window.addEventListener(`scroll`, function() {
    let efecto2 = this.document.getElementById(`efecto2`);
    let posicion2 = efecto2.getBoundingClientRect().top;
    console.log(posicion2);

    let tamaño2 = this.window.innerHeight/236;

    if(posicion2 < tamaño2) {
        efecto2.style.animation = `mover 1.5s ease-out`
    }
    

}) 







