// ** Variables Goblales ** //

let cantidad = 1
let cart = []

// ** Carga de productos desde el .JSON ** //

async function loadProducts() {
    try {
        const response = await fetch('../products.json')
        const products = await response.json()
        displayProducts(products.products)
    } catch (error) {
        console.error('Problema al cargar los productos: ', error)
    }

}

function displayProducts(products){
    const productsList = document.querySelector('.products')
    products.forEach(product => {
        const article = document.createElement('article')
        article.classList.add('product')

        // Formatear el precio como COP
        const formattedPrice = new Intl.NumberFormat('es-CO', { 
            style: 'currency', 
            currency: 'COP',
            maximumFractionDigits: 0
        }).format(product.price);

        article.innerHTML = [`
            <div class="product-main">
                <img class="product-main__image" src="${product.img}" alt="${product.name}">
                <h2 class="product-main__title">${product.name}</h2>
                <p class="product-main__description">${product.description}</p>
                <h3 class="product-main__price">${formattedPrice}</h3>
            </div>
            <button id="${product.price}" class="product__add-button" type="button" aria-label="Add product">Agregar</button>
            `]
            productsList.appendChild(article)

    });

}

loadProducts();