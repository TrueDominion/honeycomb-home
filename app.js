/* ═══════════════════════════════════════════════════════════════
   HONEYCOMB HOME — app.js
   All interactivity, data, localStorage, and dynamic rendering
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─── SEED RECIPE DATA ───────────────────────────────────────── */
const SEED_RECIPES = [
  {
    id: 'r001',
    title: 'Sourdough Country Loaf',
    category: 'Baking',
    emoji: '🍞',
    prepTime: '45 min',
    cookTime: '50 min',
    servings: '1 loaf',
    difficulty: 'Intermediate',
    description: 'A beautifully open-crumbed country loaf with a caramelised crust. The starter does all the real work — your job is simply to shape it with care and bake it with love.',
    ingredients: [
      { name: 'Bread flour', amount: '450g' },
      { name: 'Wholemeal flour', amount: '50g' },
      { name: 'Active sourdough starter', amount: '100g' },
      { name: 'Warm water', amount: '375ml' },
      { name: 'Fine sea salt', amount: '10g' },
      { name: 'Rice flour (for dusting)', amount: '2 tbsp' }
    ],
    steps: [
      { title: 'Mix the dough', desc: 'Combine flours and 350ml water in a large bowl. Mix until no dry flour remains, then cover and rest for 30 minutes (autolyse). Add the remaining water, starter, and salt, working them in with wet hands.' },
      { title: 'Bulk fermentation & folds', desc: 'Over the next 4 hours, perform 4 sets of stretch-and-folds every 30 minutes. The dough should become airy and slightly domed by the end.' },
      { title: 'Shape the loaf', desc: 'Turn the dough onto an unfloured surface. Pre-shape into a round, rest for 20 minutes, then do a final tight shaping. Place seam-side up in a rice-flour-dusted banneton.' },
      { title: 'Cold proof overnight', desc: 'Cover with a shower cap and refrigerate overnight, or up to 16 hours. The cold slow-rise develops depth of flavour.' },
      { title: 'Score and bake', desc: 'Preheat your oven with a Dutch oven inside to 250°C (480°F). Turn the cold loaf onto parchment, score decisively with a lame, and bake covered for 20 minutes, then uncovered for 28–30 minutes until deeply golden.' }
    ],
    notes: 'If your starter isn\'t passing the float test, give it one more feed before you begin. The long cold proof can extend to 24 hours — this generally improves the sour complexity and the ear of the loaf.',
    favourite: true
  },
  {
    id: 'r002',
    title: 'Honey Butter Scones',
    category: 'Baking',
    emoji: '🫓',
    prepTime: '20 min',
    cookTime: '18 min',
    servings: '8 scones',
    difficulty: 'Easy',
    description: 'Tall, flaky, golden scones brushed with honey butter straight from the oven. These belong on a linen cloth with clotted cream and a pot of Earl Grey.',
    ingredients: [
      { name: 'Plain flour', amount: '350g' },
      { name: 'Baking powder', amount: '2 tsp' },
      { name: 'Fine salt', amount: '½ tsp' },
      { name: 'Cold unsalted butter', amount: '80g' },
      { name: 'Whole milk', amount: '160ml' },
      { name: 'Raw honey', amount: '3 tbsp' },
      { name: 'One egg (for egg wash)', amount: '1 large' }
    ],
    steps: [
      { title: 'Combine dry ingredients', desc: 'Sift flour, baking powder, and salt into a large cold bowl. Cut cold butter into small cubes and rub into the flour with your fingertips until the mixture resembles rough breadcrumbs with some larger pea-sized pieces remaining.' },
      { title: 'Add milk and honey', desc: 'Warm the honey slightly so it pours easily, then stir into the cold milk. Pour all but 2 tablespoons into the flour mixture and bring together with a butter knife using a cutting motion. Add remaining milk only if needed. Stop as soon as the dough just holds.' },
      { title: 'Shape and cut', desc: 'Turn onto a floured surface and pat to 3cm thickness — do not roll. Cut straight down with a floured cutter without twisting. Place on a lined baking sheet, touching each other slightly.' },
      { title: 'Bake', desc: 'Brush tops with beaten egg. Bake at 220°C (425°F) for 16–18 minutes until risen and deep golden. While warm, brush with a little extra honey and softened butter.' }
    ],
    notes: 'The key to tall scones is cold everything: cold butter, cold milk, cold hands. Work quickly and don\'t overwork. If you want a richer scone, substitute 2 tablespoons of the milk for double cream.',
    favourite: true
  },
  {
    id: 'r003',
    title: 'Sunday Roast Chicken',
    category: 'Dinner',
    emoji: '🍗',
    prepTime: '20 min',
    cookTime: '1 hr 30 min',
    servings: '4 people',
    difficulty: 'Easy',
    description: 'A proper Sunday roast chicken — simple, golden, and deeply satisfying. Herb butter under the skin keeps it impossibly moist. The pan drippings make the gravy.',
    ingredients: [
      { name: 'Whole free-range chicken', amount: '1.8 kg' },
      { name: 'Unsalted butter, softened', amount: '60g' },
      { name: 'Garlic, minced', amount: '4 cloves' },
      { name: 'Fresh thyme leaves', amount: '2 tbsp' },
      { name: 'Fresh rosemary, chopped', amount: '1 tbsp' },
      { name: 'Lemon', amount: '1 large' },
      { name: 'Flaky sea salt', amount: '2 tsp' },
      { name: 'Black pepper', amount: '1 tsp' },
      { name: 'Onions, quartered', amount: '2 medium' }
    ],
    steps: [
      { title: 'Prepare the herb butter', desc: 'Mix softened butter with garlic, thyme, rosemary, zest of half the lemon, salt, and pepper until well combined. Carefully loosen the skin over the breast and thighs with your fingers without tearing it.' },
      { title: 'Butter and truss', desc: 'Push two-thirds of the herb butter under the skin, massaging it to spread evenly. Rub remaining butter over the outside. Halve the lemon and stuff inside the cavity with the lemon halves. Tie legs together with kitchen twine.' },
      { title: 'Roast', desc: 'Place the chicken breast-side up on a bed of quartered onions in a roasting tin. Roast at 200°C (390°F) for approximately 20 minutes per 500g, plus 20 minutes extra. Baste every 30 minutes with the pan juices.' },
      { title: 'Rest and serve', desc: 'The chicken is done when the thigh juices run clear and an instant thermometer reads 75°C (167°F). Tent loosely with foil and rest for 15–20 minutes before carving. Make gravy from the pan drippings.' }
    ],
    notes: 'Don\'t skip the resting step — this is where the juices redistribute. Use the carcase for stock the next day. The onions in the bottom of the tin make a lovely side dish themselves.',
    favourite: false
  },
  {
    id: 'r004',
    title: 'Herb Garden Soup',
    category: 'Lunch',
    emoji: '🥣',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: '4 bowls',
    difficulty: 'Easy',
    description: 'A bright, verdant soup that tastes like walking through a summer garden. Finish with a swirl of cream and a handful of fresh herbs the moment it hits the bowl.',
    ingredients: [
      { name: 'Leeks, sliced', amount: '2 large' },
      { name: 'Floury potatoes, diced', amount: '400g' },
      { name: 'Garlic, sliced', amount: '3 cloves' },
      { name: 'Good chicken stock', amount: '1 litre' },
      { name: 'Fresh spinach', amount: '100g' },
      { name: 'Fresh parsley leaves', amount: '30g' },
      { name: 'Fresh basil', amount: '20g' },
      { name: 'Chives', amount: '15g' },
      { name: 'Olive oil', amount: '3 tbsp' },
      { name: 'Double cream', amount: '4 tbsp' },
      { name: 'Salt and white pepper', amount: 'to taste' }
    ],
    steps: [
      { title: 'Soften the aromatics', desc: 'Heat olive oil in a heavy-based saucepan over medium heat. Add leeks and garlic with a pinch of salt. Cook gently for 8–10 minutes, stirring occasionally, until soft and sweet but not coloured.' },
      { title: 'Add stock and potatoes', desc: 'Add diced potatoes and pour in the stock. Bring to a gentle simmer and cook for 15 minutes until the potatoes are completely tender when tested with a knife tip.' },
      { title: 'Add the greens', desc: 'Remove from heat. Add the spinach and all fresh herbs directly into the hot soup. Stir to wilt, then blend immediately — the herbs should still be bright green. Season generously.' },
      { title: 'Serve', desc: 'Ladle into warmed bowls. Swirl a tablespoon of cream over each, snip fresh chives, and add a drizzle of your best olive oil. Serve with warm bread alongside.' }
    ],
    notes: 'The trick to keeping the colour vivid is blending the herbs while the soup is still very hot but has been removed from the flame. Don\'t reheat after adding herbs — serve immediately or the colour fades to khaki.',
    favourite: false
  },
  {
    id: 'r005',
    title: 'Strawberry Preserves',
    category: 'Preserves',
    emoji: '🍓',
    prepTime: '30 min',
    cookTime: '40 min',
    servings: '3 jars',
    difficulty: 'Intermediate',
    description: 'A fragrant, jewel-bright strawberry jam that tastes of high summer. The vanilla and a squeeze of lemon lift the strawberry flavour and help the set without pectin.',
    ingredients: [
      { name: 'Fresh ripe strawberries, hulled', amount: '1 kg' },
      { name: 'White caster sugar', amount: '750g' },
      { name: 'Juice of one lemon', amount: '1 lemon' },
      { name: 'Vanilla bean, split', amount: '1 pod' }
    ],
    steps: [
      { title: 'Macerate the berries', desc: 'Halve large strawberries and leave small ones whole. Layer with the sugar in a large non-reactive bowl. Add lemon juice and split vanilla bean. Cover and leave at room temperature for at least 2 hours, or overnight. The berries will release their juices beautifully.' },
      { title: 'Prepare jars', desc: 'Sterilise jars and lids in a 120°C oven for 20 minutes. Place two small plates in the freezer for the wrinkle test.' },
      { title: 'Cook the jam', desc: 'Transfer the macerated fruit and all its syrup to a wide, heavy-based preserving pan. Bring slowly to a boil over medium heat, stirring gently. Once boiling, increase heat and cook rapidly without stirring for 15–20 minutes. Skim foam as needed.' },
      { title: 'Test and pot', desc: 'Test for set by placing a small spoonful on a chilled plate and pushing it with your fingertip after 1 minute. If it wrinkles, it is ready. Remove vanilla pod. Pour into sterilised jars, seal immediately, and invert for 5 minutes.' }
    ],
    notes: 'The overnight maceration is optional but produces a noticeably more complex jam. Use fruit at peak ripeness — overripe berries produce a flat flavour and underripe ones will need more cooking. Keeps for 12 months unsealed, 4 weeks once opened.',
    favourite: true
  },
  {
    id: 'r006',
    title: 'Lemon Pound Cake',
    category: 'Baking',
    emoji: '🍋',
    prepTime: '20 min',
    cookTime: '55 min',
    servings: '10 slices',
    difficulty: 'Easy',
    description: 'Dense, buttery, and intensely lemony. A drizzle of warm lemon glaze soaks into the hot cake and forms a barely-there crackle as it cools. Perfect with afternoon tea.',
    ingredients: [
      { name: 'Unsalted butter, softened', amount: '230g' },
      { name: 'Caster sugar', amount: '280g' },
      { name: 'Eggs, at room temperature', amount: '4 large' },
      { name: 'Plain flour', amount: '280g' },
      { name: 'Baking powder', amount: '1 tsp' },
      { name: 'Fine salt', amount: '½ tsp' },
      { name: 'Zest of three lemons', amount: '3 lemons' },
      { name: 'Soured cream', amount: '120g' },
      { name: 'Lemon juice (for glaze)', amount: '4 tbsp' },
      { name: 'Icing sugar (for glaze)', amount: '120g' }
    ],
    steps: [
      { title: 'Cream butter and sugar', desc: 'Beat softened butter with sugar and lemon zest at medium-high speed for 5 full minutes until very light, pale, and fluffy. Don\'t rush this — the volume is important.' },
      { title: 'Add eggs', desc: 'Add eggs one at a time, beating well after each. If the mixture starts to curdle, add a spoonful of flour and continue. Scrape the bowl down twice.' },
      { title: 'Fold in dry ingredients', desc: 'Sift flour, baking powder, and salt together. Fold into the butter mixture alternately with the soured cream in three additions, beginning and ending with flour. Do not overmix.' },
      { title: 'Bake', desc: 'Pour into a greased and lined 23cm loaf tin. Bake at 170°C (340°F) for 50–55 minutes until a skewer comes out clean with just a few moist crumbs. The top should have a deep golden crack down the centre.' },
      { title: 'Glaze', desc: 'While the cake is still hot from the oven, whisk icing sugar and lemon juice together. Pour slowly and evenly over the cake. Allow to cool completely in the tin before turning out.' }
    ],
    notes: 'Soured cream is the secret here — it adds richness and a gentle tang that makes the lemon flavour pop. If unavailable, full-fat Greek yoghurt works beautifully. The cake improves on day two as the glaze firms.',
    favourite: false
  },
  {
    id: 'r007',
    title: 'Honey Lavender Shortbread',
    category: 'Baking',
    emoji: '🍪',
    prepTime: '25 min',
    cookTime: '20 min',
    servings: '24 biscuits',
    difficulty: 'Easy',
    description: 'Buttery, crumbly shortbread with a subtle floral note from culinary lavender and a golden drizzle of wildflower honey. Elegant enough to gift, simple enough for any afternoon.',
    ingredients: [
      { name: 'Unsalted butter, room temperature', amount: '225g' },
      { name: 'Icing sugar, sifted', amount: '100g' },
      { name: 'Plain flour', amount: '280g' },
      { name: 'Cornflour', amount: '30g' },
      { name: 'Dried culinary lavender, crushed', amount: '1 tsp' },
      { name: 'Wildflower honey (for finish)', amount: '2 tbsp' },
      { name: 'Flaky sea salt', amount: 'pinch' }
    ],
    steps: [
      { title: 'Make the dough', desc: 'Beat butter and icing sugar together until just combined — not fluffy. Add lavender. Sift in flour and cornflour. Mix until it comes together as a smooth dough. Do not overwork.' },
      { title: 'Chill and shape', desc: 'Roll into a 4cm diameter log, wrap in parchment, and refrigerate for 1 hour until firm. Slice into rounds approximately 8mm thick with a sharp knife.' },
      { title: 'Bake', desc: 'Place on lined baking sheets. Bake at 160°C (320°F) for 18–20 minutes until very pale gold at the edges. They should not colour much.' },
      { title: 'Finish', desc: 'While still warm, drizzle lightly with honey and add a whisper of flaky salt to each biscuit. Cool completely on a rack before storing.' }
    ],
    notes: 'Use only culinary lavender — ornamental varieties can taste soapy. One teaspoon is the correct amount; more becomes perfumed and unpleasant. Store in a tin between sheets of parchment for up to 2 weeks.',
    favourite: false
  },
  {
    id: 'r008',
    title: 'Classic French Omelette',
    category: 'Breakfast',
    emoji: '🍳',
    prepTime: '5 min',
    cookTime: '3 min',
    servings: '1 person',
    difficulty: 'Intermediate',
    description: 'The test of any cook is their omelette. Pale, creamy, and folded without a whisper of colour. Two minutes of absolute attention for something quietly perfect.',
    ingredients: [
      { name: 'Fresh eggs, room temperature', amount: '3 large' },
      { name: 'Unsalted butter', amount: '15g' },
      { name: 'Fine salt', amount: '1 pinch' },
      { name: 'White pepper', amount: '1 pinch' },
      { name: 'Cold water', amount: '1 tsp' },
      { name: 'Fresh chives or fine herbs', amount: 'small handful' }
    ],
    steps: [
      { title: 'Beat the eggs', desc: 'Crack eggs into a bowl. Add salt, white pepper, and one teaspoon of cold water. Beat very well with a fork until the yolks and whites are completely integrated and slightly foamy. Don\'t use a whisk — a fork gives the right texture.' },
      { title: 'Heat the pan', desc: 'Set an 8-inch non-stick pan over medium-high heat. Add butter. When it foams and the foam begins to subside, the pan is ready. Do not let the butter brown.' },
      { title: 'Cook and fold', desc: 'Pour in the eggs. Immediately begin stirring with a silicone spatula in small, fast circular motions while shaking the pan simultaneously. After about 45 seconds, the eggs should be custard-like. Stop stirring and tilt the pan — tap the handle to make the omelette roll to the far edge.' },
      { title: 'Turn out', desc: 'Fold and roll the omelette directly onto a warm plate in one motion. It should be pale, cigar-shaped, and still slightly trembling. Garnish with snipped chives and a dot of butter.' }
    ],
    notes: 'The omelette should never see colour — if it browns, the pan was too hot. This takes practice. The first omelette is for the cook. Eat it standing at the stove and try again.',
    favourite: false
  }
];

