let formLogin = document.getElementById('formLogin');
let recordar = document.getElementById('checkBox');
let userMail = document.getElementById("inputMail");

function guardarDatos(storage) {
    let userMail = document.getElementById("inputMail").value;
    let userPass = document.getElementById("inputPass").value;
    const usuario = {
        "user": userMail,
        "pass": userPass
    }

    if (storage === "localStorage") {
        localStorage.setItem("user", JSON.stringify(usuario));
    }
    if (storage === "sessionStorage") {
        sessionStorage.setItem("user", JSON.stringify(usuario));
    }

}

formLogin.addEventListener("click", ()=> {
    if (recordar.checked) {
        guardarDatos('localStorage');
    }else{
        guardarDatos('sessionStorage');
    }
});


