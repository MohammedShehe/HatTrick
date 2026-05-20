// PRODUCTS DATA (Hat-Trick Scents catalog)
const products = [
  { id: 1, name: "Oud Noir Manukato", category: "Manukato", price: 125000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779188760/oud_noir_r0urax.jpg", desc: "Manukato tajiri wa mbao na amba yenye hisia za joto." },
  { id: 2, name: "Golden Rose EDP", category: "Manukato", price: 98000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779188781/Red_Rose_bx6w4s.jpg", desc: "Maua ya waridi yenye harufu ya rose na misk." },
  { id: 3, name: "Zanzibar Breeze", category: "Manukato", price: 89000, image: "https://images.pexels.com/photos/4016685/pexels-photo-4016685.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Nazi, vanila na chumvi bahari - haiba ya kitropiki." },
  { id: 4, name: "Seti ya Midomo Matte", category: "Vipodozi", price: 45000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779188740/Matte_Lipstick_Set_miomot.jpg", desc: "Seti ya rangi 5 za midomo zinazodumu kwa muda mrefu." },
  { id: 5, name: "Vitamin C Serum", category: "Utunzaji wa Ngozi", price: 68000, image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400", desc: "Serum inayoongeza mng'aro na asidi ya hyaluronic." },
  { id: 6, name: "Seti ya Zawadi ya Kifahari", category: "Seti za Zawadi", price: 210000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779188725/Luxury_Gift_e3qkfg.jpg", desc: "Manukato + lotion ya mwili + midomo." }
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
      themeBtn.title = 'Badilisha kwa Mwangaza';
    } else {
      themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
      themeBtn.title = 'Badilisha kwa Giza';
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
  showToast(`${newTheme === 'dark' ? '🌙 Hali ya Giza' : '☀️ Hali ya Mwangaza'} imewashwa!`);
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
            <button class="add-to-cart" data-id="${prod.id}"><i class="fas fa-cart-plus"></i> Ongeza</button>
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
    showToast(`${product.name} imeongezwa kwenye rafu! ✨`);
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
    if(cart.length === 0) cartList.innerHTML = '<p class="text-muted">Rafu yako ni tupu. Ongeza bidhaa za kifahari! 🛍️</p>';
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
          <strong>Jumla: <span class="gold-text">TZS ${total.toLocaleString()}</span></strong>
        </div>
      `;
      document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(btn.getAttribute('data-index'));
          const removedItem = cart[idx];
          cart.splice(idx,1);
          updateCartUI();
          showToast(`${removedItem.name} imetolewa kwenye rafu`);
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
    showToast("Rafu yako ni tupu! Ongeza bidhaa kwanza 🛍️");
    return false;
  }
  
  let orderSummary = "🛍️ *AGIZA JIPYA KUTOKA HAT-TRICK SCENTS*%0A%0A";
  orderSummary += "📋 *MAELEZO YA AGIZO:*%0A";
  orderSummary += "─────────────────%0A";
  cart.forEach((item, index) => {
    orderSummary += `${index + 1}. ${item.name}%0A   💰 TZS ${item.price.toLocaleString()}%0A`;
  });
  orderSummary += "─────────────────%0A";
  const total = cart.reduce((sum,i)=> sum + i.price,0);
  orderSummary += `💰 *JUMLA: TZS ${total.toLocaleString()}*%0A%0A`;
  orderSummary += "👤 *MAELEZO YA MTEGEMA HUDUMA*%0A";
  orderSummary += "─────────────────%0A";
  orderSummary += "📝 Tafadhali toa:%0A";
  orderSummary += "• Jina Kamili:%0A";
  orderSummary += "• Anwani ya Uwasilishaji:%0A";
  orderSummary += "• Njia ya Malipo Unayopendelea:%0A%0A";
  orderSummary += "💳 *NJIA ZA MALIPO:*%0A";
  orderSummary += "─────────────────%0A";
  orderSummary += "📱 M-Pesa/Tigo/Airtel Money:%0A";
  orderSummary += "   YAS: +255 677 532 140%0A";
  orderSummary += "   (FAHIMA MOHAMED ISSA)%0A";
  orderSummary += "🏦 Benki ya CRDB:%0A";
  orderSummary += "   0152758498000%0A";
  orderSummary += "   (MOHAMMED AMINU SHEHE)%0A%0A";
  orderSummary += "🌟 *Asante kwa kuchagua Hat-Trick Scents!* 🌟";
  
  const phone = "255679806126"; // CEO Omar Khalid Said
  const url = `https://wa.me/${phone}?text=${orderSummary}`;
  window.open(url, '_blank');
  
  // Show success message and clear cart
  showToast("Agizo limeandaliwa! WhatsApp itafunguka 📱");
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
    showToast("Tafadhali ingiza jina lako na ujumbe 📝");
    return;
  }
  
  let text = `📞 *UJUMBE MPYA KUTOKA KWA FOMU YA MAWASILIANO*%0A%0A`;
  text += `👤 *Jina:* ${name}%0A`;
  text += `📧 *Barua Pepe:* ${email || 'Hajajazwa'}%0A`;
  text += `📱 *Simu:* ${phone || 'Hajajazwa'}%0A`;
  text += `💬 *Ujumbe:*%0A${msg}%0A%0A`;
  text += `📍 *Eneo la Duka:* Michenzani Mall, Ghorofa ya 3, Zanzibar%0A`;
  text += `🌟 *Tutajibu ndani ya dakika 15!* 🌟`;
  
  const ceoPhone = "255679806126";
  window.open(`https://wa.me/${ceoPhone}?text=${text}`, '_blank');
  this.reset();
  showToast("Ujumbe umetumwa kwa Mkurugenzi kupitia WhatsApp 📱");
});

// ==================== CART MODAL ====================
document.getElementById('cartBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  updateCartUI();
  const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
  cartModal.show();
});

document.getElementById('checkoutWhatsAppBtn')?.addEventListener('click', sendOrderToCEO);

// ==================== CHATBOT LOGIC IN SWAHILI ====================
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
  
  if(lowerMsg.includes('wapi') || lowerMsg.includes('eneo') || lowerMsg.includes('duka') || lowerMsg.includes('mahali') || lowerMsg.includes('anwani')) {
    return "📍 Duka letu lipo <strong>Michenzani Mall, Ghorofa ya 3, Zanzibar</strong>. Tupate kwa majaribio ya kipekee na ushauri wa kibinafsi! 🏪";
  } 
  else if(lowerMsg.includes('malipo') || lowerMsg.includes('kulipa') || lowerMsg.includes('mpesa') || lowerMsg.includes('tigo') || lowerMsg.includes('airtel')) {
    return "💸 <strong>Njia za Malipo:</strong><br>📱 M-Pesa/Tigo/Airtel: YAS +255 677 532 140 (FAHIMA MOHAMED ISSA)<br>🏦 CRDB Bank: 0152758498000 (MOHAMMED AMINU SHEHE)<br>💵 Malipo kwa mkono yanakubalika Zanzibar na Dar es Salaam!";
  } 
  else if(lowerMsg.includes('whatsapp') || lowerMsg.includes('wasiliana') || lowerMsg.includes('simu') || lowerMsg.includes('piga') || lowerMsg.includes('namba')) {
    return "📱 <strong>Wasiliana Nasi:</strong><br>👔 Mkurugenzi Omar: +255 679 806 126<br>👤 Msaidizi wa Mkurugenzi: +255 776 626 229<br>🛍️ Meneja Mtandaoni: +255 677 532 140<br>📧 Barua Pepe: hello@hattrickscents.co.tz";
  } 
  else if(lowerMsg.includes('usafirishaji') || lowerMsg.includes('wasilisha') || lowerMsg.includes('delivery')) {
    return "🚚 <strong>Taarifa za Usafirishaji:</strong><br>• Tanzania (Dar, Arusha, Mwanza, Zanzibar): siku 1-3 za kazi<br>• Usafirishaji bila malipo kwa maagizo zaidi ya TZS 150,000<br>• Tunatoa namba ya kufuatilia usafirishaji kwa shehena zote";
  } 
  else if(lowerMsg.includes('Manukato') || lowerMsg.includes('harufu') || lowerMsg.includes('perfume')) {
    return "✨ Mkusanyiko wetu wa Manukato unajumuisha:<br>• Oud Noir (Mbao tajiri na amba)<br>• Golden Rose (Maua ya waridi na misk)<br>• Zanzibar Breeze (Nazi na vanila)<br>Angalia sehemu ya Duka kwa bidhaa zinazouzwa sana! 🛍️";
  } 
  else if(lowerMsg.includes('vipodozi') || lowerMsg.includes('urembo') || lowerMsg.includes('midomo') || lowerMsg.includes('makeup')) {
    return "💄 Bidhaa zetu za vipodozi zinajumuisha:<br>• Seti za Midomo Matte (rangi 5)<br>• Vitamin C Serum inayoongeza mng'aro<br>• Seti za zawadi za kifahari<br>Bidhaa zote hazidhuru wanyama na zimetoka kwa vyanzo vya kimaadili! 🌸";
  }
  else if(lowerMsg.includes('saa') || lowerMsg.includes('kazi') || lowerMsg.includes('fungua') || lowerMsg.includes('saa za kazi')) {
    return "⏰ <strong>Saa za Kufungua:</strong><br>Jumatatu - Jumamosi: 10:00 AM - 9:00 PM<br>Jumapili: 12:00 PM - 6:00 PM<br>📍 Michenzani Mall, Ghorofa ya 3";
  }
  else if(lowerMsg.includes('punguzo') || lowerMsg.includes('ofaa') || lowerMsg.includes('bei') || lowerMsg.includes('nafuu')) {
    return "🎉 <strong>Ofa za Sasa:</strong><br>• Nunua Manukato 2, pata punguzo la 10%<br>• Usafirishaji bila malipo kwa maagizo zaidi ya TZS 150k<br>• Mteja wa mara ya kwanza? Pata punguzo la 5% kwa agizo lako la kwanza! Tumia CODE: KARIBU5 ✨";
  }
  else if(lowerMsg.includes('rejesha') || lowerMsg.includes('badilisha') || lowerMsg.includes('refund')) {
    return "🔄 <strong>Sera ya Kurejesha Bidhaa:</strong><br>• Siku 7 za kurejesha bidhaa ambazo hazijafunguliwa<br>• Kubadilishana kunapatikana kwa bidhaa zenye kasoro<br>• Wasiliana nasi ndani ya saa 24 za uwasilishaji kwa matatizo yoyote";
  }
  else if(lowerMsg.includes('habari') || lowerMsg.includes('jambo') || lowerMsg.includes('hujambo') || lowerMsg.includes('sasa')) {
    return "🌸 Habari! Karibu Hat-Trick Scents! Nikusaidieje leo? Unaweza kuuliza kuhusu bidhaa zetu, usafirishaji, malipo, au eneo la duka letu! ✨";
  }
  else {
    return "🌸 Asante kwa kuwasiliana nasi! Kwa maagizo, bofya 'Ongeza kwenye Rafu' na maliza ununuzi kupitia WhatsApp. Timu yetu inajibu ndani ya dakika chache! Unahitaji msaada maalum? Piga +255 677 532 140. 😊";
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
      addBotMessage("🌸 Karibu tena! Niulize chochote kuhusu bidhaa zetu, eneo la duka, au usafirishaji! ✨");
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
    themeBtn.title = 'Badilisha kwa Giza';
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