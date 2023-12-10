let Elemento = document.getElementById("botao01")

let quant = 3
for ( let index =0; index < quant; index++){
    Elemento.innerHTML += "<div class='card'><h1>destaque</h1>"
}
let Conteudo = ["botao01", "botao02", "botao03"]
 

let capturaCard = document.getElementsByClassName("card")

for (let index =0; index < capturaCard.length; index++){
    capturaCard[index].innerHTML = Conteudo[index]

    capturaCard[index].addEventListener('click',()=>{
        document.getElementById("Conteudo").innerHTML = Conteudo[index]


    })

}














/*let produto = 0
let cartaz= ["botao01", "botao02", "botao03"]

document.getElementById("botao01").addEventListener("click",()=>{
    if(produto){
        cartaz.push(document.getElementById("Novocard").innerHTML += "<div class='produto'> <h1>Descrição</h1>")
        console.log(cartaz)
    }

     

    })*/

