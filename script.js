/* 
   THE ETERNAL WRIST — COMPLETE JAVASCRIPT
   SPA routing · Cart · Wishlist · Auth · Checkout · Filters
    */

"use strict";

/* 
   PRODUCT DATA
 */
const PRODUCTS = [
  {
    id: 1,
    brand: "Rolex",
    name: "Submariner Date",
    model: "Ref. 126610LN",
    desc: "The quintessential dive watch in Oystersteel with a black Cerachrom bezel insert.",
    longDesc:
      "The Submariner Date is the watch that made Rolex synonymous with diving. Water-resistant to 300 metres, the scratch-resistant Cerachrom ceramic bezel and Oyster bracelet make it equally at home in boardrooms and blue water.",
    price: 1385000,
    movement: "Automatic",
    strap: "Bracelet",
    caseDia: "41 mm",
    waterRes: "300 m",
    power: "70 hours",
    badge: "Bestseller",
    featured: true,
    img: "https://img.chrono24.com/images/uhren/45006203-tutrkzz34kw3fbz1dlm7bd3y-ExtraLarge.jpg",
    imgs: [
      "https://img.chrono24.com/images/uhren/45006203-tutrkzz34kw3fbz1dlm7bd3y-ExtraLarge.jpg",
      "https://img.chrono24.com/images/uhren/45006203-tutrkzz34kw3fbz1dlm7bd3y-ExtraLarge.jpg",
      "https://img.chrono24.com/images/uhren/45006203-tutrkzz34kw3fbz1dlm7bd3y-ExtraLarge.jpg",
      "https://img.chrono24.com/images/uhren/45006203-tutrkzz34kw3fbz1dlm7bd3y-ExtraLarge.jpg",
    ],
  },
  {
    id: 2,
    brand: "Omega",
    name: "Seamaster 300M",
    model: "Ref. 210.30.42.20.01.001",
    desc: "A legendary professional dive watch with a Co-Axial Master Chronometer movement.",
    longDesc:
      "The Seamaster Diver 300M is Omega's most iconic professional dive watch, worn by James Bond since 1995. The Co-Axial Master Chronometer calibre 8800 is certified to the most stringent accuracy and magnetic resistance standards.",
    price: 485000,
    movement: "Automatic",
    strap: "Rubber",
    caseDia: "42 mm",
    waterRes: "300 m",
    power: "60 hours",
    badge: "New Arrival",
    featured: true,
    img: "https://monochrome-watches.com/app/uploads/2014/12/omega-seamaster-300-master-co-axial-titanium-181.jpeg",
    imgs: [
      "https://monochrome-watches.com/app/uploads/2014/12/omega-seamaster-300-master-co-axial-titanium-181.jpeg",
      "https://monochrome-watches.com/app/uploads/2014/12/omega-seamaster-300-master-co-axial-titanium-181.jpeg",
      "https://monochrome-watches.com/app/uploads/2014/12/omega-seamaster-300-master-co-axial-titanium-181.jpeg",
      "https://monochrome-watches.com/app/uploads/2014/12/omega-seamaster-300-master-co-axial-titanium-181.jpeg",
    ],
  },
  {
    id: 3,
    brand: "Patek Philippe",
    name: "Calatrava",
    model: "Ref. 5196G-001",
    desc: "The archetype of the classic dress watch. Timeless white gold case, 37mm.",
    longDesc:
      "The Calatrava has been the cornerstone of Patek Philippe's collection since 1932. This 5196G in white gold features an ultra-thin manually wound Calibre 215 PS and a lacquered dial with applied baton indices.",
    price: 3650000,
    movement: "Manual",
    strap: "Leather",
    caseDia: "37 mm",
    waterRes: "25 m",
    power: "44 hours",
    badge: null,
    featured: true,
    img: "https://www.coveted.com/_next/image?url=https%3A%2F%2Fassets.coveted.com%2Fwatches%2Fimages%2Fpatek_philippe%2Ffinal_1724242206_2fe82205c3093000aaeed8202eb785d3_5227G-010.png&w=3840&q=75",
    imgs: [
      "https://www.coveted.com/_next/image?url=https%3A%2F%2Fassets.coveted.com%2Fwatches%2Fimages%2Fpatek_philippe%2Ffinal_1724242206_2fe82205c3093000aaeed8202eb785d3_5227G-010.png&w=3840&q=75",
      "https://www.coveted.com/_next/image?url=https%3A%2F%2Fassets.coveted.com%2Fwatches%2Fimages%2Fpatek_philippe%2Ffinal_1724242206_2fe82205c3093000aaeed8202eb785d3_5227G-010.png&w=3840&q=75",
    ],
  },
  {
    id: 4,
    brand: "TAG Heuer",
    name: "Carrera Chronograph",
    model: "CBN2A1B.FC6492",
    desc: "Born on the racing circuits of the 1960s — a chronograph that defines motorsport elegance.",
    longDesc:
      "Jack Heuer's masterpiece, born in 1963, remains the definitive racing chronograph. This modern iteration houses the HEUER-02 in-house movement with an 80-hour power reserve.",
    price: 295000,
    movement: "Automatic",
    strap: "Leather",
    caseDia: "42 mm",
    waterRes: "100 m",
    power: "80 hours",
    badge: null,
    featured: true,
    img: "https://swisswatches-magazine.com/uploads/2025/01/tag-heuer-carrera-chronograph-purple.webp",
    imgs: [
      "https://swisswatches-magazine.com/uploads/2025/01/tag-heuer-carrera-chronograph-purple.webp",
      "https://swisswatches-magazine.com/uploads/2025/01/tag-heuer-carrera-chronograph-purple.webp",
      "https://swisswatches-magazine.com/uploads/2025/01/tag-heuer-carrera-chronograph-purple.webp",
      "https://swisswatches-magazine.com/uploads/2025/01/tag-heuer-carrera-chronograph-purple.webp",
    ],
  },
  {
    id: 5,
    brand: "Seiko",
    name: "Presage SPB167",
    model: "SPB167J1",
    desc: "Inspired by Japanese cocktail culture — an enamel dial of exceptional hand-crafted quality.",
    longDesc:
      "The Presage SPB167 is inspired by the elegance of a Japanese bartender at work. The stunning white enamel dial is created using a traditional Shippo technique, each piece unique.",
    price: 86000,
    movement: "Automatic",
    strap: "Leather",
    caseDia: "40.2 mm",
    waterRes: "50 m",
    power: "45 hours",
    badge: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&q=85",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1593479490520-53b5da52f769?w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
    ],
  },
  {
    id: 6,
    brand: "Grand Seiko",
    name: "Snowflake",
    model: "SBGA211G",
    desc: "The icon of Japanese watchmaking — Spring Drive movement behind a legendary textured dial.",
    longDesc:
      "The Snowflake is perhaps the most celebrated dial in all of watchmaking. Hand-finished to evoke the snow-covered forests around the Shinshu Watch Studio, it houses the Spring Drive movement — unique in the world.",
    price: 650000,
    movement: "Automatic",
    strap: "Bracelet",
    caseDia: "41 mm",
    waterRes: "100 m",
    power: "72 hours",
    badge: "Exclusive",
    featured: false,
    img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=85",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
    ],
  },
  {
    id: 7,
    brand: "IWC",
    name: "Portugieser Chronograph",
    model: "IW371617",
    desc: "A silver-plated dial and rhodium hands define this quintessential dress chronograph.",
    longDesc:
      "The Portugieser Chronograph has a slim profile that flatters any occasion. The silver-plated dial with Arabic numerals and the column-wheel chronograph mechanism make it one of IWC's most admired references.",
    price: 740000,
    movement: "Automatic",
    strap: "Leather",
    caseDia: "41 mm",
    waterRes: "30 m",
    power: "68 hours",
    badge: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1593479490520-53b5da52f769?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1593479490520-53b5da52f769?w=800&q=85",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&q=80",
      "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
    ],
  },
  {
    id: 8,
    brand: "Cartier",
    name: "Santos de Cartier",
    model: "WSSA0018",
    desc: "One of the first wristwatches ever made. Screwed bezel, exposed screws, unmistakable.",
    longDesc:
      "Created in 1904 for aviator Alberto Santos-Dumont, the Santos was one of the world's first purpose-designed wristwatches. The contemporary interchangeable strap system makes it uniquely versatile.",
    price: 895000,
    movement: "Automatic",
    strap: "Bracelet",
    caseDia: "39.8 mm",
    waterRes: "100 m",
    power: "48 hours",
    badge: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=85",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&q=80",
    ],
  },
  {
    id: 9,
    brand: "Rolex",
    name: "Datejust 41",
    model: "Ref. 126334",
    desc: "The watch that defined modern watchmaking — fluted bezel, jubilee bracelet, Rolesor.",
    longDesc:
      "Introduced in 1945 as the first self-winding chronometric wristwatch to display the date, the Datejust remains Rolex's most iconic model. This 41mm iteration in Rolesor marries steel and white gold flawlessly.",
    price: 965000,
    movement: "Automatic",
    strap: "Bracelet",
    caseDia: "41 mm",
    waterRes: "100 m",
    power: "70 hours",
    badge: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=85",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1623998022290-a8bfee5c7e5a?w=800&q=80",
      "https://images.unsplash.com/photo-1592609931095-54a2168ae893?w=800&q=80",
    ],
  },
  {
    id: 10,
    brand: "Omega",
    name: "Speedmaster Moonwatch",
    model: "Ref. 310.30.42.50.01.001",
    desc: "The first watch worn on the moon. NASA-certified for all manned space missions.",
    longDesc:
      "On July 21, 1969, the Speedmaster became the first watch worn on the moon. This Professional Moonwatch features the legendary manually-wound Calibre 3861 with a co-axial escapement, certified by NASA.",
    price: 590000,
    movement: "Manual",
    strap: "Bracelet",
    caseDia: "42 mm",
    waterRes: "50 m",
    power: "50 hours",
    badge: "Heritage",
    featured: false,
    img: "https://images.unsplash.com/photo-1623998022290-a8bfee5c7e5a?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1623998022290-a8bfee5c7e5a?w=800&q=85",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
      "https://images.unsplash.com/photo-1593479490520-53b5da52f769?w=800&q=80",
      "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&q=80",
    ],
  },
  {
    id: 11,
    brand: "TAG Heuer",
    name: "Monaco",
    model: "CAW211P.FC6356",
    desc: "The world's first automatic square-case chronograph. Steve McQueen's watch.",
    longDesc:
      "Launched in 1969 and immortalised by Steve McQueen in Le Mans (1971), the Monaco's distinctive square waterproof case made horological history. This edition features the Calibre Heuer 11 with a 40-hour power reserve.",
    price: 355000,
    movement: "Automatic",
    strap: "Leather",
    caseDia: "39 mm",
    waterRes: "100 m",
    power: "80 hours",
    badge: "Limited",
    featured: false,
    img: "https://images.unsplash.com/photo-1542496658-e33a6d0d82a0?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d82a0?w=800&q=85",
      "https://images.unsplash.com/photo-1592609931095-54a2168ae893?w=800&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
    ],
  },
  {
    id: 12,
    brand: "Seiko",
    name: "Prospex Marinemaster",
    model: "SLA021J1",
    desc: "Professional-grade saturation diver spec in a striking heritage-inspired design.",
    longDesc:
      "The Marinemaster Professional is built to saturation diving specifications, pressure tested to 1000m. The 8L35 high-beat movement and iconic turtle case pay tribute to Seiko's legendary dive watch heritage.",
    price: 165000,
    movement: "Automatic",
    strap: "Rubber",
    caseDia: "45 mm",
    waterRes: "300 m",
    power: "50 hours",
    badge: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=85",
      "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80",
    ],
  },
  {
    id: 13,
    brand: "IWC",
    name: "Pilot's Watch Mark XX",
    model: "IW328201",
    desc: "The purest expression of functional aviation design. Clean dial, reliable movement.",
    longDesc:
      "Inspired by instruments from the Golden Age of aviation, the Mark XX distills pilot watchmaking to its essential form. The in-house Calibre 32111 offers an unprecedented 120-hour power reserve.",
    price: 465000,
    movement: "Automatic",
    strap: "Leather",
    caseDia: "40 mm",
    waterRes: "60 m",
    power: "120 hours",
    badge: null,
    featured: false,
    img: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=85",
      "https://images.unsplash.com/photo-1593479490520-53b5da52f769?w=800&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d82a0?w=800&q=80",
    ],
  },
  {
    id: 14,
    brand: "Cartier",
    name: "Tank Louis Cartier",
    model: "WGTA0023",
    desc: "Since 1917, the Tank has been a cultural landmark — worn by royalty and icons alike.",
    longDesc:
      "Louis Cartier created the Tank in 1917, inspired by Renault tanks on the Western Front. Over a century later, it remains the most elegant expression of rectangular watchmaking.",
    price: 1250000,
    movement: "Manual",
    strap: "Leather",
    caseDia: "33.7 × 25.5 mm",
    waterRes: "30 m",
    power: "38 hours",
    badge: "Iconic",
    featured: false,
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=85",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&q=80",
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80",
    ],
  },
  {
    id: 15,
    brand: "Grand Seiko",
    name: "Birch Forest",
    model: "SBGJ247",
    desc: "A Hi-Beat 36000 movement behind a dial evoking the silver bark of Shirakanba birch.",
    longDesc:
      "The Birch Forest dial is hand-crafted at the Shizukuishi Studio, each one unique. The Hi-Beat 36000 Calibre 9S86 beats at 10 vibrations per second, achieving an accuracy of +5/-3 seconds per day.",
    price: 1180000,
    movement: "Automatic",
    strap: "Bracelet",
    caseDia: "40 mm",
    waterRes: "100 m",
    power: "55 hours",
    badge: "Exclusive",
    featured: false,
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=85",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80",
    ],
  },
  {
    id: 16,
    brand: "Patek Philippe",
    name: "Nautilus",
    model: "Ref. 5711/1A-010",
    desc: "Designed by Gerald Genta in 1976 — the sports luxury icon that changed watchmaking forever.",
    longDesc:
      "The Nautilus is perhaps the most coveted watch in the world. Designed in 48 hours by the legendary Gerald Genta, its porthole-inspired case and integrated bracelet defined the luxury sports watch genre.",
    price: 8500000,
    movement: "Automatic",
    strap: "Bracelet",
    caseDia: "40 mm",
    waterRes: "120 m",
    power: "45 hours",
    badge: "Ultra Rare",
    featured: false,
    img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80&fit=crop",
    imgs: [
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=85",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&q=80",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────────── */
let cart = [];
let wishlist = [];
let currentSection = "home";
let previousSection = "home";
let currentProductId = null;
let checkoutStep = 1;
let loggedInUser = null;

/* ─────────────────────────────────────────────────────────────
   UTILITIES
───────────────────────────────────────────────────────────── */
function fmtPrice(n) {
  if (n >= 10000000) return "₹" + (n / 10000000).toFixed(2) + " Cr";
  if (n >= 100000) return "₹" + (n / 100000).toFixed(2) + "L";
  return "₹" + n.toLocaleString("en-IN");
}
function fmtPriceFull(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function toast(msg, type = "success") {
  const icons = {
    success: "fa-circle-check",
    error: "fa-circle-xmark",
    info: "fa-circle-info",
  };
  const el = document.createElement("div");
  el.className = `toast t-${type}`;
  el.innerHTML = `<i class="fa-solid ${icons[type]}"></i><span>${msg}</span>`;
  document.getElementById("toastStack").appendChild(el);
  requestAnimationFrame(() =>
    requestAnimationFrame(() => el.classList.add("show")),
  );
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 400);
  }, 3200);
}

