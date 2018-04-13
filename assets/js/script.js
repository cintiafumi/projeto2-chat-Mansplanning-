// array com o endereço das imagens.
let imageArray = [
    'assets/img/01-sim.png',
    'assets/img/02-sim.png',
    'assets/img/03-sim.png',
    'assets/img/04-sim.png',
    'assets/img/05-nao.png',
    'assets/img/06-nao.png',
    'assets/img/07-sim.png',
    'assets/img/08-sim.png',
    'assets/img/09-nao.png',
    'assets/img/10-sim.png'
];

// array com as respostas corretas do quiz.
let gabarito = [
    'sim', 
    'sim', 
    'sim', 
    'sim', 
    'nao', 
    'nao', 
    'sim', 
    'sim', 
    'nao', 
    'sim'
];

let respostas = new Array(); // array para armazenar as respostas do usuário.
let resultadoFinal = new Array(); // array para dizer quais respostas estão certas ou erradas.

let i = 0;
let acertos_contador = 0;

function onClick(valor) {
    
    // guardar o valor do botão na array respostas -----------------
    respostas[i] = valor;
    
    // comparando a resposta do resultado com o gabarito -----------
    if(respostas[i] == gabarito[i]) {
        resultadoFinal[i] = 'ACERTOU';
        acertos_contador++;
    } else {
        resultadoFinal[i] = 'ERROU';
    }

    i++;

    if(i < imageArray.length){
        // trocar imagem --------------------------------------------
        document.getElementById('image').src = imageArray[i];
    } else {
        // NOVO!!!---------------------------------------------------
        // guarda o resultado para exibir na tela de resultado ------
        sessionStorage.setItem('arrayResultado', JSON.stringify(resultadoFinal));
        sessionStorage.setItem('acertos', JSON.stringify(acertos_contador));
        // pula para página de resultados ---------------------------
        window.location.href = "resultado.html";
    }
}

// função solta para recuperar o resultado guardado - precisa chamar essa função no final
function recuperarResultado (){
    let recuperar_arrayResultado = JSON.parse(sessionStorage.getItem('arrayResultado'));
    let recuperar_acertos = JSON.parse(sessionStorage.getItem('acertos'));

    // apresentando o resultado de quantos acertos
    document.getElementById('resultado').innerHTML = recuperar_acertos + ' ACERTO(S)';

    if(recuperar_acertos > 5){
        document.getElementById('face').src = 'assets/img/emoticons/face-feliz.png';
    } else if(recuperar_acertos < 3){
        document.getElementById('face').src = 'assets/img/emoticons/face-triste.png';
    } else if(recuperar_acertos == 5){
        document.getElementById('face').src = 'assets/img/emoticons/face-ok.png';
    } else {
        document.getElementById('face').src = 'assets/img/emoticons/face-chatiado.png';
    }

    // //
    // let div_nova;
    // let div_acertos = document.getElementById('acertos');
    // div_acertos.parentNode.removeChild(div_acertos);
}

// tem que chamar a função para carregar na página de resultado.
sessionStorage.getItem(recuperarResultado()); 