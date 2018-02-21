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


const addListItem = function (text) {
  const li = document.createElement('li');
  li.innerText = text;
  const ul = document.getElementById('beer-list');
  ul.appendChild(li);
}


const populateList = function (beers) {
  console.log(beers);
  beers.forEach(function (beer) {
    addListItem(beer.name);
  })
}

document.addEventListener('DOMContentLoaded', app);
