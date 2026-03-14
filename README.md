# NerdUniverse 🧬⚛️💻

Sito vetrina per prodotti nerd print-on-demand.

## Struttura

```
nerduniverse/
├── index.html          → Homepage
├── categories.html     → Vetrina prodotti + filtri
├── about.html          → Chi siamo
├── css/
│   ├── style.css       → Stile principale (dark theme)
│   └── animations.css  → Animazioni
├── js/
│   ├── main.js         → Categorie e init homepage
│   ├── products.js     → Database prodotti e rendering
│   └── filters.js      → Logica filtri shop
└── assets/
    ├── images/         → Immagini prodotti
    └── icons/          → Icone svg
```

## Come aggiungere un prodotto

1. Apri `js/products.js`
2. Aggiungi un oggetto all'array `PRODUCTS`:

```js
{
  id: "cod-099",                        // ID univoco
  name: "Nome del prodotto",
  tagline: "Frase simpatica",
  category: "coding",                   // deve corrispondere a un slug in CATEGORIES
  type: "tshirt",                       // tshirt | mug | other
  emoji: "💻",                          // emoji placeholder (finché non hai immagini)
  externalUrl: "https://printful.com/..."  // link diretto al prodotto su Printful
}
```

## Come aggiungere una categoria

1. Apri `js/main.js`
2. Aggiungi all'array `CATEGORIES`:

```js
{ slug: "nuova-categoria", name: "Nome Categoria", icon: "🎯", count: 0 }
```

## Deploy su GitHub Pages

1. Push del repository su GitHub
2. Settings → Pages → Branch: main, folder: / (root)
3. Il sito sarà live su `https://tuousername.github.io/nerduniverse`

## Provider consigliato: Printful

- Crea account su printful.com
- Crea il prodotto con la tua grafica
- Copia il link diretto al prodotto
- Incollalo in `externalUrl` nel file products.js

---
Creato con ❤ e molta caffeina.
