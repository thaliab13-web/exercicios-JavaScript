// função para calcular a média do aluno e exibir se aprovado ou não
function calculaMedia() {

   const objNome = document.getElementById("nome");
   const objNota1 = document.getElementById("nota1");
   const objNota2 = document.getElementById("nota2");
   const objNota3 = document.getElementById("nota3");
   const obgMatricula = document.getElementById("matricula");
   const objResultado = document.getElementById("resultado");

   const nota1 = parseFloat(objNota1.value);
   const nota2 = parseFloat(objNota2.value);
   const nota3 = parseFloat(objNota3.value);
   const matricula = parseInt(obgMatricula.value);



   let media = (nota1 + nota2 + nota3) / 3;

   if (media >= 7) {
      objResultado.innerHTML = `Aluno(a) ${objNome.value} com matricula ${matricula}. <br> A sua média final é ${media.toFixed(1)}.<br> Resultado Aprovado(a)!`;
   } else if (media >= 5 && media < 7) {
      objResultado.innerHTML = `Aluno(a) ${objNome.value} com matricula ${matricula}. <br> A sua média final é ${media.toFixed(1)}.<br> Resultado Recuperação(a)!`;
   } else {
      objResultado.innerHTML = `Aluno(a) ${objNome.value} com matricula ${matricula}. <br> A sua média final é ${media.toFixed(1)}.<br> Resultado Reprovado(a)!`;
   }


   // Exibe o resultado no parágrafo que está invisivel
   objResultado.setAttribute("class", "mostra");

   // Mostra na tela o resultado
   //objResultado.innerHTML = `Aluno ${objNome.value} com matricula ${matricula}. <br> A sua média final é ${media.toFixed(1)}`;

   // Garante que o parágrafo será exibido
   objResultado.style.display = "block";
   objResultado.style.color = "white";
   objResultado.style.backgroundColor = "black";

}
//========================================================================================================

// buscando o elemento Botão, para obter o valor do botão
const objBotao = document.getElementById("botao");
// Adiciona o evento ao clicar no botão
objBotao.addEventListener("click", calculaMedia);
