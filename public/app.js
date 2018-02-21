const app = function () {
  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

};

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

const requestComplete = function () {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  populateList(beers);
}

const populateList = function (beers) {
  console.log(beers);
  beers.forEach(function (beer) {
    addBeerListItem(beer.name, beer.image_url);
  });
}

const addBeerListItem = function (name, image) {
  const beerContainer = createUl();
  const beerName = createBeerLi("Name", name);
  const beerImage = createImage(image);

  const beers = document.getElementById("beers");
  appendElements(beers, beerContainer, beerName, beerImage);
}




const createUl = function () {
  const ul = document.createElement('ul');
  ul.classList.add('beer');
  return ul;
}

const createBeerLi = function (label, text) {
  const li = document.createElement('li');
  li.innerText = `${label}: ${text}`
  return li;
}

const createImage = function (url) {
  const img = document.createElement('img');
  const li = document.createElement('li');
  // img.width = "300";
  img.height = "300";
  img.src = url;
  li.appendChild(img);
  return li;
}

const appendElements = function (beers, beerContainer, name, image) {
  beerContainer.appendChild(name);
  beerContainer.appendChild(image);

  beers.appendChild(beerContainer);
}



document.addEventListener('DOMContentLoaded', app);
