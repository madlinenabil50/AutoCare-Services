window.safeParseJSON = function safeParseJSON(value, fallback) {
  try {
    return value === null || value === undefined ? fallback : JSON.parse(value);
  } catch (error) {
    return fallback;
  }
};

window.getStorage = function getStorage(key, fallback = []) {
  try {
    const item = localStorage.getItem(key);
    return item === null ? fallback : safeParseJSON(item, fallback);
  } catch (error) {
    return fallback;
  }
};

window.setStorage = function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
};

window.generateDemoId = function generateDemoId(prefix = 'demo') {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
};

window.showNotification = function showNotification(message, type = 'success') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast align-items-center text-bg-${type === 'error' ? 'danger' : type === 'warning' ? 'warning' : 'success'} border-0`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.setAttribute('aria-atomic', 'true');
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;
  toastContainer.appendChild(toast);
  const bootstrapToast = new bootstrap.Toast(toast, { delay: 2600 });
  bootstrapToast.show();
  toast.addEventListener('hidden.bs.toast', () => toast.remove());
};

window.getDemoSession = function getDemoSession() {
  return window.getStorage('omc_demo_session', null);
};

window.isLoggedIn = function isLoggedIn() {
  return Boolean(window.getDemoSession());
};

window.updateNavCartCount = function updateNavCartCount() {
  const cart = window.getStorage('omc_cart', []);
  const itemCount = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  document.querySelectorAll('[data-cart-count]').forEach((element) => {
    element.textContent = itemCount;
  });
  document.querySelectorAll('[data-cart-badge]').forEach((element) => {
    element.textContent = itemCount;
  });
};

window.updateAuthNavigation = function updateAuthNavigation() {
  const session = window.getDemoSession();
  const userLinks = document.querySelectorAll('[data-auth-user]');
  const guestLinks = document.querySelectorAll('[data-auth-guest]');

  if (session) {
    userLinks.forEach((element) => element.classList.remove('d-none'));
    guestLinks.forEach((element) => element.classList.add('d-none'));
  } else {
    userLinks.forEach((element) => element.classList.add('d-none'));
    guestLinks.forEach((element) => element.classList.remove('d-none'));
  }
};

window.renderNavbar = function renderNavbar() {
  const navbarRoot = document.getElementById('site-navbar');
  if (!navbarRoot) return;

  const session = window.getDemoSession();
  const profileLabel = session ? session.name || 'My Account' : 'Account';

  navbarRoot.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <span class="brand-mark"><i class="bi bi-car-front-fill"></i></span>
          AutoCare Pro
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="book-service.html">Book Service</a></li>
            <li class="nav-item"><a class="nav-link" href="spare-parts.html">Spare Parts</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          </ul>
          <div class="d-flex align-items-center gap-2">
            <a class="btn btn-link text-white position-relative p-0" href="cart.html" aria-label="View cart">
              <i class="bi bi-cart3 fs-5"></i>
              <span class="cart-badge" data-cart-badge>0</span>
            </a>
            <div class="dropdown" data-auth-user>
              <button class="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${profileLabel}
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="my-account.html">My Account</a></li>
                <li><a class="dropdown-item" href="my-bookings.html">My Bookings</a></li>
                <li><a class="dropdown-item" href="my-orders.html">My Orders</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><button class="dropdown-item text-danger logout-demo-btn" type="button">Logout</button></li>
              </ul>
            </div>
            <div class="d-flex gap-2" data-auth-guest>
              <a class="btn btn-outline-light" href="login.html">Login</a>
              <a class="btn btn-primary" href="register.html">Register</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.logout-demo-btn').forEach((button) => {
    button.addEventListener('click', () => {
      window.localStorage.removeItem('omc_demo_session');
      window.location.href = 'index.html';
    });
  });

  window.updateNavCartCount();
  window.updateAuthNavigation();
};

window.renderFooter = function renderFooter() {
  const footerRoot = document.getElementById('site-footer');
  if (!footerRoot) return;

  footerRoot.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <a class="navbar-brand mb-3 d-inline-flex" href="index.html">
              <span class="brand-mark"><i class="bi bi-car-front-fill"></i></span>
              AutoCare Pro
            </a>
            <p class="mb-3">Demo automotive service and spare parts center built for front-end workshops and local business showcases.</p>
            <p class="mb-0"><i class="bi bi-geo-alt me-2 text-primary"></i> 24 Service Avenue, New Cairo, Egypt</p>
          </div>
          <div class="col-lg-2 col-md-4">
            <h5 class="mb-3 text-white">Quick Links</h5>
            <ul class="list-unstyled d-grid gap-2">
              <li><a href="services.html">Maintenance Services</a></li>
              <li><a href="spare-parts.html">Spare Parts</a></li>
              <li><a href="book-service.html">Book Service</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-4">
            <h5 class="mb-3 text-white">Support</h5>
            <ul class="list-unstyled d-grid gap-2">
              <li><a href="my-account.html">Customer Account</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="register.html">Register</a></li>
              <li><a href="about.html">About Us</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-4">
            <h5 class="mb-3 text-white">Contact</h5>
            <ul class="list-unstyled d-grid gap-2">
              <li><i class="bi bi-telephone me-2 text-primary"></i> +966 55 426 9281</li>
              <li><i class="bi bi-envelope me-2 text-primary"></i> hello@autocare-demo.com</li>
              <li><i class="bi bi-clock me-2 text-primary"></i> Mon-Sat: 8am - 8pm</li>
            </ul>
          </div>
        </div>
        <hr class="my-4 border-secondary" />
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p class="mb-0">© ${new Date().getFullYear()} AutoCare Pro. Demo project for front-end use only.</p>
          <div class="d-flex gap-3">
            <a href="about.html">Privacy</a>
            <a href="contact.html">Support</a>
            <a href="services.html">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  `;
};

document.addEventListener('DOMContentLoaded', () => {
  window.renderNavbar();
  window.renderFooter();
  window.updateNavCartCount();
  if (document.getElementById('toastContainer')) {
    document.getElementById('toastContainer').className = 'toast-container position-fixed top-0 end-0 p-3';
  }
});
