// PRODUCTS DATA (Hat-Trick Scents catalog)
const products = [
  { id: 1, name: "30 PM Oud", category: "Manukato", price: 15000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352241/30_pm_oud_tntsri.png", desc: "Manukato mazuri sana kwa jinsia zote, yasiyochafua nguo. Harufu ya Oud yenye kudumu kwa zaidi ya saa 12. Inafaa kwa matukio maalum na matumizi ya kila siku." },
  { id: 2, name: "Ameerat Al Arab Set", category: "Seti za Zawadi", price: 20000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352243/ameerat_al_arab_hg4vmm.png", desc: "Seti ya manukato yenye asili ya kiarabu, 3 in 1. Inajumuisha Oud, Rose na Musk. Zawadi bora kwa wapendwa wako." },
  { id: 3, name: "Forever Toothgel", category: "Dawa", price: 15000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779791808/forever_toothgel_djtvmp.jpg", desc: "Dawa nzuri ya meno. Inaondoa harufu kinywani na ni tiba kwa usalama wa meno yako." },
  { id: 4, name: "Romantic Paris", category: "Manukato", price: 15000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352242/romantic_paris_etws5s.png", desc: "Manukato mazuri ya kimapenzi. Inanukia vizuri kwa mwenza wako. Mchanganyiko wa maua ya waridi na vanilla. Inakumbusha mitaa ya Paris." },
  { id: 5, name: "Sexy Girl", category: "Manukato", price: 15000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352247/sexy_girl_vjogwx.png", desc: "Mafuta mazuri kwa mrembo. Rangi na harufu yake ni ya kipekee. Inachanganya maua ya cherry na musk nyeupe. Inavutia na kudumu kwa muda mrefu." },
  { id: 6, name: "Asad Set", category: "Seti za Zawadi", price: 20000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352243/asad_d2tvcw.png", desc: "3 in 1 Seti ya Manukato yenye harufu ya kupendeza. Hudumu kwa mda mrefu kwenye nguo. Inafaa kwa zawadi au matumizi binafsi." },
  { id: 7, name: "Dark Knight", category: "Manukato", price: 15000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352247/dark_knight_dub2pa.png", desc: "Harufu iliyoambatana na ubaridi. Mafuta mazuri kwa safarini na hata ofisini. Manukato ya kiume yenye mguso wa oud na mbao." },
  { id: 8, name: "Khail Malhi/Al Maknoon", category: "Manukato", price: 30000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352250/khail_malhi_tubeu8.png", desc: "Manukato mawili yenye harufu tofauti. Moja kwa 15,000 tzs. Chaguo bora kwa wale wanaopenda aina mbalimbali za manukato." },
  { id: 9, name: "Ijal Aura Set", category: "Seti za Zawadi", price: 20000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352251/ijal_aura_sjipma.png", desc: "Seti ya manukato yenye harufu ya kupendeza, 3 in 1. Inajumuisha aina tatu tofauti za manukato kwa bei moja." },
  { id: 10, name: "Weekend/Lovely Seetheart", category: "Manukato", price: 30000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352254/weekend_e0ks2r.png", desc: "Mafuta ya wapendanao yenye harufu ya kimahaba. Moja kwa 15,000 tzs. Inafaa kwa wapenzi wanaotaka kunukia pamoja." },
  { id: 11, name: "Very Secret/Ameer al Oud", category: "Manukato", price: 30000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352254/very_secret_nezphz.png", desc: "Manukato mawili tofauti. Moja kwa 15,000 tzs. Very Secret ni ya kimapenzi, Ameer al Oud ni ya kifahari." },
  { id: 12, name: "Khamrah Set", category: "Seti za Zawadi", price: 20000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352256/khamrah_z9dug2.png", desc: "Seti ya manukato yenye harufu ya kipekee ya Zanzibar. Imevutiwa na wengi. Inawakilisha urithi wa manukato wa Zanzibar." },
  { id: 13, name: "Yara Set", category: "Seti za Zawadi", price: 20000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352261/yara_t5dht9.png", desc: "Seti nzuri kwa zawadi. 3 in 1 kwa bei nafuu zaidi. Inajumuisha manukato ya maua na matunda." },
  { id: 14, name: "King XVI/Oud Model Gold", category: "Manukato", price: 30000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352260/king_xvi_ltvkqx.png", desc: "Manukato yanyonukia vizuri na masafa marefu. Moja kwa 15,000 tzs. King XVI ni ya kifahari, Oud Model Gold ni ya kipekee." },
  { id: 15, name: "Laverne", category: "Manukato", price: 15000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352261/laverne_ainu6z.png", desc: "Manukato yenye rangi nzuri, Harufu ya kipekee na isiyoumiza pua. Inachanganya matunda na maua kwa uwiano mzuri." },
  { id: 16, name: "Makhsous/Marghoub", category: "Manukato", price: 30000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352264/makhsouse_iorb9q.png", desc: "Mkhsous au Marghoub. Brown|Black|Pink. Moja kwa 15,000 tzs. Manukato maalum yenye viwango vya juu vya mafuta asilia." },
  { id: 17, name: "Lara Breeze", category: "Manukato", price: 15000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352265/lara_kgv0xa.png", desc: "Manukato bora kwa jinsia zote. White|Pink|Purple. Inaburudisha na kudumu kwa muda mrefu kwenye ngozi." },
  { id: 18, name: "Oud al Sultan", category: "Seti za Zawadi", price: 20000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352267/oud_al_sultan_xapjap.png", desc: "Seti ya Oud. Hudumu kwa mda mrefu kwenye nguo. Oud halisi ya kifahari inayowakilisha heshima na utajiri." },
  { id: 19, name: "Qasas/Al Maknoon", category: "Manukato", price: 30000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352267/qasas_ul4aqc.png", desc: "Manukato mawili yenye harufu tofauti. Moja kwa 15,000 tzs. Qasas inasimulia hadithi kwa harufu zake za kipekee." },
  { id: 20, name: "Pure Pink", category: "Manukato", price: 15000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352269/pure_pink_dy9arj.png", desc: "Harufu ya Kizanzibari. Pendwa wa vijana wote Zanzibar. Manukato safi ya maua yenye mguso wa nazi na vanila." },
  { id: 21, name: "Marchoub/Makhsous", category: "Manukato", price: 30000, image: "https://res.cloudinary.com/dwmxnz1ox/image/upload/v1779352269/marchoub_nvx3ur.png", desc: "Manukato mawili yanayotaka kufanana. Moja kwa 15,000 tzs. Chaguo bora kwa wale wanaotaka kulinganisha harufu tofauti." }
];

// Cart array
let cart = [];

// Global product modal reference
let productModal;
let currentSelectedProduct = null;

// ==================== DARK/LIGHT THEME FUNCTIONALITY ====================
function initTheme() {
  const savedTheme = localStorage.getItem('hattrick_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
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
  showToast(`${newTheme === 'dark' ? '🌙 Hali ya Giza' : '☀️ Hali ya Mwangaza'} imewashwa!`);
}

// ==================== PRODUCT RENDERING ====================
function renderProducts() {
  const container = document.getElementById('productsContainer');
  if(!container) return;
  container.innerHTML = products.map(prod => `
    <div class="col-md-4 col-lg-4">
      <div class="product-card" data-product-id="${prod.id}">
        <img src="${prod.image}" class="product-img w-100" alt="${prod.name}" loading="lazy">
        <div class="product-info">
          <h5 class="product-title">${prod.name}</h5>
          <p class="small text-muted">${prod.desc.substring(0, 60)}...</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="product-price">TZS ${prod.price.toLocaleString()}</span>
            <button class="add-to-cart" data-id="${prod.id}"><i class="fas fa-cart-plus"></i> Ongeza</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Add click event to product cards for preview modal
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicking on the add-to-cart button
      if(e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        return;
      }
      const productId = parseInt(card.getAttribute('data-product-id'));
      openProductModal(productId);
    });
  });
  
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute('data-id'));
      addToCart(id);
    });
  });
}

// ==================== PRODUCT PREVIEW MODAL ====================
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if(!product) return;
  
  currentSelectedProduct = product;
  
  // Update modal content
  document.getElementById('modalProductImg').src = product.image;
  document.getElementById('modalProductImg').alt = product.name;
  document.getElementById('modalProductName').textContent = product.name;
  document.getElementById('modalProductCategory').textContent = product.category;
  document.getElementById('modalProductPrice').textContent = `TZS ${product.price.toLocaleString()}`;
  document.getElementById('modalProductDesc').textContent = product.desc;
  
  // Show modal
  if(productModal) {
    productModal.show();
  }
}

// Add to cart from modal
function setupModalButtons() {
  const modalAddBtn = document.getElementById('modalAddToCartBtn');
  const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');
  
  if(modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      if(currentSelectedProduct) {
        addToCart(currentSelectedProduct.id);
        if(productModal) productModal.hide();
        showToast(`${currentSelectedProduct.name} imeongezwa kwenye rafu! ✨`);
      }
    });
  }
  
  if(modalWhatsappBtn) {
    modalWhatsappBtn.addEventListener('click', () => {
      if(currentSelectedProduct) {
        // Add single product to cart temporarily
        const tempCart = [currentSelectedProduct];
        sendSingleOrderToWhatsApp(tempCart, currentSelectedProduct);
        if(productModal) productModal.hide();
      }
    });
  }
}

// Send single product order via WhatsApp
function sendSingleOrderToWhatsApp(cartItems, product) {
  let orderSummary = "🛍️ *AGIZO JIPYA KUTOKA HAT-TRICK SCENTS*%0A%0A";
  orderSummary += "📋 *MAELEZO YA AGIZO:*%0A";
  orderSummary += "─────────────────%0A";
  orderSummary += `1. ${product.name}%0A   💰 TZS ${product.price.toLocaleString()}%0A`;
  orderSummary += "─────────────────%0A";
  orderSummary += `💰 *JUMLA: TZS ${product.price.toLocaleString()}*%0A%0A`;
  orderSummary += "👤 *MAELEZO YA MTEJA*%0A";
  orderSummary += "─────────────────%0A";
  orderSummary += "📝 Tafadhali toa:%0A";
  orderSummary += "• Jina Kamili:%0A";
  orderSummary += "• Anwani ya Uwasilishaji:%0A";
  orderSummary += "• Njia ya Malipo Unayopendelea:%0A%0A";
  orderSummary += "💳 *NJIA ZA MALIPO:*%0A";
  orderSummary += "─────────────────%0A";
  orderSummary += "📱 YAS: 0679806126%0A";
  orderSummary += "   (FATMA AMOUR)%0A";
  orderSummary += "🏦 PBZ: 0825683001%0A";
  orderSummary += "   (OMAR KHALID OMAR)%0A%0A";
  orderSummary += "🌟 *Asante kwa kuchagua Hat-Trick Scents!* 🌟";
  
  const phone = "255679806126";
  const url = `https://wa.me/${phone}?text=${orderSummary}`;
  window.open(url, '_blank');
  showToast("Agizo la bidhaa moja limeandaliwa! WhatsApp itafunguka 📱");
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if(product){
    cart.push(product);
    updateCartUI();
    showToast(`${product.name} imeongezwa kwenye rafu! ✨`);
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
  
  let orderSummary = "🛍️ *AGIZO JIPYA KUTOKA HAT-TRICK SCENTS*%0A%0A";
  orderSummary += "📋 *MAELEZO YA AGIZO:*%0A";
  orderSummary += "─────────────────%0A";
  cart.forEach((item, index) => {
    orderSummary += `${index + 1}. ${item.name}%0A   💰 TZS ${item.price.toLocaleString()}%0A`;
  });
  orderSummary += "─────────────────%0A";
  const total = cart.reduce((sum,i)=> sum + i.price,0);
  orderSummary += `💰 *JUMLA: TZS ${total.toLocaleString()}*%0A%0A`;
  orderSummary += "👤 *MAELEZO YA MTEJA*%0A";
  orderSummary += "─────────────────%0A";
  orderSummary += "📝 Tafadhali toa:%0A";
  orderSummary += "• Jina Kamili:%0A";
  orderSummary += "• Anwani ya Uwasilishaji:%0A";
  orderSummary += "• Njia ya Malipo Unayopendelea:%0A%0A";
  orderSummary += "💳 *NJIA ZA MALIPO:*%0A";
  orderSummary += "─────────────────%0A";
  orderSummary += "📱 YAS: 0679806126%0A";
  orderSummary += "   (FATMA AMOUR)%0A";
  orderSummary += "🏦 PBZ: 0825683001%0A";
  orderSummary += "   (OMAR KHALID OMAR)%0A%0A";
  orderSummary += "🌟 *Asante kwa kuchagua Hat-Trick Scents!* 🌟";
  
  const phone = "255679806126";
  const url = `https://wa.me/${phone}?text=${orderSummary}`;
  window.open(url, '_blank');
  
  showToast("Agizo limeandaliwa! WhatsApp itafunguka 📱");
  cart = [];
  updateCartUI();
  
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
  text += `📍 *Eneo la Duka:* Darajani, Zanzibar%0A`;
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
    return "📍 Duka letu lipo <strong>Darajani, Zanzibar</strong>. Tupate kwa majaribio ya kipekee na ushauri wa kibinafsi! 🏪";
  } 
  else if(lowerMsg.includes('malipo') || lowerMsg.includes('kulipa') || lowerMsg.includes('mpesa') || lowerMsg.includes('tigo') || lowerMsg.includes('airtel')) {
    return "💸 <strong>Njia za Malipo:</strong><br>📱 YAS: 0679806126 (FATMA AMOUR)<br>🏦 PBZ: 0825683001 (OMAR KHALID OMAR)<br>💵 Malipo kwa mkono yanakubalika Zanzibar na Dar es Salaam!";
  } 
  else if(lowerMsg.includes('whatsapp') || lowerMsg.includes('wasiliana') || lowerMsg.includes('simu') || lowerMsg.includes('piga') || lowerMsg.includes('namba')) {
    return "📱 <strong>Wasiliana Nasi:</strong><br>👔 Mkurugenzi Omar: +255 679 806 126<br>👤 Msaidizi wa Mkurugenzi: +255 776 626 229<br>🛍️ Meneja Mtandaoni: +255 677 532 140<br>📧 Barua Pepe: molittle1011@gmail.com";
  } 
  else if(lowerMsg.includes('usafirishaji') || lowerMsg.includes('wasilisha') || lowerMsg.includes('delivery')) {
    return "🚚 <strong>Taarifa za Usafirishaji:</strong><br>• Tanzania (Dar, Arusha, Mwanza, Zanzibar): siku 1-3 za kazi<br>• Usafirishaji bila malipo kwa maagizo zaidi ya TZS 150,000<br>• Tunatoa namba ya kufuatilia usafirishaji kwa shehena zote";
  } 
  else if(lowerMsg.includes('manukato') || lowerMsg.includes('harufu') || lowerMsg.includes('perfume')) {
    return "✨ Mkusanyiko wetu wa Manukato unajumuisha:<br>• Oud Noir (Mbao tajiri na amba)<br>• Golden Rose (Maua ya waridi na misk)<br>• Zanzibar Breeze (Nazi na vanila)<br>Angalia sehemu ya Duka kwa bidhaa zinazouzwa sana! 🛍️";
  } 
  else if(lowerMsg.includes('vipodozi') || lowerMsg.includes('urembo') || lowerMsg.includes('midomo') || lowerMsg.includes('makeup')) {
    return "💄 Bidhaa zetu za vipodozi zinajumuisha:<br>• Seti za Midomo Matte (rangi 5)<br>• Vitamin C Serum inayoongeza mng'aro<br>• Seti za zawadi za kifahari<br>Bidhaa zote hazidhuru wanyama na zimetoka kwa vyanzo vya kimaadili! 🌸";
  }
  else if(lowerMsg.includes('saa') || lowerMsg.includes('kazi') || lowerMsg.includes('fungua') || lowerMsg.includes('saa za kazi')) {
    return "⏰ <strong>Saa za Kufungua:</strong><br>Jumatatu - Jumamosi: 10:00 AM - 9:00 PM<br>Jumapili: 12:00 PM - 6:00 PM<br>📍 Darajani, Zanzibar";
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
  
  // Initialize product modal
  const modalElement = document.getElementById('productModal');
  if(modalElement) {
    productModal = new bootstrap.Modal(modalElement);
    setupModalButtons();
  }
  
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