function calculoArea() {

   // Localiza e referencia o campo de input.
   const objRaio = document.getElementById("raio");

   // Verifica se o valor do raio é válido
   if (objRaio.value === "") {
      alert("Por favor, insira um valor positivo para o raio.");
      return; // Se o valor for inválido, exibe um alerta e sai da função
   }
  
   // Converte o valor do raio(que é uma string) para um número
  const valorRaio = parseFloat(objRaio.value);

   let area = Math.PI * valorRaio ** 2;

   // Acessando elemento <p> para mostrar o resultado
   const objResultado = document.getElementById("resultado");

   // Exibe o resultado no parágrafo que está invisivel
   objResultado.setAttribute("class", "mostra");

   // Mostra na tela o resultado
   objResultado.textContent = `A área do circulo com raio ${valorRaio}m é: ${area.toFixed(2)}m²`;
   objResultado.style.display = "block"; // Garante que o parágrafo seja exibido
   objResultado.style.color = "black"; // Define a cor do texto para amarelo
}

//==============================================================


// Seleciona o elemento botão pelo ID
const objBotao = document.getElementById("botao");

// adiciona o evento clique ao botão 
objBotao.addEventListener("click", calculoArea);

