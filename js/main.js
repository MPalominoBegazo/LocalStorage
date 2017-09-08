function printComment(objt) {
    var divGen = document.getElementById("ale");
    var panelcomment = document.createElement("div");
    var paneltitulo = document.createElement("div");
    var comentario = document.createElement("div");
    console.log(objt.name + "comentario" + objt.message);
    var content = document.createTextNode(objt.name);
    var contentComment = document.createTextNode(objt.message);

    panelcomment.setAttribute("class", "panel panel-primary col texto");
    paneltitulo.setAttribute("class", "panel-heading colors");
    comentario.setAttribute("class", "panel-body")

    comentario.appendChild(contentComment);
    paneltitulo.appendChild(content);
    panelcomment.appendChild(paneltitulo)
    panelcomment.appendChild(comentario);
    divGen.appendChild(panelcomment);
}

$(document).ready(function(){
    var comentarios = [];

    if(!localStorage.currenData){ //puede ser cambiado a sessionStorage
        localStorage.currenData = []; //puede ser cambiado a sessionStorage
    }else{
        comentarios = JSON.parse(localStorage.currenData); //puede ser cambiado a sessionStorage
    }

    for(var i=0; i<comentarios.length; i++){
        printComment(comentarios[i]);
    }

    $("#comment").click(function(){
        var objMessage ={
            "name":$("#name").val(),
            "message": $("#message").val()
        };
        comentarios.push(objMessage);
        localStorage.currenData = JSON.stringify(comentarios); //puede ser cambiado a sessionStorage
        printComment(objMessage);
        $("#name").val("");
        $("#message").val("");
    });
});