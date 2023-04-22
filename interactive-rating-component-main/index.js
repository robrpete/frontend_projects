const selectButton1 = document.querySelector('.one');
const selectButton2 = document.querySelector('.two');
const selectButton3 = document.querySelector('.three');
const selectButton4 = document.querySelector('.four');
const selectButton5 = document.querySelector('.five');

selectButton1.addEventListener('click', changeColor1);
selectButton2.addEventListener('click', changeColor2);
selectButton3.addEventListener('click', changeColor3);
selectButton4.addEventListener('click', changeColor4);
selectButton5.addEventListener('click', changeColor5);

let clicked1 = false;
let clicked2 = false;
let clicked3 = false;
let clicked4 = false;
let clicked5 = false;
let selected = false;

function changeColor1(element){
    if(clicked1 == false && selected == false){
        selectButton1.classList.add('clicked');
        clicked1 = true;
        selected = true;
        console.log(clicked1, selected)
    } else {
        selectButton1.classList.remove('clicked');
        clicked1 = false;
        selected = false;
        console.log(clicked1, selected)
    }
}
function changeColor2(element){
    if(clicked2 == false && selected == false){
        selectButton2.classList.add('clicked');
        clicked2 = true;
        selected = true;
        console.log(clicked2, selected)
    } else {
        selectButton2.classList.remove('clicked');
        clicked2 = false;
        selected = false;
        console.log(clicked2, selected)
    }
}
function changeColor3(element){
    if(clicked3 == false && selected == false){
        selectButton3.classList.add('clicked');
        clicked3 = true;
        selected = true;
        console.log(clicked3, selected)
    } else {
        selectButton3.classList.remove('clicked');
        clicked3 = false;
        selected = false;
        console.log(clicked3, selected)
    }
}
function changeColor4(element){
    if(clicked4 == false && selected == false){
        selectButton4.classList.add('clicked');
        clicked4 = true;
        selected = true;
        console.log(clicked4, selected)
    } else {
        selectButton4.classList.remove('clicked');
        clicked4 = false;
        selected = false;
        console.log(clicked4, selected)
    }
}
function changeColor5(element){
    if(clicked5 == false && selected == false){
        selectButton5.classList.add('clicked');
        clicked5 = true;
        selected = true;
        console.log(clicked5, selected)
    } else {
        selectButton5.classList.remove('clicked');
        clicked5 = false;
        selected = false;
        console.log(clicked5, selected)
    }
}

function oneSelected(){

}