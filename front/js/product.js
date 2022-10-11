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
        document.getElementById('title').innerHTML = `<h1 id="title">${productId.name}</h1>`;
        document.getElementById('price').innerHTML =`${productId.price}`;
        document.getElementById('description').innerHTML =`${productId.description}`;
        for (color of productId.colors){
            document.getElementById('colors').innerHTML += `<option value="${color}">${color}</option>`;
        }
    })      
    // on affiche un message d'erreur en cas de problème
    .catch( function(err) {
        let error = document.querySelector("main");
        error.innerHTML = `<h2 style="color:red;">Une erreur est survenue !</h2>`;
    });
     
// on crée un objet pour passer l'ID, la quantité + la couleur sélectionnée
let product = {
    _id : id
};

// choix de la couleur
let colorSelected = document.getElementById("colors");
// on écoute l'évenement #colors
colorSelected.addEventListener("input", function(event) {
    // on récupère la valeur de la cible
    let colorProduct = event.target.value;
    // on ajoute à l'objet product que l'on a créé en amont
    product.colors = colorProduct
    console.log(colorProduct)
});


// sélection de la quantité
let quantitySelected = document.getElementById("quantity");
// on écoute de la même manière que précédemment
quantitySelected.addEventListener("input", function(event) {
    // on récupère la valeur
    let quantityProduct = event.target.value;
    // on rajoute le tout à l'objet product
    product.quantity = parseInt(quantityProduct);
});


// LOCALSTORAGE

// on crée une fonction pour enregistrer le contenu de product dans le localStorage
function saveCart(cart) {
    // on transforme le tableau string (chaines de caractrères)
    localStorage.setItem("cart", JSON.stringify(cart));
}

// fonction pour récupérer les données 
function getCart() {
    let cart = [];
    cart = localStorage.getItem("cart");
    // s'il n'y a rien, on retourne un tableau vide
    if (cart == null) {
        return [];
    }
    // sinon, on retourne la chaîne de caractère sous forme de teableau
    else {
        return JSON.parse(cart);
    }
}

// fonction d'ajout de produit 
function addQuantity(product) {
    let cart = getCart();
    // on crée une variable pour récupérer les données
    let foundProduct = cart.find(p => p._id == product._id && p.colors == product.colors);
    // s'il y a un produit identique (id + couleur) alors on augmente la quantité
    if(foundProduct != undefined) {
        // on définit la nouvelle quantité
        let newQuantity = foundProduct.quantity + product.quantity;
        foundProduct.quantity = newQuantity;
        // Si la quantité totale fait plus de 100
        if (foundProduct.quantity > 100) {
            // on revient à l'ancienne quantité 
            let oldQuantity = foundProduct.quantity - product.quantity;
            foundProduct.quantity = oldQuantity;
            alert(`Le maximum est de 100, vous avez déjà ${oldQuantity}`)
        }
        else {
            alert("La quantité a été modifiée !")
        }
    }
    // s'il n'y a rien dans le localStorage
    else {
        cart.push(product);
        alert("produit ajouté au panier")
    }
    // on envoie dans le LS
    saveCart(cart);
}


// click pour ajouter au panier
const addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", () => {
    // controle pour envoyer au panier si strictement supéreur à 0, inf ou égal à 100 et colors diff de "" ou undefined
    if (product.quantity > 0 && product.quantity <= 100 && product.colors !== "" && product.colors !== undefined) {
        // on envoie l'object product dans la fonction addQuantity(product)
        addQuantity(product);
    }
    else {
        console.log(product)
        // on indique que les paramètres ne sont pas valides
        alert("Merci de renseigner couleur + quantité entre 1 et 100")
    }
});