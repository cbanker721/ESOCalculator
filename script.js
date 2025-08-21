document.addEventListener('DOMContentLoaded', initUI);

const PATCH_VERSION = "U47"; // Easily update the game patch version here

const data = {
  "races": {
    "ARGONIAN": { "name": "Argonian", "passives": [] },
    "BRETON": { "name": "Breton", "passives": [] },
    "DARK_ELF": { "name": "Dark Elf", "passives": [] },
    "HIGH_ELF": { "name": "High Elf", "passives": [] },
    "IMPERIAL": { "name": "Imperial", "passives": [] },
    "KHAJIIT": { "name": "Khajiit", "passives": ["FELINE_AMBUSH"] },
    "NORD": { "name": "Nord", "passives": [] },
    "ORC": { "name": "Orc", "passives": [] },
    "REDGUARD": { "name": "Redguard", "passives": [] },
    "WOOD_ELF": { "name": "Wood Elf", "passives": ["HUNTERS_EYE"] },
  },
  "sets": {
    "Spriggan": { "name": "Spriggan's Thorns", "pen": 3450 },
    "ShatteredFate": { "name": "Shattered Fate", "pen": 7377 },
    "Advancing Yokeda": { "name": "Advancing Yokeda", "critDamage": 0 },
    "SulXan": { "name": "Sul-Xan's Torment", "critDamage": 12 },
    "MorasScribeThesis": { "name": "Mora's Scribe Thesis", "critDamage": 12 },
    "ArmorSetPenPassive": { "name": "Armor-set Passive", "pen": 1487, "type": "dropdown", "options": [0, 1, 2, 3], "default": 0 },
    "Arena1Piece": { "name": "Arena 1-piece", "pen": 1190 }
  },
  "mythics": {
    "HarpoonerKilt": { "name": "Harpooner's Kilt", "critDamage": 10 },
    "VelothiUrMage": { "name": "Velothi Amulet", "pen": 1650, "triggers": [{ "key": "MinorForce", "action": "check" }] }
  },
  "mundus": {
    "TheApprentice": { "name": "The Apprentice", "pen": 0, "critDamage": 0 },
    "TheAtronach": { "name": "The Atronach", "pen": 0, "critDamage": 0 },
    "TheLady": { "name": "The Lady", "pen": 0, "critDamage": 0 },
    "TheLord": { "name": "The Lord", "pen": 0, "critDamage": 0 },
    "TheLover": { "name": "The Lover", "pen": 2754 },
    "TheMage": { "name": "The Mage", "pen": 0, "critDamage": 0 },
    "TheRitual": { "name": "The Ritual", "pen": 0, "critDamage": 0 },
    "TheSerpent": { "name": "The Serpent", "pen": 0, "critDamage": 0 },
    "TheShadow": { "name": "The Shadow", "critDamage": 18 },
    "TheSteed": { "name": "The Steed", "pen": 0, "critDamage": 0 },
    "TheThief": { "name": "The Thief", "pen": 0, "critDamage": 0 },
    "TheTower": { "name": "The Tower", "pen": 0, "critDamage": 0 },
    "TheWarrior": { "name": "The Warrior", "pen": 0, "critDamage": 0 }
  },
  "supportSets": {
    "ElementalCatalyst": { "name": "Elemental Catalyst", "critDamage": 15 },
    "LucentEchoes": { "name": "Lucent Echoes", "critDamage": 11, "default": "on" },
    "Alkosh": { "name": "Roar of Alkosh", "pen": 6000 },
    "CrimsonOath": { "name": "Crimson Oath's Rive", "pen": 3541 },
    "Tremorscale": { "name": "Tremorscale", "pen": 2640 },
  },
  "racialPassives": {
    "FELINE_AMBUSH": { "name": "Feline Ambush", "critDamage": 12, "race": "KHAJIIT" },
    "HUNTERS_EYE": { "name": "Hunter's Eye", "pen": 950, "race": "WOOD_ELF" }
  },
  "presets": {
    "heraldAssassinationArdentFlame": {
      "name": "Herald / Assassination / Ardent Flame",
      "race": "DARK_ELF",
      "mundus": "TheThief",
      "mythic": "VelothiUrMage",
      "mainSkillLine": "HERALD_OF_THE_TOME",
      "skillLine2": "ASSASSINATION",
      "skillLine3": "ARDENT_FLAME"
    },
    "heraldAssassinationAedricSpear": {
      "name": "Herald / Assassination / Aedric Spear",
      "race": "DARK_ELF",
      "mundus": "TheThief",
      "mythic": "VelothiUrMage",
      "mainSkillLine": "HERALD_OF_THE_TOME",
      "skillLine2": "ASSASSINATION",
      "skillLine3": "AEDRIC_SPEAR"
    },
    "heraldAssassinationGravelord": {
      "name": "Herald / Assassination / Gravelord",
      "race": "DARK_ELF",
      "mundus": "TheThief",
      "mythic": "VelothiUrMage",
      "mainSkillLine": "HERALD_OF_THE_TOME",
      "skillLine2": "ASSASSINATION",
      "skillLine3": "GRAVE_LORD"
    },
    "custom": {
      "name": "Custom",
      "race": "DARK_ELF",
      "mundus": "TheThief",
      "mythic": "",
      "mainSkillLine": "",
      "skillLine2": "",
      "skillLine3": ""
    }
  },
  "classes": {
    "ARCANIST": { "name": "Arcanist", "skillLines": ["HERALD_OF_THE_TOME", "SOLDIER_OF_APOCRYPHA", "CURATIVE_RUNEFORMS"], "color": "lightgreen", "sourceUrl": "https://eso-hub.com/en/skills/arcanist" },
    "DRAGONKNIGHT": { "name": "Dragonknight", "skillLines": ["ARDENT_FLAME", "DRACONIC_POWER", "EARTHEN_HEART"], "color": "orange", "sourceUrl": "https://eso-hub.com/en/skills/dragonknight" },
    "NECROMANCER": { "name": "Necromancer", "skillLines": ["GRAVE_LORD", "BONE_TYRANT", "LIVING_DEATH"], "color": "violet", "sourceUrl": "https://eso-hub.com/en/skills/necromancer" },
    "NIGHTBLADE": { "name": "Nightblade", "skillLines": ["ASSASSINATION", "SHADOW", "SIPHONING"], "color": "#DE5D83", "sourceUrl": "https://eso-hub.com/en/skills/nightblade" },
    "SORCERER": { "name": "Sorcerer", "skillLines": ["DAEDRIC_SUMMONING", "DARK_MAGIC", "STORM_CALLING"], "color": "#ccccff", "sourceUrl": "https://eso-hub.com/en/skills/sorcerer" },
    "TEMPLAR": { "name": "Templar", "skillLines": ["AEDRIC_SPEAR", "DAWNS_WRATH", "RESTORING_LIGHT"], "color": "yellow", "sourceUrl": "https://eso-hub.com/en/skills/templar" },
    "WARDEN": { "name": "Warden", "skillLines": ["ANIMAL_COMPANIONS", "GREEN_BALANCE", "WINTERS_EMBRACE"], "color": "mediumseagreen", "sourceUrl": "https://eso-hub.com/en/skills/warden" }
  },
  "skillLines": {
    // Arcanist
    "HERALD_OF_THE_TOME": { "name": "Herald of the Tome", "type": "class", "class": "ARCANIST", "skills": ["FATED_FORTUNE", "SPLINTERED_SECRETS", "RUNIC_SUNDER"], "sourceUrl": "https://en.uesp.net/wiki/Online:Herald_of_the_Tome" },
    "SOLDIER_OF_APOCRYPHA": { "name": "Soldier of Apocrypha", "type": "class", "class": "ARCANIST", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Soldier_of_Apocrypha" },
    "CURATIVE_RUNEFORMS": { "name": "Curative Runeforms", "type": "class", "class": "ARCANIST", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Curative_Runeforms" },
    // Dragonknight
    "ARDENT_FLAME": { "name": "Ardent Flame", "type": "class", "class": "DRAGONKNIGHT", "skills": ["WORLD_IN_RUIN"], "sourceUrl": "https://en.uesp.net/wiki/Online:Ardent_Flame" },
    "DRACONIC_POWER": { "name": "Draconic Power", "type": "class", "class": "DRAGONKNIGHT", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Draconic_Power" },
    "EARTHEN_HEART": { "name": "Earthen Heart", "type": "class", "class": "DRAGONKNIGHT", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Earthen_Heart" },
    // Necromancer
    "GRAVE_LORD": { "name": "Grave Lord", "type": "class", "class": "NECROMANCER", "skills": ["DISMEMBER"], "sourceUrl": "https://en.uesp.net/wiki/Online:Grave_Lord" },
    "BONE_TYRANT": { "name": "Bone Tyrant", "type": "class", "class": "NECROMANCER", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Bone_Tyrant" },
    "LIVING_DEATH": { "name": "Living Death", "type": "class", "class": "NECROMANCER", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Living_Death" },
    // Nightblade
    "ASSASSINATION": { "name": "Assassination", "type": "class", "class": "NIGHTBLADE", "skills": ["HEMORRHAGE"], "sourceUrl": "https://en.uesp.net/wiki/Online:Assassination" },
    "SHADOW": { "name": "Shadow", "type": "class", "class": "NIGHTBLADE", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Shadow" },
    "SIPHONING": { "name": "Siphoning", "type": "class", "class": "NIGHTBLADE", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Siphoning" },
    // Sorcerer
    "DAEDRIC_SUMMONING": { "name": "Daedric Summoning", "type": "class", "class": "SORCERER", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Daedric_Summoning" },
    "DARK_MAGIC": { "name": "Dark Magic", "type": "class", "class": "SORCERER", "skills": ["CRYSTAL_WEAPON"], "sourceUrl": "https://en.uesp.net/wiki/Online:Dark_Magic" },
    "STORM_CALLING": { "name": "Storm Calling", "type": "class", "class": "SORCERER", "skills": ["ENERGIZED"], "sourceUrl": "https://en.uesp.net/wiki/Online:Storm_Calling" },
    // Templar
    "AEDRIC_SPEAR": { "name": "Aedric Spear", "type": "class", "class": "TEMPLAR", "skills": ["PIERCING_SPEAR"], "sourceUrl": "https://en.uesp.net/wiki/Online:Aedric_Spear" },
    "DAWNS_WRATH": { "name": "Dawn's Wrath", "type": "class", "class": "TEMPLAR", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Dawn%27s_Wrath" },
    "RESTORING_LIGHT": { "name": "Restoring Light", "type": "class", "class": "TEMPLAR", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Restoring_Light" },
    // Warden
    "ANIMAL_COMPANIONS": { "name": "Animal Companions", "type": "class", "class": "WARDEN", "skills": ["ADVANCED_SPECIES"], "sourceUrl": "https://en.uesp.net/wiki/Online:Animal_Companions" },
    "GREEN_BALANCE": { "name": "Green Balance", "type": "class", "class": "WARDEN", "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Green_Balance" },
    "WINTERS_EMBRACE": { "name": "Winter's Embrace", "type": "class", "class": "WARDEN", "skills": ["PIERCING_COLD"], "sourceUrl": "https://en.uesp.net/wiki/Online:Winter%27s_Embrace" },
    // Weapons
    "TWO_HANDED": { "name": "Two Handed", "type": "weapon", "skills": ["HEAVY_WEAPONS_AXE", "HEAVY_WEAPONS_MACE"], "sourceUrl": "https://eso-hub.com/en/skills/weapon/two-handed" },
    "ONE_HAND_AND_SHIELD": { "name": "One Hand and Shield", "type": "weapon", "skills": [], "sourceUrl": "https://eso-hub.com/en/skills/weapon/one-hand-and-shield" },
    "DUAL_WIELD": { "name": "Dual Wield", "type": "weapon", "skills": ["TWIN_BLADE_BLUNT_AXES", "TWIN_BLADE_BLUNT_MACES"], "sourceUrl": "https://eso-hub.com/en/skills/weapon/dual-wield" },
    "BOW": { "name": "Bow", "type": "weapon", "skills": [], "sourceUrl": "https://eso-hub.com/en/skills/weapon/bow" },
    "DESTRUCTION_STAFF": { "name": "Destruction Staff", "type": "weapon", "skills": [], "sourceUrl": "https://eso-hub.com/en/skills/weapon/destruction-staff" },
    "RESTORATION_STAFF": { "name": "Restoration Staff", "type": "weapon", "skills": [], "sourceUrl": "https://eso-hub.com/en/skills/weapon/restoration-staff" },
    // Armor
    "LIGHT_ARMOR": { "name": "Light Armor", "type": "armor", "skills": ["CONCENTRATION"], "sourceUrl": "https://eso-hub.com/en/skills/armor/light-armor" },
    "MEDIUM_ARMOR": { "name": "Medium Armor", "type": "armor", "skills": ["DEXTERITY"], "sourceUrl": "https://eso-hub.com/en/skills/armor/medium-armor" },
    "HEAVY_ARMOR": { "name": "Heavy Armor", "type": "armor", "skills": [], "sourceUrl": "https://eso-hub.com/en/skills/armor/heavy-armor" }
  },
  "universal": {
    "MajorBreach": { "name": "Major Breach", "pen": 5948, "default": "on" },
    "MinorBreach": { "name": "Minor Breach", "pen": 2974, "default": "on" },
    "Piercing": { "name": "Piercing (Passive CP)", "pen": 700, "default": "on" },
    "InfusedCrusher": { "name": "Infused Crusher Enchant", "pen": 2108, "default": "on" }
  },
  "modifiers": {
    "MajorForce": { "name": "Major Force", "critDamage": 20 },
    "MinorForce": { "name": "Minor Force", "critDamage": 10 },
    "MajorBrittle": { "name": "Major Brittle", "critDamage": 20 },
    "MinorBrittle": { "name": "Minor Brittle", "critDamage": 10, "default": "on" }
  },
  "cp": {
    "FightingFinesse": { "name": "Fighting Finesse", "critDamage": 8, "default": "on" },
    "Backstabber": { "name": "Backstabber", "critDamage": 10 },
    "ForceOfNature": { "name": "Force of Nature", "pen": 660, "type": "dropdown", "options": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "default": 0 }
  },
  "skills": {
    // Class Skills
    "CRYSTAL_WEAPON": { "name": "Crystal Weapon", "pen": 1000, "skillLine": "DARK_MAGIC", "class": "SORCERER", "skillOrPassive": "skill", "sourceUrl": "https://eso-hub.com/en/skills/sorcerer", "tooltip": "Reduces enemy armor by 1000.", "hyperlink": "https://en.uesp.net/wiki/Online:Crystal_Weapon" },
    "RUNIC_SUNDER": { "name": "Runic Sunder", "pen": 2200, "skillLine": "HERALD_OF_THE_TOME", "class": "ARCANIST", "skillOrPassive": "skill", "sourceUrl": "https://eso-hub.com/en/skills/arcanist", "tooltip": "Reduces enemy armor by 2200.", "hyperlink": "https://en.uesp.net/wiki/Online:Rune_Blades" },
    // Class Passives
    "ADVANCED_SPECIES": { "name": "Adv. Species", "critDamage": 5, "type": "dropdown", "options": [0, 1, 2, 3, 4, 5, 6], "default": 0, "skillLine": "ANIMAL_COMPANIONS", "class": "WARDEN", "skillOrPassive": "passive", "sourceUrl": "https://eso-hub.com/en/skills/warden", "tooltip": "Increase your Critical Damage by 5% for every Animal Companions ability slotted.", "hyperlink": "https://en.uesp.net/wiki/Online:Advanced_Species" },
    "DISMEMBER": { "name": "Dismember", "pen": 3271, "skillLine": "GRAVE_LORD", "class": "NECROMANCER", "skillOrPassive": "passive", "default": "on", "sourceUrl": "https://eso-hub.com/en/skills/necromancer", "tooltip": "While a Grave Lord ability is active, your Spell and Physical Penetration are increased by 3271.", "hyperlink": "https://en.uesp.net/wiki/Online:Dismember" },
    "ENERGIZED": { "name": "Energized", "critDamage": 0, "skillLine": "STORM_CALLING", "class": "SORCERER", "skillOrPassive": "passive", "default": "on", "sourceUrl": "https://eso-hub.com/en/skills/sorcerer", "tooltip": "Increase your Physical and Shock Damage done by 5%.", "hyperlink": "https://en.uesp.net/wiki/Online:Energized" },
    "FATED_FORTUNE": { "name": "Fated Fortune", "critDamage": 12, "skillLine": "HERALD_OF_THE_TOME", "class": "ARCANIST", "skillOrPassive": "passive", "default": "on", "sourceUrl": "https://eso-hub.com/en/skills/arcanist", "tooltip": "Warp fate when you generate or consume Crux, increasing your Critical Damage and Critical Healing by 12% for 7 seconds.", "hyperlink": "https://en.uesp.net/wiki/Online:Fated_Fortune" },
    "HEMORRHAGE": { "name": "Hemorrhage", "critDamage": 10, "skillLine": "ASSASSINATION", "class": "NIGHTBLADE", "skillOrPassive": "passive", "default": "on", "sourceUrl": "https://eso-hub.com/en/skills/nightblade", "tooltip": "Increase your Critical Damage by 10% when you deal a Critical Strike from Flank or from behind.", "hyperlink": "https://en.uesp.net/wiki/Online:Hemorrhage" },
    "PIERCING_COLD": { "name": "Piercing Cold", "critDamage": 0, "skillLine": "WINTERS_EMBRACE", "class": "WARDEN", "skillOrPassive": "passive", "default": "on", "sourceUrl": "https://eso-hub.com/en/skills/warden", "tooltip": "Increase your Physical and Frost Damage done by 6%.", "hyperlink": "https://en.uesp.net/wiki/Online:Piercing_Cold" },
    "PIERCING_SPEAR": { "name": "Piercing Spear", "critDamage": 12, "skillLine": "AEDRIC_SPEAR", "class": "TEMPLAR", "skillOrPassive": "passive", "default": "on", "sourceUrl": "https://eso-hub.com/en/skills/templar", "tooltip": "With an Aedric Spear ability slotted, increases your Critical Damage by 12% and your damage done to blocking players by 12%.", "hyperlink": "https://en.uesp.net/wiki/Online:Piercing_Spear" },
    "SPLINTERED_SECRETS": { "name": "Splintered Secrets", "pen": 1240, "type": "dropdown", "options": [0, 1, 2, 3, 4, 5, 6], "default": 2, "skillLine": "HERALD_OF_THE_TOME", "class": "ARCANIST", "skillOrPassive": "passive", "sourceUrl": "https://eso-hub.com/en/skills/arcanist", "tooltip": "What they don't know can kill them. Increase your Physical and Spell Penetration by 1240 per Herald of the Tome ability slotted.", "hyperlink": "https://en.uesp.net/wiki/Online:Splintered_Secrets" },
    "WORLD_IN_RUIN": { "name": "World in Ruin", "critDamage": 0, "skillLine": "ARDENT_FLAME", "class": "DRAGONKNIGHT", "skillOrPassive": "passive", "default": "on", "sourceUrl": "https://eso-hub.com/en/skills/dragonknight", "tooltip": "Increase your damage done with Flame and Poison area of effect abilities by 6%.", "hyperlink": "https://en.uesp.net/wiki/Online:World_in_Ruin" },
    
    // Weapon Passives
    "HEAVY_WEAPONS_AXE": { "name": "2H Weapon (Axe)", "critDamage": 12, "skillLine": "TWO_HANDED", "skillOrPassive": "passive", "sourceUrl": "https://eso-hub.com/en/skills/weapon/two-handed", "tooltip": "While you have a Two Handed Axe equipped, your Critical Damage is increased by 12%.", "hyperlink": "https://en.uesp.net/wiki/Online:Heavy_Weapons" },
    "HEAVY_WEAPONS_MACE": { "name": "2H Weapon (Mace)", "pen": 2974, "skillLine": "TWO_HANDED", "skillOrPassive": "passive", "sourceUrl": "https://eso-hub.com/en/skills/weapon/two-handed", "tooltip": "While you have a Two Handed Mace equipped, your attacks ignore 2974 of the target's Physical and Spell Resistance.", "hyperlink": "https://en.uesp.net/wiki/Online:Heavy_Weapons" },
    "TWIN_BLADE_BLUNT_AXES": { "name": "Dual Wield (Axe)", "critDamage": 6, "type": "dropdown", "options": [0, 1, 2], "default": 0, "skillLine": "DUAL_WIELD", "skillOrPassive": "passive", "sourceUrl": "https://eso-hub.com/en/skills/weapon/dual-wield", "tooltip": "While you have an Axe equipped in your main hand or off hand, your Critical Damage is increased by 6%.", "hyperlink": "https://en.uesp.net/wiki/Online:Twin_Blade_and_Blunt" },
    "TWIN_BLADE_BLUNT_MACES": { "name": "Dual Wield (Mace)", "pen": 1487, "type": "dropdown", "options": [0, 1, 2], "default": 0, "skillLine": "DUAL_WIELD", "skillOrPassive": "passive", "sourceUrl": "https://eso-hub.com/en/skills/weapon/dual-wield", "tooltip": "While you have a Mace equipped in your main hand or off hand, your attacks ignore 1487 of the target's Physical and Spell Resistance.", "hyperlink": "https://en.uesp.net/wiki/Online:Twin_Blade_and_Blunt" },
    "SHARPENED": { "name": "Sharpened", "pen": 1650, "type": "dropdown", "options": [0, 1, 2], "default": 0, "sourceUrl": "https://eso-hub.com/en/traits", "tooltip": "Increases Physical and Spell Penetration. The value is per weapon with the Sharpened trait. (Base value shown is for a 1H weapon).", "hyperlink": "https://en.uesp.net/wiki/Online:Sharpened" },

    // Armor Passives
    "CONCENTRATION": { "name": "Concentration", "pen": 939, "type": "dropdown", "options": [0, 1, 2, 3, 4, 5, 6, 7], "default": 1, "skillLine": "LIGHT_ARMOR", "skillOrPassive": "passive", "sourceUrl": "https://eso-hub.com/en/skills/armor/light-armor", "tooltip": "Increase your Physical and Spell Penetration by 939 for every piece of Light Armor equipped.", "hyperlink": "https://en.uesp.net/wiki/Online:Concentration" },
    "DEXTERITY": { "name": "Dexterity", "critDamage": 2, "type": "dropdown", "options": [0, 1, 2, 3, 4, 5, 6, 7], "default": 6, "skillLine": "MEDIUM_ARMOR", "skillOrPassive": "passive", "sourceUrl": "https://eso-hub.com/en/skills/armor/medium-armor", "tooltip": "Increase your Critical Damage by 2% for every piece of Medium Armor equipped.", "hyperlink": "https://en.uesp.net/wiki/Online:Dexterity" }
  }
};

function initUI() {
  // Set patch version in the title
  const patchVersionEl = document.getElementById('patch-version');
  if (patchVersionEl) {
    patchVersionEl.textContent = `(Patch ${PATCH_VERSION})`;
  }

  populatePresets();
  populateConfigDropdowns();
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
  Object.keys(data.mundus).sort().forEach(mundusKey => {
    const opt = document.createElement("option");
    opt.value = mundusKey;
    opt.textContent = data.mundus[mundusKey].name;
    mundusSelect.appendChild(opt);
  });

  // Populate Skill Lines
  const mythicSelect = document.getElementById("mythicSelect");
  Object.keys(data.mythics).forEach(mythicKey => {
    const opt = document.createElement("option");
    opt.value = mythicKey;
    opt.textContent = data.mythics[mythicKey].name;
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
    document.querySelectorAll(`input[data-category='racialPassives']`).forEach(input => {
      if (input.checked) {
        input.checked = false;
      }
    });

    // Check the passive(s) for the selected race.
    if (selectedKey && data.races[selectedKey] && data.races[selectedKey].passives) {
      data.races[selectedKey].passives.forEach(passiveKey => {
        const targetInput = document.querySelector(`input[data-key='${passiveKey}'][data-category='racialPassives']`);
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

  const categoryConfig = {
    universal: { limit: Infinity, name: "Universal" },
    racialPassives: { limit: Infinity, name: "Racial" },
    sets: { limit: 2, name: "Item Sets" },
    mythics: { limit: 1, name: "Mythics" },
    mundus: { limit: 1, name: "Mundus Stones" },
    supportSets: { limit: Infinity, name: "Support Sets" },
    modifiers: { limit: Infinity, name: "Modifiers" },
    cp: { limit: Infinity, name: "Champion Points" },
    classSkills: { limit: Infinity, name: "Class Skills" },
    classPassives: { limit: Infinity, name: "Class Passives" },
    weaponPassives: { limit: Infinity, name: "Weapon Passives" },
    armorPassives: { limit: Infinity, name: "Armor Passives" }
  };

  const categoryOrder = [
    'universal', 'modifiers', 'armorPassives', 'mythics','classPassives', 'racialPassives', 'sets', 'supportSets', 'cp', 'classSkills', 'weaponPassives', 'mundus'
  ];

  categoryOrder.forEach(categoryKey => {
    const category = categoryConfig[categoryKey];
    let items;
    let skillTypeFilter = null;
    let skillOrPassiveFilter = null;

    switch (categoryKey) {
      case 'classSkills':
        items = data.skills;
        skillTypeFilter = 'class';
        skillOrPassiveFilter = 'skill';
        break;
      case 'classPassives':
        items = data.skills;
        skillTypeFilter = 'class';
        skillOrPassiveFilter = 'passive';
        break;
      case 'weaponPassives':
        items = data.skills;
        skillTypeFilter = 'weapon';
        skillOrPassiveFilter = 'passive';
        break;
      case 'armorPassives':
        items = data.skills;
        skillTypeFilter = 'armor';
        skillOrPassiveFilter = 'passive';
        break;
      default:
        items = data[categoryKey];
    }
    
    if (!items) return;

    // Filter items for each table
    const penItems = Object.entries(items).filter(([, item]) => {
      if (item.pen === undefined || item.pen === 0) return false;
      if (!skillTypeFilter) return true; // Not a skill category, include it
      const skillLine = data.skillLines[item.skillLine];
      return skillLine && 
             skillLine.type === skillTypeFilter && 
             (!skillOrPassiveFilter || item.skillOrPassive === skillOrPassiveFilter);
    });
    const critItems = Object.entries(items).filter(([, item]) => {
      if (item.critDamage === undefined || item.critDamage === 0) return false;
      if (!skillTypeFilter) return true; // Not a skill category, include it
      const skillLine = data.skillLines[item.skillLine];
      return skillLine && 
             skillLine.type === skillTypeFilter && 
             (!skillOrPassiveFilter || item.skillOrPassive === skillOrPassiveFilter);
    });

    // Populate penetration table
    penItems.forEach(([key, item], index) => {
      const isFirst = index === 0;
      createRow(penTbody, item, 'pen', categoryKey, key, category.limit, {
        isFirstInCategory: isFirst,
        categoryName: category.name,
        categoryRowCount: penItems.length
      });
    });

    // Populate crit damage table
    critItems.forEach(([key, item], index) => {
      const isFirst = index === 0;
      createRow(critTbody, item, 'critDamage', categoryKey, key, category.limit, {
        isFirstInCategory: isFirst,
        categoryName: category.name,
        categoryRowCount: critItems.length
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

  if (item.type === 'dropdown') {
    inputElement = document.createElement('select');
    item.options.forEach(optValue => {
      const option = document.createElement('option');
      option.value = optValue;
      option.textContent = optValue;
      inputElement.appendChild(option);
    });
    inputElement.value = item.default;

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
    inputElement.checked = item.default === 'on';
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
  if ((category === 'classSkills' || category === 'classPassives') && item.class) {
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
        penTotal += parseInt(el.value, 10) * parseInt(el.dataset.value, 10);
    } else { // checkbox
        penTotal += parseInt(el.dataset.value, 10);
    }
  });

  document.querySelectorAll('#crit-damage-tbody input:checked, #crit-damage-tbody select').forEach(el => {
    if (el.tagName.toLowerCase() === 'select') {
        // Dropdown value is pieces/stacks * value per piece/stack
        critTotal += parseInt(el.value, 10) * parseInt(el.dataset.value, 10);
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

function updateClassSkillsBasedOnSelection() {
  const selectedSkillLines = new Set();
  ['mainSkillLineSelect', 'skillLine2Select', 'skillLine3Select'].forEach(id => {
    const select = document.getElementById(id);
    if (select && select.value) {
      selectedSkillLines.add(select.value);
    }
  });

  const classSkillInputs = document.querySelectorAll("input[data-category='classSkills'], input[data-category='classPassives'], select[data-category='classSkills'], select[data-category='classPassives']");

  classSkillInputs.forEach(input => {
    const key = input.dataset.key;
    const skillData = data.skills[key];
    if (!skillData || !skillData.skillLine) return;

    const isSelected = selectedSkillLines.has(skillData.skillLine);
    let valueChanged = false;

    if (input.tagName.toLowerCase() === 'select') {
      const newValue = isSelected ? skillData.default : 0;
      if (input.value != newValue) {
        input.value = newValue;
        valueChanged = true;
      }
    } else { // checkbox
      const newCheckedState = isSelected ? (skillData.default === 'on') : false;
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
