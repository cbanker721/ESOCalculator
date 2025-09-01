document.addEventListener('DOMContentLoaded', initUI);

const PATCH_VERSION = "U47"; // Easily update the game patch version here

function initUI() {
  // Set patch version in the title
  const patchVersionEl = document.getElementById('patch-version');
  if (patchVersionEl) {
    patchVersionEl.textContent = `(Patch ${PATCH_VERSION})`;
  }
  initOverrides();
  populatePresets();
  populateConfigDropdowns();
  initializeExportButton();
  populateTables();

  // Add global event listeners
  document.querySelectorAll('input[name="preset-radio"]').forEach(radio => {
    radio.addEventListener('change', (e) => applyPreset(e.target.value));
  });

  document.getElementById('raceSelect').addEventListener('change', (e) => handleConfigChange('racial', e.target.value));
  document.getElementById('mythicSelect').addEventListener('change', (e) => handleConfigChange('mythics', e.target.value));
  document.getElementById('mundusSelect').addEventListener('change', (e) => handleConfigChange('mundus', e.target.value));
  document.getElementById('mainSkillLineSelect').addEventListener('change', updateConfigPanelStyle);
  
  // Add event listeners for skill line selections
  ['mainSkillLineSelect', 'skillLine2Select', 'skillLine3Select'].forEach(id => {
    const select = document.getElementById(id);
    if (select) {
      select.addEventListener('change', updateSelectColor);
      select.addEventListener('change', updateClassSkillsBasedOnSelection);
    }
  });
  
  // Event listener for all inputs in the tables to trigger calculation
  document.querySelectorAll('#penetration-tbody input, #penetration-tbody select, #crit-damage-tbody input, #crit-damage-tbody select').forEach(el => {
      el.addEventListener('change', calculate);
  });
  
  // Auto-select the first preset on load
  const firstPresetKey = Object.keys(data.presets)[0];
  if (firstPresetKey) {
    const firstPresetRadio = document.getElementById(`preset-${firstPresetKey}`);
    if (firstPresetRadio) {
      firstPresetRadio.checked = true;
      applyPreset(firstPresetKey); // This will trigger all necessary calculations and UI updates
    }
  } else {
    // Fallback if no presets exist, run initial calculation and style update
    calculate();
    updateConfigPanelStyle();
  }
}

function initOverrides() {
  CalculatorOverrideManager.applyInputOverrides();
}

function populatePresets() {
  const container = document.getElementById('presets-container');
  if (!container) return;

  Object.entries(data.presets).forEach(([key, preset]) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'preset-item';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'preset-radio';
    radio.id = `preset-${key}`;
    radio.value = key;

    const label = document.createElement('label');
    label.htmlFor = radio.id;
    label.textContent = preset.name;

    itemDiv.appendChild(radio);
    itemDiv.appendChild(label);
    container.appendChild(itemDiv);
  });
}

