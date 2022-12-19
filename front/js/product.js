/* Utiliser UrlSearchParams pour récupérer l'ID*/
const urlId = window.location.search;
const UrlsearchParams = new URLSearchParams(urlId);
const id = UrlsearchParams.get('id');

/* Création d'une constante product avoir des valeurs "null" pour les modifier par la suite*/
const product = {
    _id: null,
    price: null,
    imageUrl: null,
    name: null,
    altTxt: null,
};

/* Déclaration des constantes qui seront utiles, en haut de mon code */
const colorChoice = document.getElementById('colors');
const quantityChoice = document.getElementById('quantity');
const image = document.querySelector('.item__img');
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const addToCart = document.getElementById("addToCart");
const colors = document.getElementById('colors');

/* Utilisation de fetch, pour récupérer les données avec le paramètre id */
fetch(`http://localhost:3000/api/products/${id}`)
    .then(data => data.json())
    .then((pageProduct) => {
        image.innerHTML = `<img src="${pageProduct.imageUrl}" alt="${pageProduct.altTxt}">`
        title.innerHTML = `<h1 id="title">${pageProduct.name}</h1>`
        price.innerHTML = `${pageProduct.price}`
        description.innerHTML = `${pageProduct.description}`
        pageProduct.colors.forEach((color) => colors.innerHTML += `<option value="${color}">${color}</option>`)

        product._id = pageProduct._id;
        product.price = pageProduct.price;
        product.imageUrl = pageProduct.imageUrl;
        product.name = pageProduct.name;
        product.altTxt = pageProduct.altTxt;

    });

/* On écoute les évenements "couleurs" et "quantité" de nos produits*/
colorChoice.addEventListener("input", function (event) {
    product.colors = event.target.value;
})

quantityChoice.addEventListener('input', function (event) {
    let quantityOfProduct = event.target.value;
    product.quantity = parseInt(quantityOfProduct);
    console.log(quantityOfProduct)

})

/*Local Storage */

const saveCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));
const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];

const addCart = (product) => {
    let cart = getCart();
    let foundProduct = cart.find(p => p._id === product._id && p.colors === product.colors);
    if (foundProduct !== undefined) {
        foundProduct.quantity = foundProduct.quantity + product.quantity;
        if (foundProduct.quantity > 100) {
            foundProduct.quantity = foundProduct.quantity - product.quantity;
            }
    } else {
        cart.push(product);
    }
    saveCart(cart);
}

addToCart.addEventListener("click", () => {
    if (product.quantity > 0 && product.quantity <= 100 && product.colors !== "" && product.colors !== undefined) {
        addCart(product);
        console.log(product)
    }
    else{
        alert("Veuillez mettre choisir une couleur, et une quantité entre 1 et 100.")
    }
});
     
