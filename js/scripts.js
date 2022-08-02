let tituloPrincipal = document.getElementById("titulo");
console.log(tituloPrincipal.innerText);
tituloPrincipal.innerText = "Crossfit Inclusivo";
console.log(tituloPrincipal.innerText);

tituloPrincipal.addEventListener("click", () => {
    tituloPrincipal.innerText = "Crossfit Para Todos"
})

let boton = document.querySelector("#btnDudas");
boton.addEventListener("click", () => {
    alert("Su consulta ha sido enviada, recibirá una respuesta pronto!")
});