window.renderOrdersPage = function renderOrdersPage() {
  const container = document.getElementById('ordersContainer');
  if (!container) return;

  const orders = window.getStorage('omc_demo_orders', []);
  if (!orders.length) {
    container.innerHTML = '<div class="empty-state"><p class="mb-0">No demo orders have been placed yet.</p></div>';
    return;
  }

  container.innerHTML = orders.map((order) => `
    <div class="border rounded p-3 mb-3">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
        <div><h5 class="mb-1">${order.orderNumber}</h5><div class="text-muted">Placed on ${new Date(order.createdAt).toLocaleDateString()}</div></div>
        <span class="badge bg-success">${order.status}</span>
      </div>
      <div class="row g-3">
        <div class="col-md-6"><strong>Payment:</strong> ${order.paymentMethod}</div>
        <div class="col-md-6"><strong>Delivery:</strong> ${order.deliveryMethod}</div>
        <div class="col-md-6"><strong>Address:</strong> ${order.deliveryAddress}</div>
        <div class="col-md-6"><strong>Total:</strong> ${window.formatCurrency(order.total)}</div>
      </div>
    </div>
  `).join('');
};
