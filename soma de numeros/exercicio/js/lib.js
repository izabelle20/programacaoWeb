// Função para calcular o valor da venda com descontos ou juros
function calcularValorVenda(valor, parcelas) {
    let valorParcela = 0;
    
    if (parcelas === 1) {
        valorParcela = valor - (valor * 0.1);
    } else if (parcelas <= 3) {
        valorParcela = valor / parcelas * 1.05;
    } else {
        valorParcela = valor / parcelas * 1.1;
    }
    return valorParcela;
}

// Função para mostrar o resultado na página HTML
function mostrarResultado() {
    // Obtém os valores dos números inseridos pelo usuário
    const valor = parseFloat(document.getElementById('valor1').value);
    const parcelas = parseInt(document.getElementById('parcela').value);
 
    // Verifica se os valores são válidos
    if (!isNaN(valor) && !isNaN(parcelas) && valor > 0 && parcelas > 0) {
        // Calcula o valor da parcela usando a função calcularValorVenda
        const valorParcela = calcularValorVenda(valor, parcelas);
        
        // Exibe o resultado na página HTML
        document.getElementById('resultado').innerText = `O valor da parcela é: ${valorParcela}`;
    } else {
        // Se os valores não forem válidos, exibe uma mensagem de erro
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
    }
}
