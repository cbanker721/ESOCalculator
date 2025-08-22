const data = {
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
  "universal": {
    "InfusedCrusher": { "name": "Infused Crusher Enchant", "pen": 2108, "default": "on" }
  },
};

data.mundus = mundusData;
data.alliances = allianceData;
data.races = raceData;
data.sets = setsData;
data.mythics = mythicsData;
data.supportSets = supportSetsData;
data.classes = classesData;
data.skillLines = skillLinesData;
data.cp = cpData;
data.racialPassives = racialPassivesData;
data.skills = skillsData;
data.modifiers = modifiersData;

// Add Piercing to universal by reference, but with its own default
data.universal.Piercing = { ...data.cp.Piercing, "default": "on" };
// Remove Piercing from cp so it doesn't render in the CP category
delete data.cp.Piercing;