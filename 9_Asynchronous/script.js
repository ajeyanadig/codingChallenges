"use strict";
//Selectors
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = (msg) => {
  countriesContainer.insertAdjacentText("beforeend", ` Error : ${msg} ! `);
};
const renderCountryCard = (data, neighbourClass = "") => {
  //data: Proper country object from API
  const template = `<article class="country ${neighbourClass}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${
        data.population / 1_000_000 + " Million"
      }</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies).at(0).name
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", template);
};
const getJSON = (url, errMsg = "Something went wrong") => {
  return fetch(url)
    .then((res) => {
      if (res.status == 404) throw Error(errMsg);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data.at(0);
    });
};
//console.log(getJSON(`https://restcountries.com/v3.1/name/${"Portugal"}`));
/*navigator RANDOM
navigator.geolocation.getCurrentPosition((data) => {
  console.log(data.coords);
});*/

//sample response (PROPER SAMPLE OBJECT)
const sample = {
  name: {
    common: "Portugal",
    official: "Portuguese Republic",
    nativeName: {
      por: {
        official: "República português",
        common: "Portugal",
      },
    },
  },
  tld: [".pt"],
  cca2: "PT",
  ccn3: "620",
  cca3: "PRT",
  cioc: "POR",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    EUR: {
      name: "Euro",
      symbol: "€",
    },
  },
  idd: {
    root: "+3",
    suffixes: ["51"],
  },
  capital: ["Lisbon"],
  altSpellings: [
    "PT",
    "Portuguesa",
    "Portuguese Republic",
    "República Portuguesa",
  ],
  region: "Europe",
  subregion: "Southern Europe",
  languages: {
    por: "Portuguese",
  },
  translations: {
    ara: {
      official: "الجمهورية البرتغالية",
      common: "البرتغال",
    },
    bre: {
      official: "Republik Portugalat",
      common: "Portugal",
    },
    ces: {
      official: "Portugalská republika",
      common: "Portugalsko",
    },
    cym: {
      official: "Portuguese Republic",
      common: "Portugal",
    },
    deu: {
      official: "Portugiesische Republik",
      common: "Portugal",
    },
    est: {
      official: "Portugali Vabariik",
      common: "Portugal",
    },
    fin: {
      official: "Portugalin tasavalta",
      common: "Portugali",
    },
    fra: {
      official: "République portugaise",
      common: "Portugal",
    },
    hrv: {
      official: "Portugalska Republika",
      common: "Portugal",
    },
    hun: {
      official: "Portugál Köztársaság",
      common: "Portugália",
    },
    ita: {
      official: "Repubblica portoghese",
      common: "Portogallo",
    },
    jpn: {
      official: "ポルトガル共和国",
      common: "ポルトガル",
    },
    kor: {
      official: "포르투갈 공화국",
      common: "포르투갈",
    },
    nld: {
      official: "Portugese Republiek",
      common: "Portugal",
    },
    per: {
      official: "جمهوری پرتغال",
      common: "پرتغال",
    },
    pol: {
      official: "Republika Portugalska",
      common: "Portugalia",
    },
    por: {
      official: "República português",
      common: "Portugal",
    },
    rus: {
      official: "Португальская Республика",
      common: "Португалия",
    },
    slk: {
      official: "Portugalská republika",
      common: "Portugalsko",
    },
    spa: {
      official: "República Portuguesa",
      common: "Portugal",
    },
    srp: {
      official: "Португалска Република",
      common: "Португал",
    },
    swe: {
      official: "Republiken Portugal",
      common: "Portugal",
    },
    tur: {
      official: "Portekiz Cumhuriyeti",
      common: "Portekiz",
    },
    urd: {
      official: "جمہوریہ پرتگال",
      common: "پرتگال",
    },
    zho: {
      official: "葡萄牙共和国",
      common: "葡萄牙",
    },
  },
  latlng: [39.5, -8],
  landlocked: false,
  borders: ["ESP"],
  area: 92090,
  demonyms: {
    eng: {
      f: "Portuguese",
      m: "Portuguese",
    },
    fra: {
      f: "Portugaise",
      m: "Portugais",
    },
  },
  flag: "🇵🇹",
  maps: {
    googleMaps: "https://goo.gl/maps/BaTBSyc4GWMmbAKB8",
    openStreetMaps: "https://www.openstreetmap.org/relation/295480",
  },
  population: 10305564,
  gini: {
    2018: 33.5,
  },
  fifa: "POR",
  car: {
    signs: ["P"],
    side: "right",
  },
  timezones: ["UTC-01:00", "UTC"],
  continents: ["Europe"],
  flags: {
    png: "https://flagcdn.com/w320/pt.png",
    svg: "https://flagcdn.com/pt.svg",
    alt: "The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary.",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/pt.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/pt.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [38.72, -9.13],
  },
  postalCode: {
    format: "####-###",
    regex: "^(\\d{7})$",
  },
};
// WITHOUT GET JSON
// const getCountry = (country) => {
//   //country name in param : String
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((res) => res.json())
//     .then((val) => {
//       console.log(val);

//       if (val.status == 404) throw Error("Country Name Not Found");
//       renderCountryCard(val.at(0));
//       let borderCode = val[0].borders?.at(0);
//       if (!borderCode) throw Error("No border bro");
//       return fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`);
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("Neighbour country Object");
//       renderCountryCard(data[0], "neighbour");
//     })
//     .catch((e) => {
//       console.log(`Catch handler, printing error below`);
//       console.log(e);
//       renderError(e.message);
//     })
//     .finally(() => {
//       document.querySelector(".countries").style.opacity = 1;
//     });
// };
const whereAmI = function () {
  const navProm = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
    .then((data) => {
      const {
        coords: { latitude, longitude },
      } = data;
      return fetch(
        `https://geocode.xyz/${latitude},${longitude}?json=1&auth=${0}`
      );
    })
    .then((res) => {
      console.log(res);
      if (res.status == 200) return res.json();
      else throw Error("reverseGeoCodeAPI not resulted properly");
    })
    .then((data) => {
      console.log(data);
      console.log(data.country);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => res.json())
    .then((val) => {
      console.log(val);
      let countryObj = val[0];
      renderCountryCard(countryObj);
    })
    .catch((e) => console.log(e))
    .finally(() => {
      document.querySelector(".countries").style.opacity = 1;
    });
  console.log("WHERE AM I FUNCTION STARTS");
  //Auth Key 	412110932759317341544x57701
  // api - 'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key'
  3;
};
const getCountry = (country) => {
  //country name in param : String
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country Not Found")
    .then((countryObj) => {
      console.log(countryObj);

      renderCountryCard(countryObj);
      let borderCode = countryObj.borders?.at(0);
      if (!borderCode) throw Error("No border bro");
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${borderCode}`,
        "Neighbour Not found"
      );
    })
    .then((data) => {
      console.log("Neighbour country Object");
      renderCountryCard(data, "neighbour");
    })
    .catch((e) => {
      console.log(`Catch handler, printing error below`);
      console.log(e);
      renderError(e.message);
    })
    .finally(() => {
      document.querySelector(".countries").style.opacity = 1;
    });
};

///////////////////////////////////////
//API URL
//name -> https://restcountries.com/v3.1/name/{name}

//alpha code -> https://restcountries.com/v3.1/alpha/{code}

btn.addEventListener("click", () => {
  countriesContainer.innerHTML = "";
  //getCountry("Australia");
  whereAmI();
});
