/**
 * @typedef {import('./enums.js').SetEnum} SetEnum
 * @typedef {import('./enums.js').ModifierEnum} ModifierEnum
 * @typedef {import('./enums.js').SkillLineEnum} SkillLineEnum
 */

const SetEnum = Object.freeze({
  // Support sets with modifiers
  RoaringOpportunist: 'RoaringOpportunist',
  SpellPowerCure: 'SpellPowerCure',
  Olorime: 'Olorime',
  SaxhleelChampion: 'SaxhleelChampion',
  MasterArchitect: 'MasterArchitect',
  WarMachine: 'WarMachine',
  PearlescentWard: 'PearlescentWard',
  PowerfulAssault: 'PowerfulAssault',
  LordWardenSet: 'LordWardenSet',

  // Player DPS sets
  Spriggan: "Spriggan",
  ShatteredFate: "ShatteredFate",
  AdvancingYokeda: "AdvancingYokeda",
  SulXan: "SulXan",
  MorasScribeThesis: "MorasScribeThesis",
  ArmorSetPenPassive: "ArmorSetPenPassive",
  Arena1Piece: "Arena1Piece",
  WhorlOfTheDepths: "WhorlOfTheDepths",
  TideKingGaze: "TideKingGaze",
  AnsuulsTorment: "AnsuulsTorment",

  // Mythics
  HarpoonerKilt: "HarpoonerKilt",
  VelothiUrMage: "VelothiUrMage",
  PearlsOfEhlnofey: "PearlsOfEhlnofey",

  // Other support sets
  ElementalCatalyst: "ElementalCatalyst",
  LucentEchoes: "LucentEchoes",
  Alkosh: "Alkosh",
  CrimsonOath: "CrimsonOath",
  Tremorscale: "Tremorscale",
  JorvuldsGuidance: "JorvuldsGuidance",
  SymphonyOfBladesSet: "SymphonyOfBladesSet",
  OzezanTheInferno: "OzezanTheInferno",
  ArchDruid: "ArchDruid",
  TurningTide: "TurningTide",
  Yolnahkriin: "Yolnahkriin",

  // Not real sets, but indicators of sets with personal effects. Personal sets worn (e.g. 1-piece slimecraw, 4-piece Tideborn)
  PersonalCritSet: "PersonalCritSet",
  PersonalPenSet: "PersonalPenSet",
  PersonalMiscSet: "PersonalMiscSet",
});
