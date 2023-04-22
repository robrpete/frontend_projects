const selectButton1 = document.querySelector('.one');
const selectButton2 = document.querySelector('.two');
const selectButton3 = document.querySelector('.three');
const selectButton4 = document.querySelector('.four');
const selectButton5 = document.querySelector('.five');
const submitButton = document.querySelector('.submitButton');
const setRating = document.querySelector('.ratingNumber');
const rating = document.querySelector('.rating');
const thankyou = document.querySelector('.thankyou');

selectButton1.addEventListener('click', changeColor1);
selectButton2.addEventListener('click', changeColor2);
selectButton3.addEventListener('click', changeColor3);
selectButton4.addEventListener('click', changeColor4);
selectButton5.addEventListener('click', changeColor5);
submitButton.addEventListener('click', submitRating);

let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let selected = false;
let num = '';

function changeColor1(element){
    if(clicked1 == false && clicked2 == false && clicked3 == false && clicked4 == false && clicked5 == false && selected == false){
        selectButton1.classList.add('clicked');
        clicked1 = true;
        selected = true;
        num = selectButton1.innerHTML;
        console.log(num)
    } else {
        selectButton1.classList.remove('clicked');
        clicked1 = false;
        selected = false;
    }
}
function changeColor2(element){
    if(clicked1 == false && clicked2 == false && clicked3 == false && clicked4 == false && clicked5 == false && selected == false){
        selectButton2.classList.add('clicked');
        clicked2 = true;
        selected = true;
        num = selectButton2.innerHTML;
        console.log(num)
    } else {
        selectButton2.classList.remove('clicked');
        clicked2 = false;
        selected = false;
    }
}
function changeColor3(element){
    if(clicked1 == false && clicked2 == false && clicked3 == false && clicked4 == false && clicked5 == false && selected == false){
        selectButton3.classList.add('clicked');
        clicked3 = true;
        selected = true;
        num = selectButton3.innerHTML;
        console.log(num)
    } else {
        selectButton3.classList.remove('clicked');
        clicked3 = false;
        selected = false;
    }
}
function changeColor4(element){
    if(clicked1 == false && clicked2 == false && clicked3 == false && clicked4 == false && clicked5 == false && selected == false){
        selectButton4.classList.add('clicked');
        clicked4 = true;
        selected = true;
        num = selectButton4.innerHTML;
        console.log(num)
    } else {
        selectButton4.classList.remove('clicked');
        clicked4 = false;
        selected = false;
    }
}
function changeColor5(element){
    if(clicked1 == false && clicked2 == false && clicked3 == false && clicked4 == false && clicked5 == false && selected == false){
        selectButton5.classList.add('clicked');
        clicked5 = true;
        selected = true;
        num = selectButton5.innerHTML;
        console.log(num)
    } else {
        selectButton5.classList.remove('clicked');
        clicked5 = false;
        selected = false;
    }
}

function submitRating(){
    setRating.innerHTML = num;
    num = '';
    rating.style.display = 'none';
    thankyou.style.display = 'flex';
}