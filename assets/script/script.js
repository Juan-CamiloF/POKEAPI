

    let cantidad=0;
    const btn=document.getElementById("btn");
    btn.addEventListener("click",()=>{
        cantidad=document.getElementById("cantidad").value;
    for (let i = 1; i <= cantidad; i++) {
        api(`https://pokeapi.co/api/v2/pokemon/${i}`)
    
    }
    });

//Consumo Api
const api = (API) => {
    return fetch(API)
        .then((response) => response.json())
        .then((json) => {
            mostrarPokemon(json);
        })
        .catch((error) => {
            console.log("Error", error)
        })
}

//Mostrar pokemon
let div="";
const mostrarPokemon = (pokemon) => {
        div += `<div class="col-4 w-20 my-2">`
        div += `<div class="card carta p-3 " style="width: 18rem;">`
        div += `<img src="${pokemon.sprites.other.dream_world.front_default}" width=100px class="card-img-top img-fluid">`
        div += `<p> Nombre : ${pokemon.name}</p>`
        div += `<p> Altura : ${pokemon.height}</p>`
        div += `<p> Peso : ${pokemon.weight}</p>`
        div += `</div>`
        div += `</div>`
        document.getElementById("pokemon").innerHTML = div;

};

