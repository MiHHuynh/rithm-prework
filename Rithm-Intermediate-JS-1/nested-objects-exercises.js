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