

// Updated resource categories
const updatedResourceTypes = {
  'Common': [
      'Cord', 'Drawstring', 'Granite Slab', 'Plank', 
      'Silk Fabric', 'Silk Thread', 'Wooden Rod', 'Wool Fabric', 
      'Wool Thread', 'Feather', 'Fertilizer', 'Silk', 
      'Wolf Claw', 'Wool', 'Wood', 'Granite', 
      'Slurp Mushroom', 'Soil', 'Vines', 'Wheat'
  ],
  'Uncommon': [
      'Cut Amber', 'Flour', 'Knotroot Rod', 'Marble Slab', 
      'Blast Powder', 'Bones', 'Brute Scale', 'Shell', 
      'Knotroot', 'Marble', 'Rough Amber'
  ],
  'Rare': [
      'Copper Bar', 'Cut Ruby', 'Flexwood Rod', 'Obsidian Slab', 
      'Blast Core', 'Sand Brute Scale', 'Sand Shell', 'Brightcore', 
      'Copper', 'Flexwood', 'Obsidian', 'Rough Ruby','Sand Claw'
  ],
  'Epic': [
      'Cut Sapphire', 'Frostpine Rod', 'Heavy Wool Thread', 'Iron Bar', 
      'Malachite Slab', 'Arctic Claw', 'Cursed Bones', 'Frost Brute Scale', 
      'Frost Shell', 'Heavy Wool', 'Frostpine', 'Iron', 
      'Malachite', 'Rough Sapphire'
  ]
};

const grasslandsVillage = [
  {
    "name": "Village Square",
    "materials": [
      { "item": "Wood", "quantity": 10 },
      { "item": "Granite", "quantity": 10 }
    ]
  },
  {
    "name": "Grasslands Level 2",
    "materials": [
      { "item": "Wood", "quantity": 15 },
      { "item": "Granite", "quantity": 15 }
    ]
  },
  {
    "name": "Grasslands Level 3",
    "materials": [
      { "item": "Plank", "quantity": 10 },
      { "item": "Granite", "quantity": 20 }
    ]
  },
  {
    "name": "Grasslands Level 4",
    "materials": [
      { "item": "Knotroot", "quantity": 10 },
      { "item": "Plank", "quantity": 15 },
      { "item": "Granite", "quantity": 25 }
    ]
  },
  {
    "name": "Grasslands Level 5",
    "materials": [
      { "item": "Knotroot", "quantity": 15 },
      { "item": "Plank", "quantity": 20 },
      { "item": "Marble", "quantity": 15 }
    ]
  },
  {
    "name": "Grasslands Level 6",
    "materials": [
      { "item": "Knotroot", "quantity": 20 },
      { "item": "Granite Slab", "quantity": 30 }
    ]
  },
  {
    "name": "Grasslands Level 7",
    "materials": [
      { "item": "Knotroot Rod", "quantity": 20 },
      { "item": "Marble Slab", "quantity": 20 }
    ]
  },
  {
    "name": "Grasslands Level 8",
    "materials": [
      { "item": "Marble Slab", "quantity": 30 },
      { "item": "Rough Amber", "quantity": 10 }
    ]
  },
  {
    "name": "Grasslands Level 9",
    "materials": [
      { "item": "Flexwood", "quantity": 15 },
      { "item": "Obsidian", "quantity": 15 },
      { "item": "Cut Amber", "quantity": 10 }
    ]
  },
  {
    "name": "Grasslands Level 10",
    "materials": [
      { "item": "Flexwood Rod", "quantity": 15 },
      { "item": "Obsidian Slab", "quantity": 30 },
      { "item": "Cut Amber", "quantity": 20 }
    ]
  }
];



