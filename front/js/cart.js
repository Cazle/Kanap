const productInLocalStorage = JSON.parse(localStorage.getItem("cart"));

const container = document.getElementById("cart__items")

if (productInLocalStorage === null) {
    container.innerHTML = `<section id="cart__items"><h2>Le panier est vide<h2></section>`
}


productInLocalStorage.forEach((color, i)=> {
    const article =`
        <article class="cart__item" data-id="${productInLocalStorage[i]._id}" data-color="${productInLocalStorage[i].colors}">
                <div class="cart__item__img">
                  <img src="${productInLocalStorage[i].imageUrl}" alt="${productInLocalStorage[i].altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${productInLocalStorage[i].name}</h2>
                    <p>${productInLocalStorage[i].colors}</p>
                   <p>${productInLocalStorage[i].price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productInLocalStorage[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                </div>
              </article>
      `;

    container.insertAdjacentHTML("afterbegin", article);

})

function removeItem(event){

  const deleteItem = document.querySelectorAll("deleteItem")

  
  const getId = productInLocalStorage[i]._id;
  const getColors =productInLocalStorage[i].colors;
  

  let findCart = cart.find(product => product.getId === getId && product.getColors === getColors)
  let filterCart = cart.filter(filterCart !== findCart)
  
  
  deleteItem.forEach(i = 0, i < deleteItem.length, i++);{

     deleteItem.addEventListener("click", (i) => {
      cart = productInLocalStorage();
      cart.splice(i, 1)
      cart.remove();
      saveCart(JSON.stringify('cart'));
      
    })
    
  }
  removeItem();
}


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
  adressError : document.getElementById('adressErrorMsg').value,
  cityError : document.getElementById('cityErrorMsg').value,
  emailError : document.getElementById('emailErrorMsg').value,

}

const regex = {

  firstNameAndLastNameRegex: /^[a-zA-Z'_-\s]+$/,
  adressRegex: /^[a-zA-Z'0-9_-\s]+$/,
  cityRegex: /^[a-zA-Z'_-\s]+$/,
  emailRegex: /^[a-zA-Z0-9._]+[@]{1}[a-zA-Z0-9._]+[.]{1}[a-z]{2,10}+$/,
}

const validFirstName = (inputFirstName) =>{

  
  

}

  





     
      
     
      
      
      
      










