let box = document.querySelector(".box");
let request =new  XMLHttpRequest;
request.open('GET','https://api.giphy.com/v1/gifs/random?api_key=1PRj8MYjyqcwxayggcezToabeQEudXY4&tag=happy&rating=g&');

request.onload = function(){
  let response = request.response;
  let parseData = JSON.parse(response);
  console.log(parseData);
  let url = parseData.data.images.original.url;
  console.log(url);
  let element = document.createElement("img");
  element.setAttribute("src",url);
  
  box.appendChild(element);
}
request.send();