const DOG_BASE_BREEDS = [
  "Labrador Retriever", "German Shepherd", "Golden Retriever", "French Bulldog", "Bulldog", "Poodle", "Beagle", "Rottweiler", "Dachshund", "Siberian Husky",
  "Boxer", "Doberman Pinscher", "Great Dane", "Shih Tzu", "Maltese", "Pug", "Chihuahua", "Border Collie", "Pomeranian", "Cocker Spaniel"
];

const CAT_BASE_BREEDS = [
  "Maine Coon", "Siamese", "Persian", "Ragdoll", "Bengal", "Abyssinian", "Birman", "Sphynx", "British Shorthair", "Scottish Fold",
  "American Shorthair", "Russian Blue", "Turkish Angora", "Manx", "Himalayan", "Burmese", "Bombay", "Savannah", "Chartreux", "Ocicat"
];

const FISH_BASE_BREEDS = [
  "Betta", "Guppy", "Molly", "Platy", "Swordtail", "Neon Tetra", "Cardinal Tetra", "Ember Tetra", "Black Skirt Tetra", "Serpae Tetra",
  "Discus", "Angelfish", "Oscar", "Jack Dempsey", "Flowerhorn", "Arowana", "Silver Dollar", "Pacu", "Corydoras", "Pleco",
  "Bristlenose Pleco", "Otocinclus", "Kuhli Loach", "Clown Loach", "Yoyo Loach", "Zebra Danio", "Pearl Danio", "White Cloud Minnow", "Rainbowfish", "Boesemani Rainbow",
  "Killifish", "Hatchetfish", "Archerfish", "Pufferfish", "Figure 8 Puffer", "Pea Puffer", "Gourami", "Dwarf Gourami", "Pearl Gourami", "Kissing Gourami",
  "Barb", "Tiger Barb", "Rosy Barb", "Cherry Barb", "Denison Barb", "Rasbora", "Harlequin Rasbora", "Scissortail Rasbora", "Bala Shark", "Red Tail Shark",
  "Chinese Algae Eater", "Siamese Algae Eater", "Ghost Catfish", "Glass Catfish", "Synodontis", "African Cichlid", "Mbuna Cichlid", "Peacock Cichlid", "Frontosa", "Kribensis",
  "Ram Cichlid", "Apistogramma", "Convict Cichlid", "Firemouth Cichlid", "Green Terror", "Severum", "Geophagus", "Uaru", "Arapaima", "Stingray",
  "Goldfish", "Comet Goldfish", "Shubunkin", "Oranda", "Ryukin", "Fantail", "Black Moor", "Ranchu", "Lionhead", "Bubble Eye",
  "Koi", "Butterfly Koi", "Doitsu Koi", "Shiro Utsuri", "Tancho Koi", "Medaka", "Ricefish", "Halfbeak", "Endler", "Mosquitofish",
  "Anchovy", "Sardine", "Mackerel", "Tuna", "Salmon", "Trout", "Cod", "Haddock", "Halibut", "Flounder"
];

const BIRD_BREEDS = [
  "Budgerigar", "Cockatiel", "Lovebird", "Canary", "Zebra Finch", "African Grey", "Macaw", "Cockatoo", "Lorikeet", "Conure"
];

const EXOTIC_PETS = [
  {
    type: "Rabbit",
    breed: "Holland Lop",
    colors: ["White", "Black", "Brown"],
    size: "Small",
    coat: "Short",
    energy: "Moderate",
    lifespan: "7-12 years",
    weight: "1-2 kg",
    origin: "Netherlands",
    identify: ["Floppy ears", "Rounded head", "Compact body"],
    bestFor: "Indoor homes with gentle handling.",
    photo: "https://picsum.photos/seed/hollandlop/900/600"
  }
];

const TARGET_COUNTS = {
  Dog: 500,
  Cat: 500,
  Fish: 1000,
  Bird: 100
};

const SIZE_BY_INDEX = ["Small", "Medium", "Large"];
const ENERGY_BY_INDEX = ["Low", "Moderate", "High", "Very High"];
const COLOR_MAP = {
  Dog: ["Black", "Brown", "White", "Golden", "Gray", "Cream", "Red"],
  Cat: ["Black", "White", "Blue", "Cream", "Brown", "Orange", "Silver"],
  Fish: ["Blue", "Red", "Yellow", "Silver", "Black", "Orange", "Green"],
  Bird: ["Green", "Yellow", "Blue", "White", "Red", "Gray", "Black"]
};
const COAT_MAP = {
  Dog: ["Short", "Medium", "Long", "Wire", "Curly"],
  Cat: ["Short", "Long", "Semi-long", "Curly", "Hairless"],
  Fish: ["Scales"],
  Bird: ["Feathers"]
};

function expandBreedList(baseBreeds, targetCount, label) {
  const results = [];
  for (let i = 0; i < targetCount; i += 1) {
    const base = baseBreeds[i % baseBreeds.length];
    if (i < baseBreeds.length) {
      results.push(base);
    } else {
      const generation = Math.floor(i / baseBreeds.length) + 1;
      results.push(`${base} (${label} Line ${generation})`);
    }
  }
  return results;
}

function pickThree(values, i) {
  return [values[i % values.length], values[(i + 2) % values.length], values[(i + 4) % values.length]];
}

function makeBreed(type, breed, index) {
  const coats = COAT_MAP[type];
  const colors = COLOR_MAP[type];
  return {
    type,
    breed,
    colors: pickThree(colors, index),
    size: SIZE_BY_INDEX[index % SIZE_BY_INDEX.length],
    coat: coats[index % coats.length],
    energy: ENERGY_BY_INDEX[index % ENERGY_BY_INDEX.length],
    lifespan: `${6 + (index % 8)}-${10 + (index % 10)} years`,
    weight: `${1 + (index % 12)}-${3 + (index % 20)} kg`,
    origin: "Various",
    identify: [
      `${breed} head profile and face geometry`,
      `${coats[index % coats.length]} covering with distinguishing color pattern`,
      `${type.toLowerCase()} body shape and movement signature`
    ],
    bestFor: `Owners able to provide ${type.toLowerCase()}-appropriate care, enrichment, and habitat.`,
    photo: `https://picsum.photos/seed/${encodeURIComponent(type + '-' + breed)}/900/600`
  };
}

const DOG_BREEDS = expandBreedList(DOG_BASE_BREEDS, TARGET_COUNTS.Dog, "Dog");
const CAT_BREEDS = expandBreedList(CAT_BASE_BREEDS, TARGET_COUNTS.Cat, "Cat");
const FISH_BREEDS = expandBreedList(FISH_BASE_BREEDS, TARGET_COUNTS.Fish, "Fish");
const FULL_BIRD_BREEDS = expandBreedList(BIRD_BREEDS, TARGET_COUNTS.Bird, "Bird");

const breeds = [
  ...DOG_BREEDS.map((breed, index) => makeBreed("Dog", breed, index)),
  ...CAT_BREEDS.map((breed, index) => makeBreed("Cat", breed, index)),
  ...FISH_BREEDS.map((breed, index) => makeBreed("Fish", breed, index)),
  ...FULL_BIRD_BREEDS.map((breed, index) => makeBreed("Bird", breed, index)),
  ...EXOTIC_PETS
];

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
    imageEl.src = item.photo;
    imageEl.alt = `${item.breed} (${item.type})`;

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
