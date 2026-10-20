window.loadCheckoutSummary = function loadCheckoutSummary() {
  const cart = window.getStorage('omc_cart', []);
  const summary = document.getElementById('checkoutSummary');
  if (!summary) return;

  if (!cart.length) {
    summary.innerHTML = `<div class="empty-state"><p class="mb-0">Your cart is empty. Add products before checkout.</p></div>`;
    return;
  }

  let subtotal = 0;
  const itemsHtml = cart.map((item) => {
    const product = window.getProductById(item.productId);
    if (!product) return '';
    subtotal += product.price * item.quantity;
    return `
      <div class="d-flex justify-content-between align-items-center border-bottom py-2">
        <div>
          <div class="fw-semibold">${product.name}</div>
          <small class="text-muted">Qty: ${item.quantity}</small>
        </div>
        <span>${window.formatCurrency(product.price * item.quantity)}</span>
      </div>
    `;
  }).join('');

  const shippingFee = subtotal > 0 ? 150 : 0;
  const total = subtotal + shippingFee;

  summary.innerHTML = `
    ${itemsHtml}
    <div class="summary-item mt-3"><span>Subtotal</span><span>${window.formatCurrency(subtotal)}</span></div>
    <div class="summary-item"><span>Shipping fee</span><span>${window.formatCurrency(shippingFee)}</span></div>
    <div class="summary-item fw-bold"><span>Total</span><span>${window.formatCurrency(total)}</span></div>
  `;
};

window.submitCheckoutOrder = function submitCheckoutOrder(formData) {
  const cart = window.getStorage('omc_cart', []);
  if (!cart.length) return null;

  const subtotal = cart.reduce((sum, item) => {
    const product = window.getProductById(item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const shippingFee = subtotal > 0 ? 150 : 0;
  const total = subtotal + shippingFee;

  const order = {
    id: window.generateDemoId('order'),
    orderNumber: `ORD-${Math.random().toString(16).slice(2, 8).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: 'Processing',
    ...formData,
    items: cart,
    subtotal,
    shippingFee,
    total
  };

  const savedOrders = window.getStorage('omc_demo_orders', []);
  savedOrders.unshift(order);
  window.setStorage('omc_demo_orders', savedOrders);
  window.setStorage('omc_cart', []);
  window.updateNavCartCount();
  return order;
};
