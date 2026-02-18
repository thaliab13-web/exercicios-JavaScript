function juntarTexto() {

   const objParagrafo1 = document.getElementById("paragrafo1");
   const objParagrafo2 = document.getElementById("paragrafo2");

   const texto1 = objParagrafo1.innerHTML;
   const texto2 = objParagrafo2.innerHTML;
   const textoConcatenado = texto1 + "<br>" + texto2;

   document.body.innerHTML = document.body.HTML + "<ul> <li>" + textoConcatenado + "</li> </ul>";
}

// Seleciona o botão da página
let objBotao = document.getElementById("botao");
// Isso guarda o botão da página dentro da variável objBotao

// Detecta o clique no botão e chama a função
objBotao.addEventListener("click", juntarTexto);
// addEventListener é usado para adicionar um evento ao elemento selecionado