const container = document.getElementById("products");


fetch("data/products.json")
.then(response => response.json())
.then(products => {


products.forEach(product => {


container.innerHTML += `

<div class="card">

<img src="${product.image}">


<div class="info">

<h2>${product.name}</h2>

<div class="price">
${product.price}
</div>


<a class="button" href="${product.link}">
🛒 Comprar
</a>


</div>

</div>


`;


});


});