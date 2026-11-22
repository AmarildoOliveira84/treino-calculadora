const botao = document.getElementById("btn_clicar")
const numeroEl= document.getElementById("numero")
const msgEl =  document.getElementById("msg")

botao.addEventListener("click", async()=>{
    const resposta = await fetch("/clicar",{method: "POST"})
    const dados = await resposta.json()
    numeroEl.innerText = dados.contador
    mensagemEl.innerText = dados.mensagem
} )