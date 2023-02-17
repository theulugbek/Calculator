var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var natija = document.querySelector('.natija');
var natija3 = document.querySelector('.natija3');
var natija2 = document.querySelector('.natija2');
var natija1 = document.querySelector('.natija1');
var form = document.querySelector('.form');


form.addEventListener('submit', function(hodisa){
    hodisa.preventDefault();
    var son = Number(input1.value);
    var son1 = Number(input2.value);
    natija.textContent = son + son1;
    natija1.textContent = son - son1;
    natija2.textContent = son * son1;
    natija3.textContent = son / son1;
});
