/* ==========================================
   NerdUniverse — Products Data & Rendering
   ========================================== */

// ======================
// PRODUCT DATABASE
// Quando hai il tuo account Printful, sostituisci
// externalUrl con il link diretto al prodotto.
// ======================
const PRODUCTS = [
  // --- CODING ---
  {
    id: "cod-001",
    name: "It's not a bug, it's a feature",
    tagline: "La scusa perfetta per ogni sviluppatore",
    category: "coding",
    type: "tshirt",
    emoji: "🐛",
    externalUrl: "#" // sostituisci con link Printful
  },
  {
    id: "cod-002",
    name: "Hello, World!",
    tagline: "Il primo programma di ogni nerd",
    category: "coding",
    type: "mug",
    emoji: "☕",
    externalUrl: "#"
  },
  {
    id: "cod-003",
    name: "404: Sleep Not Found",
    tagline: "Per chi conosce bene le notti in bianco",
    category: "coding",
    type: "tshirt",
    emoji: "💤",
    externalUrl: "#"
  },
  // --- MATEMATICA ---
  {
    id: "mat-001",
    name: "π è irrazionale, proprio come me",
    tagline: "Gioco di parole nerd certificato",
    category: "matematica",
    type: "tshirt",
    emoji: "🥧",
    externalUrl: "#"
  },
  {
    id: "mat-002",
    name: "Tazza dell'Infinito",
    tagline: "Il caffè non finisce mai... concettualmente",
    category: "matematica",
    type: "mug",
    emoji: "∞",
    externalUrl: "#"
  },
  // --- FISICA ---
  {
    id: "fis-001",
    name: "E = mc² (e tutto il resto è noia)",
    tagline: "Einstein aveva ragione",
    category: "fisica",
    type: "tshirt",
    emoji: "⚛️",
    externalUrl: "#"
  },
  {
    id: "fis-002",
    name: "Schrödinger's Coffee",
    tagline: "Finché non la apri, è sia calda che fredda",
    category: "fisica",
    type: "mug",
    emoji: "🐱",
    externalUrl: "#"
  },
  // --- CHIMICA ---
  {
    id: "chi-001",
    name: "CaFFeina — Elemento essenziale",
    tagline: "Tavola periodica, ma make it coffee",
    category: "chimica",
    type: "tshirt",
    emoji: "⚗️",
    externalUrl: "#"
  },
  {
    id: "chi-002",
    name: "Tazza Au (Oro puro, come il caffè)",
    tagline: "Numero atomico 79, come i tuoi anni di produttività",
    category: "chimica",
    type: "mug",
    emoji: "🏆",
    externalUrl: "#"
  },
  // --- BIOLOGIA ---
  {
    id: "bio-001",
    name: "DNA: Do Not Alter",
    tagline: "Le basi sono le basi",
    category: "biologia",
    type: "tshirt",
    emoji: "🧬",
    externalUrl: "#"
  },
  {
    id: "bio-002",
    name: "Mitocondri Potenziati",
    tagline: "La centrale energetica ha già il caffè",
    category: "biologia",
    type: "mug",
    emoji: "🔋",
    externalUrl: "#"
  },
  // --- CYBERSECURITY ---
  {
    id: "sec-001",
    name: "I'm not a hacker, I'm a security researcher",
    tagline: "La differenza conta (legalmente)",
    category: "cybersecurity",
    type: "tshirt",
    emoji: "🔐",
    externalUrl: "#"
  },
  {
    id: "sec-002",
    name: "sudo make me coffee",
    tagline: "Il comando più importante di tutti",
    category: "cybersecurity",
    type: "mug",
    emoji: "🖥️",
    externalUrl: "#"
  },
  // --- MEDICINA ---
  {
    id: "med-001",
    name: "WebMD mi ha detto che è grave",
    tagline: "Diagnosi 100% affidabili dal web",
    category: "medicina",
    type: "tshirt",
    emoji: "🩺",
    externalUrl: "#"
  },
  // --- ASTRONOMIA ---
  {
    id: "ast-001",
    name: "Siamo polvere di stelle (e caffeina)",
    tagline: "Carl Sagan approverebbe",
    category: "astronomia",
    type: "tshirt",
    emoji: "🌌",
    externalUrl: "#"
  },
  {
    id: "ast-002",
    name: "Houston, ho bisogno di caffè",
    tagline: "La missione più importante",
    category: "astronomia",
    type: "mug",
    emoji: "🚀",
    externalUrl: "#"
  },
];

// ======================
// RENDER PRODUCT CARD
// ======================
function renderProductCard(product, index = 0) {
  const stagger = `stagger-${Math.min(index + 1, 8)}`;
  return `
    <a href="${product.externalUrl}" target="_blank" rel="noopener" class="product-card ${stagger}">
      <div class="product-img">${product.emoji}</div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-tagline">${product.tagline}</div>
        <div class="product-footer">
          <span class="product-type">${getTypeLabel(product.type)}</span>
          <span class="product-cta">Acquista →</span>
        </div>
      </div>
    </a>
  `;
}

function getTypeLabel(type) {
  const map = { tshirt: '👕 Maglietta', mug: '☕ Tazza', other: '🎁 Gadget' };
  return map[type] || type;
}

// ======================
// INIT SHOP GRID
// ======================
function initShopGrid(containerId, filter = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let products = [...PRODUCTS];

  if (filter.category) {
    products = products.filter(p => p.category === filter.category);
  }
  if (filter.type && filter.type !== 'all') {
    products = products.filter(p => p.type === filter.type);
  }

  if (products.length === 0) {
    container.innerHTML = '';
    const noResults = document.getElementById('no-results');
    if (noResults) noResults.style.display = 'block';
    return;
  }

  const noResults = document.getElementById('no-results');
  if (noResults) noResults.style.display = 'none';

  container.innerHTML = products.map((p, i) => renderProductCard(p, i)).join('');
}

// ======================
// INIT FEATURED (homepage)
// ======================
function initFeatured(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  // Prende i primi 4 prodotti come "featured"
  const featured = PRODUCTS.slice(0, 4);
  container.innerHTML = featured.map((p, i) => renderProductCard(p, i)).join('');
}
