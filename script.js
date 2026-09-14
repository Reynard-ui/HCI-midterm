/* ===== MENU DATA (Bakery — Meow Crust) ===== */
const menuItems = [
  {
    id: 1,
    name: "Salt Bread",
    category: "breads",
    price: 8.50,
    description: "A classic country loaf crowned with a thick rind of coarse salt — tender, slightly tangy crumb and a crackling golden crust.",
    image: "assets/salt-bread.jpg"
  },
  {
    id: 2,
    name: "Baguette Tradition",
    category: "breads",
    price: 4.75,
    description: "Crisp golden crust, airy interior — baked fresh every morning and all day.",
    image: "assets/french-baguettes.jpg"
  },
  {
    id: 3,
    name: "Soft Pretzel with Sea Salt",
    category: "breads",
    price: 9.25,
    description: "Soft, deeply mahogany knot with a glossy sheen and a generous dusting of flaky sea salt.",
    image: "assets/soft-pretzel-sea-salt.jpg"
  },
  {
    id: 4,
    name: "Butter Croissant",
    category: "pastries",
    price: 4.25,
    description: "Laminated over three days with cultured butter — flaky layers, honeyed crust.",
    image: "https://images.unsplash.com/photo-1568471382005-99e347e2aef0?w=400&q=80"
  },
  {
    id: 5,
    name: "Chocolate Puff Pastry Twists",
    category: "pastries",
    price: 5.50,
    description: "Flaky laminated puff pastry, twisted around a ribbon of dark chocolate — crisp outside, molten core.",
    image: "assets/choc-puff-twists.jpg"
  },
  {
    id: 6,
    name: "Signature Croissant",
    category: "pastries",
    price: 5.00,
    description: "Our house croissant — laminated with butter over three days, shatteringly flaky layers and a deeply golden, honey-scented crust.",
    image: "assets/signature-croissant.jpg"
  },
  {
    id: 7,
    name: "Mini Apple Pastry",
    category: "pastries",
    price: 4.75,
    description: "Crisp puff pastry cups filled with spiced apple compote and a swirl of vanilla cream — a pocket-sized orchard bite.",
    image: "assets/mini-apple-pastry.jpg"
  },
  {
    id: 11,
    name: "Dreamy Strawberry Shortcake",
    category: "cakes",
    price: 6.75,
    description: "Layers of vanilla shortcake soaked in strawberry syrup, sandwiched with whipped cream and fresh sliced strawberries.",
    image: "assets/dreamy-strawberry-shortcake.jpg"
  },
  {
    id: 12,
    name: "Strawberry Cheesecake",
    category: "cakes",
    price: 6.50,
    description: "Silky baked cheesecake crowned with a glossy strawberry compote and fresh berry halve on a buttery shortbread base.",
    image: "assets/strawberry-cheesecake.jpg"
  },
  {
    id: 13,
    name: "Tiramisu Cake",
    category: "cakes",
    price: 5.95,
    description: "Espresso-soaked savoiardi layered with airy mascarpone cream and a dusting of dark cocoa — coffee and cream in every bite.",
    image: "assets/tiramisu-cake.jpg"
  },
  {
    id: 14,
    name: "Classic Apple Pie",
    category: "pies",
    price: 5.50,
    description: "Double-crust pie packed with cinnamon-spiced apples and a glossy lemon glaze.",
    image: "assets/apple-pie.jpg"
  },
  {
    id: 15,
    name: "Pumpkin Spice Pie",
    category: "pies",
    price: 5.75,
    description: "Velvety pumpkin custard spiced with cinnamon and nutmeg in a buttery cinnamon crust.",
    image: "assets/pumpkin-pie.jpg"
  },
  {
    id: 16,
    name: "Red Raspberry Pie",
    category: "pies",
    price: 6.25,
    description: "Tart shells filled with tart red raspberry compote and a whisper of cream — jewel-bright and just-sweet.",
    image: "assets/red-raspberry-pie.jpg"
  }
];

/* ===== i18n: EN / ID ===== */
const LANG_KEY = 'meowcrust_lang';
let lang = 'en';
try {
  const savedLang = localStorage.getItem(LANG_KEY);
  if (savedLang === 'id' || savedLang === 'en') lang = savedLang;
} catch (e) { /* storage unavailable */ }

