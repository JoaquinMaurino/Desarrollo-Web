//Formulario Regiustrarse

let formReg = document.getElementById('formReg');
let btnReg = document.getElementById('btnReg');
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

btnReg.onclick = ()=>{
    Swal.fire({
        title: "Registro exitoso",
        text: "Recibirás un mail con el link de verificación",
        icon: "info"
    });
}