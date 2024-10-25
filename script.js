let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    
    if (cart.length > 0) {
        cartCount.textContent = cart.length;
    } else {
        cartCount.textContent = 0;
    }
}

function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} - Php ${item.price}</span>
            <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    cartTotalDiv.textContent = `\nTotal: Php ${total}`;
    document.getElementById('cart-modal').style.display = 'block';
}

function deleteItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function checkout() {
    localStorage.removeItem('cart');
    cart = [];
    updateCartCount();
    window.location.href = 'order.html';
}

function resetCart() {
    localStorage.removeItem('cart');
    cart = [];
    updateCartCount();
    displayCart();
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

document.querySelector('.cart-icon').addEventListener('click', displayCart);

document.getElementById('submit-btn').addEventListener('click', function() {
    alert("Your concern has been submitted!");
});

function toggleHamburgerMenu() {
    var hamburgerMenuContent = document.querySelector('.hamburger-menu-content');
    hamburgerMenuContent.classList.toggle('show');
}