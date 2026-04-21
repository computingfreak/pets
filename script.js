const ANIMAL_CATALOG = {
  Dog: [
    "Labrador Retriever", "German Shepherd", "Golden Retriever", "French Bulldog", "Poodle", "Beagle", "Rottweiler", "Dachshund", "Siberian Husky", "Border Collie",
    "Boxer", "Doberman Pinscher", "Great Dane", "Shih Tzu", "Chihuahua", "Pug", "Cocker Spaniel", "Akita", "Dalmatian", "Samoyed"
  ],
  Cat: [
    "Maine Coon", "Siamese", "Persian", "Ragdoll", "Bengal", "Abyssinian", "Birman", "Sphynx", "British Shorthair", "Scottish Fold",
    "Russian Blue", "Turkish Angora", "Manx", "Himalayan", "Burmese", "Bombay", "Savannah", "Chartreux", "Ocicat", "Norwegian Forest Cat"
  ],
  Fish: [
    "Betta", "Guppy", "Molly", "Platy", "Swordtail", "Neon Tetra", "Cardinal Tetra", "Discus", "Angelfish", "Oscar",
    "Pleco", "Corydoras", "Clown Loach", "Zebra Danio", "Rainbowfish", "Pufferfish", "Gourami", "Tiger Barb", "Goldfish", "Koi"
  ],
  Bird: [
    "Budgerigar", "Cockatiel", "Lovebird", "Canary", "Zebra Finch", "African Grey Parrot", "Macaw", "Cockatoo", "Conure", "Lorikeet",
    "Pigeon", "Dove", "Parrotlet", "Quaker Parrot", "Indian Ringneck", "Toucan", "Mynah", "Rosella", "Kakariki", "Eclectus Parrot"
  ],
  Rabbit: ["Holland Lop", "Netherland Dwarf", "Lionhead", "Mini Rex", "Flemish Giant", "English Lop", "Rex Rabbit", "Californian Rabbit"],
  Hamster: ["Syrian Hamster", "Winter White Dwarf Hamster", "Campbell's Dwarf Hamster", "Roborovski Hamster", "Chinese Hamster"],
  GuineaPig: ["American Guinea Pig", "Abyssinian Guinea Pig", "Peruvian Guinea Pig", "Silkie Guinea Pig", "Teddy Guinea Pig"],
  Ferret: ["Standard Ferret", "Angora Ferret", "European Polecat Ferret"],
  Turtle: ["Red-eared Slider", "Painted Turtle", "Musk Turtle", "Map Turtle", "Box Turtle"],
  Snake: ["Corn Snake", "Ball Python", "King Snake", "Milk Snake", "Rosy Boa"],
  Lizard: ["Leopard Gecko", "Bearded Dragon", "Crested Gecko", "Blue-tongued Skink", "Uromastyx"],
  Frog: ["Pacman Frog", "Whites Tree Frog", "Poison Dart Frog", "Tomato Frog"],
  Crab: ["Hermit Crab", "Halloween Moon Crab", "Red Claw Crab"],
  Shrimp: ["Cherry Shrimp", "Amano Shrimp", "Ghost Shrimp", "Crystal Red Shrimp"],
  Horse: ["Arabian Horse", "Thoroughbred", "Quarter Horse", "Friesian", "Appaloosa"],
  Goat: ["Pygmy Goat", "Nigerian Dwarf Goat", "Boer Goat", "Alpine Goat"],
  Pig: ["Pot-bellied Pig", "KuneKune", "Mini Juliana Pig"],
  Chicken: ["Silkie", "Polish Chicken", "Brahma", "Leghorn", "Orpington"],
  Duck: ["Call Duck", "Pekin Duck", "Muscovy Duck", "Mallard"],
  Hedgehog: ["African Pygmy Hedgehog"]
};

const SIZE_BY_INDEX = ["Small", "Medium", "Large"];
const ENERGY_BY_INDEX = ["Low", "Moderate", "High", "Very High"];