function populateConfigDropdowns() {
  // Helper to populate a select element
  const populateSelect = (elementId, options) => {
    const select = document.getElementById(elementId);
    if (!select) return;
    options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      select.appendChild(opt);
    });
  };

  // Populate Races
  const raceSelect = document.getElementById("raceSelect");
  Object.entries(data.races)
    .map(([key, value]) => ({ key, name: value.name }))
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(race => {
      const opt = document.createElement("option");
      opt.value = race.key;
      opt.textContent = race.name;
      raceSelect.appendChild(opt);
    });

  // Populate Mundus
  const mundusSelect = document.getElementById("mundusSelect");
  Object.keys(data.mundusData).sort().forEach(mundusKey => {
    const opt = document.createElement("option");
    opt.value = mundusKey;
    opt.textContent = data.mundusData[mundusKey].name;
    mundusSelect.appendChild(opt);
  });

  // Populate Skill Lines
  const mythicSelect = document.getElementById("mythicSelect");
  Object.keys(mythicsData).forEach(mythicKey => {
    const opt = document.createElement("option");
    opt.value = mythicKey;
    opt.textContent = mythicsData[mythicKey].name;
    mythicSelect.appendChild(opt);
  });

  // Populate Skill Lines
  const skillLineSelects = ["mainSkillLineSelect", "skillLine2Select", "skillLine3Select"];
  const skillLineOptions = Object.entries(data.skillLines)
    .filter(([, value]) => value.type === 'class') // Only include class skill lines
    .map(([key, value]) => {
      const classKey = value.class;
      const classData = data.classes[classKey];
      return {
        key: key,
        name: value.name,
        className: classData.name,
        classColor: classData.color
      };
    })
    .sort((a, b) => a.className.localeCompare(b.className) || a.name.localeCompare(b.name));

  skillLineSelects.forEach(selectId => {
    const select = document.getElementById(selectId);
    if (select) {
      skillLineOptions.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option.key;
        opt.textContent = `[${option.className}] ${option.name}`;
        opt.style.color = option.classColor;
        select.appendChild(opt);
      });
    }
  });
}

function applyPreset(presetKey) {
  const preset = data.presets[presetKey];
  if (!preset) return;

  // Helper to set value and dispatch change event
  const setAndDispatch = (elementId, value) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.value = value;
      element.dispatchEvent(new Event('change'));
    }
  };

  setAndDispatch('raceSelect', preset.race);
  setAndDispatch('mundusSelect', preset.mundus);
  setAndDispatch('mythicSelect', preset.mythic);
  setAndDispatch('mainSkillLineSelect', preset.mainSkillLine);
  setAndDispatch('skillLine2Select', preset.skillLine2);
  setAndDispatch('skillLine3Select', preset.skillLine3);
}

