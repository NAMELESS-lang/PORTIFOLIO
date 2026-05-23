function mostrar_contatos(){
    let div_contatos = document.getElementById("contatos");
    div_contatos.classList.remove("d-none");
    div_contatos.classList.add("d-block");
    return
}

function remover_contatos(){
    let div_contatos = document.getElementById("contatos");
    div_contatos.classList.remove("d-block");
    div_contatos.classList.add("d-none");
}
document.getElementById("botao_contato").addEventListener("click",()=>mostrar_contatos());