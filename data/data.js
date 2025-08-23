const data = {
  "presets": {
    "heraldAssassinationArdentFlame": {
      "name": "Herald / Assassination / Ardent Flame",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.TheThief,
      "mythic": SetEnum.VelothiUrMage,
      "mainSkillLine": SkillLineEnum.HERALD_OF_THE_TOME,
      "skillLine2": SkillLineEnum.ASSASSINATION,
      "skillLine3": SkillLineEnum.ARDENT_FLAME
    },
    "heraldAssassinationAedricSpear": {
      "name": "Herald / Assassination / Aedric Spear",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.TheThief,
      "mythic": SetEnum.VelothiUrMage,
      "mainSkillLine": SkillLineEnum.HERALD_OF_THE_TOME,
      "skillLine2": SkillLineEnum.ASSASSINATION,
      "skillLine3": SkillLineEnum.AEDRIC_SPEAR
    },
    "heraldAssassinationGravelord": {
      "name": "Herald / Assassination / Gravelord",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.TheThief,
      "mythic": SetEnum.VelothiUrMage,
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
    [EnchantEnum.INFUSED_CRUSHER]: enchantData[EnchantEnum.INFUSED_CRUSHER],
    [CpEnum.Piercing]: passiveCPData[CpEnum.Piercing]
  }
};

data.mundusData = mundusData;
data.alliances = allianceData;
data.races = raceData;
data.enchantData = Object.values(enchantData);
data.setsData = Object.values(setsData);
data.mythicsData = Object.values(mythicsData);
data.supportSetsData = Object.values(supportSetsData);
data.classes = classesData;
data.skillLines = skillLinesData;
data.cpData = Object.values(cpData);
data.passiveCPData = Object.values(passiveCPData);
data.racialPassivesData = racialPassivesData;
data.skills = skillsData;
data.modifiersData = Object.values(modifiersData);
