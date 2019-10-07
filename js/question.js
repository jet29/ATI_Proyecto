function popUp(correct){
    var titulo = document.getElementById("title");
    var body = document.getElementById("menssage");
    console.log(titulo);
    
    if (correct) {
        titulo.innerHTML="¡Ganaste!";
        body.innerHTML="¡Eres el mejor!";
    }else{
        titulo.innerHTML="Perdiste :(";
        body.innerHTML = "¡Tendrás mejor suerte la próxima!";

    }
}