const PANTRY_SEED = [
  { id: 'p001', name: 'Bread flour', category: 'Grains', quantity: 500, unit: 'g', lowThreshold: 250 },
  { id: 'p002', name: 'Wholemeal flour', category: 'Grains', quantity: 200, unit: 'g', lowThreshold: 200 },
  { id: 'p003', name: 'Plain flour', category: 'Grains', quantity: 800, unit: 'g', lowThreshold: 300 },
  { id: 'p004', name: 'Rolled oats', category: 'Grains', quantity: 600, unit: 'g', lowThreshold: 200 },
  { id: 'p005', name: 'Basmati rice', category: 'Grains', quantity: 1000, unit: 'g', lowThreshold: 300 },
  { id: 'p006', name: 'Unsalted butter', category: 'Dairy', quantity: 250, unit: 'g', lowThreshold: 100 },
  { id: 'p007', name: 'Whole milk', category: 'Dairy', quantity: 1, unit: 'L', lowThreshold: 1 },
  { id: 'p008', name: 'Double cream', category: 'Dairy', quantity: 150, unit: 'ml', lowThreshold: 100 },
  { id: 'p009', name: 'Eggs (free-range)', category: 'Dairy', quantity: 6, unit: '', lowThreshold: 4 },
  { id: 'p010', name: 'Wildflower honey', category: 'Preserves', quantity: 340, unit: 'g', lowThreshold: 100 },
  { id: 'p011', name: 'Strawberry jam', category: 'Preserves', quantity: 2, unit: 'jars', lowThreshold: 1 },
  { id: 'p012', name: 'Sourdough starter', category: 'Preserves', quantity: 200, unit: 'g', lowThreshold: 80 },
  { id: 'p013', name: 'Garlic', category: 'Produce', quantity: 3, unit: 'bulbs', lowThreshold: 1 },
  { id: 'p014', name: 'Fresh thyme', category: 'Produce', quantity: 1, unit: 'bunch', lowThreshold: 1 },
  { id: 'p015', name: 'Lemons', category: 'Produce', quantity: 4, unit: '', lowThreshold: 2 },
  { id: 'p016', name: 'Flaky sea salt', category: 'Spices', quantity: 200, unit: 'g', lowThreshold: 50 },
  { id: 'p017', name: 'Black pepper', category: 'Spices', quantity: 30, unit: 'g', lowThreshold: 20 },
  { id: 'p018', name: 'Dried lavender', category: 'Spices', quantity: 15, unit: 'g', lowThreshold: 10 },
  { id: 'p019', name: 'Cinnamon', category: 'Spices', quantity: 40, unit: 'g', lowThreshold: 15 },
  { id: 'p020', name: 'Caster sugar', category: 'Grains', quantity: 400, unit: 'g', lowThreshold: 200 },
  { id: 'p021', name: 'Icing sugar', category: 'Grains', quantity: 150, unit: 'g', lowThreshold: 100 },
  { id: 'p022', name: 'Olive oil', category: 'Oils', quantity: 400, unit: 'ml', lowThreshold: 150 },
  { id: 'p023', name: 'Baking powder', category: 'Spices', quantity: 50, unit: 'g', lowThreshold: 20 },
  { id: 'p024', name: 'Vanilla extract', category: 'Spices', quantity: 30, unit: 'ml', lowThreshold: 15 }
];

