const yes = document.querySelector('.yes');
const no = document.querySelector('.no');

let btnYesFontSize = 2;
let btnNoFontSize = 2;

no.addEventListener('click', btnNoPushed);
yes.addEventListener('click', btnYesPushed);

function btnYesPushed () {
    location.href ='./page2.html';
}
function btnNoPushed () {
    location.href ='./page3.html';
}

