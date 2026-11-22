function registrar(){
let usuario = document.getElementById("usuario").value
let senha = document.getElementById("senha").value

localStorage.setItem("usuario",usuario)
localStorage.setItem("senha", senha)
alert("Salvo")
console.log(usuario)
console.log(senha)
}

function entrar(){
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value

    if(usuario ===localStorage.getItem("usuario") && senha === localStorage.getItem("senha")){
        alert("Loginfeito com sucesso")
    }else{
        alert("Usuário  ou senha inválido")
    }
}

function trocarSenha(){
    let novaSenha = document.getElementById("senha").value
    localStorage.setItem("senha",novaSenha)
    alert("Senha alterada")
}