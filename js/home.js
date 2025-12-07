function mostrar_contatos(){
    // Obtém a div de contatos
    let div_contatos = document.getElementById("contatos")
    
    // Cria os elementos que irão conter as informações
    let p_telefone = document.createElement("p")
    let p_email = document.createElement("p")
    let icone_telefone = document.createElement("img")
    let icone_email = document.createElement("img")

    // Se a div de contato possuir conteúdo, remove ele
    if(document.getElementById('contatos').hasChildNodes()){
        let div_contatos = document.getElementById('contatos')
        div_contatos.innerText=""

        // Modifica o triângulo para o estado inicial
        let div_triangulo = document.getElementById("triangulo")
        div_triangulo.className = "triangulo_baixo"
        return
    }

    // Define informações e estilizações
    p_telefone.textContent = "(55)98123-2927"
    p_email.textContent = "matheusfiedlercolla@gmail.com"
    icone_telefone.src = "../images/icone_telefone.png"
    icone_email.src = "../images/icone_email.png"
    div_contatos.appendChild(icone_telefone)
    div_contatos.appendChild(p_telefone)
    div_contatos.appendChild(icone_email)
    div_contatos.appendChild(p_email)
    div_contatos.id = "contatos"
    div_contatos.className = "div_contatos"

    // Insere ele no documento
    let container_home = document.getElementById("container_home")
    let section_saudacoes = document.getElementById("saudacoes")
    container_home.insertBefore(div_contatos, section_saudacoes)


    // Outras modificações necessárias
    let div_triangulo = document.getElementById("triangulo")
    div_triangulo.className = "triangulo"
}

function ocultar_contatos(){

}

function mostrar_legenda(icone){
    if(icone == "git"){
        // Obtém a div do ícone 
        let div_git = document.getElementById("div_git")

        // Cria parágrafo da legenda
        let  legenda = document.createElement("p")

        // Define o conteúdo
        legenda.id = "paragrafo_legenda"
        legenda.textContent = "GitHub"

        // Adiciona legenda a div
        div_git.appendChild(legenda)
        return

    }else if (icone == "linkedin"){
        // Obtém a div do ícone
        let div_linkedin = document.getElementById("div_linkedin")

        // Cria parágrafo da legenda
        let  legenda = document.createElement("p")

        // Define o conteúdo
        legenda.id = "paragrafo_legenda"
        legenda.textContent = "Linkedin"

        // Adiciona legenda a div
        div_linkedin.appendChild(legenda)
        return
    }
}

function remover_legenda(icone){
     if(icone === "git"){
        // Obtém os elementos
        let div_git = document.getElementById("div_git")
        let paragrafo_legenda = document.getElementById("paragrafo_legenda")

        // Remove o parágrafo da div
        div_git.removeChild(paragrafo_legenda)
        return
    }else if (icone === "linkedin"){
        // Obtém os elementos
        let div_linkedin = document.getElementById("div_linkedin")
        let paragrafo_legenda = document.getElementById("paragrafo_legenda")

        // Remove o parágrafo da div
        div_linkedin.removeChild(paragrafo_legenda)
    }else{
        return
    }
}



let botao_contato = document.getElementById("contato")
botao_contato.addEventListener("click",()=>mostrar_contatos())

let icone_git = document.getElementById("git")
icone_git.addEventListener("mouseover",()=>mostrar_legenda("git"))
icone_git.addEventListener("mouseleave",()=>remover_legenda("git"))

let icone_linkedin = document.getElementById("linkedin")
icone_linkedin.addEventListener("mouseover",()=>mostrar_legenda("linkedin"))
icone_linkedin.addEventListener("mouseleave",()=>remover_legenda("linkedin"))