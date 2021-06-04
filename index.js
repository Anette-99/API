//EJEMPLO DE JSONPLACEHOLDER

// const API_URL = "https://jsonplaceholder.typicode.com";

// const HTMLResponse = document.querySelector("#app");
// const ul = document.createElement('ul');

// fetch(`${API_URL}/comments`)
//     .then((response) => response.json())
//     .then((comments) => {
//         comments.forEach(comment => {
//             let elem = document.createElement('li');
//             elem.appendChild(
//                 document.createTextNode(`${comment.id} 📧 ${comment.email} -- ${comment.body}`)
//             );
//             ul.appendChild(elem);
//         });
//         HTMLResponse.appendChild(ul);
//     });


//EJEMPLO DE LA API DE STAR WARS

const API_URL = "https://swapi.dev/api";

const HTMLResponse = document.querySelector("#api");
const al = document.createElement('al');

fetch(`${API_URL}/planets/6/`)
    .then((response) => response.json())
    .then((planets) => {
            let cons = document.createElement('li');
            cons.appendChild(
                document.createTextNode(` 🌍 ${planets.name} 🌥️ ${planets.climate} ⌛ ${planets.terrain} 🎥 ${planets.films}`)
            );
            al.appendChild(cons);
        });
        HTMLResponse.appendChild(al);

// PARA OBTENER LA INFORMACION DESEADA EN CONSOLA

// fetch('https://swapi.dev/api/planets/6/')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