const dryvalleyVillage = [
  {
    "name": "Dry Village Square",
    "materials": [
      { "item": "Wood", "quantity": 10 },
      { "item": "Granite", "quantity": 10 }
    ]
  },
  {
    "name": "Dry Valley Level 2",
    "materials": [
      { "item": "Wood", "quantity": 20 },
      { "item": "Granite", "quantity": 25 }
    ]
  },
  {
    "name": "Dry Valley Level 3",
    "materials": [
      { "item": "Knotroot", "quantity": 10 },
      { "item": "Plank", "quantity": 10 },
      { "item": "Marble", "quantity": 15 }
    ]
  },
  {
    "name": "Dry Valley Level 4",
    "materials": [
      { "item": "Knotroot Rod", "quantity": 15 },
      { "item": "Granite Slab", "quantity": 30 }
    ]
  },
  {
    "name": "Dry Valley Level 5",
    "materials": [
      { "item": "Knotroot Rod", "quantity": 25 },
      { "item": "Marble Slab", "quantity": 20 }
    ]
  },
  {
    "name": "Dry Valley Level 6",
    "materials": [
      { "item": "Marble Slab", "quantity": 25 },
      { "item": "Rough Amber", "quantity": 15 }
    ]
  },
  {
    "name": "Dry Valley Level 7",
    "materials": [
      { "item": "Flexwood", "quantity": 20 },
      { "item": "Marble Slab", "quantity": 30 },
      { "item": "Cut Amber", "quantity": 15 }
    ]
  },
  {
    "name": "Dry Valley Level 8",
    "materials": [
      { "item": "Flexwood Rod", "quantity": 30 },
      { "item": "Obsidian", "quantity": 20 },
      { "item": "Rough Ruby", "quantity": 10 }
    ]
  },
  {
    "name": "Dry Valley Level 9",
    "materials": [
      { "item": "Obsidian Slab", "quantity": 20 },
      { "item": "Copper Bar", "quantity": 10 },
      { "item": "Cut Ruby", "quantity": 15 }
    ]
  },
  {
    "name": "Dry Valley Level 10",
    "materials": [
      { "item": "Obsidian Slab", "quantity": 30 },
      { "item": "Copper Bar", "quantity": 20 },
      { "item": "Cut Ruby", "quantity": 30 }
    ]
  }
];


const stations = [
  {
    "name": "Basic Crafting Bench",
    "materials": [
      { "item": "Wood", "quantity": 3 },
      { "item": "Granite", "quantity": 5 }
    ]
  },
  {
    "name": "Uncommon Craft Bench",
    "materials": [
      { "item": "Plank", "quantity": 8 },
      { "item": "Shell", "quantity": 3 }
    ]
  },
  {
    "name": "Rare Craft Bench",
    "materials": [
      { "item": "Knotroot Rod", "quantity": 12 },
      { "item": "Marble Slab", "quantity": 15 },
      { "item": "Sand Claw", "quantity": 6 },
      { "item": "Sand Shell", "quantity": 3 }
    ]
  },
  {
    "name": "Epic Craft Bench",
    "materials": [
      { "item": "Copper Bar", "quantity": 15 },
      { "item": "Obsidian Slab", "quantity": 25 },
      { "item": "Brute Scale", "quantity": 1 }
    ]
  },
  {
    "name": "Essence Table",
    "materials": [
      { "item": "Flexwood", "quantity": 20 },
      { "item": "Cut Amber", "quantity": 6 }
    ]
  },
  {
    "name": "Gem Cutter",
    "materials": [
      { "item": "Marble Slab", "quantity": 20 },
      { "item": "Rough Amber", "quantity": 5 },
      { "item": "Sand Claw", "quantity": 5 },
      { "item": "Sand Shell", "quantity": 3 }
    ]
  },
  {
    "name": "Grain Mill",
    "materials": [
      { "item": "Knotroot Rod", "quantity": 20 },
      { "item": "Granite Slab", "quantity": 20 },
      { "item": "Shell", "quantity": 3 }
    ]
  },
  {
    "name": "Grill",
    "materials": [
      { "item": "Granite", "quantity": 30 }
    ]
  },
  {
    "name": "Juicer",
    "materials": [
      { "item": "Plank", "quantity": 8 },
      { "item": "Marble Slab", "quantity": 8 },
      { "item": "Knotroot Rod", "quantity": 5 }
    ]
  },
  {
    "name": "Loom",
    "materials": [
      { "item": "Flexwood", "quantity": 9 },
      { "item": "Flexwood Rod", "quantity": 8 },
      { "item": "Sand Claw", "quantity": 6 }
    ]
  },
  {
    "name": "Lumber Mill",
    "materials": [
      { "item": "Wood", "quantity": 8 },
      { "item": "Granite", "quantity": 15 }
    ]
  },
  {
    "name": "Metal Smelter",
    "materials": [
      { "item": "Brightcore", "quantity": 15 },
      { "item": "Obsidian Slab", "quantity": 35 },
      { "item": "Blast Core", "quantity": 3 }
    ]
  },
  {
    "name": "Oven",
    "materials": [
      { "item": "Brightcore", "quantity": 8 },
      { "item": "Copper Bar", "quantity": 15 },
      { "item": "Obsidian Slab", "quantity": 35 }
    ]
  },
  {
    "name": "Spinning Wheel",
    "materials": [
      { "item": "Plank", "quantity": 8 },
      { "item": "Wooden Rod", "quantity": 5 },
      { "item": "Wood", "quantity": 5 },
      { "item": "Wolf Claw", "quantity": 5 }
    ]
  },
  {
    "name": "Stone Breaker",
    "materials": [
      { "item": "Knotroot", "quantity": 20 },
      { "item": "Marble", "quantity": 35 }
    ]
  }
];

