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


list.innerHTML = kittenOne + kittenTwo + kittenThree;

const kittenDataOne = {
  image:'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc:'Gruñon, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race:'British Shorthair',
};

const kittenDataTwo = {
  image:'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Fiona',
  desc:'Coñón, glotón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race:'British Shorthair',
};

const kittenDataThree = {
  image:'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Cielo',
  desc:'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! y además es cariñoso',
  race:'British Shorthair',
};

const kittenDataList = [kittenDataOne, kittenDataTwo, kittenDataThree];
console.log(kittenDataList);

const input_search_desc = document.querySelector('.js_in_search_desc');



let search_desc = input_search_desc.value ;



    
if (newForm.classList.contains("collapsed")) {
     
newForm.classList.remove("collapsed");
    } else{
     
   newForm.classList.add("collapsed");
    };

  
    
const plusForm = document.querySelector (".js_plus");

function showNewCatForm(){
  newForm.classList.remove("collapsed");
}

function hideNewCatForm(){
  newForm.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
   hideNewCatForm();
  }
}
plusForm.addEventListener('click', handleClickNewCatForm);





const buttonAdd = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

const inputRace = document.querySelector('.js-input-race');
  

//DESDE AQUI 

let valueRace = inputRace.value;

//ultimo dia
function renderRace(race){
  let valueRace = race;
  if(valueRace !== '') {
   race = `<h3 class="card_race">${valueRace}</h3>`;
  } else {
    race = `<p class="card_race">No se ha especificado la raza</p>`;
  }
return race;
}
  function renderKitten(kittenData) {
    const newKitten = `<li class="card"><article>  <img class="card_img" src="${kittenData.image}" alt="gatito" />  <h3 class="card_title">${kittenData.name}</h3>  
    ${kittenData.race}${kittenData.desc} </p></article></li>`;
   return newKitten;
  };
  
function renderKittenList(kittenDataList) {
  list.innerHTML = '';
  
  for (const kittenData of kittenDataList) {
    list.innerHTML += renderKitten(kittenData);
  }
};
  
buttonAdd.addEventListener ('click', (event) => {
  event.preventDefault ();
  let kittenData = {
    image: '',
    name: '',
    desc: '',
    race: '',
  };
 kittenData.desc = inputDesc.value;
  kittenData.image = inputPhoto.value;
  kittenData.name = inputName.value;
  kittenData.race = renderRace(inputRace.value);
 
  if (kittenData.desc === '' || kittenData.image === '' || kittenData.name === '') {
  labelMesageError.innerHTML = 'Debe rellenar todos los valores'
} 
  else{ 
    labelMesageError.innerHTML = '';
   // const newKittenAdd = renderKitten(valuePhoto, valueDesc, valueName, valueRace);
   const newKittenAdd = renderKittenList(kittenDataList); 
   list.innerHTML += newKittenAdd;
  }
  hideNewCatForm();

});

const buttonCancel = document.querySelector(".js-btn-cancel");



buttonCancel.addEventListener ('click', (event) => {
  event.preventDefault();

  inputDesc.value= "";
  inputName.value = "";
  inputPhoto.value = "";
  inputRace.value = "";
 

hideNewCatForm();
});
  

const buttonSearch = document.querySelector(".js-btn-search");

const input_search_race = document.querySelector('.js_in_search_raza');

const labelMessageSearch = document.querySelector(".js-label-search");

//FUNCIONES 2



const filterKitten = (event) => {
    event.preventDefault();
    list.innerHTML = "";
    const searchRace = input_search_race.value;
    search_desc = input_search_desc.value;
    if (kittenDescOne.includes(search_desc)){
      list.innerHTML += kittenOne;
    }
    if (kittenDescTwo.includes(search_desc)) {
      list.innerHTML += kittenTwo;
    }
    if (kittenDescThree.includes(search_desc)) {
      list.innerHTML += kittenThree;
    }
};



/*buttonSearch.addEventListener ('click', (event) => {
  event.preventDefault ();

  const searchRace = input_search_race.value;
  search_desc = input_search_desc.value;

  if (searchRace === '' || search_desc === '' ) {
    
    labelMessageSearch.innerHTML = 'Debe rellenar todos los valores'
  } 



});*/


buttonSearch.addEventListener('click', filterKitten);


