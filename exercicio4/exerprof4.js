// criando uma função, ela será chamada quando o botão for clicaco
function acrescentarTextoParagrafo() {

   //getElementById é uma função que retorna o elemento HTML com o id especificado
   let objParagrafo = document.getElementById("paragrafo");
   // Isso guarda o parágro da página dentro da variável objParagrafo

   // Troca o texto do parágrafo
   objParagrafo.innerHTML = "Este texto foi gerado, dinamicamente, pelo DOM do javaScript!";
   // innerHTML é usado para trocar o conteúdo HTML do elemento selecionado
   // Ele substitui o que estava dentro da <p> por esse novo texto
}

// Seleciona o botão da página
let objBotao = document.getElementById("botao");
// Isso guarda o botão da página dentro da variável objBotao

// Detecta o clique no botão e chama a função
objBotao.addEventListener("click", acrescentarTextoParagrafo);
// addEventListener é usado para adicionar um evento ao elemento selecionado
