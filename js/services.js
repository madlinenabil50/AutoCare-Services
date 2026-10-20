window.serviceCatalog = [
  {
    id: 'svc-001',
    name: 'Engine Diagnostics',
    category: 'Engine',
    duration: '45 min',
    price: 550,
    description: 'Advanced scan and inspection to find engine warnings, performance issues, and fault codes before they become major repairs.',
    icon: 'bi bi-activity'
  },
  {
    id: 'svc-002',
    name: 'Oil and Filter Change',
    category: 'Maintenance',
    duration: '35 min',
    price: 420,
    description: 'Replace engine oil and filter, inspect leaks, and ensure smoother operation with manufacturer-compatible products.',
    icon: 'bi bi-droplet-half'
  },
  {
    id: 'svc-003',
    name: 'Brake Inspection and Repair',
    category: 'Safety',
    duration: '60 min',
    price: 780,
    description: 'Diagnose brake wear, inspect pads, discs, and fluid, then perform safe repairs with quality replacement components.',
    icon: 'bi bi-stoplights'
  },
  {
    id: 'svc-004',
    name: 'Battery Inspection and Replacement',
    category: 'Electrical',
    duration: '30 min',
    price: 350,
    description: 'Check battery health, terminals, and voltage levels before replacing worn-out units with reliable alternatives.',
    icon: 'bi bi-battery-full'
  },
  {
    id: 'svc-005',
    name: 'Tire Services',
    category: 'Tires',
    duration: '40 min',
    price: 480,
    description: 'Balance, rotate, inspect pressure, and advise on tire replacement based on wear and seasonal requirements.',
    icon: 'bi bi-circle-fill'
  },
  {
    id: 'svc-006',
    name: 'Air Conditioning Maintenance',
    category: 'Comfort',
    duration: '50 min',
    price: 620,
    description: 'Inspect cool air output, flush refrigerant, and check filters and blower performance to keep cabin comfort high.',
    icon: 'bi bi-snow3'
  },
  {
    id: 'svc-007',
    name: 'General Vehicle Inspection',
    category: 'Inspection',
    duration: '75 min',
    price: 890,
    description: 'A full check of key systems including lights, belts, fluids, steering, suspension, and seasonal safety items.',
    icon: 'bi bi-shield-check'
  }
];

window.renderServiceCatalog = function renderServiceCatalog(containerId = 'serviceCatalogContainer') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = window.serviceCatalog.map((service) => `
    <div class="col-lg-4 col-md-6 mb-4">
      <article class="card service-card h-100">
        <div class="card-body p-4">
          <div class="icon-box mb-3">
            <i class="${service.icon}"></i>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="badge rounded-pill bg-primary-subtle text-primary">${service.category}</span>
            <span class="text-muted small">${service.duration}</span>
          </div>
          <h4>${service.name}</h4>
          <p class="text-muted">${service.description}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="price-tag fs-4">${window.formatCurrency(service.price)}</div>
            <a href="book-service.html?service=${encodeURIComponent(service.name)}" class="btn btn-primary">Book now</a>
          </div>
        </div>
      </article>
    </div>
  `).join('');
};

window.getServiceCategories = function getServiceCategories() {
  return ['All', ...new Set(window.serviceCatalog.map((service) => service.category))];
};

window.filterServices = function filterServices(search = '', category = 'All') {
  const term = search.trim().toLowerCase();
  return window.serviceCatalog.filter((service) => {
    const matchesText = !term || service.name.toLowerCase().includes(term) || service.description.toLowerCase().includes(term);
    const matchesCategory = category === 'All' || service.category === category;
    return matchesText && matchesCategory;
  });
};

window.renderFilteredServices = function renderFilteredServices(search = '', category = 'All', containerId = 'serviceCatalogContainer') {
  const filtered = window.filterServices(search, category);
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!filtered.length) {
    container.innerHTML = `
      <div class="col-12">
        <div class="empty-state">
          <i class="bi bi-funnel fs-1 d-block mb-3 text-primary"></i>
          <h4>No services found</h4>
          <p class="mb-0">Try another keyword or service category.</p>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((service) => `
    <div class="col-lg-4 col-md-6 mb-4">
      <article class="card service-card h-100">
        <div class="card-body p-4">
          <div class="icon-box mb-3">
            <i class="${service.icon}"></i>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="badge rounded-pill bg-primary-subtle text-primary">${service.category}</span>
            <span class="text-muted small">${service.duration}</span>
          </div>
          <h4>${service.name}</h4>
          <p class="text-muted">${service.description}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <div class="price-tag fs-4">${window.formatCurrency(service.price)}</div>
            <a href="book-service.html?service=${encodeURIComponent(service.name)}" class="btn btn-primary">Book now</a>
          </div>
        </div>
      </article>
    </div>
  `).join('');
};
