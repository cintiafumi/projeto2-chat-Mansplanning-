let imageArray = [
    {pos: 0, question: '01', answer: 'sim'},
    {pos: 1, question: '02', answer: 'sim'},
    {pos: 2, question: '03', answer: 'sim'},
    {pos: 3, question: '04', answer: 'sim'},
    {pos: 4, question: '05', answer: 'nao'},
    {pos: 5, question: '06', answer: 'nao'},
    {pos: 6, question: '07', answer: 'sim'},
    {pos: 7, question: '08', answer: 'sim'},
    {pos: 8, question: '09', answer: 'nao'},
    {pos: 9, question: '10', answer: 'sim'}
]

let count = 0;
document.getElementById('image').src = 'assets/img/' + imageArray[count].question + '-' + imageArray[count].answer + '.png';

function nextImage() {

}




var btnNao = document.querySelector('#btn');



btn.addEventListener('click', function(){
    // document.getElementById('imagem').src = imgSrc;
    console.log("aqui");
});


