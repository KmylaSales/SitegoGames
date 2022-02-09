$(document).ready(function(){
//     $("#barras").click(function(){
//         $("#menu").toggeClass("#menu-ativo")
// })
// })
    $("#barras").click(function(){
        if($("#menu").hasClass("#menu-ativo")){
            $("#menu").removeClass("#menu-ativo")
        }else{
            $("#menu").addClass("menu-ativo")
        }
    })
})

//function mostrarPopup(){
//    window.alert("Bem-Vindo ao goGames!")
//}



$('.carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });

let email = document.getElementById("campo-email");
let nome = document.getElementById("campo-nome");

function enviarEmail(){
    let emailDigitado = email.value;
    let nomeDigitado = nome.value;
    console.log(emailDigitado)
}
