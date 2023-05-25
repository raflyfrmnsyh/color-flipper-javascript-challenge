const colors = [
    "116D6E",
    "321E1E",
    "4E3636",
    "CD1818",
    "F2D8D8",
    "5C8984"
];


const buttonFlipper = document.querySelector('.btn-flipper');
const backgroundFlipper = document.querySelector('._part-background');
const hexText = document.querySelector('.text-hex');

buttonFlipper.addEventListener('click', () => {
    const rondomNumber = getNumber();
    console.log(rondomNumber);

    backgroundFlipper.style.backgroundColor = `#${colors[rondomNumber]}`;
    hexText.innerHTML = `#${colors[rondomNumber]}`;

});

function getNumber(){
    let random = Math.random()*colors.length;
    return Math.floor(random);
}