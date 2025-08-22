const data = {
  "presets": {
    "heraldAssassinationArdentFlame": {
      "name": "Herald / Assassination / Ardent Flame",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.TheThief,
      "mythic": MythicEnum.VelothiUrMage,
      "mainSkillLine": SkillLineEnum.HERALD_OF_THE_TOME,
      "skillLine2": SkillLineEnum.ASSASSINATION,
      "skillLine3": SkillLineEnum.ARDENT_FLAME
    },
    "heraldAssassinationAedricSpear": {
      "name": "Herald / Assassination / Aedric Spear",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.TheThief,
      "mythic": MythicEnum.VelothiUrMage,
      "mainSkillLine": SkillLineEnum.HERALD_OF_THE_TOME,
      "skillLine2": SkillLineEnum.ASSASSINATION,
      "skillLine3": SkillLineEnum.AEDRIC_SPEAR
    },
    "heraldAssassinationGravelord": {
      "name": "Herald / Assassination / Gravelord",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.TheThief,
      "mythic": MythicEnum.VelothiUrMage,
      "mainSkillLine": SkillLineEnum.HERALD_OF_THE_TOME,
      "skillLine2": SkillLineEnum.ASSASSINATION,
      "skillLine3": SkillLineEnum.GRAVE_LORD
    },
    "custom": {
      "name": "Custom",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.TheThief,
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
data.universal.Piercing = { ...data.cp[CpEnum.Piercing], "default": "on" };
// Remove Piercing from cp so it doesn't render in the CP category
delete data.cp[CpEnum.Piercing];