/* ─────────────────────────────────────────────────────────────
   SPA ROUTING
───────────────────────────────────────────────────────────── */
function showSection(name) {
  document
    .querySelectorAll(".page-section")
    .forEach((s) => s.classList.remove("active"));
  const el = document.getElementById("section-" + name);
  if (!el) return;
  el.classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });

  previousSection = currentSection;
  currentSection = name;

  // lazy renders
  if (name === "collection") renderCollection();
  if (name === "wishlist") renderWishlistPage();
  if (name === "checkout") renderCheckout();

  closeCart();
  initReveal();
}

/* nav shortcut for mobile */
function navTo(name) {
  closeMobileNav();
  showSection(name);
}

function goBack() {
  showSection(previousSection || "collection");
}

/* ─────────────────────────────────────────────────────────────
   PRODUCT CARD HTML
───────────────────────────────────────────────────────────── */
function buildCard(p) {
  const inWL = wishlist.includes(p.id);
  return `
    <div class="product-card reveal" data-id="${p.id}">
      <div class="pc-img-wrap" onclick="openDetail(${p.id})">
        ${p.badge ? `<span class="pc-badge">${p.badge}</span>` : ""}
        <img src="${p.img}" alt="${p.brand} ${p.name}" loading="lazy" />
        <button class="pc-wishlist ${inWL ? "active" : ""}" onclick="toggleWishlist(event,${p.id})" aria-label="Toggle wishlist">
          <i class="${inWL ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
      </div>
      <div class="pc-body">
        <div class="pc-brand">${p.brand}</div>
        <div class="pc-name" onclick="openDetail(${p.id})">${p.name}</div>
        <div class="pc-desc">${p.desc}</div>
        <div class="pc-tags">
          <span class="pc-tag">${p.movement}</span>
          <span class="pc-tag">${p.caseDia}</span>
          <span class="pc-tag">${p.strap}</span>
        </div>
      </div>
      <div class="pc-foot">
        <div>
          <div class="pc-price">${fmtPrice(p.price)}</div>
          <div class="pc-price-note">Incl. taxes &amp; duties</div>
        </div>
        <button class="btn-add-to-cart" onclick="addToCart(${p.id})">
          <i class="fa-solid fa-bag-shopping"></i> Add
        </button>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────────────────────────
   HOME — FEATURED
───────────────────────────────────────────────────────────── */
function renderFeatured() {
  const el = document.getElementById("featuredGrid");
  if (!el) return;
  el.innerHTML = PRODUCTS.filter((p) => p.featured)
    .map(buildCard)
    .join("");
  initReveal();
}

/* ─────────────────────────────────────────────────────────────
   COLLECTION — FILTERS + SEARCH + SORT
───────────────────────────────────────────────────────────── */
function renderCollection() {
  applyFilters();
}

function applyFilters() {
  const q = (
    document.getElementById("collectionSearch")?.value ||
    document.getElementById("navSearchInput")?.value ||
    ""
  )
    .toLowerCase()
    .trim();

  const brands = [
    ...document.querySelectorAll('input[name="brand"]:checked'),
  ].map((i) => i.value);
  const priceVal = document.querySelector('input[name="price"]:checked')?.value;
  const movements = [
    ...document.querySelectorAll('input[name="movement"]:checked'),
  ].map((i) => i.value);
  const straps = [
    ...document.querySelectorAll('input[name="strap"]:checked'),
  ].map((i) => i.value);
  const sortVal = document.getElementById("sortSelect")?.value || "default";

  let res = PRODUCTS.filter((p) => {
    if (
      q &&
      !`${p.brand} ${p.name} ${p.model} ${p.desc}`.toLowerCase().includes(q)
    )
      return false;
    if (brands.length && !brands.includes(p.brand)) return false;
    if (priceVal) {
      const [mn, mx] = priceVal.split("-").map(Number);
      if (p.price < mn || p.price > mx) return false;
    }
    if (movements.length && !movements.includes(p.movement)) return false;
    if (straps.length && !straps.includes(p.strap)) return false;
    return true;
  });

  if (sortVal === "price-asc") res.sort((a, b) => a.price - b.price);
  if (sortVal === "price-desc") res.sort((a, b) => b.price - a.price);
  if (sortVal === "name-asc") res.sort((a, b) => a.name.localeCompare(b.name));

  const grid = document.getElementById("collectionGrid");
  const empty = document.getElementById("collectionEmpty");
  const label = document.getElementById("resultsLabel");
  if (!grid) return;

  if (res.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.style.display = "flex";
    if (label) label.textContent = "No pieces found";
  } else {
    if (empty) empty.style.display = "none";
    grid.innerHTML = res.map(buildCard).join("");
    if (label)
      label.textContent = `Showing ${res.length} piece${res.length !== 1 ? "s" : ""}`;
    initReveal();
  }
}

function clearFilters() {
  document
    .querySelectorAll(
      'input[name="brand"],input[name="movement"],input[name="strap"]',
    )
    .forEach((i) => (i.checked = false));
  document
    .querySelectorAll('input[name="price"]')
    .forEach((i) => (i.checked = false));
  const cs = document.getElementById("collectionSearch");
  if (cs) cs.value = "";
  const ss = document.getElementById("sortSelect");
  if (ss) ss.value = "default";
  applyFilters();
}

function filterByBrand(brand) {
  showSection("collection");
  setTimeout(() => {
    document.querySelectorAll('input[name="brand"]').forEach((i) => {
      i.checked = i.value === brand;
    });
    applyFilters();
  }, 80);
}

function toggleFilterSidebar() {
  const sb = document.getElementById("filterSidebar");
  const btn = document.getElementById("filterToggleBtn");
  if (!sb) return;
  const isOpen = sb.classList.toggle("open");
  if (btn) btn.style.borderColor = isOpen ? "rgba(230,57,70,0.5)" : "";
}

/* ─────────────────────────────────────────────────────────────
   PRODUCT DETAIL
───────────────────────────────────────────────────────────── */
function openDetail(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  currentProductId = id;
  previousSection = currentSection;

  const inWL = wishlist.includes(p.id);
  const dc = document.getElementById("detailContent");
  dc.innerHTML = `
    <div class="detail-grid">
      <div class="detail-gallery">
        <div class="detail-main-img" id="detailMainImg">
          <img src="${p.imgs[0]}" alt="${p.brand} ${p.name}" id="detailMainImgEl" />
        </div>
        <div class="detail-thumbs">
          ${p.imgs
            .map(
              (src, i) => `
            <div class="detail-thumb ${i === 0 ? "active" : ""}" onclick="switchDetailImg(${i},'${src}')">
              <img src="${src}" alt="View ${i + 1}" loading="lazy" />
            </div>`,
            )
            .join("")}
        </div>
      </div>
      <div class="detail-info">
        <div class="detail-brand">${p.brand} — ${p.model}</div>
        <h1 class="detail-name">${p.name}</h1>
        <div class="detail-price-row">
          <div class="detail-price">${fmtPriceFull(p.price)}</div>
          <div class="detail-price-note">GST incl. · Free insured delivery</div>
        </div>
        <p class="detail-desc">${p.longDesc}</p>
        <div class="specs-section">
          <p class="specs-title">Specifications</p>
          <div class="spec-row"><span class="spec-key">Case Diameter</span><span class="spec-val">${p.caseDia}</span></div>
          <div class="spec-row"><span class="spec-key">Movement</span><span class="spec-val">${p.movement}</span></div>
          <div class="spec-row"><span class="spec-key">Strap / Bracelet</span><span class="spec-val">${p.strap}</span></div>
          <div class="spec-row"><span class="spec-key">Water Resistance</span><span class="spec-val">${p.waterRes}</span></div>
          <div class="spec-row"><span class="spec-key">Power Reserve</span><span class="spec-val">${p.power}</span></div>
          <div class="spec-row"><span class="spec-key">Reference</span><span class="spec-val">${p.model}</span></div>
        </div>
        <div class="detail-ctas">
          <button class="btn-primary" onclick="addToCart(${p.id})">
            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
          </button>
          <button class="btn-detail-wishlist ${inWL ? "active" : ""}" id="detailWishBtn" onclick="toggleDetailWishlist(${p.id})" aria-label="Toggle wishlist">
            <i class="${inWL ? "fa-solid" : "fa-regular"} fa-heart"></i>
          </button>
        </div>
        <div class="detail-assurances">
          <div class="assurance-item"><i class="fa-solid fa-shield-halved"></i><strong>Authenticated</strong><span>Verified by certified watchmakers</span></div>
          <div class="assurance-item"><i class="fa-solid fa-rotate"></i><strong>2-Year Warranty</strong><span>International service coverage</span></div>
          <div class="assurance-item"><i class="fa-solid fa-truck"></i><strong>Insured Shipping</strong><span>White-glove delivery service</span></div>
        </div>
      </div>
    </div>
    <div class="detail-reviews">
      <h2 class="reviews-heading">Client Reviews</h2>
      <p class="reviews-meta">4.9 out of 5 &mdash; Based on 127 verified purchases</p>
      <div class="reviews-grid">${buildReviews()}</div>
    </div>`;

  showSection("detail");
}

function buildReviews() {
  const rv = [
    {
      init: "RM",
      name: "Rahul M.",
      date: "January 2024",
      stars: 5,
      text: "An absolutely exceptional acquisition. The piece arrived immaculately packaged and the concierge service was nothing short of extraordinary. The Eternal Wrist is in a class of its own.",
    },
    {
      init: "PS",
      name: "Priya S.",
      date: "December 2023",
      stars: 5,
      text: "I had been searching for this reference for over a year. The Eternal Wrist located it, authenticated it, and delivered it within 48 hours. A truly remarkable experience.",
    },
    {
      init: "AK",
      name: "Arjun K.",
      date: "November 2023",
      stars: 5,
      text: "Impeccable quality, exactly as described. The authentication certificate and presentation box elevate the entire ownership experience in a way I had not anticipated.",
    },
  ];
  return rv
    .map(
      (r) => `
    <div class="review-card">
      <div class="review-stars">${"★".repeat(r.stars)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-author">
        <div class="review-avatar">${r.init}</div>
        <div><strong>${r.name}</strong><span>${r.date}</span></div>
      </div>
    </div>`,
    )
    .join("");
}

function switchDetailImg(index, src) {
  const img = document.getElementById("detailMainImgEl");
  if (img) img.src = src;
  document
    .querySelectorAll(".detail-thumb")
    .forEach((t, i) => t.classList.toggle("active", i === index));
}

function toggleDetailWishlist(id) {
  toggleWishlist(null, id);
  const btn = document.getElementById("detailWishBtn");
  if (!btn) return;
  const active = wishlist.includes(id);
  btn.classList.toggle("active", active);
  btn.querySelector("i").className = active
    ? "fa-solid fa-heart"
    : "fa-regular fa-heart";
}

/* ─────────────────────────────────────────────────────────────
   CART
───────────────────────────────────────────────────────────── */
function addToCart(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const existing = cart.find((i) => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });
  refreshCartUI();
  toast(`${p.name} added to cart`);
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  refreshCartUI();
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  refreshCartUI();
}

function openCart() {
  document.getElementById("cartOverlay").classList.add("active");
  document.getElementById("cartDrawer").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cartOverlay").classList.remove("active");
  document.getElementById("cartDrawer").classList.remove("active");
  document.body.style.overflow = "";
}

function refreshCartUI() {
  // Badge
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cartBadge");
  badge.textContent = total;
  badge.classList.toggle("hidden", total === 0);

  const body = document.getElementById("cartBody");
  const foot = document.getElementById("cartFoot");

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4>Your cart is empty</h4>
        <p>Discover our collection of exceptional timepieces.</p>
        <button class="btn-primary" style="margin-top:8px" onclick="showSection('collection'); closeCart()">Explore Collection</button>
      </div>`;
    foot.innerHTML = "";
    return;
  }

  let subtotal = 0;
  body.innerHTML = cart
    .map((item) => {
      const p = PRODUCTS.find((x) => x.id === item.id);
      if (!p) return "";
      const lineTotal = p.price * item.qty;
      subtotal += lineTotal;
      return `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${p.img}" alt="${p.name}" /></div>
        <div class="cart-item-info">
          <div class="cart-item-brand">${p.brand}</div>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${fmtPrice(lineTotal)}</div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="changeQty(${p.id},-1)" aria-label="Decrease"><i class="fa-solid fa-minus" style="font-size:9px"></i></button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${p.id},1)" aria-label="Increase"><i class="fa-solid fa-plus" style="font-size:9px"></i></button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${p.id})" aria-label="Remove"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </div>
      </div>`;
    })
    .join("");

  const shipping = subtotal >= 50000 ? 0 : 999;
  const gst = Math.round(subtotal * 0.03);
  const grand = subtotal + shipping + gst;

  foot.innerHTML = `
    <div class="cart-subtotal-row"><span>Subtotal</span><span>${fmtPriceFull(subtotal)}</span></div>
    <div class="cart-shipping-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:#4caf50;font-size:0.75rem;font-family:var(--f-mono)">Free</span>' : fmtPriceFull(shipping)}</span></div>
    <div class="cart-gst-row"><span>GST (3%)</span><span>${fmtPriceFull(gst)}</span></div>
    <div class="cart-grand-row"><span>Total</span><span>${fmtPriceFull(grand)}</span></div>
    <button class="btn-primary btn-full" onclick="closeCart(); showSection('checkout')">Proceed to Checkout</button>`;
}

