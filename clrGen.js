let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let button = document.querySelector('button');

//hex characters range 
const characters ='01234567890abcdef';

// random color function 
function generateColor(){
    let randomColor = "#";
    for(let i= 0 ; i< 6 ; i++){
        randomColor+=characters[Math.floor(Math.random()*characters.length)];

    }
return randomColor;
}
button.addEventListener("click",()=>{
    let newColor = generateColor();
    h1.textContent=newColor;
    body.style.backgroundColor=newColor;
});