/* ─── STORAGE HELPERS ────────────────────────────────────────── */
const Store = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v !== null ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }
};

function getRecipes() {
  const saved = Store.get('hh_recipes');
  if (!saved || saved.length === 0) {
    Store.set('hh_recipes', SEED_RECIPES);
    return SEED_RECIPES;
  }
  return saved;
}
function saveRecipes(recipes) { Store.set('hh_recipes', recipes); }

function getPantry() {
  const saved = Store.get('hh_pantry');
  if (!saved || saved.length === 0) {
    Store.set('hh_pantry', PANTRY_SEED);
    return PANTRY_SEED;
  }
  return saved;
}
function savePantry(items) { Store.set('hh_pantry', items); }

function getMealPlan() {
  return Store.get('hh_mealplan', {});
}
function saveMealPlan(plan) { Store.set('hh_mealplan', plan); }

/* ─── TOAST ──────────────────────────────────────────────────── */
function showToast(message, type = '') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast${type ? ' toast--' + type : ''}`;
  toast.innerHTML = `<span>${type === 'honey' ? '🍯' : type === 'moss' ? '✓' : 'ℹ️'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

/* ─── REVEAL ON SCROLL ───────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* ─── NAV ACTIVE STATE + MOBILE TOGGLE ──────────────────────── */
function initNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
  }
}

