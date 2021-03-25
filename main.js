"use strict"
const links = {
    "imagens": "./imagens/20190414_153035.jpg",
    "nome": "Rogério Bastos Silva",
    "links": [
        {
            "titulo": "LINKEDIN",
            "url": "https://www.linkedin.com/in/rog%C3%A9rio-bastos-silva-309a40157/"
        },
        {
            "titulo": "GITHUB",
            "url": "https://github.com/rogerio-bastos"
        }
    ]

}

const img = document.querySelector('img');
img.src = links["imagens"];

const h1 = document.querySelector('h1');
h1.innerText = links["nome"];

const div = document.querySelector('div');

function criarLink(titulo, url){
    const a = document.createElement('a');
    a.classList.add('link');
    a.target = "_blank";
    a.href = url;
    a.innerText = titulo;
    div.appendChild(a);
};

const tamanho = links["links"].length - 1;

for(let indice = 0; indice <= tamanho; indice++){
    const titulo = links["links"][indice]["titulo"]; 
    const url = links["links"][indice]["url"]; 

    criarLink(titulo, url);

}







