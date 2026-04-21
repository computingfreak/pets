const DOG_BREEDS = [
  "Labrador Retriever", "German Shepherd", "Golden Retriever", "French Bulldog",
  "Bulldog", "Poodle", "Beagle", "Rottweiler", "Dachshund", "German Shorthaired Pointer",
  "Pembroke Welsh Corgi", "Australian Shepherd", "Yorkshire Terrier", "Boxer", "Siberian Husky",
  "Cavalier King Charles Spaniel", "Doberman Pinscher", "Great Dane", "Miniature Schnauzer", "Shih Tzu",
  "Boston Terrier", "Bernese Mountain Dog", "Pomeranian", "Havanese", "Shetland Sheepdog",
  "Brittany", "English Springer Spaniel", "Cocker Spaniel", "Mastiff", "Chihuahua",
  "Vizsla", "Pug", "Maltese", "Weimaraner", "Collie",
  "Newfoundland", "Border Collie", "Basset Hound", "Rhodesian Ridgeback", "West Highland White Terrier",
  "Belgian Malinois", "Bichon Frise", "Akita", "St. Bernard", "Bloodhound",
  "Bullmastiff", "Airedale Terrier", "Whippet", "Alaskan Malamute", "Papillon",
  "Chinese Shar-Pei", "Samoyed", "Chow Chow", "Dalmatian", "Great Pyrenees",
  "Irish Setter", "Cane Corso", "Lhasa Apso", "Soft Coated Wheaten Terrier", "Scottish Terrier",
  "Portuguese Water Dog", "Shiba Inu", "Basenji", "Australian Cattle Dog", "English Cocker Spaniel",
  "Flat-Coated Retriever", "Keeshond", "Pekingese", "Pointer", "Old English Sheepdog",
  "Toy Poodle", "Miniature Poodle", "Standard Poodle", "Irish Wolfhound", "Jack Russell Terrier",
  "American Staffordshire Terrier", "Staffordshire Bull Terrier", "Fox Terrier", "Parson Russell Terrier", "Norwich Terrier",
  "Norfolk Terrier", "Cairn Terrier", "Silky Terrier", "Wire Fox Terrier", "Belgian Tervuren",
  "Belgian Sheepdog", "Bearded Collie", "Finnish Spitz", "Pharaoh Hound", "Saluki",
  "Afghan Hound", "Borzoi", "Italian Greyhound", "Greyhound", "Schipperke",
  "Manchester Terrier", "Rat Terrier", "Treeing Walker Coonhound", "Bluetick Coonhound", "Redbone Coonhound"
];

const CAT_BREEDS = [
  "Maine Coon", "Siamese", "Persian", "Ragdoll", "Bengal",
  "Abyssinian", "Birman", "Sphynx", "British Shorthair", "Scottish Fold",
  "American Shorthair", "Oriental Shorthair", "Devon Rex", "Cornish Rex", "Norwegian Forest Cat",
  "Russian Blue", "Turkish Angora", "Turkish Van", "Manx", "Himalayan",
  "Burmese", "Bombay", "Tonkinese", "Savannah", "Chartreux",
  "Egyptian Mau", "Ocicat", "Somali", "Balinese", "Selkirk Rex",
  "LaPerm", "Ragamuffin", "Munchkin", "Pixie-bob", "Kurilian Bobtail",
  "Japanese Bobtail", "American Curl", "American Bobtail", "Exotic Shorthair", "Nebelung",
  "Burmilla", "Snowshoe", "Korat", "Peterbald", "Toyger",
  "Serengeti", "Cymric", "Chantilly-Tiffany", "Colorpoint Shorthair", "European Burmese",
  "Arabian Mau", "Australian Mist", "Brazilian Shorthair", "California Spangled", "Ceylon",
  "Chausie", "Cyprus Cat", "Dragon Li", "Dwelf", "German Rex",
  "Highlander", "Khao Manee", "Lykoi", "Mekong Bobtail", "Minuet",
  "Napoleon Cat", "Ojos Azules", "Oriental Longhair", "Singapura", "Skookum",
  "Sokoke", "Thai", "Ukrainian Levkoy", "York Chocolate", "Foldex",
  "British Longhair", "Tennessee Rex", "Cashmere Bengal", "Javanese", "Classic Siamese",
  "Modern Siamese", "Traditional Persian", "Doll-Face Persian", "Minskin", "Bambino",
  "Suphalak", "Havana Brown", "Asian Semi-longhair", "Tortoiseshell Domestic", "Tabby Domestic",
  "Tuxedo Domestic", "Calico Domestic", "Blue Point Siamese", "Lilac Point Siamese", "Seal Point Siamese",
  "Red Point Siamese", "Longhair Domestic", "Shorthair Domestic", "Forest Siberian", "Siberian Cat"
];

