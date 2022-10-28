let playlist = []

//playlist.push("musica.mp3")
//playlist.push("cancion de fondo.mp3")
//playlist.push("Entre 2 tierras.mp3")

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

    reproducir(){
        console.log(`Reproduciendo la canción ${this.titulo} - ${this.artista}`)
    }
}

let cancion1 = new Cancion(2, "This town", "this town.mp3", 1235, "Artista musical", "US", "Pop") 
let cancion2 = new Cancion(3, "Estrellita", "estrellita.mp3", 26234, "Cancion infantil", "US", "Infantil") 
let cancion3 = new Cancion(4, "Himno nacional", "himno nacional.mp3", 754345, "Honduras", "HN", "Civico") 
let cancion4 = new Cancion(1, "Entre 2 tierras", "entre2tierras.mp3", 1250, "Heroes del silencio", "España", "Rock en español")

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

playlist.push(cancion1)
playlist.push(cancion2)
playlist.push(cancion3)
playlist.push(cancion4)

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

playlist.forEach((cancion) => cancion.reproducir())

//console.log(playlist)