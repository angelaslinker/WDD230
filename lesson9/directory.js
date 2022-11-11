const requestBusiness = "./directory.json";
const businesses = document.querySelector('.business');

fetch(requestBusiness)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing    
    const shops = jsonObject['businesses'];
    shops.forEach(displayShop);  
});

function displayShop(shopInfo) {
    // Create elements to add to the document
    let shop = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('p');
    let image = document.createElement('img');

    
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${shopInfo.name}`;
    address.textContent = `${shopInfo.address}}`;
    phoneNumber.textContent = `${shopInfo.phoneNumber}`;
    website.textContent = `${shopInfo.website}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', shopInfo.imageurl);
    image.setAttribute('alt', `Shop Image`);
    image.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    shop.appendChild(h2);
    shop.append(address);
    shop.append(phoneNumber);
    shop.appendChild(image);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.business').appendChild(shop);
  }