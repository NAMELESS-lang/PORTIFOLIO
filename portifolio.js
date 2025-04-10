function abrir_menu(){

    if(document.getElementById("nav_menu")){ // Verifica se já há a nav de links
        return
    }
    let menu = document.getElementById("div_nav");
    let icone_menu = document.getElementById("menu");
    let nav_menu = criar_menu();
    menu.insertBefore(nav_menu,icone_menu);
    return
}


function criar_menu(){
    const div_menu =  document.createElement("nav");
    let links = ["CONTATO","SOBRE MIM","HARDSKILLS","FORMAÇÃO"];
    for(let i =0; i < links.length;i++){
         let link = document.createElement("a");
         link.textContent = links[i];
         link.id = links[i];
         if((i == 0) || (i == 2)){
            link.className = "link_branco";
         }
         if((i == 1) || (i == 3)){
            link.className = "link_amarelo";
         }
         if(links[i] == "CONTATO"){
            link.onclick = mostrar_contato;
         }
         div_menu.appendChild(link);
         
    }
    div_menu.className = "nav_menu";
    div_menu.id = "nav_menu";
    return div_menu;
}


function criar_contatos(){
    let div_contatos = document.createElement("div");
    let telefone = document.createElement("p");
    let e_mail = document.createElement("p");
    telefone.textContent ="(55) 98123-2927";
    e_mail.textContent = "matheusfiedlercolla@gmail.com";
    div_contatos.appendChild(telefone);
    div_contatos.appendChild(e_mail);
    div_contatos.className = "div_contatos";
    div_contatos.id = "div_contatos";
    return div_contatos;
}

function mostrar_contato(){
    if(document.getElementById("div_contatos")){
        return
    }
    let painel = document.getElementById("corpo");
    let texto_com_nome = document.getElementById("ola");
    let contatos = criar_contatos();
    painel.insertBefore(contatos,texto_com_nome);
    console.log("aqui");
    return
}
