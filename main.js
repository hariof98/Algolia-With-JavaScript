const algoliasearch = require("algoliasearch");
const client = algoliasearch("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

const index = client.initIndex("Search_Movies");
const objects = require("./movies.json");


// index.delete()
// .then((objectID) => {
//   console.log('Data Cleared:', objectID);
// }).catch((err) => {
//   console.log(err);
// })


// index.saveObjects(objects, {autoGenerateObjectIDIfNotExist: true})
// .then((objectID) => {
//   console.log('Data Successfully Loaded:', objectID);
// }).catch((err) => {
//   console.log(err);
// })


// index.partialUpdateObjects([
//   {
//     imdbRating: 7.9,
//     Genre: "Game, Action, Adventure, Fantasy",
//     objectID: "445424000"
//   },
//   {
//     imdbRating: 9.5,
//     objectID: "445430000" 
//   }
// ]).then((objectID) => {
//   console.log('Data Updated', objectID);
// })
// .catch((err) => {
//   console.log(err);
// })
  


index.setSettings({
  searchableAttributes:["Genre", "Title", "imdbRating"],
  customRanking: ["asc(imdbRating)"]
});


/* this will display the attributes that are set for the particular execution */

index.getSettings().then((result) => {
  console.log();
})



index.search("Game").then((result) => {
  console.log(result);
  console.log('API Hits:', result.nbHits); 
  result.hits.forEach((list) => {                          
    console.log('Title:', [list.Title], 'Genere:', [list.Genre], 'Rating:', [list.imdbRating]);
  })
})

/* hits will have the array of data from indices in algolia */













