/* On recupère notre localstorage et on fait une variable products */
const productInLocalStorage = JSON.parse(localStorage.getItem("cart"));
let products = [];

/* constantes et variables nécessaire à notre code */
const container = document.getElementById("cart__items")
const quantity = document.getElementById('totalQuantity');
const price = document.getElementById('totalPrice');

let globalQuantity = 0;
let globalPrice = 0;
let errors = 0;

/* Affichage d'un message si le panier est vide*/
if (productInLocalStorage === null) {
    container.innerHTML = `<section id="cart__items"><h2>Le panier est vide<h2></section>`
}

/* Création de notre produit avec du HTML */
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
/* Gestion des quantités et du prix*/
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
/* Pour supprimer un produit du panier */
btns.forEach((btn, i) => {
    btn.addEventListener('click', (event) => {
        productInLocalStorage.splice(i, 1);
        window.localStorage.setItem('cart', JSON.stringify(productInLocalStorage));
        window.location.reload();
    })
});

/*Déclaration de mes regex pour mes inputs formulaire*/
const regex = {
    firstNameAndLastNameRegex: /^[a-zA-Z'_\s-]+$/g,
    addressRegex: /^[a-zA-Z'0-9_-\s]+$/g,
    cityRegex: /[a-zA-Z'_-\s]+$/g,
    emailRegex: /^[a-zA-Z0-9._]+[@]{1}[a-zA-Z0-9._]+[.]{1}[a-z]{2,10}/,
}

const inputs = document.querySelectorAll('.cart__order__form__question input');
inputs.forEach(input => {
    console.log(input)
    input.addEventListener('input', checkInput);
});

/**
 * Fonction de gestion global des erreurs
 *
 * @param key {string} id de l'ancre d'erreur
 * @param event {Event} Element cible de l'input
 * @param message {string} message d'erreur
 * @param condition {boolean} condition d'affichage de lerreur
 */
const stateError = (key, event, message, condition) => {
    event.target.style = condition ? "border : 3px solid red" : '';
    const errorParagraph = document.getElementById(key);
    errorParagraph.innerHTML = condition ? `${message}` : '';
    errors = condition ? 1 : 0;
}

const firstNameAndLastNameManager = (key, e, message) => {
    const condition = e.target.value.match(regex.firstNameAndLastNameRegex) === null && e.target.value.length > 0;
    stateError(key, e, message, condition);
}

const addressManager = (key, e, message) => {
    const condition = e.target.value.match(regex.addressRegex) === null && e.target.value.length > 0;
    stateError(key, e, message, condition);
}

const cityManager = (key, e, message) => {
    const condition = e.target.value.match(regex.cityRegex) === null && e.target.value.length > 0;
    stateError(key, e, message, condition);
}

const emailManager = (key, e, message) => {
    const condition = e.target.value.match(regex.emailRegex) === null && e.target.value.length > 0;
    stateError(key, e, message, condition);
}

function checkInput(e) {

    switch (e.target.id) {
        case 'firstName':
            firstNameAndLastNameManager('firstNameErrorMsg', e, 'Prénom incorrect')
            break;

        case 'lastName':
            firstNameAndLastNameManager('lastNameErrorMsg', e, 'Nom incorrect')
            break;

        case 'address':
            addressManager('addressErrorMsg', e, 'Adresse incorrect');
            break;

        case 'city':
            cityManager('cityErrorMsg', e, 'Ville incorrect');
            break;

        case 'email':
            emailManager('emailErrorMsg', e, 'Email incorrect');
            break;
    }

    if (errors === 1) {
        submitButton.setAttribute('disabled', '');
    } else {
        submitButton.removeAttribute('disabled');
    }

}

/* Fonction pour envoyer les infos au serveur*/
const submitButton = document.getElementById("order");

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    let form = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value
    }

    const products = productInLocalStorage.map((product) => product._id);

    const sendToServer = {
        contact: {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value,
        },
        products,
    }

    const fetchInfos = {
        method: "POST",
        body: JSON.stringify(sendToServer),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };

    fetch("http://localhost:3000/api/products/order", fetchInfos)
        .then((response) => response.json())
        .then((data) => window.location.href = `confirmation.html?orderId=${data.orderId}`);
});  ;  


      
      
      
      