// Per-item Indonesian names + descriptions (English lives in menuItems)
const ITEM_ID = {
  1:  { name: 'Roti Garam',        desc: 'Roti pedesaan klasik yang dipuncaki kerak kasar garam — crumb lembut beraroma asam, crust emas yang garing.' },
  2:  { name: 'Baguette Tradisional',  desc: 'Crust keemasan renyah, bagian dalam berpori — dipanggang segar setiap pagi hingga sore.' },
  3:  { name: 'Pretzel Lunak Garam Laut', desc: 'Simpul pretzel cokelat tua yang lembut dan mengilap, ditaburi garam laut serpihan.' },
  4:  { name: 'Croissant Mentega',     desc: 'Dilaminasi tiga hari dengan mentega — lapisan renyah, crust bermadu.' },
  5:  { name: 'Puff Pastry Cokelat Melintir', desc: 'Puff pastry berlapis renyah yang dilinting mengelilingi pita cokelat pekat — garing di luar, lumer di dalam.' },
  6:  { name: 'Croissant Signature',    desc: 'Croissant khas rumah — dilaminasi mentega selama tiga hari, lapisan renyah sempurna, crust emas pekat beraroma madu.' },
  7:  { name: 'Pastry Apel Mini',      desc: 'Cangkir puff pastry renyah berisi kompot apel berbumbu dan semburat krim vanilla — gigitan kebun apel dalam ukuran saku.' },
  11: { name: 'Kue Shortcake Stroberi Mimpi', desc: 'Lapisan shortcake vanilla yang direndam sirup stroberi, disajikan dengan krim kocok dan stroberi segar iris.' },
  12: { name: 'Cheesecake Stroberi',     desc: 'Cheesecake panggang halus yang dihiasi kompot stroberi berkilau dan potongan stroberi segar di atas dasar shortbread mentega.' },
  13: { name: 'Kue Tiramisu',           desc: 'Savoiardi yang direndam espresso, disajikan dengan krim mascarpone ringan dan taburan kakao pekat — di setiap suapan ada kopi dan krim.' },
  14: { name: 'Pai Apel Klasik', desc: 'Pai crust ganda berisi apel berbumbu kayu manis dengan glasur lemon berkilau.' },
  15: { name: 'Pai Labu Rempah', desc: 'Kustard labu lembut berbumbu kayu manis dan pala, dalam crust kayu manis yang lembut.' },
  16: { name: 'Pai Raspberry Merah', desc: 'Cangkang pai renyah berisi kompot raspberry merah asam dan sentuhan krim — cerah dan pas manisnya.' }
};

function menuName(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item) return '';
  return lang === 'id' ? (ITEM_ID[id] || {}).name : item.name;
}

function menuDesc(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item) return '';
  return lang === 'id' ? (ITEM_ID[id] || {}).desc : item.description;
}

