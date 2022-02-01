const mySql = require("mysql");
const algoliasearch = require("algoliasearch");
const myKeys = algoliasearch("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
const myIndices = myKeys.initIndex("Users_List");

myIndices.delete().then((myIndices) => {
    console.log('Indices Deleted', myIndices);
}).catch((err) => {
    console.log(err);
})

const dbConnection = mySql.createConnection({
    server: "localhost",
    port: 3306,
    driver: "MySQL",
    name: "MySql",
    database: "xxxxxxxxxxx",
    username: "xxxxxxxxxxx",
    password: "xxxxxxxxxxx",
});

dbConnection.connect();

dbConnection.query("select * from users_list", (err, results) => {
    myIndices.saveObjects(results, {autoGenerateObjectIDIfNotExist: true})
    .then((Rank) => {
        console.log(Rank);
    })
    .catch((err) => {
        console.log(err);
    }) 
})

dbConnection.end();