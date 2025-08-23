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
  [SetEnum.WhorlOfTheDepths]: { "name": "Perfected Whorl of the Depths", "pen": 0, "critDamage": 0, "pieces": 5 },
  [SetEnum.TideKingGaze]: { "name": "Tide-King's Gaze", "pen": 1487, "pieces": 5, "hide": true },
  [SetEnum.AnsuulsTorment]: { "name": "Ansuul's Torment", "pen": 1487, "critDamage": 0, "pieces": 5, "hide": true },
  [SetEnum.PartialCritSet]: { "name": "Partial Crit Set", "pieces": 1, "partial": true, "hide": true , tooltip: "Partial set that gives crit chance (e.g. 1-piece Slimecraw)" },
  [SetEnum.PartialPenSet]: { "name": "Partial Pen Set", "pieces": 1, "partial": true, "hide": true , tooltip: "Partial set that gives pen (e.g. 1-piece Arch Druid)" },
  [SetEnum.PartialMiscSet]: { "name": "Partial Misc Set", "pieces": 1, "partial": true, "hide": true , tooltip: "Partial set that gives some bonus (e.g. 1-piece Trainee)" },
};

const mythicsData = {
  [SetEnum.HarpoonerKilt]: { "name": "Harpooner's Kilt", "critDamage": 10, "pieces": 1 },
  [SetEnum.VelothiUrMage]: { "name": "Velothi Amulet", "pen": 1650, "pieces": 1,
    modifiers: [
      { modifier: ModifierEnum.MinorForce, rating: 3, scope: ScopeEnum.SELF }
    ]
  },
  [SetEnum.PearlsOfEhlnofey]: {
    name: "Pearls of Ehlnofey",
    modifiers: [
      { modifier: ModifierEnum.MajorHeroism, rating: 3, scope: ScopeEnum.SELF }
    ],
    pieces: 1
  }
};

const supportSetsData = {
  [SetEnum.ElementalCatalyst]: { "name": "Elemental Catalyst", "critDamage": 15, "pieces": 5 },
  [SetEnum.LucentEchoes]: { "name": "Lucent Echoes", "critDamage": 11, "pieces": 5 },
  [SetEnum.Alkosh]: { "name": "Roar of Alkosh", "pen": 6000, "pieces": 5 },
  [SetEnum.CrimsonOath]: { "name": "Crimson Oath's Rive", "pen": 3541, "pieces": 5 },
  [SetEnum.Tremorscale]: { "name": "Tremorscale", "pen": 2640, "pieces": 2 },
  [SetEnum.RoaringOpportunist]: {
    name: "Perfected Roaring Opportunist",
    modifiers: [
      { modifier: ModifierEnum.MajorSlayer, rating: 2, scope: ScopeEnum.GROUP }
    ],
    notes: "Assumes Jorvuld's Guidance is used",
    pieces: 5
  },
  [SetEnum.SpellPowerCure]: {
    name: "Spell Power Cure",
    modifiers: [
      { modifier: ModifierEnum.MajorCourage, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PerfectedOlorime]: {
    name: "Perfected Vestment of Olorime",
    modifiers: [
      { modifier: ModifierEnum.MajorCourage, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PerfectedSaxhleelChampion]: {
    name: "Perfected Saxhleel Champion",
    modifiers: [
      { modifier: ModifierEnum.MajorForce, rating: 2, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.MasterArchitect]: {
    name: "Master Architect",
    modifiers: [
      { modifier: ModifierEnum.MajorSlayer, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.WarMachine]: {
    name: "War Machine",
    modifiers: [
      { modifier: ModifierEnum.MajorSlayer, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PearlescentWardSet]: {
    name: "Pearlescent Ward",
    modifiers: [
      { modifier: ModifierEnum.PearlescentWard, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PowerfulAssaultSet]: {
    name: "Powerful Assault",
    modifiers: [
      { modifier: ModifierEnum.PowerfulAssault, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.LordWardenSet]: {
    name: "Lord Warden",
    modifiers: [
      { modifier: ModifierEnum.LordWarden, rating: 3, scope: ScopeEnum.GROUP }
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
      { modifier: ModifierEnum.SymphonyOfBlades, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.OzezanTheInferno]: {
    name: "Ozezan the Inferno",
    modifiers: [
      { modifier: ModifierEnum.OzezansPlating, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.ArchDruid]: {
    name: "Archdruid Devyric",
    modifiers: [
      { modifier: ModifierEnum.MajorVulnerability, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.TurningTide]: {
    name: "Turning Tide",
    modifiers: [
      { modifier: ModifierEnum.MajorVulnerability, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.Yolnahkriin]: {
    name: "Claw of Yolnahkriin",
    modifiers: [
      { modifier: ModifierEnum.MinorCourage, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PillagersProfit]: {
    name: "Pillager's Profit",
    modifiers: [
      { modifier: ModifierEnum.MajorSlayer, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.BaronZaudrus]: {
    name: "Baron Zaudrus",
    modifiers: [
      { modifier: ModifierEnum.BaronZaudrusDebuff, rating: 2, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.Nazaray]: {
    name: "Nazaray",
    modifiers: [
      { modifier: ModifierEnum.NazarayEffect, rating: 2, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
};