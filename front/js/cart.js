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

const regex = {
    firstNameAndLastNameRegex: /^[a-zA-Z'_\s-]+$/g,
    addressRegex: /^[a-zA-Z'0-9_-\s]+$/g,
    cityRegex: /[a-zA-Z'_-\s]+$/g,
    emailRegex:/^[a-zA-Z0-9._]+[@]{1}[a-zA-Z0-9._]+[.]{1}[a-z]{2,10}/,
  }

const inputs = document.querySelectorAll('.cart__order__form__question input');
inputs.forEach(input => {
    console.log(input)
    input.addEventListener('input', checkInput);

});
function checkInput(e){
    console.log(regex.firstNameAndLastNameRegex)
    
    if(e.target.id == "firstName"){
        if(e.target.value.match(regex.firstNameAndLastNameRegex) === null && e.target.value.length > 0) {
            e.target.style = "border : 3px solid red";
            const errorParagraph = document.getElementById("firstNameErrorMsg");
            errorParagraph.innerHTML = "Prénom incorrect";
        }
        else {
            e.target.style = "border : none";
            const errorParagraph = document.getElementById("firstNameErrorMsg");
            errorParagraph.innerHTML = "";
        } 
    }
        
    if(e.target.id == "lastName"){
            if(e.target.value.match(regex.firstNameAndLastNameRegex) === null && e.target.value.length > 0){
                e.target.style = "border : 3px solid red";
                const errorParagraph = document.getElementById("lastNameErrorMsg");
                errorParagraph.innerHTML = "Nom incorrect";
            }
            else{
                e.target.style = "border : none";
                const errorParagraph = document.getElementById("lastNameErrorMsg");
                errorParagraph.innerHTML = "";
            }
    }

    if(e.target.id == "address"){
        if(e.target.value.match(regex.addressRegex) === null && e.target.value.length > 0){
            e.target.style = "border : 3px solid red";
            const errorParagraph = document.getElementById("addressErrorMsg");
            errorParagraph.innerHTML = "Adresse incorrect";
        }
        else{
            e.target.style = "border : none";
            const errorParagraph = document.getElementById("addressErrorMsg");
            errorParagraph.innerHTML = "";
        }
     }


     if(e.target.id == "city"){
        if(e.target.value.match(regex.cityRegex) === null && e.target.value.length > 0){
            e.target.style = "border : 3px solid red";
            const errorParagraph = document.getElementById("cityErrorMsg");
            errorParagraph.innerHTML = "Ville incorrect";
        }
        else{
            e.target.style = "border : none";
            const errorParagraph = document.getElementById("cityErrorMsg");
            errorParagraph.innerHTML = "";
        }


        if(e.target.id == "email"){
            if(e.target.value.match(regex.emailRegex) === null && e.target.value.length > 0){
                e.target.style = "border : 3px solid red";
                const errorParagraph = document.getElementById("emailErrorMsg");
                errorParagraph.innerHTML = "Email incorrect";
            }
            else{
                e.target.style = "border : none";
                const errorParagraph = document.getElementById("emailErrorMsg");
                errorParagraph.innerHTML = "";
            }
    }
}
}


const urlForm = window.location.search;

const urlSearchParamsForm = new URLSearchParams(urlForm);

const formFirstName = urlSearchParamsForm.get('firstName');
const formLastName = urlSearchParamsForm.get('lastName');
const formAddress = urlSearchParamsForm.get('address');
const formCity = urlSearchParamsForm.get('city');
const formEmail = urlSearchParamsForm.get('email');
console.log(formFirstName, formLastName, formAddress, formCity, formEmail)




     
      
     
      
      
      
      