/* ─── RECIPE CARD HTML BUILDER ───────────────────────────────── */
function buildRecipeCard(recipe) {
  return `
    <div class="card recipe-card reveal" data-id="${recipe.id}">
      <a href="recipe-detail.html?id=${recipe.id}" class="recipe-card__link">
        <div class="card__img-placeholder">${recipe.emoji}</div>
      </a>
      <button class="recipe-card__fav${recipe.favourite ? ' active' : ''}" data-id="${recipe.id}" title="Toggle favourite">
        ${recipe.favourite ? '❤️' : '🤍'}
      </button>
      <div class="card__body">
        <div class="card__meta">
          <span class="tag tag--honey">${recipe.category}</span>
          <span class="tag tag--stone">⏱ ${recipe.prepTime}</span>
        </div>
        <h3 class="card__title">${recipe.title}</h3>
        <p class="card__desc">${recipe.description.slice(0, 110)}…</p>
      </div>
      <div class="card__footer">
        <span style="font-size:0.8rem;color:var(--slate-light);">🍽 ${recipe.servings}</span>
        <a href="recipe-detail.html?id=${recipe.id}" class="btn btn--outline btn--sm">View Recipe</a>
      </div>
    </div>`;
}

/* ─── FAVOURITE TOGGLE ───────────────────────────────────────── */
function initFavouriteToggles(container) {
  if (!container) return;
  container.addEventListener('click', e => {
    const btn = e.target.closest('.recipe-card__fav');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const id = btn.dataset.id;
    const recipes = getRecipes();
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;
    recipe.favourite = !recipe.favourite;
    saveRecipes(recipes);
    btn.classList.toggle('active', recipe.favourite);
    btn.textContent = recipe.favourite ? '❤️' : '🤍';
    showToast(recipe.favourite ? 'Added to Favourites' : 'Removed from Favourites', recipe.favourite ? 'honey' : '');
  });
}

