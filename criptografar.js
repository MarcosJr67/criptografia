function msginicial() {
    let titulo = document.getElementById('tituloSaida');
    let paragrafo = document.getElementById('paragrafo')
    titulo.innerHTML = 'Nenhuma mensagem encontrada';
    paragrafo.innerHTML = 'Digite um texto que você deseja criptografar ou descriptografar.'
}

msginicial();

function criptografar() {
    let texto = document.getElementById('textoEntrada');
    let resultado = document.getElementById('resultado');
    let conteudo = texto.value;

    conteudo = conteudo.replace(/e/gi, 'enter');
    conteudo = conteudo.replace(/i/gi, 'imes');
    conteudo = conteudo.replace(/a/gi, 'ai');
    conteudo = conteudo.replace(/o/gi, 'obter');
    conteudo = conteudo.replace(/u/gi, 'ufat');

    resultado.innerHTML = conteudo;

    let apresentacaoSaida = document.getElementById('apresentacaoSaida');
    let imagem = document.getElementById('imagemSaida');

    apresentacaoSaida.style.justifyContent = 'start'
    apresentacaoSaida.style.alignItems = 'start'
    imagem.style.display = 'none';
    document.getElementById('apresentacaoTexto').remove();

}

function descriptografar() {
    let texto = document.getElementById('textoEntrada');
    let conteudo = texto.value;

    conteudo = conteudo.replace(/enter/gi, 'e');
    conteudo = conteudo.replace(/imes/gi, 'i')
    conteudo = conteudo.replace(/ai/gi, 'a');
    conteudo = conteudo.replace(/obter/gi, 'o');
    conteudo = conteudo.replace(/ufat/gi, 'u');

    resultado.innerHTML = conteudo;

    let apresentacaoSaida = document.getElementById('apresentacaoSaida');
    let imagem = document.getElementById('imagemSaida');

    apresentacaoSaida.style.justifyContent = 'start'
    apresentacaoSaida.style.alignItems = 'start'
    imagem.style.display = 'none';
    document.getElementById('apresentacaoTexto').remove();
}