'use strict';

const newForm = document.querySelector('.js-new-form');

newForm.classList.remove("collapsed");

const list= document.querySelector('.js-list');

let kittenPhoto = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';


let kittenName = 'Anastacio'.toUpperCase();

let kittenDescOne = 'Gruñon, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

let kittenDescTwo = 'Coñón, glotón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

let kittenDescThree = 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! y además es cariñoso';

let kittenRace = 'British Shorthair';

const kittenOne = 
`<li class="card"><article>  <img class="card_img" src="${kittenPhoto}" alt="gatito" />  <h3 class="card_title">${kittenName}</h3>  <h4 class="card_race">${kittenRace}</h4>  <p class="card_description"> ${kittenDescOne} </p></article></li>`;

kittenPhoto = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';

kittenName = 'Fiona'.toUpperCase();

const kittenTwo = `<li class="card"><article>  <img class="card_img" src="${kittenPhoto}" alt="gatito" />  <h3 class="card_title">${kittenName}</h3>  <h4 class="card_race">${kittenRace}</h4>  <p class="card_description"> ${kittenDescTwo} </p></article></li>`;

kittenPhoto = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';

kittenName = 'Cielo'.toUpperCase();

const kittenThree = `<li class="card"><article>  <img class="card_img" src="${kittenPhoto}" alt="gatito" />  <h3 class="card_title">${kittenName}</h3>  <h4 class="card_race">${kittenRace}</h4>  <p class="card_description"> ${kittenDescThree} </p></article></li>`;

//list.innerHTML = kittenOne + kittenTwo + kittenThree;




const input_search_desc = document.querySelector('.js_in_search_desc');

input_search_desc.value = ' ';

const search_desc = input_search_desc.value ;


if( kittenDescOne.includes(search_desc) ) {
    list.innerHTML = kittenOne;
    }
    
    if( kittenDescTwo.includes(search_desc) ) {
    list.innerHTML += kittenTwo;
    }
    
    if( kittenDescThree.includes(search_desc) ) {
    list.innerHTML += kittenThree;
    }




    
    if (newForm.classList.contains("collapsed")) {
     
      newForm.classList.remove("collapsed");
    } else{
     
      newForm.classList.add("collapsed");
    }
    