const COAT_BY_TYPE = {
  Dog: ["Short", "Medium", "Long", "Wire", "Curly"],
  Cat: ["Short", "Long", "Semi-long", "Curly", "Hairless"],
  Fish: ["Scales"],
  Bird: ["Feathers"],
  Rabbit: ["Short", "Long"],
  Hamster: ["Short", "Long"],
  GuineaPig: ["Short", "Long", "Wire"],
  Ferret: ["Short", "Long"],
  Turtle: ["Shell"],
  Snake: ["Scales"],
  Lizard: ["Scales"],
  Frog: ["Skin"],
  Crab: ["Exoskeleton"],
  Shrimp: ["Exoskeleton"],
  Horse: ["Short"],
  Goat: ["Short", "Long"],
  Pig: ["Sparse Hair"],
  Chicken: ["Feathers"],
  Duck: ["Feathers"],
  Hedgehog: ["Spines"]
};

const COLORS = ["Black", "White", "Brown", "Golden", "Gray", "Cream", "Red", "Blue", "Orange", "Silver", "Green", "Yellow"];

function pickThree(values, i) {
  return [values[i % values.length], values[(i + 3) % values.length], values[(i + 6) % values.length]];
}

function normalizeType(type) {
  return type.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function buildBreed(type, breed, index) {
  const coats = COAT_BY_TYPE[type] || ["Varies"];
  return {
    type: normalizeType(type),
    breed,
    colors: pickThree(COLORS, index),
    size: SIZE_BY_INDEX[index % SIZE_BY_INDEX.length],
    coat: coats[index % coats.length],
    energy: ENERGY_BY_INDEX[index % ENERGY_BY_INDEX.length],
    lifespan: `${5 + (index % 10)}-${10 + (index % 10)} years`,
    weight: `${1 + (index % 20)}-${3 + (index % 30)} kg`,
    origin: "Various",
    identify: [
      `${breed} head and face profile`,
      `${coats[index % coats.length]} texture and visible body covering`,
      `${normalizeType(type)} body shape and movement pattern`
    ],
    bestFor: `Owners who can provide species-appropriate habitat, enrichment, and veterinary care.`
  };
}

const breeds = Object.entries(ANIMAL_CATALOG).flatMap(([type, breedList]) =>
  breedList.map((breed, index) => buildBreed(type, breed, index))
);

const imageCache = new Map();

function svgFallbackDataUrl(item) {
  const text = `${item.type}: ${item.breed}`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='900' height='600'><rect width='100%' height='100%' fill='#e8eef8'/><text x='50%' y='45%' text-anchor='middle' font-size='46' fill='#1f3a5a' font-family='Arial'>${text}</text><text x='50%' y='54%' text-anchor='middle' font-size='24' fill='#52647d' font-family='Arial'>Reference image unavailable</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

async function fetchWikipediaImage(query) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
  const response = await fetch(url);
  if (!response.ok) return null;
  const data = await response.json();
  return data?.thumbnail?.source || null;
}

async function resolveBreedImage(item) {
  const cacheKey = `${item.type}|${item.breed}`;
  if (imageCache.has(cacheKey)) return imageCache.get(cacheKey);

  const queries = [
    item.breed,
    `${item.breed} ${item.type}`,
    `${item.type} ${item.breed}`,
    item.type
  ];

  for (const query of queries) {
    try {
      const image = await fetchWikipediaImage(query);
      if (image) {
        imageCache.set(cacheKey, image);
        return image;
      }
    } catch (_) {
      // Ignore and try next query
    }
  }

  const fallback = svgFallbackDataUrl(item);
  imageCache.set(cacheKey, fallback);
  return fallback;
}

const grid = document.getElementById("breedGrid");
const cardTemplate = document.getElementById("cardTemplate");
const resultCount = document.getElementById("resultCount");

const searchInput = document.getElementById("search");
const typeFilter = document.getElementById("typeFilter");
const colorFilter = document.getElementById("colorFilter");
const sizeFilter = document.getElementById("sizeFilter");
const coatFilter = document.getElementById("coatFilter");
const energyFilter = document.getElementById("energyFilter");
const resetBtn = document.getElementById("resetBtn");

function uniqueValues(extractor) {
  return [...new Set(breeds.flatMap(extractor))].sort((a, b) => a.localeCompare(b));
}

function fillFilter(selectEl, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectEl.append(option);
  });
}

