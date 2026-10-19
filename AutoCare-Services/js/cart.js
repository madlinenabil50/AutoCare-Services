window.addToCart = function addToCart(productId, quantity = 1) {
  const cart = window.getStorage('omc_cart', []);
  const product = window.getProductById(productId);
  if (!product) {
    window.showNotification('Product not found in the catalog.', 'error');
    return;
  }

  const existingItem = cart.find((item) => item.productId === productId);
  const currentQty = existingItem ? existingItem.quantity : 0;
  const nextQuantity = currentQty + Number(quantity || 1);

  if (nextQuantity > product.stock) {
    window.showNotification(`Only ${product.stock} units available for this item.`, 'warning');
    return;
  }

  if (existingItem) {
    existingItem.quantity = nextQuantity;
  } else {
    cart.push({ productId, quantity: Number(quantity || 1) });
  }

  window.setStorage('omc_cart', cart);
  window.updateNavCartCount();
  window.showNotification(`${product.name} added to cart.`, 'success');
  if (window.renderCartPage) {
    window.renderCartPage();
  }
};

window.renderCartPage = function renderCartPage() {
  const container = document.getElementById('cartPageContainer');
  if (!container) return;

  const cart = window.getStorage('omc_cart', []);
  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="bi bi-cart-x fs-1 d-block mb-3 text-primary"></i>
        <h3>Your cart is empty</h3>
        <p class="mb-3">Add trusted spare parts to continue.</p>
        <a href="spare-parts.html" class="btn btn-primary">Continue shopping</a>
      </div>
    `;
    return;
  }

  const itemRows = cart.map((item) => {
    const product = window.getProductById(item.productId);
    if (!product) return '';

    return `
      <div class="card mb-3">
        <div class="card-body">
          <div class="cart-row">
            <div class="d-flex align-items-center gap-3">
              <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='assets/images/products/product-placeholder.svg';" />
              <div>
                <h5 class="mb-1">${product.name}</h5>
                <p class="text-muted mb-0">${product.code}</p>
              </div>
            </div>
            <div>
              <small class="text-muted d-block">Unit price</small>
              <strong>${window.formatCurrency(product.price)}</strong>
            </div>
            <div>
              <small class="text-muted d-block">Quantity</small>
              <div class="qty-control">
                <button type="button" class="qty-btn" data-cart-action="decrease" data-product-id="${product.id}">-</button>
                <span class="px-2 fw-semibold">${item.quantity}</span>
                <button type="button" class="qty-btn" data-cart-action="increase" data-product-id="${product.id}">+</button>
              </div>
            </div>
            <div>
              <small class="text-muted d-block">Subtotal</small>
              <strong>${window.formatCurrency(product.price * item.quantity)}</strong>
            </div>
            <div>
              <button type="button" class="btn btn-outline-danger btn-sm" data-cart-action="remove" data-product-id="${product.id}">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = cart.reduce((sum, item) => {
    const product = window.getProductById(item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const shippingFee = subtotal > 0 ? 150 : 0;

  container.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-8">
        ${itemRows}
        <div class="d-flex justify-content-between mt-4 flex-wrap gap-2">
          <a href="spare-parts.html" class="btn btn-outline-primary">Continue shopping</a>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="summary-box">
          <h4 class="mb-3">Order summary</h4>
          <div class="summary-item"><span>Subtotal</span><span>${window.formatCurrency(subtotal)}</span></div>
          <div class="summary-item"><span>Shipping</span><span>${window.formatCurrency(shippingFee)}</span></div>
          <div class="summary-item fw-bold"><span>Total</span><span>${window.formatCurrency(subtotal + shippingFee)}</span></div>
          <a href="checkout.html" class="btn btn-primary w-100 mt-3">Proceed to checkout</a>
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('[data-cart-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-product-id');
      const action = button.getAttribute('data-cart-action');
      const item = cart.find((entry) => entry.productId === productId);
      if (!item) return;

      if (action === 'increase') {
        const product = window.getProductById(productId);
        if (product && item.quantity >= product.stock) {
          window.showNotification(`Only ${product.stock} units available for this product.`, 'warning');
          return;
        }
        item.quantity += 1;
      }

      if (action === 'decrease') {
        item.quantity -= 1;
      }

      if (action === 'remove' || item.quantity <= 0) {
        const updatedCart = cart.filter((entry) => entry.productId !== productId);
        window.setStorage('omc_cart', updatedCart);
        window.updateNavCartCount();
        window.renderCartPage();
        return;
      }

      window.setStorage('omc_cart', cart);
      window.updateNavCartCount();
      window.renderCartPage();
    });
  });
};

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('cartPageContainer')) {
    window.renderCartPage();
  }
});
