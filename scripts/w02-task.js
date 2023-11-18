/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Ava Johanson';
let currentYear = 2023;
let profilePicture = 'images/Home-page-profile-pic.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year')
const imageElement = document.querySelector('picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ['Macoroni & Cheese',' Pumpkin Pie',' Stuffing',' Pizza',' Potatoe Soup']
foodElement.innerHTML = favFoods
const newFood = ' Chocolate Pie';
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