/* ─────────────────────────────────────────────────────────────
   WISHLIST
───────────────────────────────────────────────────────────── */
function toggleWishlist(e, id) {
  if (e) e.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    const p = PRODUCTS.find((x) => x.id === id);
    toast(`${p.name} added to wishlist`, "info");
  } else {
    wishlist.splice(idx, 1);
  }
  refreshWishlistBadge();
  refreshAllWishlistBtns();
}

function refreshWishlistBadge() {
  const b = document.getElementById("wishlistBadge");
  b.textContent = wishlist.length;
  b.classList.toggle("hidden", wishlist.length === 0);
}

function refreshAllWishlistBtns() {
  document.querySelectorAll(".pc-wishlist[data-id]").forEach((btn) => {
    const id = parseInt(btn.dataset.id);
    if (!id) return;
    const active = wishlist.includes(id);
    btn.classList.toggle("active", active);
    btn.querySelector("i").className = active
      ? "fa-solid fa-heart"
      : "fa-regular fa-heart";
  });
  // also re-stamp data-ids
  document.querySelectorAll("[data-id]").forEach((card) => {
    const id = parseInt(card.dataset.id);
    const btn = card.querySelector(".pc-wishlist");
    if (!btn) return;
    btn.dataset.id = id;
    const active = wishlist.includes(id);
    btn.classList.toggle("active", active);
    btn.querySelector("i").className = active
      ? "fa-solid fa-heart"
      : "fa-regular fa-heart";
  });
}

