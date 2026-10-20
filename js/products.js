window.defaultProductImage = 'assets/images/products/product-placeholder.svg';

window.productCatalog = [
  {
    id: 'prod-1001',
    name: 'Premium Engine Air Filter',
    brand: 'Bosch',
    code: 'ENG-1001',
    price: 420,
    stock: 18,
    category: 'Engine parts',
    image: 'assets/images/products/premium-engine-air-filter.svg',
    description: 'High-efficiency air filter that improves engine airflow and protects combustion chambers from dust and debris.',
    shortDescription: 'Improves engine performance and protects against dust and debris.',
    features: ['HEPA-grade filtration', 'Long service life', 'Easy installation'],
    featured: true
  },
  {
    id: 'prod-1002',
    name: 'Front Brake Pad Set',
    brand: 'Akebono',
    code: 'BRK-2004',
    price: 980,
    stock: 14,
    category: 'Brake parts',
    image: 'assets/images/products/front-brake-pad-set.svg',
    description: 'Reliable front brake pad set for quiet stopping power and longer axle life in city and highway driving.',
    shortDescription: 'Quiet braking performance and improved stopping power.',
    features: ['Low-noise compound', 'High heat resistance', 'OEM-compatible fit'],
    featured: true
  },
  {
    id: 'prod-1003',
    name: '12V Car Battery 70Ah',
    brand: 'Exide',
    code: 'BAT-3001',
    price: 2350,
    stock: 9,
    category: 'Batteries',
    image: 'assets/images/products/car-battery-70ah.svg',
    description: 'Maintenance-ready 12V battery with strong starting power and excellent resistance to heat and vibration.',
    shortDescription: 'Reliable starting power for daily driving and consistent performance.',
    features: ['70Ah capacity', 'Heat-resistant', 'Long cycle life'],
    featured: true
  },
  {
    id: 'prod-1004',
    name: 'Synthetic Engine Oil 5W-30',
    brand: 'Mobil 1',
    code: 'FIL-4501',
    price: 640,
    stock: 25,
    category: 'Filters and oils',
    image: 'assets/images/products/synthetic-engine-oil-5w-30.svg',
    description: 'High-performance synthetic engine oil for cleaner operation, smooth acceleration, and engine protection.',
    shortDescription: 'Protects engine parts while improving efficiency and smoothness.',
    features: ['Synthetic blend', 'Cold start protection', 'Engine cleanliness'],
    featured: true
  },
  {
    id: 'prod-1005',
    name: 'Spark Plug Set 4-Pack',
    brand: 'NGK',
    code: 'IGN-1104',
    price: 560,
    stock: 32,
    category: 'Engine parts',
    image: 'assets/images/products/spark-plug-set-4-pack.svg',
    description: 'Copper-core spark plugs designed for reliable ignition, efficient fuel burn, and reduced misfires.',
    shortDescription: 'Reliable ignition support and smoother engine idling.',
    features: ['4-pack', 'Lower emissions', 'Long-life design'],
    featured: false
  },
  {
    id: 'prod-1006',
    name: 'All Season Tire 225/55R17',
    brand: 'Michelin',
    code: 'TIR-6121',
    price: 2950,
    stock: 10,
    category: 'Tires and wheels',
    image: 'assets/images/products/all-season-tire-225-55r17.svg',
    description: 'Road-focused tire set offering stable grip, controlled braking, and quieter cruising across varied conditions.',
    shortDescription: 'Stable road grip and comfortable all-season driving.',
    features: ['All-season use', 'Low road noise', 'High traction'],
    featured: false
  },
  {
    id: 'prod-1007',
    name: 'Headlight Assembly',
    brand: 'Valeo',
    code: 'ELE-2201',
    price: 1850,
    stock: 7,
    category: 'Electrical components',
    image: 'assets/images/products/headlight-assembly.svg',
    description: 'Clear and durable headlight assembly that restores visibility and adds a sharper, modern look to the front end.',
    shortDescription: 'Improves night visibility and vehicle front styling.',
    features: ['Crystal clear optics', 'Water-resistant', 'Quick replacement'],
    featured: false
  },
  {
    id: 'prod-1008',
    name: 'Front Suspension Strut',
    brand: 'KYB',
    code: 'SUS-4113',
    price: 2240,
    stock: 6,
    category: 'Suspension parts',
    image: 'assets/images/products/front-suspension-strut.svg',
    description: 'Heavy-duty suspension strut that absorbs road shocks and improves vehicle stability on uneven roads.',
    shortDescription: 'Improves ride comfort and road stability.',
    features: ['Shock absorption', 'Reduced vibration', 'Vehicle stability'],
    featured: false
  },
  {
    id: 'prod-1009',
    name: 'Cabin Air Filter',
    brand: 'Mann-Filter',
    code: 'FIL-9033',
    price: 320,
    stock: 28,
    category: 'Filters and oils',
    image: 'assets/images/products/cabin-air-filter.svg',
    description: 'High-flow cabin air filter that keeps the vehicle interior fresh and reduces dust and odors.',
    shortDescription: 'Provides cleaner cabin air and better HVAC airflow.',
    features: ['Dust filtration', 'Odor reduction', 'Fast replacement'],
    featured: false
  },
  {
    id: 'prod-1010',
    name: 'Battery Terminal Kit',
    brand: 'Duralast',
    code: 'ELE-4010',
    price: 430,
    stock: 20,
    category: 'Electrical components',
    image: 'assets/images/products/battery-terminal-kit.svg',
    description: 'Corrosion-resistant battery terminal connectors for secure power transfer and cleaner electrical performance.',
    shortDescription: 'Secure connections and better electrical reliability.',
    features: ['Corrosion-resistant', 'Quick fit', 'Strong current flow'],
    featured: false
  },
  {
    id: 'prod-1011',
    name: 'Car Care Detail Kit',
    brand: '3M',
    code: 'ACC-1104',
    price: 760,
    stock: 12,
    category: 'Accessories',
    image: 'assets/images/products/car-care-detail-kit.svg',
    description: 'A complete detailing kit with polishing tools and cleaning products to keep your vehicle looking showroom-ready.',
    shortDescription: 'Cleaning and finishing kit for a polished exterior and interior.',
    features: ['Polishing kit', 'Interior cleaner', 'Protective finish'],
    featured: true
  },
  {
    id: 'prod-1012',
    name: 'Heavy Duty Clutch Kit',
    brand: ' Sachs',
    code: 'ENG-2004',
    price: 3660,
    stock: 4,
    category: 'Engine parts',
    image: 'assets/images/products/heavy-duty-clutch-kit.svg',
    description: 'Durable clutch kit for smoother gear engagement and better resistance under heavy city traffic and towing conditions.',
    shortDescription: 'Smoother traction and better power transfer.',
    features: ['Improved grip', 'Longer life', 'Heavy-duty design'],
    featured: false
  }
];

