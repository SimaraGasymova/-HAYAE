// Те же 6 товаров, что и в каталоге
const products = [
    { id: 1, name: "Модель «Ромашка»", price: 2500, image: "images/chamomile.jpg" },
    { id: 2, name: "Модель «Лаванда»", price: 3200, image: "images/lavender.jpg" },
    { id: 3, name: "Модель «Закат»", price: 2800, image: "images/zakat.jpg" },
    { id: 4, name: "Модель «Ночь»", price: 3500, image: "images/night.jpg" },
    { id: 5, name: "Модель «Мятная свежесть»", price: 3000, image: "images/mint.jpg" },
    { id: 6, name: "Модель «Радужное настроение»", price: 3900, image: "images/good_mood.jpg" }
];

function showPopular() {
    const grid = document.getElementById("popular-grid");
    if (!grid) return;
    // Показываем только первые 3 товара на главной
    const popular = products.slice(0, 3);
    grid.innerHTML = popular.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.price} ₽</p>
            <button onclick="addToCart(${p.id})">В корзину</button>
        </div>
    `).join('');
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    let cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
    alert(`${product.name} добавлена в корзину`);
}

showPopular();