function renderWishlistPage() {
  const grid = document.getElementById("wishlistGrid");
  const empty = document.getElementById("wishlistEmpty");
  if (!grid) return;
  if (wishlist.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "flex";
  } else {
    empty.style.display = "none";
    grid.innerHTML = PRODUCTS.filter((p) => wishlist.includes(p.id))
      .map(buildCard)
      .join("");
    initReveal();
  }
}

/* ─────────────────────────────────────────────────────────────
   CHECKOUT
───────────────────────────────────────────────────────────── */
function renderCheckout() {
  const wrapper = document.getElementById("checkoutWrapper");
  if (!wrapper) return;

  if (cart.length === 0) {
    wrapper.innerHTML = `
      <div class="order-confirmed">
        <div class="order-confirmed-icon"><i class="fa-solid fa-bag-shopping"></i></div>
        <h2>Cart is Empty</h2>
        <p>Add timepieces to your cart before proceeding.</p>
        <button class="btn-primary" style="margin-top:24px" onclick="showSection('collection')">Browse Collection</button>
      </div>`;
    return;
  }

  checkoutStep = 1;
  renderCheckoutStep();
}

function renderCheckoutStep() {
  const wrapper = document.getElementById("checkoutWrapper");
  if (!wrapper) return;

  const steps = ["Shipping", "Payment", "Confirm"];
  const stepperHtml = `
    <div class="checkout-stepper">
      ${steps
        .map(
          (s, i) => `
        <div class="checkout-step ${checkoutStep === i + 1 ? "is-active" : checkoutStep > i + 1 ? "is-done" : ""}">
          <div class="step-circle">${checkoutStep > i + 1 ? '<i class="fa-solid fa-check" style="font-size:0.625rem"></i>' : i + 1}</div>
          <span class="step-name">${s}</span>
        </div>
        ${i < steps.length - 1 ? '<div class="step-divider"></div>' : ""}
      `,
        )
        .join("")}
    </div>`;

  let formHtml = "";

  if (checkoutStep === 1) {
    formHtml = `
      <div class="checkout-form-card">
        <h3>Shipping Details</h3>
        <div class="form-row-2">
          <div class="field-group"><label class="field-label">First Name</label><input type="text" class="field-input" placeholder="Arjun" /></div>
          <div class="field-group"><label class="field-label">Last Name</label><input type="text" class="field-input" placeholder="Mehta" /></div>
        </div>
        <div class="field-group"><label class="field-label">Email Address</label><input type="email" class="field-input" placeholder="arjun@example.com" /></div>
        <div class="field-group"><label class="field-label">Phone Number</label><input type="tel" class="field-input" placeholder="+91 98765 43210" /></div>
        <div class="field-group"><label class="field-label">Address Line 1</label><input type="text" class="field-input" placeholder="Flat 4B, Prestige Towers" /></div>
        <div class="field-group"><label class="field-label">Address Line 2</label><input type="text" class="field-input" placeholder="Bandra West" /></div>
        <div class="form-row-2">
          <div class="field-group"><label class="field-label">City</label><input type="text" class="field-input" placeholder="Mumbai" /></div>
          <div class="field-group"><label class="field-label">PIN Code</label><input type="text" class="field-input" placeholder="400050" /></div>
        </div>
        <div class="field-group">
          <label class="field-label">State</label>
          <select class="field-input field-select">
            <option>Maharashtra</option><option>Delhi</option><option>Karnataka</option>
            <option>Tamil Nadu</option><option>Gujarat</option><option>Rajasthan</option>
          </select>
        </div>
        <div style="margin-top:8px">
          <button class="btn-primary btn-full" onclick="nextStep()">Continue to Payment <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>`;
  } else if (checkoutStep === 2) {
    formHtml = `
      <div class="checkout-form-card">
        <h3>Payment Method</h3>
        <div class="payment-opts">
          <div class="payment-opt selected" onclick="selectPayment(this)">
            <input type="radio" name="pm" checked /><label>Credit / Debit Card</label>
            <i class="fa-brands fa-cc-visa pay-icon"></i>
          </div>
          <div class="payment-opt" onclick="selectPayment(this)">
            <input type="radio" name="pm" /><label>UPI / Net Banking</label>
            <i class="fa-solid fa-mobile-screen-button pay-icon"></i>
          </div>
          <div class="payment-opt" onclick="selectPayment(this)">
            <input type="radio" name="pm" /><label>EMI (0% interest available)</label>
            <i class="fa-solid fa-calendar-days pay-icon"></i>
          </div>
          <div class="payment-opt" onclick="selectPayment(this)">
            <input type="radio" name="pm" /><label>Bank Transfer / RTGS</label>
            <i class="fa-solid fa-building-columns pay-icon"></i>
          </div>
        </div>
        <div class="field-group"><label class="field-label">Card Number</label><input type="text" class="field-input" placeholder="4242 4242 4242 4242" maxlength="19" /></div>
        <div class="form-row-2">
          <div class="field-group"><label class="field-label">Expiry</label><input type="text" class="field-input" placeholder="MM / YY" maxlength="7" /></div>
          <div class="field-group"><label class="field-label">CVV</label><input type="password" class="field-input" placeholder="•••" maxlength="4" /></div>
        </div>
        <div class="field-group"><label class="field-label">Name on Card</label><input type="text" class="field-input" placeholder="Arjun Mehta" /></div>
        <div class="checkout-btn-row">
          <button class="btn-checkout-back" onclick="prevStep()"><i class="fa-solid fa-arrow-left"></i> Back</button>
          <button class="btn-primary" style="flex:1;justify-content:center" onclick="nextStep()">Review Order <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>`;
  } else if (checkoutStep === 3) {
    const subtotal = cartSubtotal();
    const shipping = subtotal >= 50000 ? 0 : 999;
    const gst = Math.round(subtotal * 0.03);
    const grand = subtotal + shipping + gst;
    formHtml = `
      <div class="checkout-form-card">
        <h3>Order Review</h3>
        <div style="background:var(--surface);border-radius:var(--radius-sm);padding:14px;margin-bottom:16px;border:1px solid var(--border)">
          <strong style="display:block;font-size:0.75rem;font-weight:600;margin-bottom:6px;color:var(--text-primary)">Delivering to</strong>
          <span style="font-size:0.8125rem;color:var(--text-secondary)">Flat 4B, Prestige Towers, Bandra West, Mumbai, Maharashtra — 400050</span>
        </div>
        <div style="background:var(--surface);border-radius:var(--radius-sm);padding:14px;margin-bottom:20px;border:1px solid var(--border)">
          <strong style="display:block;font-size:0.75rem;font-weight:600;margin-bottom:6px;color:var(--text-primary)">Payment</strong>
          <span style="font-size:0.8125rem;color:var(--text-secondary)">Credit Card ending in 4242 — Visa</span>
        </div>
        <div class="co-totals" style="margin-bottom:22px">
          <div class="co-total-row"><span>Subtotal (${cart.length} item${cart.length !== 1 ? "s" : ""})</span><span>${fmtPriceFull(subtotal)}</span></div>
          <div class="co-total-row"><span>Shipping</span><span>${shipping === 0 ? "Free" : fmtPriceFull(shipping)}</span></div>
          <div class="co-total-row"><span>GST (3%)</span><span>${fmtPriceFull(gst)}</span></div>
          <div class="co-total-row grand"><span>Total Payable</span><span>${fmtPriceFull(grand)}</span></div>
        </div>
        <div class="checkout-btn-row">
          <button class="btn-checkout-back" onclick="prevStep()"><i class="fa-solid fa-arrow-left"></i> Back</button>
          <button class="btn-primary" style="flex:1;justify-content:center" onclick="placeOrder()">
            <i class="fa-solid fa-lock" style="font-size:0.625rem"></i> Place Order — ${fmtPriceFull(grand)}
          </button>
        </div>
      </div>`;
  }

  wrapper.innerHTML = `
    ${stepperHtml}
    <div class="checkout-cols">
      ${formHtml}
      ${buildOrderSummary()}
    </div>`;
}

