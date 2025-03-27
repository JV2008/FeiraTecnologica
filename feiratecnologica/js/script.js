
function validaemail(){
    let email = document.getElementById ("email").value;
    let msg = email.includes("@gmail.com");
    document.getElementById("validaemail").textContent = msg ?
    "Email Válido" : "Email Inválido";
}


function validasenha(){
    let senha = document.getElementById ("senha").value;
    let msg = email.includes("@#$%¨&*!");
    document.getElementById("senha").textContent = msg ?
    "Senha Válida" : "Senha Inválida";
}

function cadastro(){
    alert ("Seja Bem-Vindo");

}