const I18N = {
  en: {
    navBreads: 'Bread', navPastries: 'Pastry', navPies: 'Pie',
    navCakes: 'Cake', navMenu: 'Menu',
    searchPh: 'Search the menu…',
    resultsLabel: 'results',
    searchEmpty: 'No treats match "%s" — try a different word.',
    navFav: '♥ Favorites', navBasket: '🧺 Basket',
    heroEyebrow: 'Baked fresh since 2018',
    heroTitle: 'Warmth, Baked From the Hearth',
    heroSub: 'Slow-fermented loaves, flaky pastries, and golden treats — all baked in small batches with whole grains, cultured butter, and patience.',
    heroCta: 'Browse the Menu', heroStory: 'Our Story',
    spotTitle: 'Fresh From the Oven',
    aboutTitle: 'Our Story',
    aboutP1: 'Hearth & Crumb began with a simple belief: good bread takes time. We mill our grains in-house, culture our own sourdough starters, and bake everything in small batches each morning.',
    aboutP2: 'Everything you taste is made from whole grains, cultured butter, real honey, and patience — because the flavor is worth the wait.',
    stat1: 'Daily Bakes', stat2: 'Average Rating', stat3: 'Happy Regulars', stat4: 'Years Baking',
    contactTitle: 'Get in Touch',
    contactAddr: '📍 42 Grain Mill Lane, Old Town',
    contactPhone: '📞 (555) 867-5309',
    contactEmail: '✉️ hello@meowcrust.com',
    contactHours: '🕐 Mon–Sat: 7am – 6pm · Sun: 8am – 4pm',
    phName: 'Your Name', phEmail: 'Your Email', phMsg: 'Your Message', sendMsg: 'Send Message',
    basketTitle: '🧺 Your Basket', basketEmpty: 'Your basket is empty.',
    total: 'Total:', checkout: 'Checkout',
    footerCopy: '© 2026 Meow Crust Artisan Bakery. Baked with patience.',
    backHome: '← Back to Home',
    footerStoryTitle: 'Our Story',
    footerStory: 'Good bread takes time. We mill our grains in-house, culture our own sourdough starters, and bake everything in small batches each morning.',
    footerContactTitle: 'Get in Touch',
    checkoutHow: 'How would you like to get your order?',
    shipPickup: 'Pickup', shipDelivery: 'Delivery',
    shipPickupDesc: 'Grab it at the counter', shipDeliveryDesc: 'We bring it to you',
    phoneLabel: 'Phone number for delivery', phonePh: 'e.g. 0812 3456 7890',
    placeOrder: 'Place Order',
    confirmPickupTitle: 'Order confirmed!',
    confirmPickupSub: 'Your order will be ready at the counter in about 20 minutes.',
    confirmDeliveryTitle: 'Order on your way',
    confirmDeliverySub: 'We will call you when your rider arrives.',
    orderIdLabel: 'Your order ID — show at the counter',
    btnBackHome: 'Back to Home',
    toastAdded: '%s added to your basket!',
    toastFavAdd: '%s added to favorites',
    toastFavRemove: '%s removed from favorites',
    toastSent: 'Message sent! We will get back to you soon.',
    toastEmpty: 'Your basket is empty!',
    toastPhoneInvalid: 'Please enter a valid phone number.',
    favEmpty: 'No favorites yet. Tap the heart on any treat to save it here.',
    addBtn: 'Add to Basket', each: 'each',
    menuTitle: 'Our Menu', favsTitle: 'My Favorites',
    ctaBreads: 'See Breads', ctaCakes: 'See Cakes', ctaPies: 'See Pies'
  },
  id: {
    navBreads: 'Roti', navPastries: 'Pastry', navPies: 'Pai',
    navCakes: 'Kue', navMenu: 'Menu',
    searchPh: 'Cari di menu…',
    resultsLabel: 'hasil',
    searchEmpty: 'Tidak ada menu yang cocok dengan "%s" — coba kata lain.',
    navFav: '♥ Favorit', navBasket: '🧺 Keranjang',
    heroEyebrow: 'Panggang segar sejak 2018',
    heroTitle: 'Hangatnya, Langsung dari Tungku',
    heroSub: 'Roti difermentasi perlahan, pastry renyah, dan camilan keemasan — semua dipanggang dalam jumlah kecil dengan biji-bijian utuh, mentega, dan kesabaran.',
    heroCta: 'Lihat Menu', heroStory: 'Cerita Kami',
    spotTitle: 'Baru Saja dari Oven',
    aboutTitle: 'Cerita Kami',
    aboutP1: 'Meow Crust dimulai dari satu keyakinan sederhana: roti yang enak butuh waktu. Kami menggiling biji-bijian sendiri, membuat sourdough starter sendiri, dan memanggang segalanya dalam jumlah kecil setiap pagi.',
    aboutP2: 'Semua yang Anda cicipi dibuat dari biji-bijian utuh, mentega, madu asli, dan kesabaran — karena rasanya sepadan dengan penantiannya.',
    stat1: 'Panggangan Harian', stat2: 'Rating Rata-rata', stat3: 'Pelanggan Setia', stat4: 'Tahun Memanggang',
    contactTitle: 'Hubungi Kami',
    contactAddr: '📍 42 Grain Mill Lane, Old Town',
    contactPhone: '📞 (555) 867-5309',
    contactEmail: '✉️ hello@meowcrust.com',
    contactHours: '🕐 Sen–Sab: 7 pagi – 6 sore · Min: 8 pagi – 4 sore',
    phName: 'Nama Anda', phEmail: 'Email Anda', phMsg: 'Pesan Anda', sendMsg: 'Kirim Pesan',
    basketTitle: '🧺 Keranjang Anda', basketEmpty: 'Keranjang Anda masih kosong.',
    total: 'Total:', checkout: 'Checkout',
    footerCopy: '© 2026 Meow Crust Artisan Bakery. Dipanggang dengan kesabaran.',
    backHome: '← Kembali ke Beranda',
    footerStoryTitle: 'Cerita Kami',
    footerStory: 'Roti yang enak butuh waktu. Kami menggiling biji-bijian sendiri, membuat sourdough starter sendiri, dan memanggang segalanya dalam jumlah kecil setiap pagi.',
    footerContactTitle: 'Hubungi Kami',
    checkoutHow: 'Bagaimana Anda ingin menerima pesanan?',
    shipPickup: 'Ambil Sendiri', shipDelivery: 'Antar ke Rumah',
    shipPickupDesc: 'Ambil di loket', shipDeliveryDesc: 'Kami yang mengantar',
    phoneLabel: 'Nomor telepon untuk pengiriman', phonePh: 'mis. 0812 3456 7890',
    placeOrder: 'Buat Pesanan',
    confirmPickupTitle: 'Pesanan dikonfirmasi!',
    confirmPickupSub: 'Pesanan Anda akan siap di loket dalam 20 menit.',
    confirmDeliveryTitle: 'Pesanan dalam perjalanan',
    confirmDeliverySub: 'Kami akan menelepon Anda ketika kurir tiba.',
    orderIdLabel: 'ID pesanan Anda — tunjukkan di loket',
    btnBackHome: 'Kembali ke Beranda',
    toastAdded: '%s ditambahkan ke keranjang!',
    toastFavAdd: '%s disimpan ke favorit',
    toastFavRemove: '%s dihapus dari favorit',
    toastSent: 'Pesan terkirim! Kami akan segera membalas.',
    toastEmpty: 'Keranjang Anda masih kosong!',
    toastPhoneInvalid: 'Mohon masukkan nomor telepon yang valid.',
    favEmpty: 'Belum ada favorit. Tekan ikon hati di setiap menu untuk menyimpannya di sini.',
    addBtn: 'Tambah ke Keranjang', each: 'per item',
    menuTitle: 'Menu Kami', favsTitle: 'Favorit Saya',
    ctaBreads: 'Lihat Roti', ctaCakes: 'Lihat Kue', ctaPies: 'Lihat Pai'
  }
};

