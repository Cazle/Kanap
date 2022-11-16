
const urlId = window.location.search;

const UrlsearchParams = new URLSearchParams(urlId);

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

colorChoice.addEventListener("input", function(event){
    let colorOfProduct = event.target.value;
    product.colors = colorOfProduct;
    
    
})

let quantityChoice = document.getElementById('quantity')

quantityChoice.addEventListener('input', function(event){
    let quantityOfProduct = event.target.value;
    product.quantity = parseInt (quantityOfProduct);
    console.log(quantityOfProduct)

})
let priceOfProduct = document.getElementById("price");
product.price = priceOfProduct;
console.log(priceOfProduct)


/*Local Storage */

function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getCart(){
    let cart = [];
    cart = localStorage.getItem("cart");
    if (cart == null){
        return [];

    }
    else{
        return JSON.parse(cart);
    }
}

function addCart(product){
    let cart = getCart();
    let foundProduct = cart.find(p => p._id == product._id && p.colors == product.colors);
    if (foundProduct != undefined){
        let newQuantity = foundProduct.quantity + product.quantity;
        foundProduct.quantity = newQuantity;

        if (foundProduct.quantity > 100){
            let oldQuantity = foundProduct.quantity - product.quantity;
            foundProduct.quantity = oldQuantity;
            alert(`Le maximum est de 100. Vous avez déjà ${oldQuantity}`);
        }
    }

    else{
            cart.push(product);
    }
    saveCart(cart); 
}
const addToCart = document.getElementById("addToCart");
   addToCart.addEventListener("click", () => {
    if(product.quantity > 0 && product.quantity <= 100 && product.colors !== "" && product.colors !== undefined){
        addCart(product);
        console.log(product)

    }
});



     
