"use strict";
//NOTE - async functions are NOT hoisted. Good tbh. And Errors are handled well in try catch here, refer later

// Selectors

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
//Helper Functions

function renderCountryCard(data, neighbourClass = "") {
  const template = `<article class="country ${neighbourClass}">
    <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${
          (data.population / 1_000_000).toFixed(1) + " million"
        }</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
      </div>
    </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", template);
}
function renderError(e) {
  countriesContainer.insertAdjacentText("beforeend", `${e.message} ! `);
  console.log("We have an error my friend");
  console.log(e);
}
async function getJSON(url, errMsg) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error(errMsg);
    const res = await response.json();
    //console.log(res);
    return res;
  } catch (e) {
    throw e;
  }
}

//Core logic
async function getMyLocation() {
  //Promisifying API with success and error callbacks, good pattern
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}
async function getCountry() {
  try {
    //Get my location
    const {
      coords: { latitude: lat, longitude: long },
    } = await getMyLocation();
    const val = await getJSON(
      `https://geocode.xyz/${lat},${long}?json=1&auth=${0}`,
      "Issue in Reverse GeoCoding"
    );
    //console.log(val);

    //Main Country
    const [countryRes1] = await getJSON(
      `https://restcountries.com/v3.1/alpha/${val.prov}`,
      "Country Not Found OR Can't get location"
    );
    renderCountryCard(countryRes1);

    //Neighbour Country
    const borderCode = countryRes1.borders?.at(0);
    const [countryRes2] = await getJSON(
      `https://restcountries.com/v3.1/alpha/${borderCode}`,
      "Issue fetching neighbour API"
    );
    if (!borderCode) throw Error("No Neighbours");
    renderCountryCard(countryRes2, "neighbour");
  } catch (e) {
    renderError(e);
  }
  countriesContainer.style.opacity = 1;
}
btn.addEventListener("click", (e) => {
  countriesContainer.innerHTML = "";
  getCountry();
});

//Scope for future work

// 1) pinpoint error handling for throttling API and make sure exact errors are in console WHILE taking care User doesn't get to know too much in depth

// 2) Promise wrapped in async function for getting location, it works, but can you work around it to get the code PURELY in async ? The navigator API has already been Promisyfied which is already pretty neat

// 3) Navigator geolocator getCurrentPos is SLOW, better alternative ?
