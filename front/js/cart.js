const productInLocalStorage = JSON.parse(localStorage.getItem("cart"));

const container = document.getElementById("cart__items")

if (productInLocalStorage === null) {
    container.innerHTML = `<section id="cart__items"><h2>Le panier est vide<h2></section>`
}

productInLocalStorage.forEach((color, i, _id)=> {
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



function listOfProductToDelete(){

let deleteButton = document.querySelectorAll("deleteItem");

function deleteItem(e) {

  const getDom = e.target.closest("article")
  const getId = getDom.dataset._id;
  const getColors = getDom.dataset.colors;

  

  deleteButton.addEventListner("click", (e) => {
    
      let cart = getCart();
      let productDelete = cart.find(product => product._id === getId && product.colors === getColors)
      let cartFilter = cart.filter(product => product!== productDelete)
    for(let i = 0; i > deleteButton.length; i++){
      deleteButton[i].
    }
  })

  getDom.remove();
  localStorage.setItem('cart', JSON.stringify(cartFilter))

 }

}




