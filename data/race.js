const allianceData = {
  [AllianceEnum.DAGGERFALL_COVENANT]: { "name": "Daggerfall Covenant", "color": "#4A8BFF", "remark": "NATO" },
  [AllianceEnum.ALDMERI_DOMINION]: { "name": "Aldmeri Dominion", "color": "#FFB84A", "remark": "Axis" },
  [AllianceEnum.EBONHEART_PACT]: { "name": "Ebonheart Pact", "color": "#FF4A4A", "remark" : "Warsaw Pact" },
  [AllianceEnum.CYRODIIL]: { "name": "Non-Aligned", "color": "#FFFFFF", "remark" : "Non-Aligned" },
};

const raceData = {
  [RaceEnum.ARGONIAN]: { "name": "Argonian", "passives": [], "alliance": AllianceEnum.EBONHEART_PACT, "remark": "Resourceful" },
  [RaceEnum.BRETON]: { "name": "Breton", "passives": [], "alliance": AllianceEnum.DAGGERFALL_COVENANT, "remark": "Conniving" },
  [RaceEnum.DARK_ELF]: { "name": "Dark Elf", "passives": [], "alliance": AllianceEnum.EBONHEART_PACT, "remark": "Clever" },
  [RaceEnum.HIGH_ELF]: { "name": "High Elf", "passives": [], "alliance": AllianceEnum.ALDMERI_DOMINION, "remark": "Specists" },
  [RaceEnum.IMPERIAL]: { "name": "Imperial", "passives": [], "alliance": AllianceEnum.CYRODIIL, "remark": "Awesome" },
  [RaceEnum.KHAJIIT]: { "name": "Khajiit", "passives": [RacialPassiveEnum.FELINE_AMBUSH], "alliance": AllianceEnum.ALDMERI_DOMINION, "remark": "Furries" },
  [RaceEnum.NORD]: { "name": "Nord", "passives": [], "alliance": AllianceEnum.EBONHEART_PACT, "remark": "Champs" },
  [RaceEnum.ORC]: { "name": "Orc", "passives": [], "alliance": AllianceEnum.DAGGERFALL_COVENANT, "remark": "Dirty" },
  [RaceEnum.REDGUARD]: { "name": "Redguard", "passives": [], "alliance": AllianceEnum.DAGGERFALL_COVENANT, "remark": "Crude" },
  [RaceEnum.WOOD_ELF]: { "name": "Wood Elf", "passives": [RacialPassiveEnum.HUNTERS_EYE], "alliance": AllianceEnum.ALDMERI_DOMINION, "remark": "Cannibals"  },
};