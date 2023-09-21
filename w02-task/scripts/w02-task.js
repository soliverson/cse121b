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
const pictureElement = document.querySelector('picture');
const imageElement = pictureElement.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; 
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
const altText = 'Profile image of Stacy Oliverson' ;
imageElement.setAttribute('alt', altText);

/* Step 5 - Array */
let favFoods = ['Steak', 'Chocolate Chip Cookies', 'Roast', 'Rolls', 'Mashed Potatoes', 'Pumpkin Pie'];
foodElement.innerHTML = `${favFoods}`;
favFoods.push('Turkey');
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;





