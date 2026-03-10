var indice_ferramenta = 0;
var botao_esquerda = document.getElementById("seta_esquerda");
var botao_direito = document.getElementById("seta_direita");
var dicionario_elemento_ferramentas = {};

function trocar_ferramenta(sentido){
    if (sentido == "esquerda"){
        if(indice_ferramenta == 0){
            botao_esquerda.disabled = true
        }

    }

}


botao_esquerda.addEventListener("click", ()=>trocar_ferramenta("esquerda"));
botao_direito.addEventListener("click", ()=>trocar_ferramenta("direita"));