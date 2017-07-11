var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

// Exercises

// Write a function called displayCities that console.logs all the values in the citiesLivedIn array:

function displayCities() {
    // instructorData.additionalData.moreDetails.citiesLivedIn[0]
    var cityArray = instructorData.additionalData.moreDetails.citiesLivedIn;
    for (var i = 0; i < cityArray.length; i++) {
        console.log(cityArray[i]);
    }
}

// Write a function called displayHometownData that console.logs all the values inside of the hometown object

function displayHometownData() {
    var hometownObj = instructorData.additionalData.moreDetails.hometown;
    for (key in hometownObj) {
        console.log(hometownObj[key]);
    }
}

// Let's write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

function addDetail(key, value) {
    var moreDetailsObj = instructorData.additionalData.moreDetails;
    moreDetailsObj[key] = value;
    return moreDetailsObj;
}

// Finally, let's write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object.

function removeDetail(key) {
    var detailsObj = instructorData.additionalData.moreDetails;
    delete detailsObj[key];
    return detailsObj;
}

// { Nested Objects Exercises. }

// Given the following nested object:

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

// Using a for loop, console.log all of the numbers in the primeNumbers array.

var primesArray = nestedData.innerData.numberData.primeNumbers;
for (var i = 0; i < primesArray.length; i++) {
    console.log(primesArray[i]);
}

// Using a for loop, console.log all of the even Fibonnaci numbers.

var fibArray = nestedData.innerData.numberData.fibonnaci;
for (var i = 0; i < fibArray.length; i++) {
    if (fibArray[i] % 2 === 0) {
        console.log(fibArray[i]);
    }
}

// Console.log the value "second" inside the order array.

console.log(nestedData.innerData.order[i]);

// Invoke the addSnack function and add the snack "chocolate".

nestedData.innerData.addSnack("chocolate");

// Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?

console.log("The keyword this refers to innerData.");

// _____

// Given the following nested object:

var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

// Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

function addSpeaker(name) {
    var speaker = {
        name: name
    };
    nestedObject.speakers.push(speaker);
}

// Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

function addLanguage(language, helloInLang) {
    var langObj = nestedObject.data.languages;
    langObj[language] = {
        hello: helloInLang
    };
}

// Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.

function addCountry(country, capital, population) {
    var countriesObj = nestedObject.data.continents.europe.countries;
    countriesObj[country] = {
        capital: capital,
        population: population
    };
}