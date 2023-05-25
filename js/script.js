const hex = [
    "0","1","2","3","4","5","6","7","8","9",
    "A","B","C","D","E","F"
];


const buttonFlipper = document.querySelector('.btn-flipper');
const backgroundFlipper = document.querySelector('._part-background');
const hexText = document.querySelector('.text-hex');
const overlay = document.querySelector('.overlay');

buttonFlipper.addEventListener('click', () => {

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getNumber()];
    }

    backgroundFlipper.style.backgroundColor = hexColor;
    hexText.innerHTML = hexColor;

});

overlay.addEventListener('click', () => {
    let text = hexText.innerHTML;

    if(text !== "Default"){
        navigator.clipboard.writeText(text);
        alert('Success Copy to Clipboard')
    }else{
        return false;
    }
})

function getNumber(){
    let random = Math.random()*hex.length;
    return Math.floor(random);
}