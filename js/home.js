function mostrar_contatos(){
    let div_contatos = document.getElementById("contatos");
    for(let classes of div_contatos.classList.values()){
        if (classes == "d-block"){
           remover_contatos()
           return
        }
    }
    div_contatos.classList.remove("d-none");
    div_contatos.classList.add("d-block");
    div_contatos.style.animation="surgir_cima_baixo 0.5s linear";
    return
}

function remover_contatos(){
    let div_contatos = document.getElementById("contatos");
    div_contatos.classList.remove("d-block");
    div_contatos.classList.add("d-none");

}
document.getElementById("botao_contato").addEventListener("click",()=>mostrar_contatos());