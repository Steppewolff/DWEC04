//Exercisi1
window.addEventListener("load", function(){cs()})
function cs(){
    let array = [];

    let cs1 = {
        nombre : "Centro social Prueba 1",
        descripcion : "Este es el primer centro social de prueba",
        web : "wwww.cs1.es",
        email : "prueba1@cs1.es",
        telefono : 111111111,
        poblacion : "Palma"
    };
    array.push(cs1);

    let cs2 = {
        nombre : "Centro social Prueba 2",
        descripcion : "Este es el segundo centro social de prueba",
        web : "wwww.cs2.es",
        email : "prueba2@cs2.es",
        telefono : 222222222,
        poblacion : "Palma"
    };
    array.push(cs2);

    let cs3 = {
        nombre : "Centro social Prueba 3",
        descripcion : "Este es el tercer centro social de prueba",
        web : "wwww.cs3.es",
        email : "prueba3@cs3.es",
        telefono : 333333333,
        poblacion : "Palma"
    };
    array.push(cs3);

    csdiv = document.getElementById("cs");
    array.forEach(element => {
        let csdiv = "cs"+array.indexOf(element);
        var div = document.createElement("div");
        div.setAttribute("id", csdiv);
        div.style.margin = "2em";
        div.style.fontWeight = "bold";
        document.getElementById("cs").appendChild(div);
        document.getElementById(csdiv).innerHTML = element.nombre;

        Object.entries(element).forEach(atributo => {
            let [key, value] = atributo;
            let csatrib = key+csdiv;
            var p = document.createElement("p");
            p.setAttribute("id", csatrib);
            p.style.fontSize = "0.75em";
            p.style.fontWeight = "normal";
            document.getElementById(csdiv).appendChild(p);
            document.getElementById(csatrib).innerHTML = key +": " + value;
        });
    });
}

//Exercisi2
window.addEventListener("load", function(){artistas()})
class Artista{
    constructor(nombre, nacionalidad, obras){
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.obras = obras;
    };

    //Este método recibe el valor del elemento (nombre de la obra) que se quiere añadir y lo añade al set si no está ya previamente 
    addObra(obra){
        if (this.obras.indexOf(obra)!==-1){
            this.obras.push(obra);
        }
    };

    //Este método recibe el valor del elemento (nombre de la obra) que se quiere eliminar y devuelve el set actualizado
    delObra(obra){
        if (this.obras.indexOf(obra)!==-1){
            this.obras.splice(indexof(obra), 1);
        }
    };

    getObras(){
        return this.obras;
    };
}

function artistas(){
    let artista1 = new Artista("Pepe", "Español", ["Obra1", "Obra2"]);
    let artista2 = new Artista("Carlos", "Mexicano", ["Obra3", "Obra4"]);

    function print(artista, elemento){
        id = artista.nombre;
        Object.entries(artista).forEach(atributo => {
            let [key, value] = atributo;
            let idelemento = key+id;
            var p = document.createElement("p");
            p.setAttribute("id", idelemento);
            p.style.fontSize = "0.75em";
            p.style.fontWeight = "normal";
            document.getElementById(elemento).appendChild(p);
            document.getElementById(idelemento).innerHTML = key +": " + value;
        });
    }
    print(artista1, "artista1");
    print(artista2, "artista2");
}

//Exercisi3
window.addEventListener("load", function(){exposicion()})

class Exposicion{
    constructor(titulo, fechaInicio, fechaFin, centro, artistasExpo){
        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.centro = centro;
        this.artistasExpo = artistasExpo;
    }
    
    addArtista(artistaNuevo){
        if (this.artistasExpo.indexOf(artistaNuevo)!==-1){
            this.artistasExpo.push(artistaNuevo);
        }
    }

    delArtista(artistaNuevo){
        if (this.artistasExpo .indexOf(artistaNuevo)!==-1){
            this.artistasExpo .splice(indexof(artistaNuevo), 1);
        }
    };
}

function exposicion(){
    artistaExpo1 = new Artista("Paul", "Canadiense", ["ObraPaul1", "ObraPaul2"]);
    artistaExpo2 = new Artista("Xin", "Chino", ["ObraXin1", "ObraXin2"]);
    artistasExpo = [artistaExpo1, artistaExpo2];
    var fechaInicio = new Date("2023-08-08");
    var fechaFin = new Date("2023-12-08");

    var ExpoCaixaForum = new Exposicion("Artistas del mundo", fechaInicio, fechaFin, "Caixa Forum", artistasExpo);

    function printExpo(dataExpo, elemento){
        id = dataExpo.titulo.trim();
        Object.entries(dataExpo).forEach(atributo => {
            let [key, value] = atributo;
            let idelemento = key+"_"+id;
            var p = document.createElement("p");
            p.setAttribute("id", idelemento);
            p.style.fontSize = "0.75em";
            p.style.fontWeight = "normal";
            document.getElementById(elemento).appendChild(p);
            if(key !== "artistasExpo"){
                document.getElementById(idelemento).innerHTML = key +": " + value;
            }else{
                artistasObj = value
                idElementoArtista = idelemento; 
                artistasObj.forEach(elemento => {
                    nrArtista = artistasObj.indexOf(elemento) + 1;
                    idElementoArtista = idelemento + nrArtista;
                    id = nrArtista;
                    var p = document.createElement("p");
                    p.setAttribute("id", idElementoArtista);
                    document.getElementById(idelemento).appendChild(p);
                    document.getElementById(idElementoArtista).innerHTML = "Artista " + nrArtista + ": " + elemento.nombre;
                    Object.entries(elemento).forEach(atributoArtista => {
                        let [key, value] = atributoArtista;
                        let idelemento = key+"_"+id;
                        var p = document.createElement("p");
                        p.setAttribute("id", idelemento);
                        p.style.fontSize = "0.75em";
                        p.style.fontWeight = "normal";
                        document.getElementById(idElementoArtista).appendChild(p);
                        document.getElementById(idelemento).innerHTML = key +": " + value;
                    });
                });
            }
        });
    }
    printExpo(ExpoCaixaForum, "expo");
}

//Exercisi4