const frostlandsVillage = [
  {
    "name": "Frost Village Square",
    "materials": [
      { "item": "Wood", "quantity": 10 },
      { "item": "Granite", "quantity": 10 }
    ]
  },
  {
    "name": "Frostlands Level 2",
    "materials": [
      { "item": "Wood", "quantity": 25 },
      { "item": "Granite", "quantity": 30 }
    ]
  },
  {
    "name": "Frostlands Level 3",
    "materials": [
      { "item": "Knotroot", "quantity": 15 },
      { "item": "Plank", "quantity": 15 },
      { "item": "Marble", "quantity": 20 }
    ]
  },
  {
    "name": "Frostlands Level 4",
    "materials": [
      { "item": "Knotroot Rod", "quantity": 20 },
      { "item": "Marble Slab", "quantity": 25 }
    ]
  },
  {
    "name": "Frostlands Level 5",
    "materials": [
      { "item": "Flexwood Rod", "quantity": 25 },
      { "item": "Marble Slab", "quantity": 30 }
    ]
  },
  {
    "name": "Frostlands Level 6",
    "materials": [
      { "item": "Obsidian Slab", "quantity": 20 },
      { "item": "Copper Bar", "quantity": 10 }
    ]
  },
  {
    "name": "Frostlands Level 7",
    "materials": [
      { "item": "Frostpine", "quantity": 20 },
      { "item": "Copper Bar", "quantity": 15 }
    ]
  },
  {
    "name": "Frostlands Level 8",
    "materials": [
      { "item": "Frostpine Rod", "quantity": 25 },
      { "item": "Malachite", "quantity": 20 },
      { "item": "Iron Bar", "quantity": 15 }
    ]
  },
  {
    "name": "Frostlands Level 9",
    "materials": [
      { "item": "Malachite Slab", "quantity": 25 },
      { "item": "Iron Bar", "quantity": 20 },
      { "item": "Rough Sapphire", "quantity": 20 }
    ]
  },
  {
    "name": "Frostlands Level 10",
    "materials": [
      { "item": "Malachite Slab", "quantity": 30 },
      { "item": "Iron Bar", "quantity": 25 },
      { "item": "Cut Sapphire", "quantity": 30 }
    ]
  }
];



// Simplified emoji assignments with a pickaxe for metal resources
const resourceEmojis = {
  'Wood': '🪵', // For all wood-related items
  'Stone': '🪨', // For all stone-related items
  'Fabric': '🧵', // For all fabric and thread items
  'Metal': '⛏️', // For all metal-related items, now using a pickaxe
  'Nature': '🌿', // For natural items like soil, plants, mushrooms
  'Animal': '🐾', // For animal-related items
  'Gem': '💎', // For gems and precious stones
  'Misc': '🔮'  // For miscellaneous or unclassified items
};

