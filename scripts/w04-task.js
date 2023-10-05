/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Stacy Oliverson",
    photo: 'images/StacyImage.jpg',
    favoriteFoods: [
        'Pumpkin Pie',
        'Brownies',
        'Steak',
        'Turkey',
        'Mashed Potatoes'
    ],
    hobbies: [
        'Hiking',
        'Cooking',
        'Cake Decorating',
        'Reading'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {place: 'West Jordan, UT', length: '21 years'},
    {place: 'Spokane, WA', length: '4 years'},
    {place: 'Mesa, AZ', length: '5 years'},
    {place: 'Leland, NC', length: '5 years'},
    {place: 'Idaho Falls, ID', length:'2 months'}    
)

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('img').setAttribute('src', myProfile.photo);
document.querySelector('img').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobbies) => {
    let ul = document.createElement('ul');
    ul.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(ul);
}
)

/* Places Lived DataList */
myProfile.placesLived.forEach((places) => {
    let dt = document.createElement("dt");
    dt.innerHTML = `<strong>${places.place}`;
    let dd = document.createElement("dd");
    dd.innerHTML = places.length;
    
    let ddbreak = document.createElement("br")
    document.getElementById('places-lived').appendChild(ddbreak);
    document.getElementById('places-lived').append(dt, dd);
})
