function somar(){
let n1 = parseFloat(document.getElementById("n1").value)
let n2 = parseFloat(document.getElementById("n2").value)
if (Number.isNaN(n1)) {
    alert("Campo 1 não pode ser vazio")
}else if(Number.isNaN(n2)){
    alert("Campo 2 não pode ser vazio")
}else {
let soma = n1+n2
let resultado = document.getElementById("resultado")
resultado.innerText =soma
console.log(soma) 
}


}
function limpar(){
    let n1 = document.getElementById("n1")
    let n2 = document.getElementById("n2")
    let resultado = document.getElementById("resultado")
    n1.value =""
    n2.value  =""
    resultado.innerText =""
}
function teste(){
    
}