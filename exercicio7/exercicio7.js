// Função será chamada quando cliclar, usa 'this' para referenciar o elemento clicado
function mudarCor() {
   let nomeDaClasse = this.getAttribute("class"); // Pega o atributo class do elemento clicado

   // Testamos o nome da classe e mudamos a cor do texto
   if (nomeDaClasse === "corParagrafo") {
      this.setAttribute("class", corOriginalparagrafo);
   }
   else {
      this.setAttribute("class", "corParagrafo"); // Muda a cor do parágrafo para vermelho
   }
}


//Pega os elementos pelo ID
const objTitulo = document.getElementById("titulo");
objTitulo.addEventListener("click", mudarCor);

const objParagrafo = document.getElementById("paragrafo");
objParagrafo.addEventListener("click", mudarCor);

const objSpan = document.getElementById("span");
objSpan.addEventListener("click", mudarCor);


// addEventListener adiciona um evento de clique ao objeto  
/* Formato alteDSrnativo para mudar a cor de cada elemento
   objTitulo.style.color = "blue";
   objParagrafo.style.color = "red";
   objSpan.style.color = "green";*/

/* if (this.id === "titulo") { // Verifica se o elemento clicado é o título
   this.style.color = "blue";
 } else if (this.id === "paragrafo") {
   this.style.color = "green";
 } else {
   this.style.color = "red"; // Muda a cor do parágrafo e do span para vermelho 
}*/