function initializeFilters() {
  fillFilter(typeFilter, uniqueValues((item) => item.type));
  fillFilter(colorFilter, uniqueValues((item) => item.colors));
  fillFilter(sizeFilter, uniqueValues((item) => item.size));
  fillFilter(coatFilter, uniqueValues((item) => item.coat));
  fillFilter(energyFilter, uniqueValues((item) => item.energy));
}

function matchesSearch(item, query) {
  if (!query) return true;

  const haystack = [
    item.type,
    item.breed,
    item.size,
    item.coat,
    item.energy,
    item.origin,
    item.lifespan,
    item.weight,
    item.bestFor,
    ...item.colors,
    ...item.identify
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function filteredBreeds() {
  return breeds.filter((item) => {
    const matchesType = typeFilter.value === "all" || item.type === typeFilter.value;
    const matchesColor = colorFilter.value === "all" || item.colors.includes(colorFilter.value);
    const matchesSize = sizeFilter.value === "all" || item.size === sizeFilter.value;
    const matchesCoat = coatFilter.value === "all" || item.coat === coatFilter.value;
    const matchesEnergy = energyFilter.value === "all" || item.energy === energyFilter.value;
    const matchesText = matchesSearch(item, searchInput.value.trim());

    return matchesType && matchesColor && matchesSize && matchesCoat && matchesEnergy && matchesText;
  });
}

function renderCards(items) {
  grid.innerHTML = "";

  if (!items.length) {
    grid.innerHTML = '<p class="result-count">No matches found. Try broader filters.</p>';
    resultCount.textContent = "Showing 0 breeds";
    return;
  }

  items.forEach((item) => {
    const node = cardTemplate.content.cloneNode(true);
    const imageEl = node.querySelector(".breed-image");
    imageEl.src = svgFallbackDataUrl(item);
    imageEl.alt = `${item.breed} (${item.type})`;

    resolveBreedImage(item).then((resolvedUrl) => {
      imageEl.src = resolvedUrl;
    });

    node.querySelector(".breed-name").textContent = item.breed;
    node.querySelector(".pet-type").textContent = item.type;

    const statList = node.querySelector(".stat-list");
    [
      `Origin: ${item.origin}`,
      `Colors: ${item.colors.join(", ")}`,
      `Size: ${item.size}`,
      `Coat: ${item.coat}`,
      `Energy: ${item.energy}`,
      `Weight: ${item.weight}`,
      `Lifespan: ${item.lifespan}`
    ].forEach((stat) => {
      const li = document.createElement("li");
      li.textContent = stat;
      statList.append(li);
    });

    const traitList = node.querySelector(".trait-list");
    item.identify.forEach((trait) => {
      const li = document.createElement("li");
      li.textContent = trait;
      traitList.append(li);
    });

    node.querySelector(".best-for").textContent = item.bestFor;
    grid.append(node);
  });

  resultCount.textContent = `Showing ${items.length} breed${items.length > 1 ? "s" : ""}`;
}

function rerender() {
  renderCards(filteredBreeds());
}

[searchInput, typeFilter, colorFilter, sizeFilter, coatFilter, energyFilter].forEach((el) => {
  el.addEventListener("input", rerender);
});

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  [typeFilter, colorFilter, sizeFilter, coatFilter, energyFilter].forEach((select) => {
    select.value = "all";
  });
  rerender();
});

initializeFilters();
rerender();
