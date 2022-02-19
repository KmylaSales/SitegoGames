
// function mostrarPopup(){
//    window.alert("Bem-Vindo ao goGames!")


let menu = document.getElementById("menu");



let email = document.getElementById("campo-email");
let nome = document.getElementById("campo-nome");

function enviarEmail(){
    let emailDigitado = email.value;
    let nomeDigitado = nome.value;
    console.log(emailDigitado)
}



//código da página de login//

const sign_in_senha = document.getElementById('senha');
const submitButton = document.getElementById('submit-button')

//lista de elementos de validação//


const li_maiuculas = document.querySelector('#maiusculas');
const li_numeros = document.querySelector('#numeros');
const li_especiais = document.querySelector('#especiais');
const li_caracteres = document.querySelector('#caracteres');

sign_in_senha.addEventListener('keyup', (event) => {
    const {value} = sign_in_senha;

    if (value.length >= 8) {
    li_caracteres.classList.add('active');
    const icon = li_caracteres.getElementsByTagName('i')[0];
    icon.classList.remove('fa-circle');
    icon.classList.add('fa-check');
    } else {
    li_caracteres.classList.remove('active');
    const icon = li_caracteres.getElementsByTagName('i')[0];
    icon.classList.remove('fa-check');
    icon.classList.add('fa-circle');
    }





    // if (value.length >= 8) {
    //     li_caracteres.classList.add('active');
    //     const icon = li_caracteres.getElementsByTagName('i')[0];
    //     icon.classList.remove('fa-circle');
    //     icon.classList.add('fa-check');
    //     } else {
    //     li_caracteres.classList.remove('active');
    //     const icon = li_caracteres.getElementsByTagName('i')[0];
    //     icon.classList.remove('fa-check');
    //     icon.classList.add('fa-circle');
    //     }




    //   if (value.length >= 8) {
    // li_caracteres.classList.add('active');
    // const icon = li_caracteres.getElementsByTagName('i')[0];
    // icon.classList.remove('fa-circle');
    // icon.classList.add('fa-check');
    // } else {
    // li_caracteres.classList.remove('active');
    // const icon = li_caracteres.getElementsByTagName('i')[0];
    // icon.classList.remove('fa-check');
    // icon.classList.add('fa-circle');
    // }




    // if (value.length >= 8) {
    //     li_caracteres.classList.add('active');
    //     const icon = li_caracteres.getElementsByTagName('i')[0];
    //     icon.classList.remove('fa-circle');
    //     icon.classList.add('fa-check');
    //     } else {
    //     li_caracteres.classList.remove('active');
    //     const icon = li_caracteres.getElementsByTagName('i')[0];
    //     icon.classList.remove('fa-check');
    //     icon.classList.add('fa-circle');
    //     }
});
