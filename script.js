window.addEventListener('DOMContentLoaded', () => {
    getApi();
    getCategory();
    filterByCategory();
})

function getApi() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => data.forEach(element => createProducts(element)))
}

function filterByCategory(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(products => {
            document.querySelector('.section-products').innerHTML = '';
            products.forEach(product => createProducts(product));
        });
}

function createProducts(product) {
    const cardProduct = document.createElement('button');
    cardProduct.classList.add('card-products');
    cardProduct.setAttribute("onclick", "openModal(this)")

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

    // Agregamos la descripción como atributo de datos para cada tarjeta de producto
    cardProduct.dataset.description = product.description;
    cardProduct.dataset.price = product.price;
    cardProduct.dataset.image = product.image;
    
}

function openModal(card){
    const product = card.querySelector('h2').textContent;

    // Obtenemos la descripción y el precio del producto desde el atributo de datos
    const description = card.dataset.description;
    const price = '$' + card.dataset.price;
    const imageSrc = card.dataset.image;
   

    const modal = document.getElementById('myModal');
    modal.querySelector('h2').textContent = product;
    modal.querySelector('p').textContent = description + '. Price: ' + price;
    modal.querySelector('img').src = imageSrc;
    

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    
}