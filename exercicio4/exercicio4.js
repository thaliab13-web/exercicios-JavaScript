var nome = "Juliana";
let idade = 25;
const cidade = "São Paulo";

// Seleciona a div de saida
const div = document.getElementById("saida");

// Adiciona conteúdo à div
div.innerHTML += `<p>Nome:${nome}</p>`;
div.innerHTML += `<p>Idade: ${idade}</p>`;
div.innerHTML += `<p>Cidade: ${cidade}</p>`;