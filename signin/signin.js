//funzione per validare pwd
function valida(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "marco.fornari@itssmartacademy.it" && password === "1234"){
        console.log("giusto");
    }
    else{
        console.log("sbagliato");
    }
}

//funzione per mostrare pwd
function showPwd(){
    let show = document.getElementById("password");
    if(show.type === "password"){
        show.type = "text"
    } else {
        show.type = "password"
    }
}