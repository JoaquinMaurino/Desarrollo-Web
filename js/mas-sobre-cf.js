//Seccion Dudas
let formDudas = document.getElementById("formDudas");
formDudas.addEventListener("submit", function (event) {
    event.preventDefault();

    Swal.fire({
        title: "Consulta enviada",
        text: "Recibirá una respuesta a la brevedad",
        icon: "success"
    });
});


//Seccion calcular RM
let ingresarRM = document.getElementById("ingresarRM");
let ingresarPorcenaje = document.getElementById("porcentaje");


let formRM = document.getElementById("RM");
formRM.addEventListener("submit", function (e) {

        e.preventDefault();

        function calcularRM(rm, porcentaje) {
            return rm * (porcentaje / 100)
        }
        let resultado = calcularRM(ingresarRM.value, ingresarPorcenaje.value);
        Swal.fire({
        title: "Calculo realizado",
        text: "El resultado es : " + resultado + " kilos.",
        icon: "success"
    });
})


/* Swal.fire({
    title: "Error",
    text: "Debes ingresar un número mayor a '0' (cero)",
    icon: "error"
}); */