function t(key, sub) {
  const val = (I18N[lang] && I18N[lang][key] !== undefined) ? I18N[lang][key] : I18N.en[key];
  if (val === undefined) return key;
  return sub === undefined ? val : String(val).replace(/%s/g, sub);
}

/* ===== STATE ===== */
const CART_KEY = 'meowcrust_cart';
let searchQuery = '';
let activeFilter = 'all';

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    // Keep only items that still exist in the menu, with sane quantities
    return raw.filter(c => c && c.id && c.qty > 0 && menuItems.some(i => i.id === c.id));
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    /* storage unavailable (private mode etc.) — cart just won't persist */
  }
}

let cart = loadCart();

/* ===== FAVORITES (persisted) ===== */
const FAV_KEY = 'meowcrust_favorites';

function loadFavorites() {
  try {
    const raw = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
    // Keep only ids that still exist in the menu
    return new Set(Array.isArray(raw) ? raw.filter(id => menuItems.some(i => i.id === id)) : []);
  } catch {
    return new Set();
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify([...favorites]));
  } catch (e) {
    /* storage unavailable (private mode etc.) — favorites just won't persist */
  }
}

const favorites = loadFavorites();

function toggleFavorite(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item) return;
  const wasFav = favorites.has(id);
  if (wasFav) favorites.delete(id); else favorites.add(id);
  saveFavorites();

  // Update the heart(s) in place with a little pop
  document.querySelectorAll(`.menu-item[data-id="${id}"] .fav-btn`).forEach(btn => {
    btn.classList.toggle('active', !wasFav);
    btn.textContent = !wasFav ? '♥' : '♡';
    btn.classList.remove('pop');
    void btn.offsetWidth; // restart the animation
    btn.classList.add('pop');
  });

  // If the user is viewing the favorites grid, re-render so the card shows/hides
  if (activeFilter === 'favorites') renderMenu('favorites');

  showToast(wasFav ? t('toastFavRemove', menuName(item.id)) : t('toastFavAdd', menuName(item.id)));
}

/* ===== DOM REFS ===== */
const menuGrid = document.getElementById('menuGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');

