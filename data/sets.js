/**
 * @typedef {import('../enums/enums.js').SetEnum} SetEnum
 * @typedef {import('../enums/enums.js').ModifierEnum} ModifierEnum
 * @typedef {import('../enums/enums.js').SkillLineEnum} SkillLineEnum
 */

const setsData = {
  [SetEnum.Spriggan]: { "name": "Spriggan's Thorns", "pen": 3450, "pieces": 5 },
  [SetEnum.ShatteredFate]: { "name": "Shattered Fate", "pen": 7377, "pieces": 5 },
  [SetEnum.AdvancingYokeda]: { "name": "Advancing Yokeda", "critDamage": 0, "pieces": 5 },
  [SetEnum.SulXan]: { "name": "Sul-Xan's Torment", "critDamage": 12, "pieces": 5 },
  [SetEnum.MorasScribeThesis]: { "name": "Mora's Scribe Thesis", "critDamage": 12, "pieces": 5 },
  [SetEnum.ArmorSetPenPassive]: { "name": "Armor-set Passive", "pen": 1487, "type": "dropdown", "options": [0, 1, 2, 3], "default": 0, tooltip: "Pen from armor sets like Arch Druid (1-piece), Ansuul's Torment, and Tideborn" },
  [SetEnum.Arena1Piece]: { "name": "Arena 1-piece", "pen": 1190, "pieces": 1, "tooltip": "Pen from arena weapons like Perfected Maelstrom staff" },
  [SetEnum.PerfectedWhorlOfTheDepths]: { "name": "Perfected Whorl of the Depths", "pen": 0, "critDamage": 0, "pieces": 5 },
    [SetEnum.TideKingGaze]: { "name": "Tide-King's Gaze", "pen": 1487, "pieces": 5, "hide": true },
  [SetEnum.AnsuulsTorment]: { "name": "Ansuul's Torment", "pen": 1487, "critDamage": 0, "pieces": 5, "hide": true },
};

const mythicsData = {
  [SetEnum.HarpoonerKilt]: { "name": "Harpooner's Kilt", "critDamage": 10, "pieces": 1 },
  [SetEnum.VelothiUrMage]: { "name": "Velothi Amulet", "pen": 1650, "default": "on", "pieces": 1, "triggers": [{ "key": ModifierEnum.MinorForce, "action": "check" }] },
  [SetEnum.PearlsOfEhlnofey]: {
    name: "Pearls of Ehlnofey",
    modifiers: [
      { modifier: ModifierEnum.MajorHeroism, rating: 3 }
    ],
    pieces: 1
  }
};

const supportSetsData = {
  [SetEnum.ElementalCatalyst]: { "name": "Elemental Catalyst", "critDamage": 15, "pieces": 5 },
  [SetEnum.LucentEchoes]: { "name": "Lucent Echoes", "critDamage": 11, "default": "on", "pieces": 5 },
  [SetEnum.Alkosh]: { "name": "Roar of Alkosh", "pen": 6000, "pieces": 5 },
  [SetEnum.CrimsonOath]: { "name": "Crimson Oath's Rive", "pen": 3541, "pieces": 5 },
  [SetEnum.Tremorscale]: { "name": "Tremorscale", "pen": 2640, "pieces": 2 },
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
  },
    [SetEnum.JorvuldsGuidance]: {
    name: "Jorvuld's Guidance",
    notes: "Increases the duration of all Major buffs, Minor buffs, and damage shields you apply to yourself and allies by 40%.",
    pieces: 5
  },
  [SetEnum.SymphonyOfBladesSet]: {
    name: "Symphony of Blades",
    modifiers: [
      { modifier: ModifierEnum.SymphonyOfBlades, rating: 3 }
    ],
    pieces: 2
  },
  [SetEnum.OzezanTheInferno]: {
    name: "Ozezan the Inferno",
    modifiers: [
      { modifier: ModifierEnum.OzezansPlating, rating: 3 }
    ],
    pieces: 2
  },
  [SetEnum.ArchDruid]: {
    name: "Archdruid Devyric",
    modifiers: [
      { modifier: ModifierEnum.MajorVulnerability, rating: 1 }
    ],
    pieces: 2
  },
  [SetEnum.TurningTide]: {
    name: "Turning Tide",
    modifiers: [
      { modifier: ModifierEnum.MajorVulnerability, rating: 1 }
    ],
    pieces: 5
  },
  [SetEnum.Yolnahkriin]: {
    name: "Claw of Yolnahkriin",
    modifiers: [
      { modifier: ModifierEnum.MinorCourage, rating: 3 }
    ],
    pieces: 5
  },
  [SetEnum.PillagersProfit]: {
    name: "Pillager's Profit",
    modifiers: [
      { modifier: ModifierEnum.MajorSlayer, rating: 1 }
    ],
    pieces: 5
  },
  [SetEnum.BaronZaudrus]: {
    name: "Baron Zaudrus",
    modifiers: [
      { modifier: ModifierEnum.BaronZaudrusDebuff, rating: 2 }
    ],
    pieces: 2
  },
  [SetEnum.Nazaray]: {
    name: "Nazaray",
    modifiers: [
      { modifier: ModifierEnum.NazarayEffect, rating: 2 }
    ],
    pieces: 2
  },
};