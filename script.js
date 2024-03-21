window.addEventListener('DOMContentLoaded', () => {
    getApi();
    getCategory();
    filterByCategory();
})

function getApi() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
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
    cardProduct.setAttribute("onclick", "openModal()")
    

    const containerCard = document.createElement('div');
    containerCard.classList.add('card');
    // containerCard.setAttribute("onclick", "openModal()")    

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

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    
}