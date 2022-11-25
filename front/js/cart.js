const productInLocalStorage = JSON.parse(localStorage.getItem("cart"));

const container = document.getElementById("cart__items")
const quantity = document.getElementById('totalQuantity');
const price = document.getElementById('totalPrice');

let globalQuantity = 0;
let globalPrice = 0;

if (productInLocalStorage === null) {
    container.innerHTML = `<section id="cart__items"><h2>Le panier est vide<h2></section>`
}

const generateCard = (product) => {
    return `
    <article class="cart__item" data-id="${product._id}" data-color="${product.colors}">
        <div class="cart__item__img">
            <img src="${product.imageUrl}" alt="${product.altTxt}">
        </div>
    
        <div class="cart__item__content">
    
            <div class="cart__item__content__description">
                <h2>${product.name}</h2>
                <p>${product.colors}</p>
                <p>${product.price}</p>
            </div>
    
            <div class="cart__item__content__settings">
    
                <div class="cart__item__content__settings__quantity">
                    <p>Qté : </p>
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100"
                           value="${product.quantity}">
                </div>
    
                <div class="cart__item__content__settings__delete">
                    <p class="deleteItem">Supprimer</p>
                </div>
    
            </div>
    
        </div>
    
    </article>
    `
};

productInLocalStorage.forEach((product) => {
    const article = generateCard(product);

    globalQuantity = parseInt(globalQuantity) + parseInt(product.quantity);
    quantity.innerHTML = parseInt(globalQuantity);

    globalPrice = parseInt(globalPrice) + (parseInt(product.price) * parseInt(product.quantity));
    price.innerHTML = parseInt(globalPrice);

    container.insertAdjacentHTML("beforebegin", article);
});

const btns = document.querySelectorAll('.cart__item__content__settings__delete');
const quantities = document.querySelectorAll('.itemQuantity');

quantities.forEach((quantity, i) => {
    quantity.addEventListener('change', () => {
        productInLocalStorage[i].quantity = parseInt(quantity.value);
        window.localStorage.setItem('cart', JSON.stringify(productInLocalStorage));
        window.location.reload();
    })
})

btns.forEach((btn, i) => {
    btn.addEventListener('click', (event) => {
        productInLocalStorage.splice(i, 1);
        window.localStorage.setItem('cart', JSON.stringify(productInLocalStorage));
        window.location.reload();
    })
});


const Form = {
   firstName: document.getElementById('firstName').value,
   lastName: document.getElementById('lastName').value,
   adress: document.getElementById('address').value,
   city: document.getElementById('city').value,
   email: document.getElementById('email').value,
}

const errorMessage ={
  firstNameError: document.getElementById('firstNameErrorMsg').value,
  lastNameError: document.getElementById('lastNameErrorMsg').value,
  adressError : document.getElementById('addressErrorMsg').value,
  cityError : document.getElementById('cityErrorMsg').value,
  emailError : document.getElementById('emailErrorMsg').value,

}

const regex = {

  firstNameAndLastNameRegex: /^[a-zA-Z'_-\s]+$/,
  adressRegex: /^[a-zA-Z'0-9_-\s]+$/,
  cityRegex: /^[a-zA-Z'_-\s]+$/,
  emailRegex: /^[a-zA-Z0-9._]+[@]{1}[a-zA-Z0-9._]+[.]{1}[a-z]{2,10}/,
}

const validFirstName = (inputFirstName) =>{

  
  

}

  





     
      
     
      
      
      
      










