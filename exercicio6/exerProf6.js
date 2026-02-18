function acrescentarTexto() {
   const titulo = document.getElementById("titulo");
   const paragrafo = document.getElementById("paragrafo");

   let textotTitulo = titulo.innerHTML;
   let textoParagrafo = paragrafo.innerHTML; // copiando o valor que esta na variável parágrafo, para mudar o valor 

   // acrescentando novo texto
   textotTitulo += " Texto dinâmico acrescentado pelo JavaScript";
   textoParagrafo += " Outro texto dinâmico acrescentado pelo JS";

   // Modificando o texto para tags na página web
   titulo.innerHTML = textotTitulo;
   paragrafo.innerHTML = textoParagrafo;

}

const objPagina = document.getElementById("pagina");

// Atribuir o evento load ao objeto window
window.addEventListener("load", acrescentarTexto);