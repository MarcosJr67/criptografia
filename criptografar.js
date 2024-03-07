//Em algumas partes do codigo eu tive ajuda do ChatGPT
function divVisivel() {
    let areabotao = document.getElementById('botaoCopiar');

    if (areabotao.style.display === 'none') {
        areabotao.style.display = 'block';
    } else {
        areabotao.style.display = 'none';
    }

    areabotao.style.display = 'flex';
    areabotao.style.justifyContent = 'center';
    areabotao.style.marginBottom = '40px'
}

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

    let imagem = document.getElementById('imagemSaida');
    let paragrafo = document.getElementById('paragrafo');
    let areaSaida = document.getElementById('apresentacaoSaida');

    areaSaida.style.justifyContent = 'space-between';
    areaSaida.style.alignItems = 'center';

    resultado.style.fontWeight = '400';
    resultado.style.lineHeight = '36px';
    resultado.style.letterSpacing = '0em';
    resultado.style.textAlign = 'left';

    paragrafo.style.display = 'none';
    imagem.style.display = 'none';

    divVisivel();
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

    let imagem = document.getElementById('imagemSaida');
    let paragrafo = document.getElementById('paragrafo');
    let areaSaida = document.getElementById('apresentacaoSaida');

    areaSaida.style.justifyContent = 'space-between';
    areaSaida.style.alignItems = 'center';

    resultado.style.fontWeight = '400';
    resultado.style.lineHeight = '36px';
    resultado.style.letterSpacing = '0em';
    resultado.style.textAlign = 'left';

    paragrafo.style.display = 'none';
    imagem.style.display = 'none';

    divVisivel();
}

function copiarTxt() {
    let elementoTxt = document.getElementById('resultado');
    let areaTxtTemporario = document.createElement('textarea');

    areaTxtTemporario.value = elementoTxt.innerText;

    document.body.appendChild(areaTxtTemporario);

    areaTxtTemporario.select();

    areaTxtTemporario.setSelectionRange(0, 99999);

    document.execCommand('copy');
    document.body.removeChild(areaTxtTemporario);

    alert('texto Copiado!');
}