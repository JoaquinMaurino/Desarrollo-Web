//Formulario Regiustrarse

let formReg = document.getElementById('formReg');


function registrarNuevo() {
    let mail = document.getElementById('inputMail').value;
    let pass = document.getElementById('inputPass').value;
    let gender = document.getElementById('selectGender').value;
    let experience = document.getElementById('selectExp').value;

    const nuevoUsuario = {
        "user": mail,
        "password": pass,
        "genero": gender,
        "experiencia": experience
    }

    localStorage.setItem("user", JSON.stringify(nuevoUsuario));
};

formReg.onclick = () => {
    registrarNuevo()
};