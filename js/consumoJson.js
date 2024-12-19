//******Consumo de datos de un archivo JSON******//
//capturo el contenedor del HTML por su ID
let fraseAutor = document.getElementById("api")
fetch("frases.json")
    //con fetch obtuve una promesa response y necesito transformarla a algo legible como un json
    .then((response) => response.json())
    .then((miJson) => {
        //declaro la constante fraseAleatoria y le almaceno del array miJson(JSON) el valor de un índice aleatorio...
        //con la función Math.random()genero un número decimal aleatorio entre 0 < 1 se multiplica por la longitud del array miJson con floor lo redondeo
        const fraseAleatoria = miJson[Math.floor(Math.random() * miJson.length)]
        //console.log(fraseAleatoria)

        //guardo el resultado obtenido en los spans
        document.getElementById("frase").textContent = fraseAleatoria.frase
        document.getElementById("autor").textContent = `- ${fraseAleatoria.autor}`;

    });