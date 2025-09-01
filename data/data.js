const data = {
  "presets": {
    "heraldAssassinationArdentFlame": {
      "name": "Herald / Assassination / Ardent Flame",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.THE_THIEF,
      "mythic": SetEnum.VELOTHI_UR_MAGE,
      "mainSkillLine": SkillLineEnum.HERALD_OF_THE_TOME,
      "skillLine2": SkillLineEnum.ASSASSINATION,
      "skillLine3": SkillLineEnum.ARDENT_FLAME
    },
    "heraldAssassinationAedricSpear": {
      "name": "Herald / Assassination / Aedric Spear",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.THE_THIEF,
      "mythic": SetEnum.VELOTHI_UR_MAGE,
      "mainSkillLine": SkillLineEnum.HERALD_OF_THE_TOME,
      "skillLine2": SkillLineEnum.ASSASSINATION,
      "skillLine3": SkillLineEnum.AEDRIC_SPEAR
    },
    "heraldAssassinationGravelord": {
      "name": "Herald / Assassination / Gravelord",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.THE_THIEF,
      "mythic": SetEnum.VELOTHI_UR_MAGE,
      "mainSkillLine": SkillLineEnum.HERALD_OF_THE_TOME,
      "skillLine2": SkillLineEnum.ASSASSINATION,
      "skillLine3": SkillLineEnum.GRAVE_LORD
    },
    "custom": {
      "name": "Custom",
      "race": RaceEnum.DARK_ELF,
      "mundus": MundusEnum.THE_THIEF,
      "mythic": "",
      "mainSkillLine": "",
      "skillLine2": "",
      "skillLine3": ""
    }
  },
};

data.mundusData = mundusData;
data.alliances = allianceData;
data.races = raceData;
data.enchantData = Object.values(enchantData);
data.classes = classesData;
data.skillLines = skillLinesData;
data.cpData = Object.values(cpData);
data.passiveCPData = Object.values(passiveCPData);
data.racialPassivesData = racialPassivesData;
data.skillsData = Object.values(skillsData);
data.modifiersData = Object.values(modifiersData);
