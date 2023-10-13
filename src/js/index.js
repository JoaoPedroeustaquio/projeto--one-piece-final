const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagen");
botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () =>{
        desselecionarbotao();       
        desselecionarpersonagem(botao);
        
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
        })   
})
function desselecionarpersonagem(botao) {
    const personagenselecionado = document.querySelector(".personagen.selecionado");
    personagenselecionado.classList.remove("selecionado");
    botao.classList.add("selecionado");
}
function desselecionarbotao(){
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");

}
