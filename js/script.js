// PRODUCTS DATA (Hat-Trick Scents catalog)
const products = [
  { id: 1, name: "Oud Noir Perfume", category: "Perfumes", price: 125000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779188760/oud_noir_r0urax.jpg", desc: "Rich woody oud with sensual amber." },
  { id: 2, name: "Golden Rose EDP", category: "Perfumes", price: 98000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779188781/Red_Rose_bx6w4s.jpg", desc: "Floral bouquet with rose & musk." },
  { id: 3, name: "Zanzibar Breeze", category: "Perfumes", price: 89000, image: "https://images.pexels.com/photos/4016685/pexels-photo-4016685.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Coconut, vanilla & sea salt - tropical charm." },
  { id: 4, name: "Matte Lipstick Set", category: "Cosmetics", price: 45000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779188740/Matte_Lipstick_Set_miomot.jpg", desc: "Set of 5 long-lasting matte shades." },
  { id: 5, name: "Vitamin C Serum", category: "Skincare", price: 68000, image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Brightening serum with hyaluronic acid." },
  { id: 6, name: "Luxury Gift Set", category: "Gift Sets", price: 210000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779188725/Luxury_Gift_e3qkfg.jpg", desc: "Perfume + body lotion + lipstick." }
];

// Cart array
let cart = [];

// ==================== DARK/LIGHT THEME FUNCTIONALITY ====================
function initTheme() {
  // Get saved theme from localStorage
  const savedTheme = localStorage.getItem('hattrick_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set theme based on saved preference or system preference
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    if (theme === 'dark') {
      themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
      themeBtn.title = 'Switch to Light Mode';
    } else {
      themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
      themeBtn.title = 'Switch to Dark Mode';
    }
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  let newTheme;
  
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('hattrick_theme', newTheme);
  updateThemeIcon(newTheme);
  
  // Show toast notification
  showToast(`${newTheme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'} activated!`);
}

// ==================== PRODUCT RENDERING ====================
function renderProducts() {
  const container = document.getElementById('productsContainer');
  if(!container) return;
  container.innerHTML = products.map(prod => `
    <div class="col-md-4 col-lg-4">
      <div class="product-card">
        <img src="${prod.image}" class="product-img w-100" alt="${prod.name}">
        <div class="product-info">
          <h5 class="product-title">${prod.name}</h5>
          <p class="small text-muted">${prod.desc}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="product-price">TZS ${prod.price.toLocaleString()}</span>
            <button class="add-to-cart" data-id="${prod.id}"><i class="fas fa-cart-plus"></i> Add</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.getAttribute('data-id'));
      addToCart(id);
    });
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if(product){
    cart.push(product);
    updateCartUI();
    showToast(`${product.name} added to bag! ✨`);
    // Add subtle animation to cart icon
    const cartIcon = document.getElementById('cartBtn');
    if(cartIcon) {
      cartIcon.style.transform = 'scale(1.2)';
      setTimeout(() => { cartIcon.style.transform = 'scale(1)'; }, 200);
    }
  }
}

function updateCartUI() {
  const cartCountSpan = document.getElementById('cartCount');
  if(cartCountSpan) cartCountSpan.innerText = cart.length;
  const cartList = document.getElementById('cartItemsList');
  if(cartList){
    if(cart.length === 0) cartList.innerHTML = '<p class="text-muted">Your cart is empty. Add some luxury products! 🛍️</p>';
    else {
      const cartItemsHtml = cart.map((item, idx) => `
        <div class="mb-2 pb-2 border-bottom">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <strong>${item.name}</strong><br>
              <small class="gold-text">TZS ${item.price.toLocaleString()}</small>
            </div>
            <button class="btn btn-sm btn-outline-danger remove-item" data-index="${idx}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `).join('');
      const total = cart.reduce((sum, i) => sum + i.price, 0);
      cartList.innerHTML = cartItemsHtml + `
        <div class="mt-3 pt-2 border-top">
          <strong>Total: <span class="gold-text">TZS ${total.toLocaleString()}</span></strong>
        </div>
      `;
      document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(btn.getAttribute('data-index'));
          const removedItem = cart[idx];
          cart.splice(idx,1);
          updateCartUI();
          showToast(`${removedItem.name} removed from cart`);
        });
      });
    }
  }
}

function showToast(msg) {
  // Remove existing toast if any
  const existingToast = document.querySelector('.toast-message');
  if(existingToast) existingToast.remove();
  
  const toastDiv = document.createElement('div');
  toastDiv.className = 'toast-message';
  toastDiv.innerHTML = msg;
  document.body.appendChild(toastDiv);
  setTimeout(()=> toastDiv.remove(), 2500);
}

// ==================== WHATSAPP ORDER FUNCTION ====================
function sendOrderToCEO() {
  if(cart.length === 0){
    showToast("Your cart is empty! Add some products first 🛍️");
    return false;
  }
  
  let orderSummary = "🛍️ *NEW ORDER FROM HAT-TRICK SCENTS*%0A%0A";
  orderSummary += "📋 *ORDER DETAILS:*%0A";
  orderSummary += "─────────────────%0A";
  cart.forEach((item, index) => {
    orderSummary += `${index + 1}. ${item.name}%0A   💰 TZS ${item.price.toLocaleString()}%0A`;
  });
  orderSummary += "─────────────────%0A";
  const total = cart.reduce((sum,i)=> sum + i.price,0);
  orderSummary += `💰 *TOTAL: TZS ${total.toLocaleString()}*%0A%0A`;
  orderSummary += "👤 *CUSTOMER INFORMATION*%0A";
  orderSummary += "─────────────────%0A";
  orderSummary += "📝 Please provide:%0A";
  orderSummary += "• Full Name:%0A";
  orderSummary += "• Delivery Address:%0A";
  orderSummary += "• Preferred Payment Method:%0A%0A";
  orderSummary += "💳 *PAYMENT OPTIONS:*%0A";
  orderSummary += "─────────────────%0A";
  orderSummary += "📱 M-Pesa/Tigo/Airtel Money:%0A";
  orderSummary += "   YAS: +255 677 532 140%0A";
  orderSummary += "   (FAHIMA MOHAMED ISSA)%0A";
  orderSummary += "🏦 CRDB Bank:%0A";
  orderSummary += "   0152758498000%0A";
  orderSummary += "   (MOHAMMED AMINU SHEHE)%0A%0A";
  orderSummary += "🌟 *Thank you for choosing Hat-Trick Scents!* 🌟";
  
  const phone = "255679806126"; // CEO Omar Khalid Said
  const url = `https://wa.me/${phone}?text=${orderSummary}`;
  window.open(url, '_blank');
  
  // Show success message and clear cart
  showToast("Order prepared! WhatsApp will open 📱");
  cart = [];
  updateCartUI();
  
  // Close modal if open
  const modalEl = document.getElementById('cartModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  if(modal) modal.hide();
  
  return true;
}

// ==================== CONTACT FORM HANDLER ====================
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const phone = document.getElementById('contactPhone').value;
  const msg = document.getElementById('contactMsg').value;
  
  if(!name || !msg){
    showToast("Please enter your name and message 📝");
    return;
  }
  
  let text = `📞 *NEW CONTACT FORM SUBMISSION*%0A%0A`;
  text += `👤 *Name:* ${name}%0A`;
  text += `📧 *Email:* ${email || 'Not provided'}%0A`;
  text += `📱 *Phone:* ${phone || 'Not provided'}%0A`;
  text += `💬 *Message:*%0A${msg}%0A%0A`;
  text += `📍 *Store Location:* Michenzani Mall, 3rd Floor, Zanzibar%0A`;
  text += `🌟 *Will respond within 15 minutes!* 🌟`;
  
  const ceoPhone = "255679806126";
  window.open(`https://wa.me/${ceoPhone}?text=${text}`, '_blank');
  this.reset();
  showToast("Message forwarded to CEO via WhatsApp 📱");
});

