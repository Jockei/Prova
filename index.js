document.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página
  
    // Obtém os valores dos campos do formulário
    var nome = document.querySelector(".js-input-nome").value; 
    var matricula = document.querySelector(".js-input-matricula").value;
    var nota_1 = document.querySelector(".js-input-nota1").value;
    var nota_2 = document.querySelector(".js-input-nota2").value;

    // Calcula a média das notas
    var media = (nota_1 + nota_2) / 2;

    // Cria uma nova linha e células para a tabela
    var tabela = document.querySelector(".tabela");
    var novaLinha = tabela.insertRow();
    var celulaNome = novaLinha.insertCell();
    var celulaMatricula = novaLinha.insertCell();
    var celulaNota1 = novaLinha.insertCell();
    var celulaNota2 = novaLinha.insertCell();
    var celulaMedia = novaLinha.insertCell();
  
    // Adiciona os valores às células
    celulaNome.textContent = nome;
    celulaMatricula.textContent = matricula;
    celulaNota1.textContent = nota_1;
    celulaNota2.textContent = nota_2;
    celulaMedia.textContent = media.toFixed(2); // Exibe a média com 2 casas decimais
});
  