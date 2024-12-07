// Seleciona os elementos do formulário
const amount = document.getElementById("amount");

// Captura o evento de input para formatar o valor
amount.oninput = () => {
  // Obtem o valor atual do input e remove os caracteres não numéricos
  let value = amount.value.replace(/\D/g, "");

  // Atualiza o valor do input
  amount.value = value;
};


