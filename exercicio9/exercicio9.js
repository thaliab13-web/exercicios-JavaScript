// Função para converter Fahrenheit para Celsius
function converter() {

   // Obtém o valor digitado no input com id "fahrenheit"
   const fahrenheit = document.getElementById('fahrenheit').value;

   // Verifica se o campo está vazio
   if (fahrenheit === "") {
      alert("Por favor, digite um valor em Fahrenheit.");
      return; // Sai da função se o campo estiver vazio
   }

   // Converte Fahrenheit para Celsius e limita para duas casas decimais
   const celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);

   // Acessando o elemento <p> com id "resultado", p/ mostrar o resultado
   const resultado = document.getElementById('resultado');

   // Atualiza o conteúdo do parágrafo com o resultado da conversão
   resultado.textContent = `Temperatura em Celsius: ${celsius}°C`;

   // Torna o parágrafo visível
   resultado.style.display = 'block';

   // Adiciona evento para ocultar o parágrafo ao passar o mouse sobre ele
   resultado.onmouseenter = function () {
      resultado.style.display = 'none';
   }
}