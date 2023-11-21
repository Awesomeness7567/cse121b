/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Ava Johanson",
    photo: 'images/Home-page-profile-pic.jpg',
    favoriteFoods: [
        'Pumpkin Pie',
        'Orange Chicken',
        'Mac & Cheese',
        'Steak',
        'Pancakes'
    ],
    hobbies: [
        'Tennis',
        'Reading',
        'Web Design'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Orem, Utah',
        length: '2 years'
    },
    {
        place: 'Gilbert, Arizona',
        length: '17 years'
    }
)

/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;

/* Name */

document.querySelector('#photo').src = myProfile.photo

/* Photo with attributes */

document.querySelector('#photo').alt = myProfile.name

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
