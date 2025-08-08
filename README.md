# TechStore E-Commerce Platform

TechStore is a modern, responsive e-commerce web app for premium tech products. It features a beautiful UI, smooth navigation, and a complete shopping experience—all with no backend required.

## ✨ Features

- **Landing Page:** Animated hero slider, highlights, and call-to-action buttons.
- **Product Catalog:** Browse, search, and filter products by category. View product details in a modal or dedicated page.
- **Cart Sidebar:** Add, update, and remove items. View subtotal and proceed to checkout.
- **Checkout:** Simple form for shipping info and order summary. Demo order placement (no payment integration).
- **Authentication:** Sign Up and Login modals (user data stored in localStorage).
- **Navbar:** Responsive navigation, smooth scroll to About/Contact, cart badge, and user dropdown.
- **About Page:** Mission, stats, team, and contact info.
- **Footer:** Social links, quick navigation, support links, copyright.
- **No backend required:** All data is local/demo only.

## 🛠 Tech Stack

- React (functional components, hooks)
- Tailwind CSS (utility-first styling)
- LocalStorage (user authentication)

## 📁 Folder Structure

- `src/components/` — Navbar, Footer, CartSidebar, ProductDetailsModal
- `src/pages/` — Landing, Products, ProductPage, About, Checkout
- `src/data/` — Product data (with images/specs)
- `src/assets/` — Product images

## 🚀 Getting Started

1. **Clone the repo:**
   ```sh
   git clone https://github.com/venkateshb24/FUTURE_FS_02_ECommerce.git
   cd future_fs_02_e-commerce
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage

- Browse products, view details, and add to cart.
- Sign up or log in to access cart and checkout.
- Update cart quantities, remove items, and place demo orders.
- Use Navbar for navigation and smooth scroll to About/Contact.

## 🧩 Customization

- Add new products in `src/data/products.js` and images in `src/assets/products/`.
- Update styles via Tailwind classes.
- Extend features (e.g., add reviews, payment integration, backend) as needed.

## ⚡ Limitations

- No real payment or backend integration (demo/local only).
- User authentication is mock/localStorage only.
- Orders are not persisted after page reload.

## 📄 License

MIT
