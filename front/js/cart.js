const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));


const urlId = window.location.search;

const UrlsearchParams = new URLSearchParams(urlId);

const id = UrlsearchParams.get('id');


fetch(`http://localhost:3000/api/products/${id}`)

.then (data => data.json())

.then (productOfLocalStorage => {

    for(product of productOfLocalStorage){
        document.getElementById("cart__items").innerHTML=`<article class="cart__item" data-id="${productOfLocalStorage._id}" data-color="${productOfLocalStorage.colors}">`
        document.getElementsByClassName("cart__item__img").innerHTML=`<div class="cart__item__img"> <img src="${productOfLocalStorage.imageUrl}" alt="Photographie d'un canapé"></div>`
        document.getElementsByClassName("cart__item__content__description").innerHTML=`<div class="cart__item__content"> <div class="cart__item__content__description">
<h2>Nom du produit</h2><p>Vert</p><p>42,00 €</p></div>`
    }
})