function buildOrderSummary() {
  const items = cart
    .map((item) => {
      const p = PRODUCTS.find((x) => x.id === item.id);
      if (!p) return "";
      return `
      <div class="co-item">
        <div class="co-item-img"><img src="${p.img}" alt="${p.name}" /></div>
        <div class="co-item-info"><strong>${p.brand} ${p.name}</strong><span>Qty: ${item.qty}</span></div>
        <div class="co-item-price">${fmtPrice(p.price * item.qty)}</div>
      </div>`;
    })
    .join("");

  const subtotal = cartSubtotal();
  const shipping = subtotal >= 50000 ? 0 : 999;
  const gst = Math.round(subtotal * 0.03);
  const grand = subtotal + shipping + gst;

  return `
    <div class="checkout-summary">
      <h3>Order Summary</h3>
      ${items}
      <div class="co-totals">
        <div class="co-total-row"><span>Subtotal</span><span>${fmtPriceFull(subtotal)}</span></div>
        <div class="co-total-row"><span>Shipping</span><span>${shipping === 0 ? "Free" : fmtPriceFull(shipping)}</span></div>
        <div class="co-total-row"><span>GST (3%)</span><span>${fmtPriceFull(gst)}</span></div>
        <div class="co-total-row grand"><span>Total</span><span>${fmtPriceFull(grand)}</span></div>
      </div>
    </div>`;
}