const checkboxSections = {
  stations,
  grasslandsVillage,
  dryvalleyVillage,
  frostlandsVillage
};

// Function to create checkboxes for each station
function createStationCheckboxes() {
  
  Object.entries(checkboxSections).forEach(([name, list]) => {
    // Determine the appropriate container based on the name
    //const containerId = name === 'stations' ? 'stationsContainer' : 'grasslandsVillageContainer';

    const containerId = name + "Container";

    const container = document.getElementById(containerId);

    list.forEach(station => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = station.name;
      checkbox.name = station.name;
      checkbox.value = station.name;
  
      checkbox.addEventListener('change', () => {
        calculateResources();
      });
  
      const label = document.createElement('label');
      label.htmlFor = station.name;
      label.appendChild(document.createTextNode(station.name));
  
      container.appendChild(checkbox);
      container.appendChild(label);
      container.appendChild(document.createElement('br'));
    });

  });
}


createStationCheckboxes();

// Modified calculateResources function
function calculateResources() {
  const totalResources = {};

  Object.entries(checkboxSections).forEach(([name, list]) =>{

    list.forEach(station => {
      const stationChecked = document.getElementById(station.name) && document.getElementById(station.name).checked;
      if (stationChecked) {
        station.materials.forEach(material => {
          totalResources[material.item] = (totalResources[material.item] || 0) + material.quantity;
        });
      }
    });

  });


  displayResources(totalResources);
}



// Function to determine the appropriate emoji for each resource
function getEmojiForResource(name) {
  if (['Wooden Rod', 'Plank', 'Wood', 'Flexwood', 'Flexwood Rod'].includes(name)) {
    return resourceEmojis['Wood'];
  }
  if (['Granite Slab', 'Granite', 'Marble Slab', 'Marble', 'Obsidian Slab', 'Obsidian'].includes(name)) {
    return resourceEmojis['Stone'];
  }
  if (['Silk Fabric', 'Silk Thread', 'Wool Fabric', 'Wool Thread', 'Heavy Wool Thread', 'Heavy Wool'].includes(name)) {
    return resourceEmojis['Fabric'];
  }
  if (['Copper Bar', 'Iron Bar', 'Malachite Slab', 'Malachite', 'Copper', 'Iron'].includes(name)) {
    return resourceEmojis['Metal'];
  }
  if (['Fertilizer', 'Slurp Mushroom', 'Soil', 'Vines', 'Wheat', 'Knotroot', 'Knotroot Rod'].includes(name)) {
    return resourceEmojis['Nature'];
  }
  if (['Feather', 'Wolf Claw', 'Bones', 'Brute Scale', 'Arctic Claw', 'Cursed Bones', 'Frost Brute Scale'].includes(name)) {
    return resourceEmojis['Animal'];
  }
  if (['Cut Amber', 'Rough Amber', 'Cut Ruby', 'Rough Ruby', 'Cut Sapphire', 'Rough Sapphire'].includes(name)) {
    return resourceEmojis['Gem'];
  }
  // Default to 'Misc' for any unclassified items
  return resourceEmojis['Misc'];
}

// Updated displayResources function with simplified emojis
function displayResources(resources) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  for (const [category, resourceNames] of Object.entries(updatedResourceTypes)) {
    const columnDiv = document.createElement('div');
    columnDiv.className = 'col-md-3';

    const columnContent = document.createElement('div');
    columnContent.className = "columnContent";

    columnDiv.appendChild(columnContent);

    
    columnContent.innerHTML = `<h3>${category}</h3>`;

    resourceNames.forEach(name => {
      const quantity = resources[name] || 0;
      if (quantity > 0) {
        const emoji = getEmojiForResource(name);
        columnContent.innerHTML += `<p>${emoji} ${name}: ${quantity}</p>`;
      }
    });

    resultDiv.appendChild(columnDiv);
  }
}