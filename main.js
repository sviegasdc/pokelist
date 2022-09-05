
const TemosquePegar = () => {
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const pokemon = {};
                pokemon['nome'] = data.name;
                pokemon['id'] = data.id;
                pokemon['pic'] = data.sprites['front_default'];

                const id = document.createElement(`p`);
                const texto = document.createElement(`h2`);
                const foto = document.createElement(`img`);

                foto.setAttribute("class", "sprites");
                foto.setAttribute("src", `${pokemon.pic}`);

                id.setAttribute("class", "pokemon_id");
                texto.setAttribute("class", "pokemon_name");

                texto.innerHTML = `${pokemon.nome}`;
                id.innerHTML = `${pokemon.id}`;
                document.getElementById("lista").appendChild(id);
                document.getElementById("lista").appendChild(texto);
                document.getElementById("lista").appendChild(foto);

            })
            .catch((erro) => {
                console.log("ERRO" + erro);
            });
    }
};

TemosquePegar()
