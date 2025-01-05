
let contentElement = document.querySelector('#content');

// let buttonElement = document.createElement('button')
// buttonElement.textContent = 'Click me'
// contentElement.append(buttonElement)

// buttonElement.addEventListener('click', alertName)

// function alertName(){
//  alert('Martynas')
// }

// buttonElement.addEventListener('click', () => alert('John'));

// buttonElement.addEventListener('click', aboutMe)

// function aboutMe(){
//     let paragraphElement = document.createElement('p')
//     paragraphElement.textContent = 'The cat is a domestic animal. Its scientific name is Felis catus. It is a small animal that belongs to the “Felidae” family. The cat is the only domesticated species of the family. Other members include tigers, panthers, etc. Cats are adorable animals and are petted by lots of people in the world. They are playful and spending time with them reduces stress and anxiety. In this essay about cats in English, their nature, behaviour and diet have been discussed.'
//     contentElement.append(paragraphElement)
// }

// let hElement = document.createElement('h1');
// hElement.textContent = 'Random text ';
// contentElement.prepend(hElement)

// let spanElement = document.createElement('span');
// spanElement.textContent = 0;
// hElement.append(spanElement)



// buttonElement.addEventListener('click', function (){
//     spanElement.textContent++;
//     document.querySelector('span').innerText = spanElement.textContent++
// })

// let paragraphElement = document.createElement('p')
// paragraphElement.textContent = 'The cat is a domestic animal. Its scientific name is Felis catus. It is a small animal that belongs to the “Felidae” family. The cat is the only domesticated species of the family. Other members include tigers, panthers, etc. Cats are adorable animals and are petted by lots of people in the world. They are playful and spending time with them reduces stress and anxiety. In this essay about cats in English, their nature, behaviour and diet have been discussed.'
// contentElement.append(paragraphElement);

// paragraphElement.addEventListener('copy', noCopy)

// function noCopy(){
//     alert('dont you dare')
// }


// Sukurkite programą, kur paspaudus ant mygtuko – sugeneruoja 
// random skaičių nuo 1 iki 100 ir jį išveda kaip h1 tekstą.

// let hElement = document.createElement('h1');
// hElement.textContent = ''
// contentElement.prepend(hElement)

// function randomNumberGenerator(){
//     return Math.floor(Math.random() * 100) + 1;
    
// }

// buttonElement.addEventListener('click', () => {
//     let randomNum = randomNumberGenerator();
//     document.querySelector('h1').innerText = randomNum
// })


// let buttonMoreThan18 = document.createElement('button')
// buttonMoreThan18.textContent = 'Turiu bent 18 metų'
// contentElement.append(buttonMoreThan18)

// let buttonLessThan18 = document.createElement('button')
// buttonLessThan18.textContent = 'Mažiau nei 18 metų'
// contentElement.append(buttonLessThan18)

// function adult(){
// let message = document.createElement('h1')
// message.textContent = 'ALUUUUUUUS'
// contentElement.append(message)
// }

// function teenager(){
//     alert('nepilnametis - nieko neturim')
// }


// buttonMoreThan18.addEventListener('click', adult)
// buttonLessThan18.addEventListener('click', teenager)


// let buttonOne = document.createElement('button');
// buttonOne.textContent = 1;
// contentElement.append(buttonOne)

// let buttonTwo = document.createElement('button');
// buttonTwo.textContent = 2;
// contentElement.append(buttonTwo)

// let buttonThree = document.createElement('button');
// buttonThree.textContent = 3;
// contentElement.append(buttonThree)

// function generateRandomNumber(){
//     return Math.floor((Math.random() * 3) + 1)
    
// }

// let randomNumber = generateRandomNumber()
// console.log(randomNumber)

// buttonOne.addEventListener('click', () =>  randomNumber === 1 ? alert("Yay") : alert ('Nay'))

// buttonTwo.addEventListener('click', () => randomNumber === 2 ? alert("Yay") : alert ('Nay'))

// buttonThree.addEventListener('click', () => randomNumber === 3 ? alert("Yay") : alert ('Nay'))

// let buttonElement = document.createElement('button');
// buttonElement.textContent = 'Nespauskite'
// let buttonElement2 = document.createElement('button');
// buttonElement2.textContent = 'Jokio'
// let buttonElement3 = document.createElement('button');
// buttonElement3.textContent = 'mygtuko!!!'
// let title = document.createElement('h1');
// title.textContent = 'Nespauskite jokio mygtuko'


// contentElement.append(title, buttonElement, buttonElement2, buttonElement3)

// document.body.addEventListener('click', () => {
// const isButton = event.target.nodeName === 'BUTTON';
// if (isButton) {
// title.textContent = 'neklausote manes'
// }
// })

let titleElement = document.createElement('h1');
titleElement.textContent = 'Nejudinkite pelytės';
contentElement.append(titleElement)

titleElement.style.height = '150vh';
titleElement.style.lineHeight = '150vh';

titleElement.addEventListener('mousemove', () => {
    titleElement.textContent = 'Kiek galima neklausyti?!'
})