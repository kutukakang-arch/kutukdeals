async function loadProducts() {
    const response = await fetch("data/products.json");
    const products = await response.json();

    const container = document.getElementById("products");

    products.forEach(product => {
        container.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.title}">
                <div class="info">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <div class="rating">⭐ ${product.rating}</div>
                    <a class="button" href="${product.url}" target="_blank" rel="noopener noreferrer">
                        ${product.button}
                    </a>
                </div>
            </div>
        `;
    });
}

loadProducts();