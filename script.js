let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");
    
    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = total.toFixed(2);
}
