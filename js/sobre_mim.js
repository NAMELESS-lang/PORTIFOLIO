var indice_ferramenta = 0;
var botao_esquerda = document.getElementById("seta_esquerda");
var botao_direito = document.getElementById("seta_direita");
var lista_ferramenta = ['apache.jpg','debian.png','docker.png','nginx.png',
    'proxmox.png','windows.png','zabbix.png'];
var nome_ferramenta = ['apache','debian','docker','nginx','proxmox','windows','zabbix']
function trocar_ferramenta(sentido){
    let icone_ferramenta = document.getElementById("imagem_ferramenta_mobile")
    let paragrafo_ferramenta = document.getElementById("paragrafo_ferramenta_mobile")
    
    if (sentido == "esquerda"){
        if(indice_ferramenta >0){
            indice_ferramenta-=1
        }else{
            return
        }
    }else if(sentido == "direita"){
        if(indice_ferramenta < (lista_ferramenta.length-1)){
            indice_ferramenta+=1
        }else{
            return
        }
    }
    
    let icone = "../images/" + lista_ferramenta[indice_ferramenta]
    icone_ferramenta.src = icone
    paragrafo_ferramenta.innerHTML = nome_ferramenta[indice_ferramenta]
}


botao_esquerda.addEventListener("click", ()=>trocar_ferramenta("esquerda"));
botao_direito.addEventListener("click", ()=>trocar_ferramenta("direita"));