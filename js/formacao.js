function avancar_voltar_cursos(direcao){
    let cursos_amostra = document.getElementsByClassName("container_curso")

}

botao_skip_direita = document.getElementById("botao_skip_direita")
botao_skip_esqueda = document.getElementById("botao_skip_esquerda")

botao_skip_direita.addEventListener("click", ()=>avancar_voltar_cursos("direita"))
botao_skip_esquerda.addEventListener("click", ()=>avancar_voltar_cursos("esqueda"))