/* ===== RENDER MENU ===== */
function renderMenu(filter = 'all') {
  if (!menuGrid) return;
  let items;
  if (filter === 'favorites') {
    items = menuItems.filter(i => favorites.has(i.id));
  } else if (filter === 'all') {
    items = menuItems;
  } else {
    items = menuItems.filter(item => item.category === filter);
  }

  // Live search narrows whatever view is showing (category, favorites, or all)
  const q = searchQuery.trim().toLowerCase();
  if (q) {
    items = items.filter(item => {
      const hay = `${menuName(item.id)} ${menuDesc(item.id)} ${item.category}`.toLowerCase();
      return q.split(/\s+/).every(word => hay.includes(word));
    });
  }

  if (items.length === 0) {
    // Live search with no hits gets its own message; empty favorites keeps the original
    const msg = q ? t('searchEmpty', searchQuery) : (filter === 'favorites' ? t('favEmpty') : '');
    menuGrid.innerHTML = `<p class="empty-msg" style="grid-column:1/-1;text-align:center;padding:40px 0;">${msg}</p>`;
    return;
  }

  menuGrid.innerHTML = items.map(item => `
    <div class="menu-item" data-id="${item.id}">
      <div class="menu-item-img">
        <img src="${item.image}" alt="${menuName(item.id)}" loading="lazy" />
        <button class="fav-btn${favorites.has(item.id) ? ' active' : ''}" onclick="toggleFavorite(${item.id})" aria-label="Toggle favorite" title="${t('navFav')}">${favorites.has(item.id) ? '♥' : '♡'}</button>
      </div>
      <div class="menu-item-body">
        <h3>${menuName(item.id)}</h3>
        <p class="description">${menuDesc(item.id)}</p>
        <div class="menu-item-footer">
          <span class="price">$${item.price.toFixed(2)}</span>
          <button class="add-btn" onclick="addToCart(${item.id})">${t('addBtn')}</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ===== ADD TO BASKET ===== */
function addToCart(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(t('toastAdded', menuName(item.id)));
}

/* ===== ADJUST QUANTITY ===== */
function changeQty(id, delta) {
  const entry = cart.find(c => c.id === id);
  if (!entry) return;
  entry.qty += delta;
  if (entry.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

/* ===== REMOVE FROM BASKET ===== */
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

/* ===== UPDATE BASKET UI ===== */
function updateCartUI() {
  const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);
  cartCount.textContent = totalQty;
}

/* ===== RENDER BASKET ITEMS ===== */
function renderCartItems() {
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="empty-msg">${t('basketEmpty')}</p>`;
    cartTotalEl.textContent = '$0.00';
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${menuName(item.id)}</h4>
        <span>$${item.price.toFixed(2)} ${t('each')}</span>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Decrease quantity">&minus;</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Increase quantity">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">&times;</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

/* ===== TOAST ===== */
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

/* ===== EVENT LISTENERS ===== */

// Filter buttons (keeps the ?cat= URL param in sync with the top nav)
function applyFilter(cat) {
  activeFilter = cat;
  filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === cat));
  renderMenu(cat);

  // Reflect the active category in the banner heading (menu page only)
  const bannerTitle = document.getElementById('menuBannerTitle');
  if (bannerTitle) {
    const catKey = { breads: 'navBreads', pastries: 'navPastries', pies: 'navPies', cakes: 'navCakes' };
    bannerTitle.textContent =
      cat === 'all' ? t('menuTitle')
      : cat === 'favorites' ? t('favsTitle')
      : t(catKey[cat] || 'navBreads');
  }

  const url = new URL(window.location);
  url.searchParams.set('cat', cat);
  history.replaceState(null, '', url);
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
});

// Live menu search (menu page only)
const searchInput = document.getElementById('menuSearch');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    renderMenu(activeFilter);
  });
}

// Basket modal
cartBtn.addEventListener('click', () => {
  renderCartItems();
  cartModal.classList.add('open');
});

closeCart.addEventListener('click', () => {
  cartModal.classList.remove('open');
});

cartModal.addEventListener('click', (e) => {
  if (e.target === cartModal) cartModal.classList.remove('open');
});

/* ===== CHECKOUT: method (pickup/delivery) + confirmation ===== */
let shipMethod = 'pickup';

function generateOrderId() {
  // MC- + 6 unambiguous alphanumerics (no I, L, O, 0, 1)
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let id = '';
  for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return 'MC-' + id;
}