window.getProductById = function getProductById(productId) {
  return window.productCatalog.find((product) => product.id === productId) || null;
};

window.getProductByCode = function getProductByCode(code) {
  return window.productCatalog.find((product) => product.code.toLowerCase() === code.toLowerCase()) || null;
};

window.formatCurrency = function formatCurrency(value) {
  return new Intl.NumberFormat('en-EG', {
    style: 'currency',
    currency: 'EGP',
    maximumFractionDigits: 0
  }).format(value || 0);
};

window.renderFeaturedProducts = function renderFeaturedProducts(containerId = 'featuredProductsContainer', limit = 4) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const featured = window.productCatalog.filter((product) => product.featured).slice(0, limit);
  container.innerHTML = featured.map((product) => `
    <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
      <article class="card product-card h-100">
        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='assets/images/products/product-placeholder.svg';" />
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="stock-badge ${product.stock > 0 ? 'in-stock' : 'out-stock'}">${product.stock > 0 ? 'In stock' : 'Out of stock'}</span>
            <span class="text-muted small">${product.brand}</span>
          </div>
          <h5 class="card-title">${product.name}</h5>
          <p class="text-muted small mb-2">${product.code}</p>
          <div class="price-tag mb-3">${window.formatCurrency(product.price)}</div>
          <div class="mt-auto d-flex gap-2">
            <a href="product-details.html?id=${product.id}" class="btn btn-outline-primary flex-grow-1">Details</a>
            <button class="btn btn-primary flex-grow-1 add-to-cart-btn" data-product-id="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>Add</button>
          </div>
        </div>
      </article>
    </div>
  `).join('');

  document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-product-id');
      if (window.addToCart) {
        window.addToCart(productId, 1);
      }
    });
  });
};

