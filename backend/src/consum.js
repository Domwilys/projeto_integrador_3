dadosDepoiment = document.querySelector("#dados");

fetch("http://localhost:3333/depoiments").then((response) => {
    response.json().then((dados) => {
        dados.map((data) => {
            dadosDepoiment.innerHTML += data.nome + " " + data.email + " " + data.ocupacao + " " + data.depoimento;
        })
    })
}) 