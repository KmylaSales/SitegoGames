$(document).ready(function(){
    $("#barras").click(function () {
        $("#menu").toggleClass("menu-ativo")

        // if ($("#menu").hasClass("menu-ativo")) {
        //     $("#menu").removeClass("menu-ativo")
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }
    })
})


// let menu = document.getElementById("menu");

// function mostrarMenu() {
//     if (menu.style.display != "flex") {
//         menu.style.display = "flex"
//     } else {
//         menu.style.display = "none"
//     }
// }


//function mostrarPopup(){
//    window.alert("Bem-Vindo ao goGames!")
//

let menu = document.getElementById("menu");


    


let email = document.getElementById("campo-email");
let nome = document.getElementById("campo-nome");

function enviarEmail(){
    let emailDigitado = email.value;
    let nomeDigitado = nome.value;
    console.log(emailDigitado)
}
