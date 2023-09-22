/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Stacy Oliverson';
let currentYear = new Date().getFullYear();
let profilePicture = '/w02-task/images/StacyImage.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; 




yearElement.innerHTML = `<strong>${currentYear}</strong>`;
imageElement.setAttribute('src', profilePicture);
const altText = 'Profile image of Stacy Oliverson' ;
imageElement.setAttribute('alt', altText);

/* Step 5 - Array */
let foodItem = "chocolate chip cookies";
let favFood = ["steak", "ice cream", "turkey", "pumpkin pie"]

foodElement.innerHTML = `<br>${favFood}`;
favFood.push(foodItem);
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;


