// on va récupérer l'url de notre page
const urlId = window.location.search;
// on utilise URLsearchParams pour récupérer l'id
const UrlsearchParams = new URLSearchParams(urlId);
// on récupère la valeur de l'id
const id = UrlsearchParams.get('id');

// on fetch par rapport à l'id
fetch(`http://localhost:3000/api/products/${id}`)
    // on récupére et interprète le résultat au format JSON
    .then (data => data.json())
    // on alimente la vue
    .then (productId => {
        document.querySelector('.item__img').innerHTML = `<img src="${productId.imageUrl}" alt="${productId.altTxt}">`;
        document.getElementById('title').innerHTML = `<h1 id="title">${productId.name}</h1>`
        document.getElementById('price').innerHTML =`${productId.price}`
        document.getElementById('description').innerHTML =`${productId.description}`
         
            }
        )
    
      
    // on affiche un message d'erreur en cas de problème
    .catch( function(err) {
        let error = document.querySelector("main");
        error.innerHTML = `<h2 style="color:red;">Une erreur est survenue !</h2>`
    })