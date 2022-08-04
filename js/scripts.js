let tituloPrincipal = document.getElementById("titulo");
console.log(tituloPrincipal.innerText);
tituloPrincipal.innerText = "Crossfit Inclusivo";
console.log(tituloPrincipal.innerText);

tituloPrincipal.addEventListener("click", () => {
    tituloPrincipal.innerText = "Crossfit Para Todos"
})


let formDudas = document.getElementById("formDudas");
formDudas.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Su consulta ha sido enviada, recibirá una respuesta a la brevedad!");
});

