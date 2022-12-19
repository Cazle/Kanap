/*Affichage du numéro de commande, et une suppression de toute les données du LocalStorage*/
const urlId = window.location.search;
const UrlsearchParams = new URLSearchParams(urlId);
const id = UrlsearchParams.get('orderId');
const orderId = document.getElementById('orderId');

console.log(id);

orderId.innerText = id;
window.localStorage.clear();