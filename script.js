const number = document.querySelector('.number');
console.log(number);

const button = document.querySelector('.button');
console.log(button);

const text = document.querySelector('.text');
console.log(text);

function buttonClick() {
    const numberValue = number.value;
    
    switch(numberValue) {
        case '12':
        case '1':
        case '2': 
            alert('it is Winter');
        break;
        case '3':
        case '4':
        case '5':
            alert('it is Spring');
        break;
        case '6':
        case '7':
        case '8':
            alert('it is Summer');
        break;
        case '9':
        case '10':
        case '11':
            alert('it is Autumn');
        break;
        default:
            alert('it is not a season')
        break;
    }
}

button.addEventListener('click', buttonClick);