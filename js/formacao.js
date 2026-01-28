function habilitar_avancar_voltar_buttons(){
    botao_esquerda = document.getElementById("botao_esquerda");
    botao_direita = document.getElementById("botao_direita");
    botao_esquerda.style.border = "1px solid white"
    botao_esquerda.style.borderRadius = "200px"
    botao_direita.style.border = "1px solid white"
    botao_direita.style.borderRadius = "200px"
}

function desabilitar_avancar_voltar_buttons(){
    botao_esquerda = document.getElementById("botao_esquerda");
    botao_direita = document.getElementById("botao_direita");
    botao_esquerda.style.border = ""
    botao_esquerda.style.borderRadius = ""
    botao_direita.style.border = ""
    botao_direita.style.borderRadius = ""
}

secao_cursos = document.getElementById("lista_cursos")
secao_cursos.addEventListener("mouseover",()=> habilitar_avancar_voltar_buttons())
secao_cursos.addEventListener("mouseout",()=> desabilitar_avancar_voltar_buttons())