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
                    <button onclick="removeItem(productInLocalStorage, ${i})" id="removeItem-${i}"  class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </button>
                  </div>
                </div>
              </article>
      `;

    container.insertAdjacentHTML('beforeend', article);

})

const removeItemFromArray = (arrayItem) => {
    return arrayItem.slice(1, 3);
}

const removeItem = (item, i) => {
    console.log(item[i]);
    const arrayItem = [1, 2, 3, 4];
    console.log(arrayItem);
    const finalArray = removeItemFromArray(arrayItem);
    console.log(finalArray);
}
