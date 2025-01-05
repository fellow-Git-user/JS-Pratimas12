divNumbers = document.querySelector('div');

h3Element = document.createElement('h3');
h3Element.textContent = '5';
h3Element.style.fontSize = '40px'
firstButton = document.createElement('button');
firstButton.textContent = '+';
firstButton.style.fontSize = '20px'
secondButton = document.createElement('button');
secondButton.textContent = '-';
secondButton.style.fontSize = '20px'
divNumbers.append(h3Element, firstButton, secondButton);

function plusOne(){
    return h3Element.textContent = Number(h3Element.textContent) + 1
}
function minusOne(){
    h3Element.textContent = Number(h3Element.textContent) - 1

    if(Number(h3Element.textContent) < 3){
        secondButton.setAttribute('disabled', true)
    } else if (Number(h3Element.textContent) > 2) {
        secondButton.removeAttribute('disabled')
    }

     
}

firstButton.addEventListener('click', plusOne);
secondButton.addEventListener('click', minusOne);




