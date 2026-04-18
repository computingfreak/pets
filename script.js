const breeds = [
  {
    type: "Dog",
    breed: "Labrador Retriever",
    colors: ["Black", "Yellow", "Chocolate"],
    size: "Large",
    coat: "Short",
    energy: "High",
    lifespan: "10-12 years",
    weight: "25-36 kg",
    origin: "Canada",
    identify: [
      "Broad head with friendly eyes",
      "Otter-like thick tail",
      "Dense water-resistant short double coat"
    ],
    bestFor: "Active families and first-time dog owners.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/YellowLabradorLooking_new.jpg"
  },
  {
    type: "Dog",
    breed: "Siberian Husky",
    colors: ["Black", "White", "Gray", "Red"],
    size: "Medium",
    coat: "Long",
    energy: "Very High",
    lifespan: "12-14 years",
    weight: "16-27 kg",
    origin: "Siberia",
    identify: [
      "Erect triangular ears",
      "Almond eyes (often blue or bi-colored)",
      "Curled brush tail and thick double coat"
    ],
    bestFor: "Very active owners in cooler climates.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Siberian_Husky_pho.jpg"
  },
  {
    type: "Cat",
    breed: "Maine Coon",
    colors: ["Brown", "Black", "Cream", "Blue"],
    size: "Large",
    coat: "Long",
    energy: "Moderate",
    lifespan: "12-15 years",
    weight: "4-8 kg",
    origin: "United States",
    identify: [
      "Tufted lynx-like ears",
      "Long bushy tail",
      "Large frame with shaggy coat"
    ],
    bestFor: "Families wanting a social but gentle cat.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Maine_Coon_Cat_by_Tomitheos.JPG"
  },
  {
    type: "Cat",
    breed: "Siamese",
    colors: ["Cream", "Brown", "Seal", "Blue"],
    size: "Medium",
    coat: "Short",
    energy: "High",
    lifespan: "12-20 years",
    weight: "2.5-5.5 kg",
    origin: "Thailand",
    identify: [
      "Color points on face, ears, paws, and tail",
      "Slim elegant body",
      "Large triangular ears and striking blue eyes"
    ],
    bestFor: "People wanting vocal, interactive companions.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg"
  },
  {
    type: "Rabbit",
    breed: "Holland Lop",
    colors: ["White", "Black", "Brown", "Orange"],
    size: "Small",
    coat: "Short",
    energy: "Moderate",
    lifespan: "7-12 years",
    weight: "1-1.8 kg",
    origin: "Netherlands",
    identify: [
      "Distinctive floppy ears",
      "Compact, muscular body",
      "Round face with short muzzle"
    ],
    bestFor: "Indoor homes with gentle handling.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Holland_lop.jpg"
  },
  {
    type: "Bird",
    breed: "Budgerigar (Budgie)",
    colors: ["Green", "Yellow", "Blue", "White"],
    size: "Small",
    coat: "Feathers",
    energy: "High",
    lifespan: "7-15 years",
    weight: "30-40 g",
    origin: "Australia",
    identify: [
      "Small parrot with long tapered tail",
      "Wavy black markings on wings and neck",
      "Curved beak and social chirping behavior"
    ],
    bestFor: "Owners who can provide daily social interaction.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Budgerigar_Male.jpg"
  },
  {
    type: "Fish",
    breed: "Betta",
    colors: ["Red", "Blue", "White", "Black", "Purple"],
    size: "Small",
    coat: "Scales",
    energy: "Moderate",
    lifespan: "2-5 years",
    weight: "< 10 g",
    origin: "Southeast Asia",
    identify: [
      "Long flowing fins in many varieties",
      "Can breathe surface air (labyrinth organ)",
      "Males often display flaring gills"
    ],
    bestFor: "Beginner aquariums with proper tank setup.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Betta_splendens_-_male.jpg"
  },
  {
    type: "Hamster",
    breed: "Syrian Hamster",
    colors: ["Golden", "White", "Black", "Brown"],
    size: "Small",
    coat: "Short",
    energy: "Moderate",
    lifespan: "2-3 years",
    weight: "100-150 g",
    origin: "Syria",
    identify: [
      "Larger than dwarf hamster breeds",
      "Short tail and stuffed cheek pouches",
      "Usually solitary behavior in adulthood"
    ],
    bestFor: "Older children and first-time small-pet owners.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Golden_hamster_%28Mesocricetus_auratus%29.jpg"
  }
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
  return [...new Set(breeds.flatMap(extractor))].sort((a, b) =>
    a.localeCompare(b)
  );
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
    const matchesColor =
      colorFilter.value === "all" || item.colors.includes(colorFilter.value);
    const matchesSize = sizeFilter.value === "all" || item.size === sizeFilter.value;
    const matchesCoat = coatFilter.value === "all" || item.coat === coatFilter.value;
    const matchesEnergy =
      energyFilter.value === "all" || item.energy === energyFilter.value;
    const matchesText = matchesSearch(item, searchInput.value.trim());

    return (
      matchesType &&
      matchesColor &&
      matchesSize &&
      matchesCoat &&
      matchesEnergy &&
      matchesText
    );
  });
}

function renderCards(items) {
  grid.innerHTML = "";

  if (!items.length) {
    grid.innerHTML =
      '<p class="result-count">No matches found. Try broader filters.</p>';
    resultCount.textContent = "Showing 0 breeds";
    return;
  }

  items.forEach((item) => {
    const node = cardTemplate.content.cloneNode(true);
    node.querySelector(".breed-image").src = item.photo;
    node.querySelector(".breed-image").alt = `${item.breed} (${item.type})`;
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

  resultCount.textContent = `Showing ${items.length} breed${
    items.length > 1 ? "s" : ""
  }`;
}

function rerender() {
  renderCards(filteredBreeds());
}

[searchInput, typeFilter, colorFilter, sizeFilter, coatFilter, energyFilter].forEach(
  (el) => el.addEventListener("input", rerender)
);

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  [typeFilter, colorFilter, sizeFilter, coatFilter, energyFilter].forEach(
    (select) => (select.value = "all")
  );
  rerender();
});

initializeFilters();
rerender();
