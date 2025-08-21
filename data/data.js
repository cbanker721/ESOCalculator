const data = {
  "alliances": {
    "DAGGERFALL_COVENANT": { "name": "Daggerfall Covenant", "color": "#4A8BFF", "remark": "NATO" },
    "ALDMERI_DOMINION": { "name": "Aldmeri Dominion", "color": "#FFB84A", "remark": "Axis" },
    "EBONHEART_PACT": { "name": "Ebonheart Pact", "color": "#FF4A4A", "remark" : "Warsaw Pact" },
    "CYRODIIL": { "name": "Non-Aligned", "color": "#FFFFFF", "remark" : "Non-Aligned" },
  },
  "races": {
    "ARGONIAN": { "name": "Argonian", "passives": [], "alliance": "EBONHEART_PACT", "remark": "Resourceful" },
    "BRETON": { "name": "Breton", "passives": [], "alliance": "DAGGERFALL_COVENANT", "remark": "Conniving" },
    "DARK_ELF": { "name": "Dark Elf", "passives": [], "alliance": "EBONHEART_PACT", "remark": "Clever" },
    "HIGH_ELF": { "name": "High Elf", "passives": [], "alliance": "ALDMERI_DOMINION", "remark": "Specists" },
    "IMPERIAL": { "name": "Imperial", "passives": [], "alliance": "CYRODIIL", "remark": "Imperial", "remark": "Awesome" },
    "KHAJIIT": { "name": "Khajiit", "passives": ["FELINE_AMBUSH"], "alliance": "ALDMERI_DOMINION", "remark": "Furries" },
    "NORD": { "name": "Nord", "passives": [], "alliance": "EBONHEART_PACT", "remark": "Champs" },
    "ORC": { "name": "Orc", "passives": [], "alliance": "DAGGERFALL_COVENANT", "remark": "Droppings" },
    "REDGUARD": { "name": "Redguard", "passives": [], "alliance": "DAGGERFALL_COVENANT", "remark": "Unimaginative" },
    "WOOD_ELF": { "name": "Wood Elf", "passives": ["HUNTERS_EYE"], "alliance": "ALDMERI_DOMINION", "remark": "Cannibals"  },
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

data.mundus = mundusData;