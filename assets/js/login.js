const email = "admin@exemplo.com";
const senha= "1234";

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
    alert("email informado incorretamente");
}