const SetsEnum = Object.freeze({
  Spriggan: "Spriggan",
  ShatteredFate: "ShatteredFate",
  AdvancingYokeda: "AdvancingYokeda",
  SulXan: "SulXan",
  MorasScribeThesis: "MorasScribeThesis",
  ArmorSetPenPassive: "ArmorSetPenPassive",
  Arena1Piece: "Arena1Piece",
  PerfectedWhorlOfTheDepths: "PerfectedWhorlOfTheDepths",
  TideKingGaze: "TideKingGaze",
  AnsuulsTorment: "AnsuulsTorment",
});

const MythicEnum = Object.freeze({
  HarpoonerKilt: "HarpoonerKilt",
  VelothiUrMage: "VelothiUrMage",
});

const SupportSetsEnum = Object.freeze({
  ElementalCatalyst: "ElementalCatalyst",
  LucentEchoes: "LucentEchoes",
  Alkosh: "Alkosh",
  CrimsonOath: "CrimsonOath",
  Tremorscale: "Tremorscale",
});

const setsData = {
  [SetsEnum.Spriggan]: { "name": "Spriggan's Thorns", "pen": 3450 },
  [SetsEnum.ShatteredFate]: { "name": "Shattered Fate", "pen": 7377 },
  [SetsEnum.AdvancingYokeda]: { "name": "Advancing Yokeda", "critDamage": 0 },
  [SetsEnum.SulXan]: { "name": "Sul-Xan's Torment", "critDamage": 12 },
  [SetsEnum.MorasScribeThesis]: { "name": "Mora's Scribe Thesis", "critDamage": 12 },
  [SetsEnum.ArmorSetPenPassive]: { "name": "Armor-set Passive", "pen": 1487, "type": "dropdown", "options": [0, 1, 2, 3], "default": 0, tooltip: "Pen from armor sets like Arch Druid (1-piece), Ansuul's Torment, and Tideborn" },
  [SetsEnum.Arena1Piece]: { "name": "Arena 1-piece", "pen": 1190, "tooltip": "Pen from arena weapons like Perfected Maelstrom staff" },
  [SetsEnum.PerfectedWhorlOfTheDepths]: { "name": "Perfected Whorl of the Depths", "pen": 0, "critDamage": 0 },
  [SetsEnum.TideKingGaze]: { "name": "Tide-King's Gaze (1pc)", "pen": 1487 },
  [SetsEnum.AnsuulsTorment]: { "name": "Ansuul's Torment", "pen": 0, "critDamage": 0 }
};

const mythicsData = {
  [MythicEnum.HarpoonerKilt]: { "name": "Harpooner's Kilt", "critDamage": 10 },
  [MythicEnum.VelothiUrMage]: { "name": "Velothi Amulet", "pen": 1650, "triggers": [{ "key": ModifierEnum.MinorForce, "action": "check" }] }
};

const supportSetsData = {
  [SupportSetsEnum.ElementalCatalyst]: { "name": "Elemental Catalyst", "critDamage": 15 },
  [SupportSetsEnum.LucentEchoes]: { "name": "Lucent Echoes", "critDamage": 11, "default": "on" },
  [SupportSetsEnum.Alkosh]: { "name": "Roar of Alkosh", "pen": 6000 },
  [SupportSetsEnum.CrimsonOath]: { "name": "Crimson Oath's Rive", "pen": 3541 },
  [SupportSetsEnum.Tremorscale]: { "name": "Tremorscale", "pen": 2640 },
};