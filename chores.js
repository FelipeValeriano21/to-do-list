let cont = 0; 

function adicionar (){
    

cont++;    

let value = document.getElementById ("valor").value; 
let list = document.getElementById("lista").innerHTML;
   
list += `<a><li class = "item" onclick = risque(${cont})  id="${cont}"> ${value}  <button id = "excluir" onclick=deletar(${cont})>X</button>  </li></a>`;

 document.getElementById("lista").innerHTML = list;
 document.getElementById ("valor").value = null; 


}



function limpa(){

    window.alert("Limpando lista")
    location.reload()


}

function deletar (id){

var tarefa = document.getElementById(id); 
tarefa.remove();

}

function risque(id){
 
    var item = document.getElementById(id); 
    var classe = item.getAttribute('class');

   

    if(classe == "item"){

item.classList.add('clicado');

    }else{

        item.classList.remove('clicado');

    }
 


}