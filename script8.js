const form = document.getElementById('registroForm');
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const idadeInput = document.getElementById('idade');
const alturaInput = document.getElementById('altura');
const corFavoritoInput = document.getElementById('corFavorito');
const salvarBotao = document.getElementById('salvarRegistro');
const registrosList = document.getElementById('registrosList');
const registros = [];

function salvarRegistro(e) {
    e.preventDefault();
    const nome = nomeInput.value;
    const sobrenome = sobrenomeInput.value;
    const idade = parseInt(idadeInput.value);
    const altura = parseFloat(alturaInput.value);
    const corFavorito = corFavoritoInput.value;

    registros.push({ nome, sobrenome, idade, altura, corFavorito });

    const novoRegistro = document.createElement('li');
    novoRegistro.textContent = `Nome: ${nome} ${sobrenome}, Idade: ${idade}, Altura: ${altura}, Cor Favorita: ${corFavorito}`;
    registrosList.appendChild(novoRegistro);

    nomeInput.value = '';
    sobrenomeInput.value = '';
    idadeInput.value = '';
    alturaInput.value = '';
    corFavoritoInput.value = '';

    perguntarContinuar();
}

function perguntarContinuar() {
    const resposta = prompt('Deseja continuar inserindo outro registro? (S/N)').trim().toUpperCase();

    if (resposta === 'S') {
        nomeInput.focus();
    } else if (resposta === 'N') {
        mostrarResultadoFinal();
    } else {
        alert('Opção inválida! Digite S ou N.');
        perguntarContinuar();
    }
}

function mostrarResultadoFinal() {
    const pessoaMaisVelha = registros.reduce((a, b) => (a.idade > b.idade ? a : b));
    const pessoaMaisAlta = registros.reduce((a, b) => (a.altura > b.altura ? a : b));

    const resultadoFinal = document.createElement('ul');
    resultadoFinal.innerHTML = `
    <li>**********************************************************************</li>
    <li>Pessoa mais velha: ${pessoaMaisVelha.nome} ${pessoaMaisVelha.sobrenome}, Idade: ${pessoaMaisVelha.idade}, Cor Favorita: ${pessoaMaisVelha.corFavorito}</li>
    <li>Pessoa mais alta: ${pessoaMaisAlta.nome} ${pessoaMaisAlta.sobrenome}, Altura: ${pessoaMaisAlta.altura}, Cor Favorita: ${pessoaMaisAlta.corFavorito}</li>
  `;

    registrosList.appendChild(resultadoFinal);
}

salvarBotao.addEventListener('click', salvarRegistro);