window.renderProductGrid = function renderProductGrid(products, containerId = 'productGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!products.length) {
    container.innerHTML = `
      <div class="col-12">
        <div class="empty-state">
          <i class="bi bi-search fs-1 d-block mb-3 text-primary"></i>
          <h4>No products match your search.</h4>
          <p class="mb-0">Try changing the category, price range, or search term.</p>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = products.map((product) => `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <article class="card product-card h-100">
        <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='assets/images/products/product-placeholder.svg';" />
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="stock-badge ${product.stock > 0 ? 'in-stock' : 'out-stock'}">${product.stock > 0 ? 'In stock' : 'Out of stock'}</span>
            <span class="text-muted small">${product.category}</span>
          </div>
          <h5 class="card-title">${product.name}</h5>
          <p class="text-muted small mb-2">${product.brand} · ${product.code}</p>
          <div class="price-tag mb-3">${window.formatCurrency(product.price)}</div>
          <div class="mt-auto d-flex gap-2">
            <a href="product-details.html?id=${product.id}" class="btn btn-outline-primary flex-grow-1">Details</a>
            <button class="btn btn-primary flex-grow-1 add-to-cart-btn" data-product-id="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>Add</button>
          </div>
        </div>
      </article>
    </div>
  `).join('');

  document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-product-id');
      if (window.addToCart) {
        window.addToCart(productId, 1);
      }
    });
  });
};

window.getProductCategoryOptions = function getProductCategoryOptions() {
  return [...new Set(window.productCatalog.map((product) => product.category))].sort();
};

window.getFilteredProducts = function getFilteredProducts({ query = '', category = 'All', sort = 'featured', minPrice = 0, maxPrice = Number.MAX_SAFE_INTEGER } = {}) {
  const searchTerm = query.trim().toLowerCase();

  let filtered = window.productCatalog.filter((product) => {
    const matchesQuery = !searchTerm || product.name.toLowerCase().includes(searchTerm) || product.code.toLowerCase().includes(searchTerm);
    const matchesCategory = category === 'All' || product.category === category;
    const matchesMin = Number(product.price) >= Number(minPrice || 0);
    const matchesMax = Number(product.price) <= Number(maxPrice || Number.MAX_SAFE_INTEGER);
    return matchesQuery && matchesCategory && matchesMin && matchesMax;
  });

  if (sort === 'price-low-high') {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-high-low') {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'name') {
    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filtered = filtered.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
  }

  return filtered;
};

window.renderProductDetail = function renderProductDetail(productId) {
  const detailContainer = document.getElementById('productDetailContainer');
  const relatedContainer = document.getElementById('relatedProductsContainer');
  if (!detailContainer) return;

  const product = getProductById(productId) || window.productCatalog[0];

  if (!product) {
    detailContainer.innerHTML = `
      <div class="empty-state">
        <h4>Product not found.</h4>
        <p class="mb-3">The requested spare part is not available in the demo catalog.</p>
        <a href="spare-parts.html" class="btn btn-primary">Browse all parts</a>
      </div>
    `;
    return;
  }

  detailContainer.innerHTML = `
    <div class="row g-4 align-items-center">
      <div class="col-lg-6">
        <img class="detail-image" src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='assets/images/products/product-placeholder.svg';" />
      </div>
      <div class="col-lg-6">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span class="stock-badge ${product.stock > 0 ? 'in-stock' : 'out-stock'}">${product.stock > 0 ? 'In stock' : 'Out of stock'}</span>
          <span class="text-muted">Code: ${product.code}</span>
        </div>
        <h1 class="mb-3">${product.name}</h1>
        <p class="text-muted">${product.brand}</p>
        <div class="price-tag mb-3">${window.formatCurrency(product.price)}</div>
        <p>${product.description}</p>
        <div class="mb-3">
          <label class="form-label" for="quantitySelector">Quantity</label>
          <div class="qty-control" style="width: 140px;">
            <button class="qty-btn" type="button" data-qty-adjust="-1">-</button>
            <input id="quantitySelector" class="form-control border-0 text-center" type="number" min="1" max="${Math.max(product.stock, 1)}" value="1" />
            <button class="qty-btn" type="button" data-qty-adjust="1">+</button>
          </div>
        </div>
        <div class="d-flex gap-2 mb-4">
          <button class="btn btn-primary btn-lg add-to-cart-btn" data-product-id="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>Add to cart</button>
          <a href="spare-parts.html" class="btn btn-outline-primary btn-lg">Continue shopping</a>
        </div>
        <ul class="list-unstyled">
          ${product.features.map((feature) => `<li><i class="bi bi-check-circle-fill text-success me-2"></i>${feature}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  const qtyInput = document.getElementById('quantitySelector');
  document.querySelectorAll('[data-qty-adjust]').forEach((actionButton) => {
    actionButton.addEventListener('click', () => {
      if (!qtyInput) return;
      const delta = Number(actionButton.getAttribute('data-qty-adjust'));
      const currentValue = Number(qtyInput.value || 1);
      const nextValue = Math.min(Math.max(currentValue + delta, 1), Math.max(product.stock, 1));
      qtyInput.value = nextValue;
    });
  });

  const addToCartButton = detailContainer.querySelector('.add-to-cart-btn');
  addToCartButton.addEventListener('click', () => {
    const selectedQuantity = Number(qtyInput.value || 1);
    if (window.addToCart) {
      window.addToCart(product.id, selectedQuantity);
    }
  });

  if (relatedContainer) {
    const related = window.productCatalog.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
    relatedContainer.innerHTML = related.length ? related.map((relatedProduct) => `
      <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
        <article class="card product-card h-100">
          <img src="${relatedProduct.image}" alt="${relatedProduct.name}" onerror="this.onerror=null;this.src='assets/images/products/product-placeholder.svg';" />
          <div class="card-body">
            <h6>${relatedProduct.name}</h6>
            <p class="text-muted small mb-2">${relatedProduct.brand}</p>
            <div class="price-tag mb-2">${window.formatCurrency(relatedProduct.price)}</div>
            <a class="btn btn-outline-primary w-100" href="product-details.html?id=${relatedProduct.id}">View details</a>
          </div>
        </article>
      </div>
    `).join('') : '<div class="col-12"><div class="empty-state"><p class="mb-0">No related items available.</p></div></div>';
  }
};
