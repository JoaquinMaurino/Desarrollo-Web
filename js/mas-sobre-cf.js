//Seccion Dudas
let formDudas = document.getElementById("formDudas");
formDudas.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Su consulta ha sido enviada, recibirá una respuesta a la brevedad!");
});



//Seccion calcular RM
let ingresarRM = document.getElementById("ingresarRM");
let ingresarPorcenaje = document.getElementById("porcentaje");


let formRM = document.getElementById("RM");
formRM.addEventListener("submit", function(event){
    event.preventDefault();

    function calcularRM (rm, porcentaje){
        return rm * (porcentaje / 100)
    }
    let resultado = calcularRM(ingresarRM.value, ingresarPorcenaje.value);
    alert("El resultado es: "+ resultado+" kilos.");
});

