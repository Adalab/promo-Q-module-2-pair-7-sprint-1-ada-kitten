'use strict';

const newForm = document.querySelector('.js-new-form');

newForm.classList.remove("collapsed");

const list= document.querySelector('.js-list');

let kittenPhoto = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';


let kittenName = 'Anastacio'.toUpperCase();

let kittenDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

let kittenRace = 'British Shorthair';

const kittenOne = 
`<li class="card"><article>  <img class="card_img" src="${kittenPhoto}" alt="gatito" />  <h3 class="card_title">${kittenName}</h3>  <h4 class="card_race">${kittenRace}</h4>  <p class="card_description"> ${kittenDesc} </p></article></li>`;

kittenPhoto = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';

kittenName = 'Fiona'.toUpperCase();

const kittenTwo = `<li class="card"><article>  <img class="card_img" src="${kittenPhoto}" alt="gatito" />  <h3 class="card_title">${kittenName}</h3>  <h4 class="card_race">${kittenRace}</h4>  <p class="card_description"> ${kittenDesc} </p></article></li>`;

kittenPhoto = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';

kittenName = 'Cielo'.toUpperCase();

const kittenThree = `<li class="card"><article>  <img class="card_img" src="${kittenPhoto}" alt="gatito" />  <h3 class="card_title">${kittenName}</h3>  <h4 class="card_race">${kittenRace}</h4>  <p class="card_description"> ${kittenDesc} </p></article></li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;
