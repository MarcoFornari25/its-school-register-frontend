//funzione per validare pwd
function valida(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "marco.fornari@itssmartacademy.it" && password === "1234"){
         window.location.href = "its-school-register-frontend/teacherPage/teacher-page.html";
         console.log("giusto");
        return false;
  
    }
    else{
        console.log("sbagliato");
        return false;
    }
}

function togglePassword() {
    var passwordField = document.getElementById("password");
    var checkbox = document.getElementById("showPassword");

//mostrare o nascondere pwd
    if (checkbox.checked) {
        passwordField.type = "text"; 
    } else {
        passwordField.type = "password"; 
    }
}