function pegandoURL(){
    let url = "https://pokeapi.co/api/v2/pokemon/151";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('nome').innerHTML = data ['name'];
            document.getElementById('id_pokemon').innerHTML = data ['id'];
            let img = data['sprites']['front_default'];
            document.getElementById('pic').setAttribute("src",img);
        })
        .catch((erro) => {
            console.log("ERRO" + erro);
        });
        
}

pegandoURL()