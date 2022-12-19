/*
Insertion produits page d'accueil
*/

/*Récupération des infos produits avec un fetch*/
fetch("http://localhost:3000/api/products")
    
    .then(data => data.json())
    .then(listOfProduct => {
        
        for (product of listOfProduct) {
            document.getElementById("items").innerHTML += `
            <a href="./product.html?id=${product._id}">
                <article>
                <img src="${product.imageUrl}" alt="${product.altTxt}">
                <h3 class="productName">${product.name}</h3>
                <p class="productDescription">${product.description}</p>
                </article>
            </a> 
            `
        }
    })
    
    /* Fonction d'erreur en cas de problème avec l'API, ou si le serveur ne se connecte pas*/
    .catch( function(err) {
        let error = document.querySelector("main");
        error.innerHTML = `<h2 style="color:red;">Une erreur est survenue !</h2>`
    })