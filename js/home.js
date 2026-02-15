function mostrar_contatos(triangulo){
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

        if (triangulo != null){
            triangulo.className = "triangulo_baixo"
            return
        }


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

    if (triangulo != null){
        triangulo.className = "triangulo"
        return
    }
    // Outras modificações necessárias
    let div_triangulo = document.getElementById("triangulo")
    div_triangulo.className = "triangulo"
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

function criar_menu(){
    let conteudo_principal = document.getElementById("main")
    let barra_menu = document.createElement("article")
    let barra_menu_horizontal = document.getElementById("barra_menu_horizontal")
    let clone_barra_menu = barra_menu_horizontal.cloneNode(true)
    let div_contatos = document.getElementById("contatos")
    botao_contato = clone_barra_menu.querySelector("#contato")
    botao_contato.className= "link_contato"
    triangulo = botao_contato.querySelector("#triangulo")
    if (div_contatos.hasChildNodes() != false){
        triangulo.className = "triangulo"
    }
    
    botao_contato.addEventListener("click", ()=>mostrar_contatos(triangulo))
    let botao_fechar_menu = document.createElement("button")
    let icone_fechar_menu = document.createElement("img")

    barra_menu.id="barra_menu"
    clone_barra_menu.id="barra_vertical"
    clone_barra_menu.className="barra_vertical"
    botao_fechar_menu.id = "botao_fechar_menu"
    icone_fechar_menu.src="../images/botao_sair.svg"

    botao_fechar_menu.appendChild(icone_fechar_menu)
    barra_menu.appendChild(botao_fechar_menu)
    barra_menu.appendChild(clone_barra_menu)
    let overlay = document.getElementById("overlay_menu")
    overlay.style.display = "block"

    conteudo_principal.appendChild(barra_menu)
        botao_fechar_menu.addEventListener("click", function(){
        let barra_menu = document.getElementById("barra_menu")
        barra_menu.remove()
        let overlay = document.getElementById("overlay_menu")
        overlay.style.display = "none"
    })
}


let botao_contato = document.getElementById("contato")
botao_contato.addEventListener("click",()=>mostrar_contatos())

let icone_git = document.getElementById("div_git")
icone_git.addEventListener("mouseover",()=>mostrar_legenda("git"))
icone_git.addEventListener("mouseleave",()=>remover_legenda("git"))

let icone_linkedin = document.getElementById("div_linkedin")
icone_linkedin.addEventListener("mouseover",()=>mostrar_legenda("linkedin"))
icone_linkedin.addEventListener("mouseleave",()=>remover_legenda("linkedin"))

let botao_menu = document.getElementById("botao_menu")
if (botao_menu != null){
    botao_menu.addEventListener("click", ()=> criar_menu())
}

window.addEventListener("resize", function(){
    if (this.window.innerWidth > 1024){
        let barra_menu = this.document.getElementById("barra_menu")
        let botao_menu = this.document.getElementById("botao_menu")
        if (barra_menu != null){
            barra_menu.remove()
            let overlay = document.getElementById("overlay_menu")
            overlay.style.display = "none"
        }
        if (botao_menu.style.display == "block"){
            botao_menu.style.display = "none"
        }
        let div_contatos = document.getElementById("contatos")
        triangulo = this.document.getElementById("triangulo")
            if (div_contatos.hasChildNodes() != false){
                triangulo.className = "triangulo"
    }
}})
