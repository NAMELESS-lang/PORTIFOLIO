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
        if(document.getElementById("legenda_git") != null){
            return
        }
        // Obtem a ancora
        let div_git = document.getElementById("div_git")
        div_git.style.border = "2px solid var(--cor_linhas)"
        div_git.style.borderRadius = "5px"

        // Cria o paragrafo e define propriedades
        let paragrafo = document.createElement("p")
        paragrafo.id="legenda_git"
        paragrafo.textContent="GitHub"

        // Adiciona a ancora o parágrafo
        div_git.appendChild(paragrafo)
        return

    }else if (icone == "linkedin"){
        if(document.getElementById("legenda_linkedin") != null){
            return
        }
        // Obtem a ancora
        let div_linkedin = document.getElementById("div_linkedin")
        div_linkedin.style.border = "2px solid var(--cor_linhas)"
        div_linkedin.style.borderRadius = "5px"

        // Cria o paragrafo e define propriedades
        let paragrafo = document.createElement("p")
        paragrafo.id="legenda_linkedin"
        paragrafo.textContent="Linkedin"

        // Adiciona a ancora o parágrafo
        div_linkedin.appendChild(paragrafo)
        return
    }
}

function remover_legenda(icone){
     if(icone === "git"){
        let div_git = document.getElementById("div_git")
        // Obtém os elementos
        let paragrafo_legenda = document.getElementById("legenda_git")
        setTimeout(function(){ 
          div_git.removeChild(paragrafo_legenda);
          div_git.style.border = "none"
          div_git.style.borderRadius = "none"
        }, 300);
        return
    }else if (icone === "linkedin"){
        let div_linkedin = document.getElementById("div_linkedin")
        // Obtém os elementos
        let paragrafo_legenda = document.getElementById("legenda_linkedin")
        setTimeout(function(){ 
          div_linkedin.removeChild(paragrafo_legenda);
          div_linkedin.style.border = "none"
          div_linkedin.style.borderRadius = "none"
        }, 300);
        return
    }else{
        return
    }
}



let botao_contato = document.getElementById("contato")
botao_contato.addEventListener("click",()=>mostrar_contatos())

let icone_git = document.getElementById("div_git")
icone_git.addEventListener("mouseover",()=>mostrar_legenda("git"))
icone_git.addEventListener("mouseleave",()=>remover_legenda("git"))

let icone_linkedin = document.getElementById("div_linkedin")
icone_linkedin.addEventListener("mouseover",()=>mostrar_legenda("linkedin"))
icone_linkedin.addEventListener("mouseleave",()=>remover_legenda("linkedin"))