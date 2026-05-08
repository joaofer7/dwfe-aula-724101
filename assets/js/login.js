import { usuario } from "./bd.js";

const email= usuario.email;
const senha= usuario.senha;

function verificarCredenciais(){
    const emailinformado = document.getElementById("email").value;
    const senhainformada = document.getElementById("senha").value;

if(emailinformado == email){
    alert("Email informado corretamente");
    if(senhainformada == senha){
        alert("Senha informada corrretamente");
    }
    else{
    alert("Senha informada incorretamente");
}
}
 else
    alert("Email informado incorretamente");
}
document.addEventListener("DOMContentLoaded",()=>{


const botao=document.querySelector("button");
botao.addEventListener("click", (e)=>{
    e.preventDefault();
    verificarCredenciais();
});
});