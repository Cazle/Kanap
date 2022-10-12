// on va récupérer l'url de notre page
const urlId = window.location.search;
// on utilise URLsearchParams pour récupérer l'id
const UrlsearchParams = new URLSearchParams(urlId);
// on récupère la valeur de l'id
const id = UrlsearchParams.get('id');


fetch(`http://localhost:3000/api/products/${id}`)

    .then (data => data.json()) 
    
    .then (pageProduct => {
        document.querySelector('.item__img').innerHTML= `<img src="${pageProduct.imageUrl}" alt="${pageProduct.altText}">`
        document.getElementById('title').innerHTML = `<h1 id="title">${pageProduct.name}</h1>`
        document.getElementById('price').innerHTML = `${pageProduct.price}`
        document.getElementById('description').innerHTML = `${pageProduct.description}`
        for (colors of pageProduct.colors){
           document.getElementById('colors').innerHTML += `<option value="${colors}">${colors}</option>`
        }

    })
let product = { _id : id}

let colorChoice = document.getElementById('colors')




     
