window.addEventListener('DOMContentLoaded', getApi())

function getApi() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => data.forEach(element => createProducts(element)))
}


function createProducts(product) {
    const cardProduct = document.createElement('button');
    cardProduct.classList.add('card-products');

    const containerCard = document.createElement('div');
    containerCard.classList.add('card');

    const imgCard = document.createElement('img');
    imgCard.src = product.image;
    imgCard.alt = product.title;

    const divTitle = document.createElement('div')
    divTitle.classList.add('div-h2');    

    const titleCard = document.createElement('h2');
    titleCard.textContent = product.title;

    cardProduct.appendChild(containerCard);
    containerCard.appendChild(imgCard);
    containerCard.appendChild(divTitle);
    divTitle.appendChild(titleCard);

    document.querySelector('.section-products').appendChild(cardProduct);

}