function cartSubtotal() {
  return cart.reduce((s, i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}

function nextStep() {
  if (checkoutStep < 3) {
    checkoutStep++;
    renderCheckoutStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
function prevStep() {
  if (checkoutStep > 1) {
    checkoutStep--;
    renderCheckoutStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function selectPayment(el) {
  document
    .querySelectorAll(".payment-opt")
    .forEach((o) => o.classList.remove("selected"));
  el.classList.add("selected");
  el.querySelector("input").checked = true;
}

function placeOrder() {
  const orderId = "TEW-" + String(Date.now()).slice(-8).toUpperCase();
  cart = [];
  refreshCartUI();
  document.getElementById("checkoutWrapper").innerHTML = `
    <div class="order-confirmed">
      <div class="order-confirmed-icon"><i class="fa-solid fa-check"></i></div>
      <h2>Order Confirmed</h2>
      <p>Thank you for your acquisition. Your timepiece is being prepared with the utmost care.</p>
      <p>A confirmation has been sent to your registered email address.</p>
      <p class="order-ref">Reference: ${orderId}</p>
      <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:28px">Estimated delivery: 2–4 business days via insured courier.</p>
      <button class="btn-primary" onclick="showSection('collection')">Continue Shopping</button>
    </div>`;
  toast("Order placed successfully!", "success");
}

/* ─────────────────────────────────────────────────────────────
   AUTH MODAL
───────────────────────────────────────────────────────────── */
function openAuth() {
  document.getElementById("authOverlay").classList.add("active");
  document.getElementById("authModal").classList.add("active");
  document.body.style.overflow = "hidden";
  updateTabIndicator("login");
}
function closeAuth() {
  document.getElementById("authOverlay").classList.remove("active");
  document.getElementById("authModal").classList.remove("active");
  document.body.style.overflow = "";
}
function switchTab(tab) {
  document
    .querySelectorAll(".auth-tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".auth-form")
    .forEach((f) => f.classList.remove("active"));
  document
    .getElementById(`tab${tab.charAt(0).toUpperCase() + tab.slice(1)}`)
    .classList.add("active");
  document.getElementById(`${tab}Form`).classList.add("active");
  updateTabIndicator(tab);
}
function updateTabIndicator(tab) {
  const bar = document.getElementById("tabUnderline");
  const activeTab = document.querySelector(".auth-tab.active");
  if (!bar || !activeTab) return;
  bar.style.left = activeTab.offsetLeft + "px";
  bar.style.width = activeTab.offsetWidth + "px";
}
function handleLogin(e) {
  e.preventDefault();
  loggedInUser = { name: "Arjun Mehta", email: "arjun@example.com" };
  closeAuth();
  document.getElementById("authNavBtn").textContent = "Arjun M.";
  toast("Welcome back, Arjun.", "success");
}
function handleSignup(e) {
  e.preventDefault();
  loggedInUser = { name: "New Member", email: "new@example.com" };
  closeAuth();
  document.getElementById("authNavBtn").textContent = "New Member";
  toast("Account created. Welcome to The Eternal Wrist.", "success");
}

/* ─────────────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────────────── */
function submitContact(e) {
  e.preventDefault();
  toast("Message sent. We will respond within 24 hours.", "success");
  e.target.reset();
}

/* ─────────────────────────────────────────────────────────────
   THEME
───────────────────────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("ew-theme", theme);
  const icon = document.querySelector("#themeToggleBtn i");
  if (icon)
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
}

/* ─────────────────────────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────────────────────────── */
function openMobileNav() {
  document.getElementById("mobileNav").classList.add("open");
  document.getElementById("hamburgerBtn").classList.add("open");
}
function closeMobileNav() {
  document.getElementById("mobileNav").classList.remove("open");
  document.getElementById("hamburgerBtn").classList.remove("open");
}

/* ─────────────────────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────────────────────── */
let revealObserver;
function initReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("visible");
            revealObserver.unobserve(en.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -32px 0px" },
    );
  }
  document
    .querySelectorAll(".reveal:not(.visible)")
    .forEach((el) => revealObserver.observe(el));
}

/* ─────────────────────────────────────────────────────────────
   NAVBAR SCROLL SHADOW
───────────────────────────────────────────────────────────── */
function initNavbarScroll() {
  const nav = document.getElementById("navbar");
  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 32);
    },
    { passive: true },
  );
}

/* ─────────────────────────────────────────────────────────────
   NAV SEARCH → COLLECTION
───────────────────────────────────────────────────────────── */
function initNavSearch() {
  const fire = (val) => {
    if (!val.trim()) return;
    showSection("collection");
    setTimeout(() => {
      const cs = document.getElementById("collectionSearch");
      if (cs) {
        cs.value = val;
        applyFilters();
      }
    }, 80);
  };
  document
    .getElementById("navSearchInput")
    ?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") fire(e.target.value);
    });
  document
    .getElementById("mobileSearchInput")
    ?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") fire(e.target.value);
    });
}

