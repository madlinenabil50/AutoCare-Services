
# Online Maintenance Center & Spare Parts System

This project is a front-end demo website for an automotive maintenance and spare parts business. It includes a clean automotive-focused design, an online maintenance booking flow, a spare-parts catalog, and a demo cart/checkout experience.

## Technologies used
- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Bootstrap Icons

## Folder structure
```text
online-maintenance-system/
├── index.html
├── services.html
├── book-service.html
├── spare-parts.html
├── product-details.html
├── cart.html
├── checkout.html
├── login.html
├── register.html
├── my-account.html
├── my-bookings.html
├── my-orders.html
├── contact.html
├── about.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── products.js
│   ├── common.js
│   ├── services.js
│   ├── booking.js
│   ├── cart.js
│   ├── checkout.js
│   ├── auth-demo.js
│   ├── account.js
│   └── orders.js
├── assets/
│   └── images/
├── README.md
└── .gitignore
```

## How to run
1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click on any HTML file, such as `index.html`.
4. Select "Open with Live Server".
5. The site will open in your default browser.

## Pages included
- Home page with categories, featured parts, and service overview.
- Services catalog with filtering and booking links.
- Booking form with validation and demo appointment confirmation.
- Spare parts catalog with filtering, search, and product detail pages.
- Cart summary with quantity controls and shipping total.
- Checkout form with order validation and demo order generation.
- Login page and registration page with demo-only account flow.
- Customer account dashboard with profile and order history.
- Bookings and orders pages for demo tracking.
- Contact and about pages.

## Features
- Responsive bootstrapped layout for desktop, tablet, and mobile.
- Reusable navigation and footer components.
- Centralized product catalog with consistent pricing and stock data.
- Cart and checkout logic using localStorage.
- Booking validation with past-date prevention.
- Demo auth flow with session-based access.
- Customer dashboard updates from localStorage.
- Search, filtering, sorting, and empty-state handling.
- Notifications for success, warnings, and errors.

## Demo data and localStorage limitations
This project is intentionally front-end only. It uses localStorage to simulate:
- Cart items
- Demo orders
- Demo bookings
- Demo user accounts and session data

This is not secure production authentication or a real booking system. No real credit card information, personal data, or backend services are used.

## Future backend integration
To connect a real backend later, the following areas would need to be implemented:
1. Authentication service with secure password hashing and JWT/session handling.
2. Database for customers, orders, bookings, and products.
3. Real inventory and stock management.
4. Payment processing integration with PCI-compliant providers.
5. Appointment scheduling and business logic for availability.
6. Image and media storage for products and service galleries.
7. API endpoints for products, cart, checkout, and account dashboards.

## Notes
The project intentionally labels booking, order, and authentication data as demo data throughout the UI. This keeps the experience honest and clearly front-end only.

# AutoCare-Services
Book maintenance services, shop genuine spare parts, and keep your drive smooth with expert automotive support.
 07dd8aa4582cbc1f0b9de10553c8eca322f78cb3
