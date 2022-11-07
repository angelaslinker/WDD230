// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
// const cards = document.querySelector('.cards');



// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
    
//     const prophets = jsonObject['prophets'];
    
//     prophets.forEach(displayProphets);  

//     function displayProphets(prophet){
//         let card = document.createElement('section')
//         let h2 = document.createElement('h2')
//         let span1 = document.createElement('span')
//         let span2 = document.createElement('span')
//         let image = document.createElement('img')
//     }
// });


const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing    
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);  
});


function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let bDate = document.createElement('p');
    let bPlace = document.createElement('p');
    let portrait = document.createElement('img');

    
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    bDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    bPlace.textContent = `Place of Birth: ${prophet.birthplace}`
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} -${prophet.order}th Ladder-day President`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.append(bDate);
    card.append(bPlace);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }