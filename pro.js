const preguntas = [
    { pregunta: "¿Cuál es la capital de Francia?", opciones: ["París", "Londres", "Berlín", "Madrid"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Alemania?", opciones: ["Viena", "Berlín", "Roma", "Praga"], respuesta: 1 },
    { pregunta: "¿Cuál es la capital de España?", opciones: ["Madrid", "Barcelona", "Sevilla", "Valencia"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Italia?", opciones: ["Roma", "Milán", "Venecia", "Nápoles"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Japón?", opciones: ["Tokio", "Osaka", "Kioto", "Hiroshima"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Brasil?", opciones: ["Brasilia", "Río de Janeiro", "Sao Paulo", "Salvador"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Canadá?", opciones: ["Toronto", "Ottawa", "Vancouver", "Montreal"], respuesta: 1 },
    { pregunta: "¿Cuál es la capital de México?", opciones: ["Guadalajara", "Monterrey", "Ciudad de México", "Puebla"], respuesta: 2 },
    { pregunta: "¿Cuál es la capital de Australia?", opciones: ["Sídney", "Melbourne", "Canberra", "Brisbane"], respuesta: 2 },
    { pregunta: "¿Cuál es la capital de Argentina?", opciones: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de China?", opciones: ["Shanghái", "Pekín", "Cantón", "Shenzhen"], respuesta: 1 },
    { pregunta: "¿Cuál es la capital de India?", opciones: ["Bombay", "Delhi", "Bangalore", "Calcuta"], respuesta: 1 },
    { pregunta: "¿Cuál es la capital de Rusia?", opciones: ["San Petersburgo", "Moscú", "Novosibirsk", "Ekaterimburgo"], respuesta: 1 },
    { pregunta: "¿Cuál es la capital de Sudáfrica?", opciones: ["Ciudad del Cabo", "Johannesburgo", "Pretoria", "Durban"], respuesta: 2 },
    { pregunta: "¿Cuál es la capital de Egipto?", opciones: ["El Cairo", "Alejandría", "Luxor", "Gizeh"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Turquía?", opciones: ["Estambul", "Ankara", "Izmir", "Bursa"], respuesta: 1 },
    { pregunta: "¿Cuál es la capital de Grecia?", opciones: ["Atenas", "Salónica", "Heraclión", "Patras"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Portugal?", opciones: ["Lisboa", "Oporto", "Coímbra", "Braga"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Suecia?", opciones: ["Estocolmo", "Gotemburgo", "Malmö", "Uppsala"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Noruega?", opciones: ["Oslo", "Bergen", "Trondheim", "Stavanger"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Finlandia?", opciones: ["Helsinki", "Tampere", "Turku", "Oulu"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Dinamarca?", opciones: ["Copenhague", "Aarhus", "Odense", "Aalborg"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Polonia?", opciones: ["Varsovia", "Cracovia", "Lodz", "Gdansk"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Hungría?", opciones: ["Budapest", "Debrecen", "Szeged", "Miskolc"], respuesta: 0 },
    { pregunta: "¿Cuál es la capital de Austria?", opciones: ["Viena", "Salzburgo", "Innsbruck", "Graz"], respuesta: 0 }
];

let preguntaActual = 0;
let puntaje = 0;

function mostrarPregunta() {
    const preguntaElement = document.getElementById('pregunta');
    const opcionesElement = document.querySelectorAll('.opcion');

    preguntaElement.textContent = preguntas[preguntaActual].pregunta;
    opcionesElement.forEach((button, index) => {
        button.textContent = preguntas[preguntaActual].opciones[index];
    });

    document.getElementById('resultado').textContent = '';
    document.getElementById('siguiente').style.display = 'none';
}

function seleccionarRespuesta(index) {
    const esCorrecta = index === preguntas[preguntaActual].respuesta;
    const resultadoElement = document.getElementById('resultado');
    if (esCorrecta) {
        resultadoElement.textContent = '¡Correcto!';
        resultadoElement.style.color = 'green';
        puntaje += 4;
    } else {
        resultadoElement.textContent = 'Incorrecto';
        resultadoElement.style.color = 'red';
    }
    document.getElementById('siguiente').style.display = 'inline-block';
}

function siguientePregunta() {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {
    const contenedor = document.getElementById('juego');
    contenedor.innerHTML = `
        <h1>Resultado Final</h1>
        <p>Puntaje: ${puntaje}</p>
    `;

    if (puntaje > 70) {
        contenedor.innerHTML += `<p>¡Felicidades! ¡Eres un experto en capitales!</p>`;
    } else if (puntaje >= 40 && puntaje <= 69) {
        contenedor.innerHTML += `<p>¡Buen trabajo! Puedes mejorar aún más.</p>`;
    } else {
        contenedor.innerHTML += `<p>¡Sigue practicando! ¡Puedes hacerlo mejor!</p>`;
    }
}

mostrarPregunta();
