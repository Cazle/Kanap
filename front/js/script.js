/*
Insertion produits page d'accueil
*/

// créer une requête API fetch sous forme de promesse
fetch("http://localhost:3000/api/products")
    // récupère les données et on les interprète au format JSON
    .then(data => data.json())
    .then(listOfProduct => {
        //traiter les données dans l'ordre d'arrivée grâce à une boucle for
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
    
    
    // on affiche un message d'erreur en cas de problème
    .catch( function(err) {
        let error = document.querySelector("main");
        error.innerHTML = `<h2 style="color:red;">Une erreur est survenue !</h2>`
    })