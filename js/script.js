const fotos = ["cabra.jpg", "cerdo.jpg", "conejo.png", "conejo2.jpg", "cordero.png", "elefante.jpg",
  "erizo.jpg", "gato.png", "jirafa.png", "leon.png", "mono.jpg", "oso.jpg", "osoblanco.png",
  "osopanda.png", "pato.png", "perro.png", "pollo.png", "pradera.jpg", "tigre.jpg", "vaca.png"];

const nombres = ["José", "Adán", "Arturo", "Jose", "Antonio", "Adiran", "Asier", "Jose", "Luis",
  "Adolfo", "Augusto", "Jose", "Manuel", "Adrià", "Aurelio", "Jose", "Maria", "Adrián",
  "Baltasar", "Juan", "Agustín", "Bartolomé", "Blas", "Aimar", "Basilio", "Juan", "Antonio",
  "Aitor", "Benito", "Boris", "Alano", "Benjamín", "Juan", "Carlos", "Alberto", "Bernardo", "Borja",
  "Aldo", "Bienvenido", "Brahim", "Aleix", "Blas", "Brais", "Alejandro", "Boris", "Bruno",
  "Alejo", "Borja", "Calisto"];

const deportes = ["Futbol", "Submarinismo", "Tenis", "Atletismo", "Beisbol", "Escalada", "Halterofilia", "Judo", "Karate", "Baloncesto", "Balanmano",
  "Motociclismo", "Automovilismo", "Ciclismo", "Boxeo", "Glof", "Atletismo", "Rudby", "Vela", "Sky", "Paddle", "Natacion"];

const aficion = ["Correr detrás de las moscas", "Jugar a la Petanca", "Nadar con las ranas", "limpiar la vajilla", "jugar al parchis", "comer piruletas de fresa",
  "ir a cazar gamusinos con mis compañero de clase", "pintar las paredes del instituto", "tapar los huecos de las paredes", "dar cabezazos a las paredes",
  "coleccionar moscas vivas"];

  // Crear div e imagenes en galeria
let galeria = document.getElementById("galeria")
function generarcuadrosimg() {

  for (let i = 0; i < 12; i++) {
    let nuevodiv = document.createElement("div");
    nuevodiv.classList.add("galeria__cuadrofoto")

    let nuevasimg = document.createElement("img")
    nuevasimg.classList.add("galeria__img")

    galeria.appendChild(nuevodiv)
    nuevodiv.appendChild(nuevasimg)
    nuevasimg.src="imagenes/interrogacion.jpg"
  }

  
}

document.addEventListener("DOMContentLoaded", generarcuadrosimg)

// Generar imagen aleatoria
let nombre=document.getElementById("nombre")
let deporte=document.getElementById("deporte")
let practica=document.getElementById("practica")

let galeria__img=document.getElementsByClassName("galeria__img")
function generarimg(event){
  if(event.target.nodeName=="IMG"){
    let random=Math.floor(Math.random()*fotos.length);
    let imgrandom=fotos[random];
    
    event.target.src="imagenes/animales/"+imgrandom
    
    let randomn = Math.floor(Math.random() * nombres.length)
    let nombrerandom=nombres[randomn]

    nombre.textContent=nombrerandom

    let randomd=Math.floor(Math.random() * deportes.length)
    let deporterandom=deportes[randomd];

    deporte.textContent=deporterandom

    let randoma=Math.floor(Math.random() * aficion.length)
    let aficionrandom=aficion[randoma];

    practica.textContent=aficionrandom

  }
}

galeria.addEventListener("click",generarimg)

