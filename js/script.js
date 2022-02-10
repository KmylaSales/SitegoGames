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
//
    
var swiper = new swiper(".myswiper", {
    slidesPerView:4,
    spaceBetween:30,
    slidesPerGroup:4,
    loop:true,
    loopFillGroupWithBlank:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
}
)

let email = document.getElementById("campo-email");
let nome = document.getElementById("campo-nome");

function enviarEmail(){
    let emailDigitado = email.value;
    let nomeDigitado = nome.value;
    console.log(emailDigitado)
}
