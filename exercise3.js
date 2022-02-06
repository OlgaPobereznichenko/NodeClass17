// json,
// Async programming / fetch

var apiUrl = "https://api.tvmaze.com/search/ashows?q=batman";
fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });

    // fetch(api)
    // .then(function(resonse){

    //})
    //.then