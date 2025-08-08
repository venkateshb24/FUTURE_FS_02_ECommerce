

# TechStore E-Commerce Platform

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-blueviolet)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/status-demo--only-orange)

> A responsive React + Tailwind CSS e-commerce demo for premium tech products.  
> Tags: React, TailwindCSS, E-commerce, Frontend, LocalStorage, SPA

---

🚫 **Note:** This is a demo-only project with no backend or real payments.  
All data (products, users, cart) is stored in `localStorage`. Orders and authentication are mock-only and not persisted across reloads.

---

## ✨ Features

- **Landing Page:** Animated hero slider, highlights, and call-to-action buttons.
- **Product Catalog:** Browse, search, and filter products by category. View product details in a modal or dedicated page.
- **Cart Sidebar:** Add, update, and remove items. View subtotal and proceed to checkout.
- **Checkout Page:** Enter shipping info, review order summary, and place demo orders (no payment integration).
- **Authentication:** Sign Up and Login modals (user data is stored in `localStorage`).
- **Navbar:** Responsive navigation with smooth scrolling to About/Contact, cart badge, and user dropdown.
- **About Page:** Mission, stats, team, and contact info.
- **Footer:** Social links, quick navigation, support links, and copyright.
- **Mobile Friendly:** Fully responsive design for all devices.
- **No backend required:** All data is local/demo only.

---

## 🛠 Tech Stack

- **Frontend:** React (functional components, hooks)
- **Styling:** Tailwind CSS (utility-first)
- **Storage:** localStorage (for user/session/cart state)

---

## 📁 Folder Structure

src/
├── assets/ # Product images
├── components/ # Navbar, Footer, CartSidebar, Modals, etc.
├── data/ # Product data (with images/specs)
├── pages/ # Landing, Products, ProductPage, About, Checkout
├── App.js
├── index.js
└── index.css # Tailwind directives

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/venkateshb24/FUTURE_FS_02_ECommerce.git
cd future_fs_02_e-commerce
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

Open http://localhost:3000 to view the app in your browser.

---

## 📝 Usage

- Browse products, view product details, and add them to the cart.
- Use Sign Up/Login modals to simulate authentication.
- View and modify the cart from the sidebar.
- Proceed to checkout and place a demo order (no payment involved).
- Navigate using the responsive navbar with smooth scrolling.

---

## 🌐 Accessibility & Browser Support

✅ Semantic HTML  
✅ Keyboard navigation  
✅ Color contrast compliance  
✅ Works on Chrome, Firefox, Safari, Edge

---

## 🧩 Customization

- Add products in `src/data/products.js`
- Place corresponding images in `src/assets/products/`
- Update styles using Tailwind utility classes
- Modify the Tailwind config in `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Tailwind directives in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ⚡ Limitations

❌ No real backend or database

❌ No payment gateway integration

❌ Cart and user data are not persistent across devices or sessions

---

## 🔧 Troubleshooting

**Tailwind CSS not working?**
- Ensure all dependencies are installed (`npm install`)
- Make sure Tailwind, PostCSS, and Autoprefixer are in package.json
- Verify tailwind.config.js has correct content paths
- Check src/index.css includes Tailwind directives
- Restart the development server after config changes

**Images not loading?**
- Check that product image paths in products.js match files in src/assets/products/

**Styling not applying properly?**
- Clear browser cache or hard refresh (Ctrl + F5)

---

## 🙏 Credits

Built by Venkatesh and contributors.  
Project part of Future Interns Skill Training Series.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. **Fork the repository**
2. **Create a feature branch**:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```sh
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:
   ```sh
   git push origin feature/your-feature-name
   ```
5. **Open a pull request**

### Guidelines
- Follow the existing code style
- Write clean, maintainable code
- Test your changes thoroughly
- Keep pull requests focused on a single feature/fix

---

## 📄 License

MIT © Venkatesh  
You are free to use, modify, and distribute this software with attribution.



