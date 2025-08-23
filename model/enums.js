const ClassEnum = Object.freeze({
  ARCANIST: "ARCANIST",
  DRAGONKNIGHT: "DRAGONKNIGHT",
  NECROMANCER: "NECROMANCER",
  NIGHTBLADE: "NIGHTBLADE",
  SORCERER: "SORCERER",
  TEMPLAR: "TEMPLAR",
  WARDEN: "WARDEN",
});

const CpEnum = Object.freeze({
  FightingFinesse: "FightingFinesse",
  Backstabber: "Backstabber",
  ForceOfNature: "ForceOfNature",
  Piercing: "Piercing",
});

const RoleEnum = Object.freeze({
  DPS: "DPS",
  SUPPORT_DPS: "SUPPORT_DPS",
  HEALER: "HEALER",
  TANK: "TANK",
});

const ModifierEnum = Object.freeze({
  // Penetration Debuffs
  MajorBreach: 'MajorBreach',
  MinorBreach: 'MinorBreach',

  // Critical Damage Buffs
  MajorForce: 'MajorForce',
  MinorForce: 'MinorForce',
  MajorBrittle: 'MajorBrittle',
  MinorBrittle: 'MinorBrittle',

  // Target Damage Taken Debuffs
  MajorVulnerability: 'MajorVulnerability',
  MinorVulnerability: 'MinorVulnerability',

  // Damage Done Buffs
  MajorBerserk: 'MajorBerserk',
  MinorBerserk: 'MinorBerserk',
  MajorSlayer: 'MajorSlayer',
  MinorSlayer: 'MinorSlayer',
  Empower: 'Empower',

  // Weapon/Spell Damage Buffs
  MajorCourage: 'MajorCourage',
  MinorCourage: 'MinorCourage',
  PearlescentWard: 'PearlescentWard',
  PowerfulAssault: 'PowerfulAssault',
  MajorBrutality: 'MajorBrutality',
  MinorBrutality: 'MinorBrutality',
  MajorSorcery: 'MajorSorcery',
  MinorSorcery: 'MinorSorcery',

  // Resource & Utility Buffs
  WarHorn: 'WarHorn',

  // Critical Chance Buffs
  MajorSavagery: 'MajorSavagery',
  MinorSavagery: 'MinorSavagery',
  MajorProphecy: 'MajorProphecy',
  MinorProphecy: 'MinorProphecy',

  // Defensive Buffs
  MajorProtection: 'MajorProtection',
  MinorProtection: 'MinorProtection',
  MajorAegis: 'MajorAegis',
  MinorAegis: 'MinorAegis',
  LordWarden: 'LordWarden',
});

const SetEnum = Object.freeze({
  PerfectedRoaringOpportunist: 'PerfectedRoaringOpportunist',
  SpellPowerCure: 'SpellPowerCure',
  PerfectedOlorime: 'PerfectedOlorime',
  PerfectedSaxhleelChampion: 'PerfectedSaxhleelChampion',
  MasterArchitect: 'MasterArchitect',
  WarMachine: 'WarMachine',
  PearlescentWardSet: 'PearlescentWardSet',
  PowerfulAssaultSet: 'PowerfulAssaultSet',
  LordWardenSet: 'LordWardenSet',
});

const MundusEnum = Object.freeze({
  TheApprentice: "TheApprentice",
  TheAtronach: "TheAtronach",
  TheLady: "TheLady",
  TheLord: "TheLord",
  TheLover: "TheLover",
  TheMage: "TheMage",
  TheRitual: "TheRitual",
  TheSerpent: "TheSerpent",
  TheShadow: "TheShadow",
  TheSteed: "TheSteed",
  TheThief: "TheThief",
  TheTower: "TheTower",
  TheWarrior: "TheWarrior",
});

const AllianceEnum = Object.freeze({
  DAGGERFALL_COVENANT: "DAGGERFALL_COVENANT",
  ALDMERI_DOMINION: "ALDMERI_DOMINION",
  EBONHEART_PACT: "EBONHEART_PACT",
  CYRODIIL: "CYRODIIL",
});

const RaceEnum = Object.freeze({
  ARGONIAN: "ARGONIAN",
  BRETON: "BRETON",
  DARK_ELF: "DARK_ELF",
  HIGH_ELF: "HIGH_ELF",
  IMPERIAL: "IMPERIAL",
  KHAJIIT: "KHAJIIT",
  NORD: "NORD",
  ORC: "ORC",
  REDGUARD: "REDGUARD",
  WOOD_ELF: "WOOD_ELF",
});

