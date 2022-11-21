let productInLocalStorage = JSON.parse(localStorage.getItem("cart"));

const container = document.getElementById("cart__items")

if (productInLocalStorage === null) {
    container.innerHTML = `<section id="cart__items"><h2>Le panier est vide<h2></section>`
}

productInLocalStorage.forEach((item, i)=> {
    const article =`
        <article class="cart__item" data-id="${productInLocalStorage[i]._id}" data-color="product-color">
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

    container.insertAdjacentHTML('beforeend', article);

})

function deleteProduct(event){

  let listOfProduct = event.target.closest('article');
  let productId = listOfProduct._id;
  let productColor = listOfProduct.colors;

  let cart = productInLocalStorage();
  let deleteItem = cart.find(p => p._id === productId && p.colors === productColor)
  let cartFilter = cart.filter(p => p !== deleteItem)

  listOfProduct.remove();
  localStorage.setItem('cart',JSON.stringify(cartFilter))
}



