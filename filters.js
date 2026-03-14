/* ==========================================
   NerdUniverse — Filters JS
   Gestisce i filtri nella pagina shop
   ========================================== */

let activeCategory = null;
let activeType = 'all';

// Legge parametro ?cat= dall'URL
function getCatFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('cat') || null;
}

// Popola i filtri categoria
function initFilterCats(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const allBtn = `<button class="filter-btn ${!activeCategory ? 'active' : ''}" data-cat="all" onclick="setCategory(null)">Tutte</button>`;
  const catBtns = CATEGORIES.map(cat => `
    <button class="filter-btn ${activeCategory === cat.slug ? 'active' : ''}" 
            data-cat="${cat.slug}" 
            onclick="setCategory('${cat.slug}')">
      ${cat.icon} ${cat.name}
    </button>
  `).join('');

  container.innerHTML = allBtn + catBtns;
}

// Filtro per categoria
function setCategory(slug) {
  activeCategory = slug;
  document.querySelectorAll('[data-cat]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === (slug || 'all'));
  });
  applyFilters();
}

// Filtro per tipo
function setType(type) {
  activeType = type;
  document.querySelectorAll('[data-type]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === type);
  });
  applyFilters();
}

// Applica tutti i filtri attivi
function applyFilters() {
  initShopGrid('shop-products', { category: activeCategory, type: activeType });
}

// Reset
function resetFilters() {
  activeCategory = null;
  activeType = 'all';
  initFilterCats('filter-cats');
  document.querySelectorAll('[data-type]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === 'all');
  });
  applyFilters();
}

// Init shop page
document.addEventListener('DOMContentLoaded', () => {
  // Controlla se c'è una categoria nell'URL
  activeCategory = getCatFromURL();

  initFilterCats('filter-cats');

  // Collega i filtri per tipo
  document.querySelectorAll('[data-type]').forEach(btn => {
    btn.addEventListener('click', () => setType(btn.dataset.type));
  });

  applyFilters();
});
