Here is a complete, clean, and GitHub-ready README file for your Hat-Trick Scents project.
```markdown
# Hat-Trick Scents 🏆


[![Made with Love](https://img.shields.io/badge/Made%20with-Love-red.svg)](https://github.com/MohammedShehe/HatTrick)

A modern, responsive e-commerce website for **Hat-Trick Scents** – a luxury perfumes and cosmetics store based in **Zanzibar, Tanzania**. The platform showcases premium fragrances, beauty products, and skincare items with seamless WhatsApp ordering integration.

![Hat-Trick Scents Preview](https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg)

## ✨ Features

### 🎨 Modern UI/UX
- **Dark/Light Theme Toggle** – User preference saved in localStorage
- **Fully Responsive** – Optimized for mobile, tablet, and desktop
- **Smooth Animations** – Scroll reveals, hover effects, and transitions
- **Custom Product Cards** – Elegant display with image hover zoom

### 🛍️ Shopping Features
- **Product Catalog** – 21+ luxury perfumes and cosmetic sets
- **Interactive Shopping Cart** – Add/remove items, view total
- **Product Preview Modal** – Detailed view before adding to cart
- **WhatsApp Direct Ordering** – Instant order summary sent to store owner

### 🤖 Smart Chatbot Assistant
- Swahili/English bilingual support
- Answers FAQs about:
  - Store location (Darajani, Zanzibar)
  - Payment methods (YAS, PBZ)
  - Shipping information (Tanzania-wide)
  - Store hours
  - Products and discounts

### 📱 Contact & Support
- **Contact Form** – Sends messages via WhatsApp to CEO
- **Multiple Contact Channels** – Phone, email, WhatsApp Business
- **Google Maps Integration** – Schema.org local business markup

### 📈 SEO Optimized
- Meta tags for search engines (Swahili & English)
- Open Graph tags for social sharing
- Schema.org LocalBusiness markup
- Geo location meta tags for Zanzibar
- Canonical URLs and alternate language versions

### 📝 Blog Section
- Beauty tips and fragrance guides
- Skincare routines for tropical climate
- Natural oils and ethical beauty

## 🚀 Live Demo

🌐 **Website:** [https://hattrickscents.online](https://hattrickscents.online)

## 📂 Project Structure

```
hat-trick-scents/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles (dark/light themes)
├── js/
│   └── script.js       # All JavaScript functionality
├── assets/
│   └── logo.png        # Brand logo (favicon + navbar + footer)
└── README.md           # Documentation
```

## 🛠️ Technologies Used

- **HTML5** – Semantic markup
- **CSS3** – Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6)** – Vanilla JS, no dependencies
- **Bootstrap 5.3** – Responsive grid, components, modals
- **Font Awesome 6** – Icons
- **Google Fonts** – Playfair Display + Poppins
- **Cloudinary** – Product image hosting
- **Pexels** – Stock photography

## 📦 Installation & Setup

### Prerequisites
- Any modern web browser
- Text editor (VS Code recommended)
- Local web server (optional, for testing)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hat-trick-scents.git
   cd hat-trick-scents
   ```

2. **Add your logo**
   - Place your logo as `assets/logo.png` (512x512px recommended)

3. **Update WhatsApp numbers** (if needed)
   - Edit phone numbers in `script.js`:
     - CEO: `255679806126`
     - Online Manager: `255677532140`
     - Assistant: `255776626229`

4. **Launch locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using VS Code Live Server
   Right-click index.html > Open with Live Server
   ```

5. **Deploy to production**
   - Upload files to any static hosting (Netlify, Vercel, GitHub Pages)
   - Update domain in meta tags and canonical URL

## 🔧 Configuration

### Google Analytics
Replace `G-TD1WN0171Q` with your GA4 measurement ID in the gtag.js script.

### Payment Information
Update bank details in:
- `index.html` – Footer and contact section
- `script.js` – WhatsApp order templates

### Product Catalog
Products are defined in `script.js` as an array. Each product has:
```javascript
{
  id: 1,
  name: "30 PM Oud",
  category: "Manukato",
  price: 15000,
  image: "https://res.cloudinary.com/...",
  desc: "Product description..."
}
```

## 📱 WhatsApp Integration

The website uses WhatsApp Business API for:
- **Direct ordering** – Cart items formatted as order summary
- **Contact form** – Customer inquiries sent to CEO
- **Single product purchase** – Buy now from modal

**Order format sent:**
```
🛍️ AGIZO JIPYA KUTOKA HAT-TRICK SCENTS

📋 MAELEZO YA AGIZO:
─────────────────
1. Product Name
   💰 TZS 15,000
─────────────────
💰 JUMLA: TZS 30,000

👤 MAELEZO YA MTEJA:
─────────────────
📝 Tafadhali toa:
• Jina Kamili:
• Anwani ya Uwasilishaji:
• Njia ya Malipo Unayopendelea:
```

## 🎨 Customization

### Colors
Modify CSS variables in `style.css`:
```css
:root {
  --gold: #D4AF37;
  --dark-bg: #0a0a0a;
  --light-bg: #fefaf5;
}
```

### Theme Toggle
Dark/light theme is controlled by `[data-theme="dark"]` attribute on `<html>`.

### Chatbot Responses
Edit `botReply()` function in `script.js` to add more Q&A patterns.

## 🌍 SEO & Local Business

The website includes comprehensive SEO features:
- **Geo tags** for Zanzibar (-6.165917, 39.202641)
- **LocalBusiness Schema** with address, phone, hours
- **Bilingual** (Swahili primary, English secondary)
- **Mobile-first** responsive design
- **Fast loading** with lazy loading images

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## 🤝 Support & Contact

**Business Information:**
- 📍 **Location:** Darajani, Zanzibar, Tanzania
- 👔 **Director (Omar Khalid Said):** +255 679 806 126
- 👤 **Assistant:** +255 776 626 229
- 🛍️ **Online Manager (MO11):** +255 677 532 140
- 📧 **Email:** molittle1011@gmail.com

**Payment Methods:**
- 📱 YAS: 0679806126 (FATMA AMOUR)
- 🏦 PBZ: 0825683001 (FATMA AMOUR)

**Store Hours:**
- Monday–Saturday: 10:00 AM – 9:00 PM
- Sunday: 12:00 PM – 6:00 PM

## 🙏 Acknowledgements

- Images from [Pexels](https://pexels.com) and [Cloudinary](https://cloudinary.com)
- Icons by [Font Awesome](https://fontawesome.com)
- Framework by [Bootstrap](https://getbootstrap.com)

## 📝 Changelog

**v1.0.0** (2025-05-30)
- Initial release
- Full product catalog (21 products)
- Dark/light theme
- WhatsApp ordering
- Chatbot assistant
- Blog section
- SEO optimization

---

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!

---

**Made with 💛 in Zanzibar, Tanzania**
```