// ==================== CART MODAL ====================
document.getElementById('cartBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  updateCartUI();
  const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
  cartModal.show();
});

document.getElementById('checkoutWhatsAppBtn')?.addEventListener('click', sendOrderToCEO);

// ==================== CHATBOT LOGIC ====================
const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChatMsg');
const chatMessages = document.getElementById('chatMessages');

function addBotMessage(text) {
  const div = document.createElement('div');
  div.className = 'bot-msg';
  div.innerHTML = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addUserMessage(text) {
  const div = document.createElement('div');
  div.className = 'user-msg';
  div.innerHTML = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(userMessage) {
  const lowerMsg = userMessage.toLowerCase();
  
  if(lowerMsg.includes('location') || lowerMsg.includes('store') || lowerMsg.includes('mall') || lowerMsg.includes('address')) {
    return "📍 Our boutique is at <strong>Michenzani Mall, 3rd Floor, Zanzibar</strong>. Visit us for exclusive testers and personal consultations! 🏪";
  } 
  else if(lowerMsg.includes('payment') || lowerMsg.includes('pay') || lowerMsg.includes('mpesa') || lowerMsg.includes('tigo') || lowerMsg.includes('airtel')) {
    return "💸 <strong>Payment Methods:</strong><br>📱 Mobile Money: YAS +255 677 532 140 (FAHIMA MOHAMED ISSA)<br>🏦 CRDB Bank: 0152758498000 (MOHAMMED AMINU SHEHE)<br>💵 Cash on Delivery available in Zanzibar & Dar es Salaam!";
  } 
  else if(lowerMsg.includes('whatsapp') || lowerMsg.includes('contact') || lowerMsg.includes('phone') || lowerMsg.includes('call')) {
    return "📱 <strong>Contact Us:</strong><br>👔 CEO Omar: +255 679 806 126<br>👤 Assistant CEO: +255 776 626 229<br>🛍️ Online Manager: +255 677 532 140<br>📧 Email: hello@hattrickscents.co.tz";
  } 
  else if(lowerMsg.includes('shipping') || lowerMsg.includes('delivery') || lowerMsg.includes('shipping')) {
    return "🚚 <strong>Delivery Information:</strong><br>• Tanzania (Dar, Arusha, Mwanza, Zanzibar): 1-3 business days<br>• Free delivery on orders over TZS 150,000<br>• Tracking provided for all shipments";
  } 
  else if(lowerMsg.includes('perfume') || lowerMsg.includes('fragrance') || lowerMsg.includes('scent')) {
    return "✨ Our perfume collection includes:<br>• Oud Noir (Rich woody amber)<br>• Golden Rose (Floral musk)<br>• Zanzibar Breeze (Coconut vanilla)<br>Check our Shop section for best-sellers! 🛍️";
  } 
  else if(lowerMsg.includes('cosmetic') || lowerMsg.includes('makeup') || lowerMsg.includes('lipstick')) {
    return "💄 Our cosmetics range features:<br>• Matte Lipstick Sets (5 shades)<br>• Vitamin C Brightening Serum<br>• Luxury gift sets<br>All products are cruelty-free and ethically sourced! 🌸";
  }
  else if(lowerMsg.includes('hours') || lowerMsg.includes('open') || lowerMsg.includes('timing')) {
    return "⏰ <strong>Store Hours:</strong><br>Monday - Saturday: 10:00 AM - 9:00 PM<br>Sunday: 12:00 PM - 6:00 PM<br>📍 Michenzani Mall, 3rd Floor";
  }
  else if(lowerMsg.includes('discount') || lowerMsg.includes('offer') || lowerMsg.includes('sale')) {
    return "🎉 <strong>Current Offers:</strong><br>• Buy 2 perfumes, get 10% off<br>• Free shipping on orders over TZS 150k<br>• First-time customer? Get 5% off your first order! DM for code ✨";
  }
  else if(lowerMsg.includes('return') || lowerMsg.includes('exchange') || lowerMsg.includes('refund')) {
    return "🔄 <strong>Return Policy:</strong><br>• 7-day return window for unopened products<br>• Exchange available for defective items<br>• Contact us within 24 hours of delivery for issues";
  }
  else if(lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    return "🌸 Hello! Welcome to Hat-Trick Scents! How can I assist you today? You can ask about our products, delivery, payments, or store location! ✨";
  }
  else {
    return "🌸 Thank you for reaching out! For orders, click 'Add to Cart' and checkout via WhatsApp. Our team replies within minutes! Need specific help? Call +255 677 532 140. 😊";
  }
}

function handleChatSend() {
  const text = chatInput.value.trim();
  if(!text) return;
  
  addUserMessage(text);
  const reply = botReply(text);
  
  setTimeout(() => addBotMessage(reply), 500);
  chatInput.value = '';
}

sendChat?.addEventListener('click', handleChatSend);
chatInput?.addEventListener('keypress', (e) => { 
  if(e.key === 'Enter') handleChatSend(); 
});

chatbotIcon?.addEventListener('click', () => {
  if (chatbotWindow.style.display === 'flex') {
    chatbotWindow.style.display = 'none';
  } else {
    chatbotWindow.style.display = 'flex';
    // Add welcome message if chat is empty
    if (chatMessages.children.length === 0) {
      addBotMessage("🌸 Welcome back! Ask me anything about our products, store location, or delivery! ✨");
    }
  }
});

closeChat?.addEventListener('click', () => chatbotWindow.style.display = 'none');

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '0.5rem 0';
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    navbar.style.padding = '1rem 0';
    navbar.style.boxShadow = 'none';
  }
});

// ==================== ANIMATE ON SCROLL ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.product-card, .testimonial-card, .blog-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  initTheme();
  
  // Add theme toggle button to DOM if not exists
  if (!document.getElementById('themeToggleBtn')) {
    const themeBtn = document.createElement('button');
    themeBtn.id = 'themeToggleBtn';
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeBtn.title = 'Switch to Dark Mode';
    themeBtn.addEventListener('click', toggleTheme);
    document.body.appendChild(themeBtn);
  }
  
  // Add active class to nav links on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});