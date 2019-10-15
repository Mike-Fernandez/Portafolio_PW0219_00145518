var app = {
    init : function(){
        this.searchForm = document.forms.searchPokemon;
        this.searchForm.addEventListener("submit", this.getPokemon)
    },
    getPokemon : function(evt){
        evt.preventDefault();
        var idHabilidad = this.idHabilidad.value;
        var base_url = `https://pokeapi.co/api/v2/ability/${idHabilidad}`;
        fetch(base_url)
        .then(function(answer){
            return answer.json();
        })
        .then(function(aJson){
            
        })
        //Validar que sea un valor de id valido
        //Investigar que es cors para un punto extra en el parcial
        /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!Codigo para ver el nombre y el tipo del pokemon !!!!!!!
        var idPokemon = this.idPokemon.value;
        var base_url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
        fetch(base_url)
        .then(function(res){
            return res.json();
        })
        .then(function(resJson){
            var list = document.getElementById("pokemon-list");
            var pokemonDiv = document.createElement("div");
            pokemonDiv.classList.add("pokemon");

            pokemonDiv.innerHTML = `
            <h2 class = "pokemon-name">${resJson.name}</h2>
            <span class = "pokemon-type">${resJson.types.map((e)=>{return e.type.name}).join(", ")}</span>`;
            list.appendChild(pokemonDiv);
        })*/
    }
}

window.onload = () => {
    app.init();
};