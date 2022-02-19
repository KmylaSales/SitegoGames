
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

    //regex//
    var regexNumbers = /\d/g;

    const upperRegex = RegExp("[A-Z]");
    const lowerRegex = RegExp("[a-z]");
    
    var regexSpecialCharacters = /[ ´!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    //variaveis de validacao//
    const isNumberValidated = value.match(regexNumbers);
    const isSpecialCharacters = value.match(value.match(regexSpecialCharacters));
    const isPasswordLength = value.length >= 8;
    const isLowerUpper = value.match(upperRegex) && value.match(lowerRegex);

//validacao de numeros de caracteres//

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

//validacao de numeros na senha//


    if (value.match(regexNumbers)) {
        li_numeros.classList.add('active');
        const icon = li_numeros.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
        } else {
        li_caracteres.classList.remove('active');
        const icon = li_numeros.getElementsByTagName('i')[0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
        }


//verificacao de caracteres especiais//


      if (value.match(regexSpecialCharacters)) {
    li_especiais.classList.add('active');
    const icon = li_especiais.getElementsByTagName('i')[0];
    icon.classList.remove('fa-circle');
    icon.classList.add('fa-check');
    } else {
    li_especiais.classList.remove('active');
    const icon = li_especiais.getElementsByTagName('i')[0];
    icon.classList.remove('fa-check');
    icon.classList.add('fa-circle');
    }


//verificacao de maiusculas e minusculas//]


    if (value.match(upperRegex) && value.match(lowerRegex)) {
        li_maiuculas.classList.add('active');
        const icon = li_maiuculas.getElementsByTagName('i')[0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
        } else {
        li_maiuculas.classList.remove('active');
        const icon = li_maiuculas.getElementsByTagName('i')[0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
        }

        if (isNumberValidated &&
            isSpecialCharacters &&
            isPasswordLength &&
            isLowerUpper) {
            submitButton.removeAttribute('disable');
            } else {
                submitButton.setAttribute('disable', '');
            }
});
