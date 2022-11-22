let productInLocalStorage = JSON.parse(localStorage.getItem("cart"));

const container = document.getElementById("cart__items")

if (productInLocalStorage === null) {
    container.innerHTML = `<section id="cart__items"><h2>Le panier est vide<h2></section>`
}

productInLocalStorage.forEach((color, i, _id)=> {
    const article =`
        <article class="cart__item" data-id="{product-_id}" data-color="{product-color}">
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

  const deleteItem = document.querySelectorAll("deleteItem");

  for(buttonDelete of deleteItem){

    buttonDelete.addEventListener("Click", (event) =>{

      const getDom = event.target.closest("article");
      const getId = getDom.dataset._id;
      const getColor = getDom.dataset.color;
      if(window.confirm("Voulez vous supprimer ce produit ?"))
      deleteEvent(getId, getColor);
    })
  }
}

function deleteEvent (_id, color){
  let cart = productInLocalStorage();

  for (let i in cart){
    if(cart[i]._id === _id && cart[i].color === color){
      cart.splice(i, 1)
      saveCart(cart)
      location.reload();

    }
  }
}

  