/* ─────────────────────────────────────────────────────────────────
   PAGE: HOME (index.html)
   ───────────────────────────────────────────────────────────────── */
function initHomePage() {
  if (!document.getElementById('featured-recipe-card')) return;

  const recipes = getRecipes();
  // Feature first favourite or first recipe
  const featured = recipes.find(r => r.favourite) || recipes[0];

  document.getElementById('featured-recipe-card').innerHTML = `
    <div class="featured-recipe reveal">
      <div class="featured-recipe__img">${featured.emoji}</div>
      <div class="featured-recipe__body">
        <div class="featured-recipe__tag">
          <span class="tag tag--honey">${featured.category}</span>
          <span class="tag tag--amber ml-2" style="margin-left:8px;">Recipe of the Week</span>
        </div>
        <h2 class="featured-recipe__title">${featured.title}</h2>
        <p class="featured-recipe__desc">${featured.description}</p>
        <div class="featured-recipe__meta">
          <div class="featured-recipe__meta-item">
            <span class="featured-recipe__meta-label">Prep Time</span>
            <span class="featured-recipe__meta-value">${featured.prepTime}</span>
          </div>
          <div class="featured-recipe__meta-item">
            <span class="featured-recipe__meta-label">Cook Time</span>
            <span class="featured-recipe__meta-value">${featured.cookTime}</span>
          </div>
          <div class="featured-recipe__meta-item">
            <span class="featured-recipe__meta-label">Serves</span>
            <span class="featured-recipe__meta-value">${featured.servings}</span>
          </div>
        </div>
        <a href="recipe-detail.html?id=${featured.id}" class="btn btn--honey">View Full Recipe →</a>
      </div>
    </div>`;

  initReveal();
}

/* ─────────────────────────────────────────────────────────────────
   PAGE: RECIPES (recipes.html)
   ───────────────────────────────────────────────────────────────── */
function initRecipesPage() {
  const grid = document.getElementById('recipe-grid');
  if (!grid) return;

  let activeCategory = 'All';
  let searchTerm = '';

  function render() {
    const recipes = getRecipes();
    const filtered = recipes.filter(r => {
      const matchCat  = activeCategory === 'All' || r.category === activeCategory;
      const matchSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
    grid.innerHTML = filtered.length
      ? filtered.map(buildRecipeCard).join('')
      : `<div class="empty-state" style="grid-column:1/-1">
           <div class="empty-state__icon">🔍</div>
           <h3 class="empty-state__title">No recipes found</h3>
           <p class="empty-state__desc">Try a different category or search term.</p>
         </div>`;
    initReveal();
  }

  render();
  initFavouriteToggles(grid);

  // Search
  const searchInput = document.getElementById('recipe-search');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchTerm = e.target.value;
      render();
    });
  }

  // Category chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      render();
    });
  });

  // Modal
  const modalOverlay = document.getElementById('modal-overlay');
  const openBtn      = document.getElementById('add-recipe-btn');
  const closeBtn     = document.getElementById('modal-close');
  const form         = document.getElementById('add-recipe-form');

  if (openBtn) openBtn.addEventListener('click', () => modalOverlay.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => modalOverlay.classList.remove('open'));
  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('open');
    });
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const title = data.get('title')?.trim();
      const category = data.get('category');
      const prepTime = data.get('prepTime')?.trim();
      const servings = data.get('servings')?.trim();
      const ingredientsRaw = data.get('ingredients')?.trim();
      const stepsRaw = data.get('steps')?.trim();
      const notes = data.get('notes')?.trim();
      const emojiMap = {
        'Baking':'🧁','Dinner':'🍗','Breakfast':'🍳','Lunch':'🥗','Preserves':'🍓','Dessert':'🍰','Soup':'🥣'
      };

      if (!title || !category || !prepTime) {
        showToast('Please fill in all required fields.', '');
        return;
      }

      const newRecipe = {
        id: 'r' + Date.now(),
        title,
        category,
        emoji: emojiMap[category] || '🍽',
        prepTime,
        cookTime: data.get('cookTime')?.trim() || '–',
        servings: servings || '4',
        difficulty: 'Easy',
        description: data.get('description')?.trim() || `A delicious ${title.toLowerCase()}.`,
        ingredients: (ingredientsRaw || '').split('\n').filter(Boolean).map(line => {
          const parts = line.split(' — ');
          return { name: parts[0]?.trim() || line.trim(), amount: parts[1]?.trim() || '' };
        }),
        steps: (stepsRaw || '').split('\n').filter(Boolean).map((s, i) => ({
          title: `Step ${i + 1}`,
          desc: s.trim()
        })),
        notes: notes || '',
        favourite: false
      };

      const recipes = getRecipes();
      recipes.unshift(newRecipe);
      saveRecipes(recipes);
      form.reset();
      modalOverlay.classList.remove('open');
      render();
      showToast(`"${title}" has been added to your Recipe Book!`, 'honey');
    });
  }
}

/* ─────────────────────────────────────────────────────────────────
   PAGE: RECIPE DETAIL (recipe-detail.html)
   ───────────────────────────────────────────────────────────────── */