// Build the checkout modal + full-screen confirmation overlay (shared by every page)
(function buildCheckoutUI() {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <!-- CHECKOUT MODAL -->
    <div class="modal-overlay" id="checkoutModal">
      <div class="modal checkout-modal">
        <div class="modal-header">
          <h2 data-i18n="checkout">${t('checkout')}</h2>
          <button class="close-btn" id="closeCheckout">&times;</button>
        </div>
        <div class="checkout-body">
          <p class="checkout-label" data-i18n="checkoutHow">${t('checkoutHow')}</p>
          <div class="ship-options">
            <button type="button" class="ship-option active" id="optPickup">
              <span class="ship-ico">🏪</span>
              <span class="ship-name" data-i18n="shipPickup">${t('shipPickup')}</span>
              <span class="ship-desc" data-i18n="shipPickupDesc">${t('shipPickupDesc')}</span>
            </button>
            <button type="button" class="ship-option" id="optDelivery">
              <span class="ship-ico">🚚</span>
              <span class="ship-name" data-i18n="shipDelivery">${t('shipDelivery')}</span>
              <span class="ship-desc" data-i18n="shipDeliveryDesc">${t('shipDeliveryDesc')}</span>
            </button>
          </div>
          <div class="ship-phone-wrap" id="phoneWrap" hidden>
            <label class="checkout-label" for="phoneInput" data-i18n="phoneLabel">${t('phoneLabel')}</label>
            <input type="tel" id="phoneInput" class="phone-input" data-i18n-ph="phonePh" placeholder="${t('phonePh')}" autocomplete="tel" />
          </div>
          <div class="checkout-footer">
            <div class="cart-total"><span data-i18n="total">${t('total')}</span> <span id="checkoutTotal">$0.00</span></div>
            <button class="btn btn-primary" id="placeOrderBtn" data-i18n="placeOrder">${t('placeOrder')}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ORDER CONFIRMATION (centered popup modal) -->
    <div class="modal-overlay" id="confirmOverlay">
      <div class="modal confirm-modal">
        <button class="close-btn" id="closeConfirm" aria-label="Close">&times;</button>
        <div class="confirm-card">
          <div class="confirm-logo" id="confirmLogo"><img src="assets/logo.png" alt="Meow Crust"></div>
          <div class="confirm-cat" id="confirmCat" hidden><img src="assets/delivery-cat.gif" alt="Meow's on the way"></div>
          <h2 id="confirmTitle"></h2>
          <p id="confirmSub"></p>
          <div class="order-id-box" id="orderIdBox" hidden>
            <span class="order-id-label" data-i18n="orderIdLabel">${t('orderIdLabel')}</span>
            <span class="order-id" id="orderIdValue"></span>
          </div>
          <a class="btn btn-primary confirm-home" href="index.html" data-i18n="btnBackHome">${t('btnBackHome')}</a>
        </div>
      </div>
    </div>
  `;
  while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
})();

const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const optPickup = document.getElementById('optPickup');
const optDelivery = document.getElementById('optDelivery');
const phoneWrap = document.getElementById('phoneWrap');
const phoneInput = document.getElementById('phoneInput');
const checkoutTotal = document.getElementById('checkoutTotal');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const confirmOverlay = document.getElementById('confirmOverlay');
const confirmLogo = document.getElementById('confirmLogo');
const confirmCat = document.getElementById('confirmCat');
const confirmTitle = document.getElementById('confirmTitle');
const confirmSub = document.getElementById('confirmSub');
const orderIdBox = document.getElementById('orderIdBox');
const orderIdValue = document.getElementById('orderIdValue');
const closeConfirm = document.getElementById('closeConfirm');

function setShipMethod(m) {
  shipMethod = m;
  optPickup.classList.toggle('active', m === 'pickup');
  optDelivery.classList.toggle('active', m === 'delivery');
  phoneWrap.hidden = m !== 'delivery';
}

function openCheckout() {
  if (cart.length === 0) {
    showToast(t('toastEmpty'));
    return;
  }
  renderCartItems();
  setShipMethod('pickup');
  phoneInput.value = '';
  checkoutTotal.textContent = `$${cart.reduce((s, c) => s + c.price * c.qty, 0).toFixed(2)}`;
  cartModal.classList.remove('open');
  checkoutModal.classList.add('open');
}

function showConfirmation(order) {
  orderIdBox.hidden = false;
  orderIdValue.textContent = order.id;
  if (order.method === 'delivery') {
    orderIdBox.hidden = true; // order ID is shown for pickup; delivery confirms with the cat GIF
    confirmLogo.hidden = true;
    confirmCat.hidden = false;
    confirmTitle.hidden = true;  // the GIF carries its own "Meow's on their way!!" text
    confirmSub.hidden = true;
    confirmOverlay.classList.add('delivery');
  } else {
    confirmTitle.textContent = t('confirmPickupTitle');
    confirmSub.textContent = t('confirmPickupSub');
    confirmLogo.hidden = false;
    confirmCat.hidden = true;
    confirmTitle.hidden = false;
    confirmSub.hidden = false;
    confirmOverlay.classList.remove('delivery');
    confirmOverlay.classList.remove('loading');
  }
  confirmOverlay.classList.add('open');
}

checkoutBtn.addEventListener('click', openCheckout);
closeCheckout.addEventListener('click', () => checkoutModal.classList.remove('open'));
checkoutModal.addEventListener('click', (e) => {
  if (e.target === checkoutModal) checkoutModal.classList.remove('open');
});
optPickup.addEventListener('click', () => setShipMethod('pickup'));
optDelivery.addEventListener('click', () => setShipMethod('delivery'));

// Confirmation popup dismissal: × button or backdrop click
closeConfirm.addEventListener('click', () => confirmOverlay.classList.remove('open'));
confirmOverlay.addEventListener('click', (e) => {
  if (e.target === confirmOverlay) confirmOverlay.classList.remove('open');
});

placeOrderBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    showToast(t('toastEmpty'));
    return;
  }
  const order = { method: shipMethod, id: generateOrderId() };
  if (order.method === 'delivery') {
    const digits = phoneInput.value.replace(/\D/g, '');
    if (digits.length < 8 || digits.length > 14) {
      showToast(t('toastPhoneInvalid'));
      phoneInput.focus();
      return;
    }
    order.phone = phoneInput.value.trim();
  }
  cart = [];
  saveCart();
  updateCartUI();
  renderCartItems();
  cartModal.classList.remove('open');
  checkoutModal.classList.remove('open');
  showConfirmation(order);
});

// Contact form
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast(t('toastSent'));
    contactForm.reset();
  });
}

/* ===== INIT ===== */
if (menuGrid) {
  // Read ?cat= from the URL so the top-nav category links land pre-filtered.
  const initCat = new URLSearchParams(window.location.search).get('cat');
  const validCats = ['all', 'breads', 'pastries', 'pies', 'cakes', 'favorites'];
  applyFilter(validCats.includes(initCat) ? initCat : 'all');
}
if (cartBtn) updateCartUI(); // show persisted basket count on every page

/* ===== i18n: apply + language switcher ===== */
const langBtn = document.getElementById('langBtn');

function applyI18n() {
  // Static page text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = (I18N[lang] && I18N[lang][key] !== undefined) ? I18N[lang][key] : I18N.en[key];
    if (val !== undefined) el.textContent = val;
  });
  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = (I18N[lang] && I18N[lang][key] !== undefined) ? I18N[lang][key] : I18N.en[key];
    if (val !== undefined) el.setAttribute('placeholder', val);
  });
  // Document language
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';

  // Dynamic content
  if (menuGrid && activeFilter) renderMenu(activeFilter);
  if (cartItemsEl && cartItemsEl.isConnected) {
    // re-render basket if it currently holds items
    if (cart.length > 0) renderCartItems();
    else if (cartItemsEl.querySelector('.empty-msg')) cartItemsEl.querySelector('.empty-msg').textContent = t('basketEmpty');
  }
  if (typeof window.__rebuildSlides === 'function') window.__rebuildSlides();

  // The button shows the language you'd switch TO
  if (langBtn) langBtn.textContent = lang === 'en' ? 'ID' : 'EN';
}

if (langBtn) {
  langBtn.addEventListener('click', () => {
    lang = lang === 'en' ? 'id' : 'en';
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* private mode */ }
    applyI18n();
  });
}

// Apply the persisted language on load
applyI18n();

/* ===== NAVBAR: transparent at top, solid on scroll ===== */
const navbar = document.querySelector('.navbar');

function toggleNavState() {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
}

window.addEventListener('scroll', toggleNavState, { passive: true });
window.addEventListener('resize', toggleNavState, { passive: true });
toggleNavState();

/* ===== PAGE TRANSITION (home <-> menu) ===== */
// Forward (into the menu) wipes from the left; back (to home) wipes from the right.
(function initPageTransition() {
  const veilKey = 'meowcrust_veil';
  const veil = document.createElement('div');
  veil.className = 'page-veil';
  document.body.appendChild(veil);

  // Landing: the source page ended with its veil CLOSED, so this page must
  // start already closed (snapped in place, no animation) and then animate
  // open toward the parked side, so the curtain passes through in one go.
  const landedDir = sessionStorage.getItem(veilKey);
  if (landedDir === 'left' || landedDir === 'right') {
    sessionStorage.removeItem(veilKey);
    document.body.classList.add('no-anim');            // freeze transitions...
    // Park the rest side on the OPPOSITE end so the curtain passes THROUGH:
    // forward (dir 'left') entered from the left -> now exits to the right.
    // back (dir 'right') entered from the right -> now exits to the left.
    if (landedDir === 'left') document.body.classList.add('veil-right');
    document.body.classList.add('veil-closed');         // snap to closed, no slide
    void document.body.offsetWidth;                     // force reflow so it settles
    requestAnimationFrame(() => {
      document.body.classList.remove('no-anim');         // re-enable transitions
      requestAnimationFrame(() => {
        document.body.classList.remove('veil-closed');   // animate open to the parked side
      });
    });
  }

  // Leaving: intercept internal link clicks, close the veil, then go.
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || link.target === '_blank') return;
    if (e.defaultPrevented) return;

    // Skip pure in-page anchors unless the user also holds modifier keys.
    if (href.startsWith('#') && !e.ctrlKey && !e.metaKey && !e.shiftKey) return;

    // Same-page target (category switch on the menu page): filter in place,
    // no reload and no veil — only Home <-> Menu keeps the transition.
    const destUrl = new URL(href, window.location);
    if (destUrl.pathname === window.location.pathname) {
      e.preventDefault();
      const cat = destUrl.searchParams.get('cat');
      const cats = ['all', 'breads', 'pastries', 'pies', 'cakes', 'favorites'];
      applyFilter(cats.includes(cat) ? cat : 'all');
      return;
    }

    // Direction: back to the home page wipes from the right, forward wipes from the left.
    const dir = destUrl.pathname.includes('index') ? 'right' : 'left';
    document.body.classList.toggle('veil-right', dir === 'right');

    e.preventDefault();
    sessionStorage.setItem(veilKey, dir);
    document.body.classList.add('veil-closed');
    setTimeout(() => {
      window.location.href = href;
    }, 450);
  });
})();

/* ===== SPOTLIGHT SLIDESHOW (home page) ===== */
(function initSlideshow() {
  const track = document.getElementById('slideshowTrack');
  if (!track) return;

  // Slide content is language-aware: titles come from menuName(), copy from t()
  const slideDefs = [
    { id: 13, ctaKey: 'ctaCakes', link: 'menu.html?cat=cakes', image: 'assets/slide-butter-croissant.png', full: true, ctaClass: 'cta-right' },
    { id: 12, ctaKey: 'ctaCakes', link: 'menu.html?cat=cakes', image: 'assets/slide-strawberry-cheesecake.png', full: true, ctaClass: 'cta-left' },
    { id: 3, ctaKey: 'ctaBreads', link: 'menu.html?cat=breads', image: 'assets/slide-pretzel.png', full: true, ctaClass: 'cta-right' },
    { id: 16, ctaKey: 'ctaPies', link: 'menu.html?cat=pies', image: 'assets/slide-raspberry-pie.png', full: true, ctaClass: 'cta-left' }
  ];

  const slideCount = slideDefs.length;
  let current = 0;
  let timer = null;
  let slideEls = [];
  let dotEls = [];

  const prevBtn = document.getElementById('slidePrev');
  const nextBtn = document.getElementById('slideNext');
  const root = document.getElementById('slideshow');

  function slideData() {
    return slideDefs.map(d => {
      const item = menuItems.find(i => i.id === d.id);
      return {
        tag: d.tagKey ? t(d.tagKey) : null,
        title: menuName(d.id),
        text: d.textKey ? t(d.textKey) : null,
        image: d.image || item.image,
        cta: t(d.ctaKey),
        link: d.link,
        full: !!d.full,
        ctaClass: d.ctaClass || ''
      };
    });
  }

  function buildSlides() {
    track.innerHTML = slideData().map(s => s.full
      ? `<div class="slide slide-full">
          <div class="slide-img"><img src="${s.image}" alt="${s.title}" loading="lazy" /></div>
          <a class="btn btn-primary slide-cta ${s.ctaClass}" href="${s.link}">${s.cta}</a>
        </div>`
      : `<div class="slide">
          <div class="slide-img"><img src="${s.image.replace('w=400', 'w=800')}" alt="${s.title}" loading="lazy" /></div>
          <div class="slide-body">
            <span class="slide-tag">${s.tag}</span>
            <h3>${s.title}</h3>
            <p>${s.text}</p>
            <a class="btn btn-primary slide-cta" href="${s.link}">${s.cta}</a>
          </div>
        </div>`
    ).join('');

    // Dots: rebuild so click listeners stay in sync after a language switch
    let dotsWrap = document.getElementById('slideDots');
    if (!dotsWrap) {
      dotsWrap = document.createElement('div');
      dotsWrap.className = 'slide-dots';
      dotsWrap.id = 'slideDots';
      root.appendChild(dotsWrap);
    }
    dotsWrap.innerHTML = slideDefs.map((_, i) =>
      `<button class="slide-dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="Slide ${i + 1}"></button>`
    ).join('');

    slideEls = [...track.children];
    dotEls = [...dotsWrap.children];
    dotEls.forEach(d => d.addEventListener('click', () => { show(+d.dataset.dot); startTimer(); }));
  }

  function show(idx) {
    current = (idx + slideCount) % slideCount;
    slideEls.forEach((el, i) => {
      const off = (i - current + slideCount) % slideCount; // 0 active, 1 next (right), N-1 prev (left)
      el.classList.toggle('active', off === 0);
      el.classList.toggle('left', off === slideCount - 1);
      el.classList.toggle('right', off === 1);
      el.classList.toggle('hidden', off !== 0 && off !== 1 && off !== slideCount - 1);
    });
    dotEls.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(() => show(current + 1), 5000);
  }
  function stopTimer() { if (timer) clearInterval(timer); }

  prevBtn.addEventListener('click', () => { show(current - 1); startTimer(); });
  nextBtn.addEventListener('click', () => { show(current + 1); startTimer(); });
  root.addEventListener('mouseenter', stopTimer);
  root.addEventListener('mouseleave', startTimer);

  // Rebuild slide text when the language changes (exposed to the i18n switcher)
  window.__rebuildSlides = function() {
    buildSlides();
    show(current);
  };

  buildSlides();
  show(current); // show the first slide immediately (don't wait for the timer)
  startTimer();
})();
