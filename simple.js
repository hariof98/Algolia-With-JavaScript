const algoliasearch = require("algoliasearch");
const myApi = algoliasearch("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

const myIndices = myApi.initIndex("Football_Players");

const myData = [
  {
    name: "Ronaldo",
    team: "Manchester United",
    number: 7,
    objectID: 1,
  },
  {
    name: "Messi",
    team: "Barcelona",
    number: 30,
    objectID: 2,
  },
  {
    name: "Lewandoski",
    team: "Bayern Munich",
    number: 9,
    objectID: 3,
  },
  {
    name: "Rashford",
    team: "Manchester United",
    number: 5,
    objectID: 4,
  },
  {
    name: "Hari",
    team: "Manchester United",
    number: 12,
    objectID: 5,
  },
];

myIndices.delete()
  .then((objectID) => {
    console.log("Previous Indice Deleted:", objectID);
    // for saving the data
    myIndices.saveObjects(myData, { autoGenerateObjectIDIfNotExist: true })
      .then((objectID) => {
        console.log("Data Saved", objectID);
      })
      .then((objectID) => {
        // to delete
        myIndices.deleteObjects(["5"])
          .then((objectID) => {
            console.log("Deleted", objectID);
          })
          .then(() => {
            // to update
            myIndices.partialUpdateObjects([
                {
                  name: "Rashford",
                  number: 10,
                  objectID: "4",
                },
                {
                  team: "PSG",
                  objectID: "2",
                },
              ])
              .then((objectId) => {
                console.log("Data Updated for:", objectId);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

