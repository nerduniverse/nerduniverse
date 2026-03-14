/* ==========================================
   NerdUniverse — Main JS
   Gestisce: categorie homepage, featured
   ========================================== */

const CATEGORIES = [
  { slug: "coding",        name: "Coding",         icon: "💻", count: 12 },
  { slug: "matematica",    name: "Matematica",      icon: "📐", count: 8  },
  { slug: "fisica",        name: "Fisica",          icon: "⚛️",  count: 10 },
  { slug: "chimica",       name: "Chimica",         icon: "⚗️",  count: 7  },
  { slug: "biologia",      name: "Biologia",        icon: "🧬", count: 9  },
  { slug: "cybersecurity", name: "Cybersecurity",   icon: "🔐", count: 6  },
  { slug: "medicina",      name: "Medicina",        icon: "🩺", count: 5  },
  { slug: "astronomia",    name: "Astronomia",      icon: "🌌", count: 8  },
  { slug: "intelligenza-artificiale", name: "AI & ML", icon: "🤖", count: 6 },
  { slug: "elettronica",   name: "Elettronica",     icon: "⚡", count: 5  },
  { slug: "gaming",        name: "Gaming & Retro",  icon: "🕹️",  count: 11 },
  { slug: "filosofia",     name: "Filosofia",       icon: "🧠", count: 4  },
];

// Render categories grid
function initCategories(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = CATEGORIES.map((cat, i) => `
    <a href="categories.html?cat=${cat.slug}" class="cat-card stagger-${Math.min(i+1,8)}">
      <div class="cat-icon">${cat.icon}</div>
      <div class="cat-name">${cat.name}</div>
      <div class="cat-count">${cat.count} prodotti</div>
    </a>
  `).join('');
}

// Init homepage
document.addEventListener('DOMContentLoaded', () => {
  initCategories('cat-grid');
  if (typeof initFeatured === 'function') {
    initFeatured('featured-grid');
  }
});
