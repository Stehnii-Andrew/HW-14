let show = document.querySelector('.show');
let add = document.querySelector('.js-add');
let addcancel = document.querySelector('.close');
let reg = document.querySelector('.reg');
let bluur = document.querySelector('.js-blur');
let donate = document.querySelector('.js-donate');
let donatecancel = document.querySelector('.close-donate');

show.addEventListener('click', (ev) => {
    add.classList.remove('none');
    add.classList.add('add');
    bluur.classList.remove('none');
    bluur.classList.add('blur');
    
});

addcancel.addEventListener('click', (ev) => {
    add.classList.add('none');
    add.classList.remove('add');
    bluur.classList.add('none');
    bluur.classList.remove('blur');
});

reg.addEventListener('click', (ev) => {
    donate.classList.remove('none');
    donate.classList.add('donate');
});

donatecancel.addEventListener('click', (ev) => {
    donate.classList.add('none');
    donate.classList.remove('donate');
});