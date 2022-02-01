const search = instantsearch({
  appId: "xxxxxxxxxx",
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",           // search only api key
  indexName: "Search_Movies",
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container:'#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container:"#hits",
    hitsPerPage:7,
    templates:{
      item: document.getElementById('hit-template').innerHTML,
      empty: "<h2>No Search Results Found...</h2>"
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container:"#pagination",
  })
);

const getData = document.querySelector("#search-input");
getData.addEventListener("input", e => {
  const data = e.target.value;
  console.log(data);
})


search.start();