const BIRD_BREEDS = [
  "Budgerigar", "Cockatiel", "Lovebird", "Canary", "Zebra Finch", "Gouldian Finch", "Society Finch", "Java Sparrow", "Parrotlet", "Green-cheeked Conure",
  "Sun Conure", "Jenday Conure", "Nanday Conure", "Blue-crowned Conure", "Meyer\'s Parrot", "Senegal Parrot", "Cape Parrot", "African Grey", "Timneh Grey", "Eclectus Parrot",
  "Amazon Parrot", "Blue-fronted Amazon", "Yellow-naped Amazon", "Double Yellow-headed Amazon", "Rainbow Lorikeet", "Red Lory", "Moluccan Cockatoo", "Umbrella Cockatoo", "Goffin\'s Cockatoo", "Cockatoo",
  "Macaw", "Blue-and-gold Macaw", "Scarlet Macaw", "Green-winged Macaw", "Hyacinth Macaw", "Caique", "Pionus", "Quaker Parrot", "Indian Ringneck", "Alexandrine Parakeet",
  "Bourke\'s Parakeet", "Rosella", "Princess Parrot", "Turquoise Parrot", "Kakariki", "Lineolated Parakeet", "Monk Parakeet", "Lorikeet", "Parakeet", "Poicephalus",
  "Diamond Dove", "Ringneck Dove", "White Dove", "Pigeon", "Fantail Pigeon", "King Pigeon", "Racing Pigeon", "Mynah", "Starling", "Toucan",
  "Toucanet", "Toco Toucan", "Button Quail", "Coturnix Quail", "Chinese Painted Quail", "Pheasant", "Golden Pheasant", "Lady Amherst\'s Pheasant", "Peafowl", "Guinea Fowl",
  "Helmeted Guinea Fowl", "Swan Goose", "Domestic Duck", "Call Duck", "Crested Duck", "Muscovy Duck", "Mallard", "Bantam Chicken", "Silkie Chicken", "Polish Chicken",
  "Cockatoo Finch", "Waxbill", "Paradise Whydah", "Firefinch", "Red Avadavat", "European Goldfinch", "Siskin", "Bullfinch", "Crossbill", "Linnet",
  "Skylark", "Meadowlark", "Nightingale", "Mockingbird", "Robin", "Bluebird", "Wren", "Sparrow", "Swallow", "Swift"
];

const EXOTIC_PETS = [
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
    identify: ["Distinctive floppy ears", "Compact body", "Rounded head profile"],
    bestFor: "Indoor homes with gentle handling and daily enrichment.",
    photo: "https://loremflickr.com/900/600/rabbit,hollandlop?lock=5001"
  },
  {
    type: "Fish",
    breed: "Betta",
    colors: ["Red", "Blue", "White", "Black", "Purple"],
    size: "Small",
    coat: "Scales",
    energy: "Moderate",
    lifespan: "2-5 years",
    weight: "<10 g",
    origin: "Southeast Asia",
    identify: ["Flowing fins", "Surface-air breathing behavior", "Territorial display in males"],
    bestFor: "Beginner aquariums with filtered, heated tanks.",
    photo: "https://loremflickr.com/900/600/betta,fish?lock=5002"
  }
];

