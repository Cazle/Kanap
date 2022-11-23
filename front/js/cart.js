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

  const getDom = event.target.closest('article');
  const getId = getDom.dataset._id;
  const getColors = getDom.dataset.colors;
  

  let findCart = cart.find(product => product.getId == getId && product.getColors == getColors)
  let filterCart = cart.filter(filterCart !== findCart)
  
  
  deleteItem.forEach(i = 0, i < deleteItem.length, i++);{

     deleteItem.addEventListener("click", (i) => {
      cart = productInLocalStorage(_id, colors)
      cart.splice(i, 1)
      cart.remove();
      saveCart(JSON.stringify('cart'));
      
    })
    
  }
}



     
      
     
      
      
      
      