function handleConfigChange(category, selectedKey) {
  if (category === 'racial') {
    // This category is a proxy for 'racialPassives'. The dropdown controls which passives are active.
    // Uncheck all racial passives first.
    document.querySelectorAll(`input[data-category='${RenderCategoryEnum.RACIAL_PASSIVES}']`).forEach(input => {
      if (input.checked) {
        input.checked = false;
      }
    });

    // Check the passive(s) for the selected race.
    if (selectedKey && data.races[selectedKey] && data.races[selectedKey].passives) {
      data.races[selectedKey].passives.forEach(passiveKey => {
        const targetInput = document.querySelector(`input[data-key='${passiveKey}'][data-category='${RenderCategoryEnum.RACIAL_PASSIVES}']`);
        if (targetInput) {
          targetInput.checked = true;
        }
      });
    }
    
    // Since we changed checks programmatically, we must manually trigger a recalculation.
    calculate();
    return;
  }

  // Uncheck all items in this category first
  document.querySelectorAll(`input[data-category='${category}']`).forEach(input => {
    if (input.checked) {
      input.checked = false;
      // The change event doesn't fire on programmatic "false", so we must call calculate manually.
      calculate(); 
    }
  });

  if (selectedKey) {
    const targetInput = document.querySelector(`input[data-key='${selectedKey}'][data-category='${category}']`);
    if (targetInput && !targetInput.checked) {
      targetInput.checked = true;
      // The change event doesn't fire on programmatic "true", so we dispatch it to trigger calculate.
      targetInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
}

function populateTables() {
  const penTbody = document.getElementById('penetration-tbody');
  const critTbody = document.getElementById('crit-damage-tbody');

  // Clear existing rows before populating
  penTbody.innerHTML = '';
  critTbody.innerHTML = '';

  const categoryRenderOrder = [
    RenderCategoryEnum.UNIVERSAL, RenderCategoryEnum.MODIFIERS, RenderCategoryEnum.SUPPORT_SETS, RenderCategoryEnum.ARMOUR_PASSIVES, RenderCategoryEnum.MYTHICS,
    RenderCategoryEnum.CLASS_PASSIVES, RenderCategoryEnum.RACIAL_PASSIVES, RenderCategoryEnum.PERSONAL_SETS,
    RenderCategoryEnum.CHAMPION_POINTS, RenderCategoryEnum.CLASS_SKILLS, RenderCategoryEnum.WEAPON_PASSIVES, RenderCategoryEnum.MUNDUS_STONES
  ]

  categoryRenderOrder.forEach(categoryKey => {
    const category = categoryRenderConfig[categoryKey];
    let items = category.dataStore;
    
    if (!items) return;

    penItems = {};
    critItems = {};
    for (const [itemKey, item] of Object.entries(items)) {
      if (item.hide !== undefined && item.hide === true) {
        continue;
      }
      uiFriendlyItem = { ...item, ...calculatorUiConfig[itemKey] };
      if (item.pen !== undefined && item.pen > 0) {
        penItems[itemKey] = uiFriendlyItem;
      } 
      if (item.critDamage !== undefined && item.critDamage > 0) {
        critItems[itemKey] = uiFriendlyItem;
      }
    }
    
    // Populate penetration table
    const penItemCollection = Object.entries(penItems);
    penItemCollection.forEach(([key, item], index) => {
      const isFirst = index === 0;
      createRow(penTbody, item, 'pen', categoryKey, key, category.limit, {
        isFirstInCategory: isFirst,
        categoryName: category.name,
        categoryRowCount: penItemCollection.length
      });
    });

    // Populate crit damage table
    const critItemsCollection = Object.entries(critItems);
    critItemsCollection.forEach(([key, item], index) => {
      const isFirst = index === 0;
      createRow(critTbody, item, 'critDamage', categoryKey, key, category.limit, {
        isFirstInCategory: isFirst,
        categoryName: category.name,
        categoryRowCount: critItemsCollection.length
      });
    });
  });
}

function createRow(tbody, item, statType, category, key, limit, categoryInfo) {
  const row = tbody.insertRow();

  if (categoryInfo && categoryInfo.isFirstInCategory) {
    const categoryCell = row.insertCell();
    categoryCell.textContent = categoryInfo.categoryName;
    categoryCell.rowSpan = categoryInfo.categoryRowCount;
    categoryCell.className = 'category-cell';
  }

  const nameCell = row.insertCell();
  const valueCell = row.insertCell();
  const inputCell = row.insertCell();
  let inputElement;

  // Set name text, with a hyperlink if available
  if (item.hyperlink) {
    const link = document.createElement('a');
    link.href = item.hyperlink;
    link.textContent = item.name;
    link.target = '_blank'; // Open in new tab
    link.style.color = 'inherit'; // Inherit color from parent cell
    nameCell.appendChild(link);
  } else {
    nameCell.appendChild(document.createTextNode(item.name));
  }

  // Create tooltip container only if a tooltip is explicitly provided.
  if (item.tooltip) {
    const tooltipContainer = document.createElement('span');
    tooltipContainer.className = 'tooltip-container';
    tooltipContainer.textContent = '?';
    
    const tooltipTextElement = document.createElement('span');
    tooltipTextElement.className = 'tooltip-text';
    // The tooltip text is now only what is in the tooltip attribute.
    tooltipTextElement.textContent = item.tooltip;
    
    tooltipContainer.appendChild(tooltipTextElement);
    nameCell.appendChild(tooltipContainer);
  }

  if (item.range !== undefined) { // There is a range of values, use drop down
    inputElement = document.createElement('select');
    item.range.forEach(optValue => {
      const option = document.createElement('option');
      option.value = optValue;
      option.textContent = optValue;
      inputElement.appendChild(option);
    });
    inputElement.value = CalculatorOverrideManager.computeDefaultStateWithOverride(key) || 0;

    const totalValueSpan = document.createElement('span');
    valueCell.appendChild(totalValueSpan);

    const updateValue = () => {
      const selectedValue = inputElement.value;
      const baseValue = item[statType];
      const total = selectedValue * baseValue;
      totalValueSpan.textContent = total;
    };

    inputElement.addEventListener('change', updateValue);
    updateValue(); // Initial call to set default value

  } else { // Default to checkbox
    valueCell.textContent = item[statType];
    inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    inputElement.checked = CalculatorOverrideManager.computeDefaultStateWithOverride(key) === true;
    if (limit < Infinity) {
      inputElement.addEventListener('change', () => enforceLimit(category, limit));
    }
  }

  inputElement.dataset.value = item[statType];
  inputElement.dataset.category = category;
  inputElement.dataset.key = key;

  if (item.triggers) {
    inputElement.addEventListener('change', (e) => {
      if (e.target.checked) {
        item.triggers.forEach(trigger => {
          const targetElement = document.querySelector(`input[data-key='${trigger.key}']`);
          if (targetElement && trigger.action === 'check' && !targetElement.checked) {
            targetElement.checked = true;
            targetElement.dispatchEvent(new Event('change', { bubbles: true }));
          }
        });
      }
    });
  }

  inputCell.appendChild(inputElement);

  // Color code class skills and passives, targeting the correct element in the value cell
  if (item.class) {
    const classData = data.classes[item.class];
    if (classData && classData.color) {
      nameCell.style.color = classData.color;
      const valueTarget = valueCell.querySelector('span') || valueCell;
      valueTarget.style.color = classData.color;
    }
  }
}

function enforceLimit(category, maxAllowed) {
  const checkedBoxes = document.querySelectorAll(`input[data-category='${category}']:checked`);
  if (checkedBoxes.length > maxAllowed) {
    // Uncheck the first one in the DOM that was checked to enforce the limit.
    checkedBoxes[0].checked = false;
  }
}

function calculate() {
  let penTotal = 0;
  let critTotal = 50; // Base critical damage is 50%

  // 2. Calculate from checkboxes in tables
  document.querySelectorAll('#penetration-tbody input:checked, #penetration-tbody select').forEach(el => {
    if (el.tagName.toLowerCase() === 'select') {
        penTotal += (parseInt(el.value, 10) || 0) * parseInt(el.dataset.value, 10);
    } else { // checkbox
        penTotal += parseInt(el.dataset.value, 10);
    }
  });

  document.querySelectorAll('#crit-damage-tbody input:checked, #crit-damage-tbody select').forEach(el => {
    if (el.tagName.toLowerCase() === 'select') {
        // Dropdown value is pieces/stacks * value per piece/stack
        critTotal += (parseInt(el.value, 10) || 0) * parseInt(el.dataset.value, 10);
    } else { // Checkbox is a flat value
        critTotal += parseInt(el.dataset.value, 10);
    }
  });

  // 3. Update UI
  const penTarget = 18200;
  const critTarget = 125;
  const penEl = document.getElementById('pen-total');
  const critEl = document.getElementById('crit-total');

  penEl.textContent = penTotal;
  penEl.style.color = penTotal >= penTarget ? 'lightgreen' : '#ffcc00';

  critEl.textContent = `${critTotal}%`;
  critEl.style.color = critTotal >= critTarget ? 'lightgreen' : '#ffcc00';
}

/**
 * Gathers the current state of all calculator options from the DOM.
 * It iterates through all relevant input elements (checkboxes, dropdowns)
 * and builds an object mapping their Enum key (from the element's data-key) to their current value.
 *
 * @returns {object} The current state of the calculator.
 */
function getCurrentCalculatorState() {
    const currentState = {};
    // This selector targets all relevant inputs within the main option containers.
    const inputs = document.querySelectorAll('#penetration-tbody [data-key], #crit-damage-tbody [data-key]');

    inputs.forEach(input => {
        const key = input.dataset.key;
        if (!key) return;

        if (categoryRenderConfig[input.dataset.category].export === false) {
          return; // Skip non-exportable categories
        }

        let value;
        if (input.type === 'checkbox') {
            value = input.checked;
        } else if (input.tagName.toLowerCase() === 'select') {
            value = parseInt(input.value, 10);
        } else {
            value = input.value;
        }

        // Avoid adding the same key twice if it appears in both tables
        if (currentState[key] === undefined) {
            currentState[key] = value;
        }
    });

    return currentState;
}

/**
 * Initializes the event listener for the "Export Overrides" button.
 * Assumes an element with id="export-button" exists in the HTML.
 */
function initializeExportButton() {
    const exportButton = document.getElementById('export-button');
    if (!exportButton) return;

    exportButton.addEventListener('click', () => {
        const currentState = getCurrentCalculatorState();
        const overrides = CalculatorOverrideManager.computeExportOverride(currentState);
        const serializedOverrides = btoa(JSON.stringify(overrides));
        const url = new URL(window.location.href);
        url.searchParams.set('modifiers', serializedOverrides);
        navigator.clipboard.writeText(url.toString())
            .then(() => alert('Export URL copied to clipboard!'))
            .catch(err => console.error('Failed to copy URL:', err));
    });
}

function updateClassSkillsBasedOnSelection() {
  const selectedSkillLines = new Set();
  ['mainSkillLineSelect', 'skillLine2Select', 'skillLine3Select'].forEach(id => {
    const select = document.getElementById(id);
    if (select && select.value) {
      selectedSkillLines.add(select.value);
    }
  });

  const classSkillInputs = document.querySelectorAll(`input[data-category='${RenderCategoryEnum.CLASS_SKILLS}'], input[data-category='${RenderCategoryEnum.CLASS_PASSIVES}'], select[data-category='${RenderCategoryEnum.CLASS_SKILLS}'], select[data-category='${RenderCategoryEnum.CLASS_PASSIVES}']`);

  classSkillInputs.forEach(input => {
    const key = input.dataset.key;
    const skillData = skillsData[key];
    const defaultState = CalculatorOverrideManager.computeDefaultStateWithOverride(key);
    if (!skillData || !skillData.skillLine) return;

    const isSelected = selectedSkillLines.has(skillData.skillLine);
    let valueChanged = false;

    if (input.tagName.toLowerCase() === 'select') {
      const newValue = isSelected ? defaultState : 0;
      if (input.value != newValue) {
        input.value = newValue;
        valueChanged = true;
      }
    } else { // checkbox
      const newCheckedState = isSelected ? (defaultState === true) : false;
      if (input.checked !== newCheckedState) {
        input.checked = newCheckedState;
      }
    }

    if (valueChanged) {
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  calculate();
}

function updateConfigPanelStyle() {
  const configPanel = document.getElementById('configuration-section');
  const mainSkillLineSelect = document.getElementById('mainSkillLineSelect');
  const selectedSkillLineKey = mainSkillLineSelect.value;

  if (selectedSkillLineKey && data.skillLines[selectedSkillLineKey]) {
    const skillLine = data.skillLines[selectedSkillLineKey];
    // Only apply color for class skill lines
    if (skillLine.type === 'class') {
      const classKey = skillLine.class;
      const classData = data.classes[classKey];
      if (classData && classData.color) {
        configPanel.style.borderColor = classData.color;
        return; // Exit after setting the color
      }
    }
  }

  // If no valid class skill line is selected, revert to the default color by clearing the inline style
  configPanel.style.borderColor = ''; 
}

function updateSelectColor(event) {
  const selectElement = event.target;
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  
  if (selectedOption && selectedOption.value) {
    // If a valid skill line is selected, use its color
    selectElement.style.color = selectedOption.style.color;
  } else {
    // If "None" is selected, revert to the default color by removing the inline style
    selectElement.style.color = ''; 
  }
}
