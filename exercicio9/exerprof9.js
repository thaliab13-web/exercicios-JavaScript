function converter() {

   // Acessar o valor do input com id "fahrenheit"
   const fahrenheit = document.getElementById("fahrenheit");

   // Verifica se o campo ta vazio
   if (fahrenheit.value === "") {
      alert("Por favor, digite um valor válido.");
      return; // Sai da função se o campo estiver vazio
   }

   // Acessar o valor da temperatura em Fahrenheit e guarda na variável 
   const valorFahrenheit = fahrenheit.value;

   // Converte Fahrenheit para Celsius e limita para duas casas decimais
   let celsius = ((valorFahrenheit - 32) * 5 / 9);

   // formata valores numéricos no JS
   celsius = celsius.toFixed(2);

   // Acessando o elemento <p> com id "resultado", p/ mostrar o resultado
   const resultado = document.getElementById("resultado");

   // exibindo o resultado no parágrafo que esta invisivel 
   resultado.setAttribute("class", "mostra");

   // mostra na tela o resultado da conversão
   resultado.innerHTML = `Temperatura em Fahrenheit: ${valorFahrenheit}°F<br>Temperatura convertida em Celsius: ${celsius}°C`;

}
//========================================================================================

function ocultarParagrafo() {

   // Oculta o parágrafo ao clicar nele
   this.setAttribute("class", "");
}

const objBotao = document.getElementById("botao");

// adiciona o evento de clique ao botão
objBotao.addEventListener("click", converter);

// associar o parágrafo ao obejeto do JS
const resultado = document.getElementById("resultado");
resultado.addEventListener("click", ocultarParagrafo);
