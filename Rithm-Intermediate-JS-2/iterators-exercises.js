// { Iterators Exercises. }
// Part I
// Use the following object for this set of questions:

var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
} ]

// Write a function called printEmails which console.log's each email for the users.
// printEmails()
// // larry@foo.com
// // jane@test.com
// // sam@test.com
// // anne@test.com
// // david@test.com

function printEmails(users) {
	users.forEach(function(val){
		console.log(val.email);
	});
}

// Write a function called printHobbies which console.log's each hobby for each user.
// printHobbies()
// // "Fishing", 
// // "Sailing", 
// // "Hiking",
// // "Swimming", 
// // "Biking", 
// // "Hiking",
// // "Golf", 
// // "Cooking", 
// // "Archery",
// // "Tennis", 
// // "Biking", 
// // "Archery",
// // "Volunteering", 
// // "Biking", 
// // "Coding",

function printHobbies(users) {
	users.forEach(function(user){
		user.forEach(function(hobby){
			console.log(hobby);
		});
	});
}

// Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in
// findHometownByState("CA")
// {
//     username: "larry",
//     email: "larry@foo.com",
//     years_experience: 22.1,
//     favorite_languages: ["Perl", "Scala", "C++"],
//     favorite_editor: "Vim",
//     hobbies: ["Fishing", "Sailing", "Hiking"],
//     hometown: {
//         city: "San Francisco",
//         state: "CA"
//     }
// }

function findHometownByState(state) {
	return users.find(function(user){
		return user.hometown.state === state;
	});
}

// Write a function called allLanguages which returns an array of all of the unique values
// allLanguages()
// // ["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"]

function allLanguages() {
	return users.reduce(function(acc, userObj){
		userObj.favoriteLanguages.forEach(function(lang){
			if(!acc.includes(lang)) {
				acc.push(lang);
			}
		});
		return acc;
	},[]);
}

// Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in
// hasFavoriteEditor("Sublime Text") // true
// hasFavoriteEditor("Eclipse") // false

function hasFavoriteEditor(editor) {
	return users.some(function(user){
		return user.favoriteEditor.toLowerCase() === editor.toLowerCase();
	});
}

// Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
// findByUsername("david") 
// {
//     username: "david",
//     email: "david@test.com",
//     years_experience: 12.5,
//     favorite_languages: ["JavaScript", "C#", "Swift"],
//     favorite_editor: "Sublime Text",
//     hobbies: ["Volunteering", "Biking", "Coding"],
//     hometown: {
//         city: "Los Angeles",
//         state: "CA"
//     }
// }

function findByUsername(name) {
	return users.fine(function(user){
		return user.username.toLowerCase() === name.toLowerCase();
	});
}

// Part II

// Write a function called vowelCount that accepts a string and returns an object with each key being the vowel
// and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
// vowelCount("incredible")
// // {i:2, e: 2}
// vowelCount("awesome")
// // {a:1, e:2, o:1}

function vowelCount(str) {
	var vowels = ["a", "e", "i", "o", "u"];
	var splitArr = str.split("");

	return splitArr.filter(function(letter){
		return (vowels.indexOf(letter.toLowerCase()) !== -1);
	}).reduce(function(vowelCountObj, vowel){
		if (vowel in vowelCountObj) {
			vowelCountObj[vowel]++;
		} else {
			vowelCountObj[vowel] = 1;
		}
		return vowelCountObj;
	}, {});
}

// Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel
// (y should not count as a vowel for this function).
// removeVowels("amazing") // ["m","z","n","g"]
// removeVowels("fun") // ["f","n"]
// removeVowels("silly") // ["s","l","l","y"]

function removeVowels(str) {
	var vowels = ["a", "e", "i", "o", "u"];
	var splitArr = str.split("");
	var nonVowels = [];
	splitArr.forEach(function(letter){
		if (!vowels.includes(letter)) {
			nonVowels.push(letter);
		}
	});
	return nonVowels;
}

// Part III
// Complete the exercises in the Javascript Iterators repository.

// Write a function called listNames which takes in an array of songs and console.logs the name of each one.

function listNames(arrSongs) {
	arrSongs.forEach(function(song){
		console.log(song.name);
	});
}

// Write a function called listSongDetails which takes in an array of songs and console.logs details about
// each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".

function listSongDetails(arrSongs) {
	arrSongs.forEach(function(song){
		console.log(song.name + ", by " + song.artist + " " + song.duration);
	});
}

// Write a function called summerJamCount which takes in an array of songs and returns the number of songs
// which hit #1 on the charts in June, July, or August.

function summerJamCount(arrSongs) {
	var count = 0;
	var summerMonths = [6, 7, 8];
	arrSongs.forEach(function(song){
		if (summerMonths.includes(song.month)) {
			count++;
		}
	});
	return count;
}

// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.

function getDurations(arrSongs) {
	return arrSongs.map(function(song){
		return song.duration;
	});
}


// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each
// song's duration in seconds.

function getDurationInSeconds(arrSongs) {
	return arrSongs.map(function(song){
		// parseInt only gets the first digits before hitting a non-number character
		// this makes it easy because we can get the number of min, multiply by 60, and
		// then grab the remaining seconds from the end of the string to add to the total
		return (parseInt(song.duration, 10) * 60 + parseInt(song.duration.slice(-2), 10));
	});
}

// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary
// artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists,
// they should be ignored (so only the artist to the left of "featuring" is kept.)

function getMainArtists(arrSongs) {
	// map
}

// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one
// for 10 or more weeks.

function getBigHits(arrSongs) {
	// filter
}

// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter
// than 3 minutes.

function getShortSongs(arrSongs) {
	// filter
}

// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns
// an array of songs by that artist.

function getSongsByArtist(arrSongs) {
	// filter
}

// Write a function called getOneHitWonders which takes in an array of songs and returns an array of songs for artists
// who only appear once in the original array.

function getOneHitWonders(arrSongs) {
	// filter
}

// Refactor summerJamCount to use reduce!

function summerJamCount(arrSongs) {
	// reduce
}

// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of
// time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already
// to help solve this problem?)

function getTotalDurationInSeconds(arrSongs) {
	// reduce
}

// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the
// object should be artist names, and the values should be the number of songs by that artist in the orignal array.

function getSongCountByArtist(arrSongs) {
	// reduce
}

// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of
// weeks that songs on the list were #1.

function averageWeeksAtNumberOne(arrSongs) {
	// reduce
}