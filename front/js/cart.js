let productInLocalStorage = JSON.parse(localStorage.getItem("cart"));

const container = document.getElementById("cart__items")


if (productInLocalStorage === null){
   const emptyBasket = `<section id="cart__items"><h2>Le panier est vide<h2></section>`
   container.innerHTML = emptyBasket;
}
else{
    let addProduct = [];

    for(i = 0; i < productInLocalStorage.length; i++){
        addProduct = addProduct + `
        <article class="cart__item" data-id="${productInLocalStorage[i]._id}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>Nom du produit</h2>
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
                </div>
              </article>
    
      ` ;
    } 
      if(i == productInLocalStorage.length){
        container.innerHTML = addProduct;}
      
    }
