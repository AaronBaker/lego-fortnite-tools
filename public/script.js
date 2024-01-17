




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
      checkbox.dataset.group = name;  // Assign the data-group attribute

  
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



// Function to toggle checkboxes within a group
function toggleGroupCheckboxes(group, isChecked) {
  const checkboxes = document.querySelectorAll(`input[type="checkbox"][data-group="${group}"]`);
  checkboxes.forEach(checkbox => {
    checkbox.checked = isChecked;
  });
  calculateResources();
}

// Add event listeners to h3 checkboxes
document.querySelectorAll('label input[type="checkbox"]').forEach(h3Checkbox => {
  h3Checkbox.addEventListener('change', (e) => {
    const group = e.target.dataset.group;
    const isChecked = e.target.checked;
    toggleGroupCheckboxes(group, isChecked);
  });
});

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