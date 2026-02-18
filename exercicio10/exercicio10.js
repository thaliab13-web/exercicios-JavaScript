/* Criando uma função para trocar a folha estilo(css) ao clicar no botão */
function trocarEstilo() {

   const objLink = document.getElementById("link"); // Seleciona o link pelo ID

   let href = objLink.getAttribute("href"); // Obtém o valor do atributo href do link

   /* Descobrindo qual CSS está aplicado á página e fazendo a troca */
   if (href === "parte1.css") {
      objLink.setAttribute("href", "parte2.css"); // Altera o href para parte2.css
   } else {
      objLink.setAttribute("href", "parte1.css"); // Altera o href para parte1.css
   }

}
/*==============================================================================================================*/

const objBotao = document.getElementById("botao"); // Seleciona o botão pelo ID
// Adiciona um evento de clique ao botão que chama a função trocarEstilo
objBotao.addEventListener("click", trocarEstilo);
// Isso liga com a função, função depende dele 