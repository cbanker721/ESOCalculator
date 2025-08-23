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
  [SetsEnum.Spriggan]: { "name": "Spriggan's Thorns", "pen": 3450, "pieces": 5 },
  [SetsEnum.ShatteredFate]: { "name": "Shattered Fate", "pen": 7377, "pieces": 5 },
  [SetsEnum.AdvancingYokeda]: { "name": "Advancing Yokeda", "critDamage": 0, "pieces": 5 },
  [SetsEnum.SulXan]: { "name": "Sul-Xan's Torment", "critDamage": 12, "pieces": 5 },
  [SetsEnum.MorasScribeThesis]: { "name": "Mora's Scribe Thesis", "critDamage": 12, "pieces": 5 },
  [SetsEnum.ArmorSetPenPassive]: { "name": "Armor-set Passive", "pen": 1487, "type": "dropdown", "options": [0, 1, 2, 3], "default": 0, tooltip: "Pen from armor sets like Arch Druid (1-piece), Ansuul's Torment, and Tideborn" },
  [SetsEnum.Arena1Piece]: { "name": "Arena 1-piece", "pen": 1190, "pieces": 1, "tooltip": "Pen from arena weapons like Perfected Maelstrom staff" },
  [SetsEnum.PerfectedWhorlOfTheDepths]: { "name": "Perfected Whorl of the Depths", "pen": 0, "critDamage": 0, "pieces": 5 },
  [SetsEnum.TideKingGaze]: { "name": "Tide-King's Gaze", "pen": 1487, "pieces": 2 },
  [SetsEnum.AnsuulsTorment]: { "name": "Ansuul's Torment", "pen": 0, "critDamage": 0, "pieces": 5 }
};

const mythicsData = {
  [MythicEnum.HarpoonerKilt]: { "name": "Harpooner's Kilt", "critDamage": 10, "pieces": 1 },
  [MythicEnum.VelothiUrMage]: { "name": "Velothi Amulet", "pen": 1650, "pieces": 1, "triggers": [{ "key": ModifierEnum.MinorForce, "action": "check" }] }
};

const supportSetsData = {
  [SupportSetsEnum.ElementalCatalyst]: { "name": "Elemental Catalyst", "critDamage": 15, "pieces": 5 },
  [SupportSetsEnum.LucentEchoes]: { "name": "Lucent Echoes", "critDamage": 11, "default": "on", "pieces": 5 },
  [SupportSetsEnum.Alkosh]: { "name": "Roar of Alkosh", "pen": 6000, "pieces": 5 },
  [SupportSetsEnum.CrimsonOath]: { "name": "Crimson Oath's Rive", "pen": 3541, "pieces": 5 },
  [SupportSetsEnum.Tremorscale]: { "name": "Tremorscale", "pen": 2640, "pieces": 2 },
    [SetEnum.PerfectedRoaringOpportunist]: {
    name: "Perfected Roaring Opportunist",
    modifiers: [
      { modifier: ModifierEnum.MajorSlayer, rating: 2 }
    ],
    notes: "Assumes Jorvuld's Guidance is used",
    pieces: 5
  },
  [SetEnum.SpellPowerCure]: {
    name: "Spell Power Cure",
    modifiers: [
      { modifier: ModifierEnum.MajorCourage, rating: 3 }
    ],
    pieces: 5
  },
  [SetEnum.PerfectedOlorime]: {
    name: "Perfected Vestment of Olorime",
    modifiers: [
      { modifier: ModifierEnum.MajorCourage, rating: 3 }
    ],
    pieces: 5
  },
  [SetEnum.PerfectedSaxhleelChampion]: {
    name: "Perfected Saxhleel Champion",
    modifiers: [
      { modifier: ModifierEnum.MajorForce, rating: 2 }
    ],
    pieces: 5
  },
  [SetEnum.MasterArchitect]: {
    name: "Master Architect",
    modifiers: [
      { modifier: ModifierEnum.MajorSlayer, rating: 1 }
    ],
    pieces: 5
  },
  [SetEnum.WarMachine]: {
    name: "War Machine",
    modifiers: [
      { modifier: ModifierEnum.MajorSlayer, rating: 1 }
    ],
    pieces: 5
  },
  [SetEnum.PearlescentWardSet]: {
    name: "Pearlescent Ward",
    modifiers: [
      { modifier: ModifierEnum.PearlescentWard, rating: 3 }
    ],
    pieces: 5
  },
  [SetEnum.PowerfulAssaultSet]: {
    name: "Powerful Assault",
    modifiers: [
      { modifier: ModifierEnum.PowerfulAssault, rating: 3 }
    ],
    pieces: 5
  },
  [SetEnum.LordWardenSet]: {
    name: "Lord Warden",
    modifiers: [
      { modifier: ModifierEnum.LordWarden, rating: 3 }
    ],
    pieces: 2
  }
};