function initRecipeDetailPage() {
  const container = document.getElementById('recipe-detail-container');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const recipes = getRecipes();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">🔍</div>
        <h3 class="empty-state__title">Recipe not found</h3>
        <p class="empty-state__desc">This recipe may have been removed.</p>
        <a href="recipes.html" class="btn btn--honey mt-6">Back to Recipe Book</a>
      </div>`;
    return;
  }

  document.title = `${recipe.title} — Honeycomb Home`;

  container.innerHTML = `
    <div class="recipe-hero">
      <div class="container">
        <div class="recipe-hero__inner">
          <div class="recipe-hero__img">${recipe.emoji}</div>
          <div>
            <a href="recipes.html" class="btn btn--ghost btn--sm no-print" style="margin-bottom:1.5rem;">← Back to Recipe Book</a>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:1rem;">
              <span class="tag tag--honey">${recipe.category}</span>
              <span class="tag tag--stone">${recipe.difficulty}</span>
            </div>
            <h1 style="margin-bottom:1rem;">${recipe.title}</h1>
            <p style="color:var(--slate-light);font-size:1.1rem;max-width:52ch;margin-bottom:1.5rem;">${recipe.description}</p>
            <div class="recipe-hero__meta-grid">
              <div class="recipe-meta-box">
                <div class="recipe-meta-box__label">Prep</div>
                <div class="recipe-meta-box__value">${recipe.prepTime}</div>
              </div>
              <div class="recipe-meta-box">
                <div class="recipe-meta-box__label">Cook</div>
                <div class="recipe-meta-box__value">${recipe.cookTime}</div>
              </div>
              <div class="recipe-meta-box">
                <div class="recipe-meta-box__label">Serves</div>
                <div class="recipe-meta-box__value">${recipe.servings}</div>
              </div>
            </div>
            <div style="display:flex;gap:12px;margin-top:1.5rem;" class="no-print">
              <button class="btn btn--honey" onclick="window.print()">🖨 Print Recipe</button>
              <button class="btn btn--outline" id="detail-fav-btn">
                ${recipe.favourite ? '❤️ Saved' : '🤍 Save to Favourites'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="recipe-body">
        <div class="recipe-ingredients">
          <h3 style="font-family:var(--ff-display);margin-bottom:0.5rem;">Ingredients</h3>
          <p style="font-size:0.85rem;color:var(--slate-light);">Click each to check off as you go</p>
          <div class="recipe-ingredients__list" id="ingredients-list">
            ${recipe.ingredients.map(ing => `
              <div class="ingredient-item" onclick="this.classList.toggle('checked')">
                <div class="ingredient-checkbox">✓</div>
                <span><strong>${ing.amount}</strong> ${ing.name}</span>
              </div>`).join('')}
          </div>
        </div>
        <div class="recipe-steps">
          <h3 style="font-family:var(--ff-display);margin-bottom:1.5rem;">Method</h3>
          ${recipe.steps.map((step, i) => `
            <div class="step-item">
              <div class="step-number">${i + 1}</div>
              <div class="step-body">
                <div class="step-title">${step.title}</div>
                <div class="step-desc">${step.desc}</div>
              </div>
            </div>`).join('')}
          ${recipe.notes ? `
            <div class="recipe-notes">
              <div class="recipe-notes__title">📝 Cook's Notes</div>
              <p>${recipe.notes}</p>
            </div>` : ''}
        </div>
      </div>
    </div>`;

  // Favourite button
  const favBtn = document.getElementById('detail-fav-btn');
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      const recipes = getRecipes();
      const r = recipes.find(x => x.id === id);
      if (!r) return;
      r.favourite = !r.favourite;
      saveRecipes(recipes);
      favBtn.textContent = r.favourite ? '❤️ Saved' : '🤍 Save to Favourites';
      showToast(r.favourite ? 'Added to Favourites!' : 'Removed from Favourites', r.favourite ? 'honey' : '');
    });
  }

  initReveal();
}

/* ─────────────────────────────────────────────────────────────────
   PAGE: PLANNER (planner.html)
   ───────────────────────────────────────────────────────────────── */
function initPlannerPage() {
  const plannerGrid = document.getElementById('planner-grid');
  if (!plannerGrid) return;

  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const MEALS = ['Breakfast', 'Lunch', 'Dinner'];
  const today = new Date();
  const todayName = DAYS[today.getDay() === 0 ? 6 : today.getDay() - 1];

  // Get start of current week (Monday)
  function getWeekDates() {
    const d = new Date(today);
    const day = d.getDay() === 0 ? 7 : d.getDay();
    d.setDate(d.getDate() - day + 1);
    return DAYS.map((name, i) => {
      const dt = new Date(d);
      dt.setDate(d.getDate() + i);
      return { name, date: dt.getDate(), month: dt.getMonth() + 1 };
    });
  }

  const weekDates = getWeekDates();
  let plan = getMealPlan();

  function renderPlanner() {
    const recipes = getRecipes();

    plannerGrid.innerHTML = weekDates.map(({ name, date }) => {
      const isToday = name === todayName;
      const slots = MEALS.map(meal => {
        const key = `${name}_${meal}`;
        const assigned = plan[key];
        const recipe = assigned ? recipes.find(r => r.id === assigned) : null;
        return `
          <div class="planner-slot${recipe ? ' planner-slot--filled' : ''}" data-key="${key}">
            <div class="planner-slot__label">${meal}</div>
            <div class="planner-slot__content">${recipe ? `${recipe.emoji} ${recipe.title}` : '<span style="color:var(--stone);font-style:italic;">+ Add</span>'}</div>
            ${recipe ? `<button class="planner-slot__remove" data-key="${key}" title="Remove">✕</button>` : ''}
          </div>`;
      }).join('');

      return `
        <div class="planner-day${isToday ? ' planner-day--today' : ''}">
          <div class="planner-day__header">
            <div class="planner-day__name">${name.slice(0, 3)}</div>
            <div class="planner-day__date">${date}</div>
          </div>
          <div class="planner-day__slots">${slots}</div>
        </div>`;
    }).join('');

    // Attach slot click handlers
    plannerGrid.querySelectorAll('.planner-slot').forEach(slot => {
      slot.addEventListener('click', e => {
        if (e.target.closest('.planner-slot__remove')) {
          const key = e.target.closest('.planner-slot__remove').dataset.key;
          delete plan[key];
          saveMealPlan(plan);
          renderPlanner();
          renderShoppingList();
          return;
        }
        openRecipePicker(slot.dataset.key);
      });
    });

    renderShoppingList();
  }

  // Recipe picker modal
  const pickerOverlay = document.getElementById('picker-overlay');
  const pickerGrid    = document.getElementById('picker-grid');
  const pickerClose   = document.getElementById('picker-close');
  const pickerSearch  = document.getElementById('picker-search');
  let currentPickerKey = null;

  function openRecipePicker(key) {
    currentPickerKey = key;
    renderPicker('');
    pickerOverlay.classList.add('open');
  }

  function renderPicker(term) {
    const recipes = getRecipes();
    const filtered = recipes.filter(r => r.title.toLowerCase().includes(term.toLowerCase()));
    pickerGrid.innerHTML = filtered.map(r => `
      <div class="picker-item" data-id="${r.id}" style="
        display:flex;align-items:center;gap:12px;padding:12px 16px;
        border-radius:8px;cursor:pointer;transition:background 0.2s;
        border:1.5px solid transparent;
      ">
        <span style="font-size:1.6rem;">${r.emoji}</span>
        <div>
          <div style="font-weight:600;font-size:0.9rem;">${r.title}</div>
          <div style="font-size:0.8rem;color:var(--slate-light);">${r.category} · ${r.prepTime}</div>
        </div>
      </div>`).join('');

    pickerGrid.querySelectorAll('.picker-item').forEach(item => {
      item.addEventListener('mouseenter', () => { item.style.background = 'var(--amber-soft)'; item.style.borderColor = 'var(--honey-light)'; });
      item.addEventListener('mouseleave', () => { item.style.background = ''; item.style.borderColor = 'transparent'; });
      item.addEventListener('click', () => {
        plan[currentPickerKey] = item.dataset.id;
        saveMealPlan(plan);
        pickerOverlay.classList.remove('open');
        pickerSearch.value = '';
        renderPlanner();
        const recipe = getRecipes().find(r => r.id === item.dataset.id);
        showToast(`${recipe.emoji} ${recipe.title} added!`, 'honey');
      });
    });
  }

  if (pickerClose) pickerClose.addEventListener('click', () => pickerOverlay.classList.remove('open'));
  if (pickerOverlay) pickerOverlay.addEventListener('click', e => { if (e.target === pickerOverlay) pickerOverlay.classList.remove('open'); });
  if (pickerSearch) pickerSearch.addEventListener('input', e => renderPicker(e.target.value));

  // Shopping list
  function renderShoppingList() {
    const listEl = document.getElementById('shopping-list-items');
    const emptyEl = document.getElementById('shopping-empty');
    if (!listEl) return;

    const recipes = getRecipes();
    const assignedIds = Object.values(plan);

    if (assignedIds.length === 0) {
      listEl.style.display = 'none';
      if (emptyEl) emptyEl.style.display = 'block';
      return;
    }
    if (emptyEl) emptyEl.style.display = 'none';
    listEl.style.display = 'block';

    // Aggregate ingredients
    const byCategory = {};
    assignedIds.forEach(id => {
      const recipe = recipes.find(r => r.id === id);
      if (!recipe) return;
      const cat = recipe.category;
      if (!byCategory[cat]) byCategory[cat] = {};
      recipe.ingredients.forEach(ing => {
        const k = ing.name.toLowerCase();
        byCategory[cat][k] = (byCategory[cat][k] || '') + (byCategory[cat][k] ? ', ' + ing.amount : ing.amount);
      });
    });

    listEl.innerHTML = Object.entries(byCategory).map(([cat, items]) => `
      <div class="shopping-list__category">
        <div class="shopping-list__category-title">${cat}</div>
        ${Object.entries(items).map(([name, amount]) => `
          <div class="shopping-item" onclick="this.classList.toggle('checked')">
            <div class="shopping-check">✓</div>
            <span><strong>${amount}</strong> ${name}</span>
          </div>`).join('')}
      </div>`).join('');
  }

  // Print shopping list
  const printBtn = document.getElementById('print-shopping');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // Clear planner
  const clearBtn = document.getElementById('clear-planner');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Clear the entire week\'s meal plan?')) {
        plan = {};
        saveMealPlan(plan);
        renderPlanner();
        showToast('Week cleared — a clean slate awaits.', '');
      }
    });
  }

  renderPlanner();
  initReveal();
}

/* ─────────────────────────────────────────────────────────────────
   PAGE: PANTRY (pantry.html)
   ───────────────────────────────────────────────────────────────── */
function initPantryPage() {
  const tableBody = document.getElementById('pantry-tbody');
  if (!tableBody) return;

  const CATEGORIES = ['All', 'Grains', 'Dairy', 'Produce', 'Spices', 'Preserves', 'Oils'];
  let activeCategory = 'All';
  let items = getPantry();

  function isLow(item) { return parseFloat(item.quantity) <= parseFloat(item.lowThreshold); }

  function renderCategoryNav() {
    const nav = document.getElementById('pantry-cat-nav');
    if (!nav) return;
    nav.innerHTML = CATEGORIES.map(cat => {
      const count = cat === 'All' ? items.length : items.filter(i => i.category === cat).length;
      return `
        <button class="pantry-cat-btn${cat === activeCategory ? ' active' : ''}" data-cat="${cat}">
          ${cat}
          <span class="pantry-cat-count">${count}</span>
        </button>`;
    }).join('');
    nav.querySelectorAll('.pantry-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        renderCategoryNav();
        renderTable();
      });
    });
  }

  function renderLowAlert() {
    const alert = document.getElementById('pantry-alert');
    if (!alert) return;
    const low = items.filter(isLow);
    if (low.length === 0) { alert.style.display = 'none'; return; }
    alert.style.display = 'flex';
    alert.innerHTML = `
      <span class="pantry-alert__icon">⚠️</span>
      <span><strong>${low.length} item${low.length > 1 ? 's' : ''}</strong> running low:
        ${low.map(i => `<span class="tag tag--amber" style="margin-left:4px;">${i.name}</span>`).join('')}
      </span>`;
  }

  function renderTable() {
    const filtered = activeCategory === 'All' ? items : items.filter(i => i.category === activeCategory);
    // Sort: low items first
    filtered.sort((a, b) => (isLow(b) ? 1 : 0) - (isLow(a) ? 1 : 0));

    tableBody.innerHTML = filtered.map(item => `
      <tr data-id="${item.id}">
        <td><span class="pantry-item-name">${item.name}</span></td>
        <td>
          <input type="number" value="${item.quantity}" min="0" step="0.1"
            class="pantry-qty-input" data-id="${item.id}" style="width:75px;">
        </td>
        <td>${item.unit || '—'}</td>
        <td><span class="tag tag--stone">${item.category}</span></td>
        <td>
          ${isLow(item)
            ? `<span class="pantry-low-badge">⚠️ Low</span>`
            : `<span class="tag tag--moss" style="background:rgba(109,130,90,0.12);color:var(--moss);">✓ OK</span>`}
        </td>
        <td>
          <button class="btn btn--danger btn--sm pantry-del-btn" data-id="${item.id}">Remove</button>
        </td>
      </tr>`).join('');

    // Quantity change
    tableBody.querySelectorAll('.pantry-qty-input').forEach(input => {
      input.addEventListener('change', e => {
        const id = e.target.dataset.id;
        const item = items.find(i => i.id === id);
        if (item) {
          item.quantity = parseFloat(e.target.value) || 0;
          savePantry(items);
          renderLowAlert();
          renderCategoryNav();
          // Update status cell
          const row = tableBody.querySelector(`tr[data-id="${id}"]`);
          if (row) {
            row.cells[4].innerHTML = isLow(item)
              ? `<span class="pantry-low-badge">⚠️ Low</span>`
              : `<span class="tag tag--moss" style="background:rgba(109,130,90,0.12);color:var(--moss);">✓ OK</span>`;
          }
          if (isLow(item)) showToast(`${item.name} is running low.`, '');
        }
      });
    });

    // Delete
    tableBody.querySelectorAll('.pantry-del-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = e.target.dataset.id;
        const item = items.find(i => i.id === id);
        if (!confirm(`Remove "${item?.name}" from pantry?`)) return;
        items = items.filter(i => i.id !== id);
        savePantry(items);
        renderTable();
        renderLowAlert();
        renderCategoryNav();
        showToast('Item removed.', '');
      });
    });
  }

  // Add item form
  const addForm = document.getElementById('add-pantry-form');
  if (addForm) {
    addForm.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(addForm);
      const name = data.get('name')?.trim();
      const quantity = parseFloat(data.get('quantity')) || 0;
      const unit = data.get('unit')?.trim() || '';
      const category = data.get('category');
      const lowThreshold = parseFloat(data.get('lowThreshold')) || 0;

      if (!name || !category) {
        showToast('Please fill in the item name and category.', '');
        return;
      }

      const newItem = {
        id: 'p' + Date.now(),
        name, quantity, unit, category, lowThreshold
      };
      items.unshift(newItem);
      savePantry(items);
      addForm.reset();
      renderTable();
      renderLowAlert();
      renderCategoryNav();
      showToast(`${name} added to pantry!`, 'moss');
    });
  }

  renderCategoryNav();
  renderLowAlert();
  renderTable();
  initReveal();
}

/* ─────────────────────────────────────────────────────────────────
   PAGE: FAVOURITES (favourites.html)
   ───────────────────────────────────────────────────────────────── */
function initFavouritesPage() {
  const grid = document.getElementById('favourites-grid');
  if (!grid) return;

  function render() {
    const recipes = getRecipes();
    const favs = recipes.filter(r => r.favourite);

    if (favs.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <div class="empty-state__icon">🤍</div>
          <h3 class="empty-state__title">No favourites yet</h3>
          <p class="empty-state__desc">Visit the Recipe Book and tap the heart on any recipe to save it here.</p>
          <a href="recipes.html" class="btn btn--honey mt-6">Explore Recipes →</a>
        </div>`;
      return;
    }

    grid.innerHTML = favs.map(buildRecipeCard).join('');
    initReveal();
  }

  render();
  initFavouriteToggles(grid);
  // Re-render when favourites change
  const origToggle = initFavouriteToggles;
  grid.addEventListener('click', e => {
    if (e.target.closest('.recipe-card__fav')) {
      setTimeout(render, 100);
    }
  });
}

/* ─── INIT ROUTER ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();

  const path = window.location.pathname;

  if (path.includes('index') || path.endsWith('/') || path === '') {
    initHomePage();
  }
  if (path.includes('recipes') && !path.includes('detail')) {
    initRecipesPage();
  }
  if (path.includes('recipe-detail')) {
    initRecipeDetailPage();
  }
  if (path.includes('planner')) {
    initPlannerPage();
  }
  if (path.includes('pantry')) {
    initPantryPage();
  }
  if (path.includes('favourites')) {
    initFavouritesPage();
  }
});
