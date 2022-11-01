let playlist = []

//playlist.push("musica.mp3")
//playlist.push("cancion de fondo.mp3")
//playlist.push("Entre 2 tierras.mp3")

class Pelicula{
    titulo
    añoSalida
    clasificacion
    videos = []
    imagenes = []
    etiquetas = []

    agregarWatchlist(){

    }
    calcularLikes(){

    }
}


class Cancion{
    constructor(id, titulo, nombreArchivo, duracion, artista, pais, genero){
        this.id = id
        this.titulo = titulo
        this.nombreArchivo = nombreArchivo
        this.duracion =  duracion
        this.artista = artista
        this.pais = pais
        this.genero = genero
    }

    reproducir(numeroCancion){
        console.log(`${numeroCancion} - Reproduciendo la canción ${this.titulo} - ${this.artista}`)
    }
}

let cancion1 = new Cancion(2, "This town", "this town.mp3", 1235, "Artista musical", "US", "Pop") 
let cancion2 = new Cancion(3, "Estrellita", "estrellita.mp3", 26234, "Cancion infantil", "US", "Infantil") 
let cancion3 = new Cancion(4, "Himno nacional", "himno nacional.mp3", 754345, "Honduras", "HN", "Civico") 
let cancion4 = new Cancion(1, "Entre 2 tierras", "entre2tierras.mp3", 1250, "Heroes del silencio", "España", "Rock en español")
let cancion5 = new Cancion(4, "Nueva cancion", "himno nacional.mp3", 754345, "Honduras", "HN", "Civico") 

/*
playlist.push({
    id: 1,
    titulo: "Entre 2 tierras",
    nombreArchivo: "entre2tierras.mp3",
    duracion: 1250, //Esto es segundos
    artista: "Heroes del silencio",
    pais: "España",
    //genero: "Rock en español"
})
*/

/*
playlist.push({
    id: 1,
    titulo: "Entre 2 tierras",
    nombreArchivo: "entre2tierras.mp3",
    duracion: 1250, //Esto es segundos
    artista: "Heroes del silencio",
    pais: "España",
    genero: "Rock en español",
    reproducir: function(){
        console.log(`Reproduciendo la cancion Entre 2 tierras - Heroes del silencio`)
    }
})
*/

//Create Read Update Delete - Crear, Leer, Actualizar, Borrar

//Insert

playlist.push(cancion1)
playlist.push(cancion2)
playlist.push(cancion3)
playlist.push(cancion4)
playlist.push(cancion5)

/*
for (let index = 0; index < playlist.length; index++) {
    playlist[index].reproducir()
}
*/

/*
playlist.forEach(function(cancion){
    //cada elemento del arreglo
    cancion.reproducir()
})
*/

//playlist.forEach((cancion, numeroCancion) => cancion.reproducir(numeroCancion+1))

//playlist.map((cancion, numeroCancion) => cancion.reproducir(numeroCancion+1))

//console.log(playlist)

//Varios elementos
//const resultadoBusqueda = playlist.filter(cancion => cancion.id === 4 )
//const resultadoBusqueda = playlist.filter(cancion => cancion.pais === 'HN' || cancion.duracion < 700000 )
//const resultadoBusqueda = playlist.filter(cancion => cancion.pais === 'CA')
//console.log(resultadoBusqueda)

///Update 

//Un solo elemento (El primero coincida)
const resultadoBusqueda = playlist.find(cancion => cancion.id === 4)
//console.log("Artista original", resultadoBusqueda.artista)
resultadoBusqueda.artista = "Varios artistas"
//console.log(playlist)

/*
///Diferencia entre map y for each
let arregloNumeros = [1,2,3,4,5,6,7,8,9]

let numerosDoblesForEach = arregloNumeros.forEach(numero => numero * 2)
let numerosDoblesMap = arregloNumeros.map(numero => numero * 2)

console.log(numerosDoblesForEach)
console.log(numerosDoblesMap)
*/

//Delete
playlist = playlist.filter(cancion => cancion.id !== 4)
console.log(playlist)

const resultadoBusqueda2 = playlist.filter(cancion => cancion.id === 4 )
console.log(resultadoBusqueda2)


//console.log(playlist)