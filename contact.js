//toggle form//

const container = document.querySelector(".container");
const inputs = document.querySelectorAll(".form-box input[type = 'password']");
const icons = [...document.querySelectorAll(".form-icon")];
const spans = [...document.querySelectorAll(".form-box .top span")];
const section = document.querySelector("section");

//API Key//
var jsondata = {"field1": "xyz","field2": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://assignment2-2f3e.restdb.io/rest/contact",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "<63e4b469478852088da67f12>",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});