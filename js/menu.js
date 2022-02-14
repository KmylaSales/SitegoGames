let n = 0

$("#barras").click(function(){
    if(n === 0){
        $("#menu").addClass("menu-ativo")
        n+=1
    }else if (n === 1){
        $("#menu").removeClass("menu-ativo")
        n = 0
    }
    //Se for igual a zero abre, senão fecha, ou seja, se tem um click ele fecha, se não tem nenhum ele abre
})