const SIZE_BY_INDEX = ["Small", "Medium", "Large"];
const ENERGY_BY_INDEX = ["Low", "Moderate", "High", "Very High"];
const DOG_COATS = ["Short", "Medium", "Long", "Wire", "Curly"];
const CAT_COATS = ["Short", "Long", "Semi-long", "Curly", "Hairless"];
const BIRD_COATS = ["Feathers", "Feathers", "Feathers", "Feathers", "Feathers"];
const DOG_COLORS = ["Black", "Brown", "White", "Golden", "Gray", "Cream", "Red"];
const CAT_COLORS = ["Black", "White", "Blue", "Cream", "Brown", "Orange", "Silver"];
const BIRD_COLORS = ["Green", "Yellow", "Blue", "Red", "White", "Gray", "Black"];

function pickThree(values, i) {
  return [values[i % values.length], values[(i + 2) % values.length], values[(i + 4) % values.length]];
}

function svgFallbackDataUrl(item) {
  const label = encodeURIComponent(`${item.type}: ${item.breed}`);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='900' height='600'><rect width='100%' height='100%' fill='#e8eef8'/><text x='50%' y='48%' text-anchor='middle' font-size='42' fill='#274060' font-family='Arial'>${label}</text><text x='50%' y='56%' text-anchor='middle' font-size='24' fill='#52647d' font-family='Arial'>Image unavailable</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${svg}`;
}

function breedPhoto(type, breed, index) {
  const tags = `${type.toLowerCase()},${breed.toLowerCase().replace(/\s+/g, "")}`;
  return `https://loremflickr.com/900/600/${tags}?lock=${index + 1}`;
}

function buildBreed({ type, breed, index, colors, coats, origin, bestFor }) {
  return {
    type,
    breed,
    colors: pickThree(colors, index),
    size: SIZE_BY_INDEX[index % SIZE_BY_INDEX.length],
    coat: coats[index % coats.length],
    energy: ENERGY_BY_INDEX[index % ENERGY_BY_INDEX.length],
    lifespan: `${8 + (index % 8)}-${12 + (index % 8)} years`,
    weight: `${1 + (index % 10)}-${3 + (index % 18)} kg`,
    origin,
    identify: [
      `${breed} face and head profile`,
      `${coats[index % coats.length]} covering and coloration pattern`,
      `Body proportion and movement typical of ${breed}`
    ],
    bestFor,
    photo: breedPhoto(type, breed, index)
  };
}

const breeds = [
  ...DOG_BREEDS.map((breed, index) =>
    buildBreed({
      type: "Dog",
      breed,
      index,
      colors: DOG_COLORS,
      coats: DOG_COATS,
      origin: "Various",
      bestFor: "Homes that can provide structured exercise, training, and socialization."
    })
  ),
  ...CAT_BREEDS.map((breed, index) =>
    buildBreed({
      type: "Cat",
      breed,
      index,
      colors: CAT_COLORS,
      coats: CAT_COATS,
      origin: "Various",
      bestFor: "Owners looking for daily enrichment, play, and predictable routines."
    })
  ),
  ...BIRD_BREEDS.map((breed, index) =>
    buildBreed({
      type: "Bird",
      breed,
      index,
      colors: BIRD_COLORS,
      coats: BIRD_COATS,
      origin: "Various",
      bestFor: "Keepers who can provide social stimulation and species-appropriate aviary space."
    })
  ),
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

  items.forEach((item, index) => {
    const node = cardTemplate.content.cloneNode(true);
    const imageEl = node.querySelector(".breed-image");
    imageEl.src = item.photo;
    imageEl.alt = `${item.breed} (${item.type})`;
    imageEl.onerror = () => {
      imageEl.onerror = null;
      imageEl.src = svgFallbackDataUrl(item);
    };

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
