# 📘 Code Débutant — Site en onglets (style WordPress)

Mono‑page **HTML/CSS/JS** rassemblant **Accueil**, **Actualités** et **Ressources** en **onglets accessibles** (ARIA + clavier), avec un look inspiré d’un thème WordPress.

> **Sans dossier images** : logo SVG inline, hero en dégradés CSS, vignettes d’actualités en placeholders CSS/SVG.

---

## ✨ Fonctionnalités

* 🧭 **Onglets accessibles** : `tablist` / `tab` / `tabpanel`, navigation clavier (← → Home End)
* 🧱 **Structure WordPress‑like** : header sticky, hero “cover”, cartes d’articles, sidebar (widgets)
* 🎨 **Design moderne** : variables CSS, ombres douces, layout responsive (Grid + Flex)
* 🖼️ **Aucune image requise** : logo, hero et vignettes générés via **CSS/SVG**
* ⚡ **Léger & sans dépendance** : HTML, CSS, JS vanilla seulement
* ♿ **Accessibilité** : contrastes, focus visibles, ARIA, onglets au clavier

---

## 🗂️ Arborescence

```
.
├─ index.html
├─ css/
│  └─ theme.css
└─ js/
   └─ app.js
```

---

## 🚀 Démarrage rapide (port 8087)

Prérequis : un navigateur. Aucune installation obligatoire.

**Python (natif)**

```bash
git clone https://github.com/<ton-utilisateur>/<ton-repo>.git
cd <ton-repo>
python3 -m http.server 8087
# Ouvre : http://localhost:8087
```

**Node.js (alternative)**

```bash
npx http-server -p 8087
# ou
npx serve -l 8087
```

**Docker (Nginx)**

```bash
# Linux / macOS
docker run --rm -it -p 8087:80 -v "$PWD":/usr/share/nginx/html nginx
# Windows PowerShell
docker run --rm -it -p 8087:80 -v "${PWD}:/usr/share/nginx/html" nginx
```

> Si le port 8087 est occupé : change le port (`8088`, `3000`…), ou libère‑le (`lsof -i:8087` sous macOS/Linux).

---

## 🧩 Personnalisation

### Couleurs & thème

Modifie les variables dans `css/theme.css` :

```css
:root{
  --bg:#f7f8fb; --fg:#0b1220; --muted:#4a5568; --brand:#6a4dff; --brand-2:#ff6adf;
  --card:#ffffff; --border:#e6e9f2; --shadow:0 10px 30px rgba(20,20,40,.08);
}
```

### Contenu

* **Onglets** : dans `index.html`, modifie les `<section role="tabpanel">` (Accueil / Actualités / Ressources)
* **Sidebar** : widgets “Recherche”, “Catégories”, “À propos” modifiables dans l’`<aside>`
* **Liens ressources** : mets tes liens (MDN, web.dev, freeCodeCamp…)

### Logo & vignettes

* **Logo** : remplacé par un **SVG inline** (aucun fichier à fournir)
* **Vignettes** : placeholders CSS/SVG (aspect‑ratio 16:9) — tu peux y mettre de vraies images plus tard en remplaçant la `div.thumb`

---

## ♿ Accessibilité (a11y)

* Rôles ARIA d’onglets (`tablist`/`tab`/`tabpanel`)
* `aria-controls` / `aria-selected` mis à jour dynamiquement
* Clavier : flèches gauche/droite, Home/End, focus management
* Contrastes et focus visibles

---

## 🌐 Déploiement (GitHub Pages)

1. Pousse sur GitHub
2. **Settings → Pages**

   * **Source** : *Deploy from a branch*
   * **Branch** : `main` — **/ (root)**
3. **Enforce HTTPS** activé
4. Ton site : `https://<ton-utilisateur>.github.io/<ton-repo>/`

---

## 🧪 À tester

* Navigation entre onglets (clic & clavier)
* Responsive (mobile/tablette/desktop)
* Focus visible sur les éléments interactifs
* Performance : aucun asset image externe

---

## 🤝 Contribution

1. Fork → `feature/ma-feature`
2. Commits clairs
3. PR avec capture/description

**.gitignore** (si tu utilises un venv Python ou des outils locaux)

```
.venv/
node_modules/
.DS_Store
```

---

## 🪪 Licence

MIT — fais‑en bon usage 🙌

---

## 📎 Ressources utiles (apprentissage)

* MDN Web Docs : [https://developer.mozilla.org/fr/](https://developer.mozilla.org/fr/)
* web.dev (Google) : [https://web.dev/learn/](https://web.dev/learn/)
* freeCodeCamp : [https://www.freecodecamp.org/learn/2022/responsive-web-design/](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
* CSS‑Tricks (guides) : [https://css-tricks.com/guides/](https://css-tricks.com/guides/)