/* ─────────────────────────────────────────────────────────────
   BOOT
───────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // theme
  applyTheme(localStorage.getItem("ew-theme") || "dark");

  // renders
  renderFeatured();
  applyFilters();
  initReveal();
  initNavbarScroll();
  initNavSearch();

  // auth tab indicator on open
  setTimeout(() => updateTabIndicator("login"), 50);

  // wired events
  document
    .getElementById("themeToggleBtn")
    ?.addEventListener("click", toggleTheme);
  document.getElementById("cartNavBtn")?.addEventListener("click", openCart);
  document.getElementById("cartCloseBtn")?.addEventListener("click", closeCart);
  document.getElementById("cartOverlay")?.addEventListener("click", closeCart);
  document
    .getElementById("wishlistNavBtn")
    ?.addEventListener("click", () => showSection("wishlist"));
  document.getElementById("authNavBtn")?.addEventListener("click", openAuth);
  document.getElementById("authCloseBtn")?.addEventListener("click", closeAuth);
  document.getElementById("authOverlay")?.addEventListener("click", closeAuth);
  document.getElementById("hamburgerBtn")?.addEventListener("click", () => {
    document.getElementById("mobileNav").classList.contains("open")
      ? closeMobileNav()
      : openMobileNav();
    document.getElementById("hamburgerBtn").classList.toggle("open");
  });

  // keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeAuth();
      closeMobileNav();
    }
  });

  // scroll → reveal
  window.addEventListener("scroll", initReveal, { passive: true });

  // welcome
  setTimeout(() => toast("Welcome to The Eternal Wrist", "info"), 1400);
});
