//Formulario Iniciar Sesión
let formLogin = document.getElementById('formLogin');
let recordar = document.getElementById('checkBox');

function guardarDatos(storage) {
    let userMail = document.getElementById("inputMail").value;
    let userPass = document.getElementById("inputPass").value;
    const usuario = {
        "user": userMail,
        "pass": userPass
    }

    storage === "localStorage" ? localStorage.setItem("user", JSON.stringify(usuario)) : sessionStorage.setItem("user", JSON.stringify(usuario))

}

formLogin.onclick = () => {
    recordar.checked ? guardarDatos('localStorage') : guardarDatos('sessionStorage');
};