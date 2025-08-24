/**
 * @typedef {import('../enums/enums.js').SetEnum} SetEnum
 * @typedef {import('../enums/enums.js').ModifierEnum} ModifierEnum
 * @typedef {import('../enums/enums.js').SkillLineEnum} SkillLineEnum
 * @typedef {import('../enums/enums.js').ScopeEnum} ScopeEnum
 */

const setsData = {
  [SetEnum.SPRIGGAN]: { "name": "Spriggan's Thorns", "pen": 3450, "pieces": 5 },
  [SetEnum.SHATTERED_FATE]: { "name": "Shattered Fate", "pen": 7377, "pieces": 5 },
  [SetEnum.ADVANCING_YOKEDA]: { "name": "Advancing Yokeda", "critDamage": 0, "pieces": 5 },
  [SetEnum.SUL_XAN]: { "name": "Sul-Xan's Torment", "critDamage": 12, "pieces": 5 },
  [SetEnum.MORAS_SCRIBE_THESIS]: { "name": "Mora's Scribe Thesis", "critDamage": 12, "pieces": 5 },
  [SetEnum.WHORL_OF_THE_DEPTHS]: { "name": "Perfected Whorl of the Depths", "pen": 0, "critDamage": 0, "pieces": 5 },
  [SetEnum.TIDE_KING_GAZE]: { "name": "Tide-King's Gaze", "pen": 1487, "pieces": 5, "hide": true },
  [SetEnum.ANSUULS_TORMENT]: { "name": "Ansuul's Torment", "pen": 1487, "critDamage": 0, "pieces": 5, "hide": true },
  [SetEnum.PERSONAL_CRIT_SET]: { "name": "Personal Crit Set", "pieces": 1, "partial": true, "hide": true , tooltip: "Partial set that gives crit chance (e.g. 1-piece Slimecraw)" },
  [SetEnum.PERSONAL_PEN_SET]: { "name": "Personal Pen Set", "pieces": 1, "pen": 1487, "range": [0,1,2], "partial": true, tooltip: "Partial set that gives pen (e.g. 1-piece Arch Druid, Ansuul's, Tideborn)" },
  [SetEnum.PERSONAL_MISC_SET]: { "name": "Personal Misc Set", "pieces": 1, "partial": true, "hide": true , tooltip: "Partial set that gives some bonus (e.g. 1-piece Trainee)" },
};

const mythicsData = {
  [SetEnum.HARPOONER_KILT]: { "name": "Harpooner's Kilt", "critDamage": 10, "pieces": 1 },
  [SetEnum.VELOTHI_UR_MAGE]: { "name": "Velothi Amulet", "pen": 1650, "pieces": 1,
    modifiers: [
      { modifier: ModifierEnum.MINOR_FORCE, rating: 3, scope: ScopeEnum.SELF }
    ]
  },
  [SetEnum.PEARLS_OF_EHLNOFEY]: {
    name: "Pearls of Ehlnofey",
    modifiers: [
      { modifier: ModifierEnum.MAJOR_HEROISM, rating: 3, scope: ScopeEnum.SELF }
    ],
    pieces: 1
  }
};

const supportSetsData = {
  [SetEnum.ELEMENTAL_CATALYST]: { "name": "Elemental Catalyst", "critDamage": 15, "pieces": 5 },
  [SetEnum.LUCENT_ECHOES]: { "name": "Lucent Echoes", "critDamage": 11, "pieces": 5 },
  [SetEnum.ALKOSH]: { "name": "Roar of Alkosh", "pen": 6000, "pieces": 5 },
  [SetEnum.CRIMSON_OATH]: { "name": "Crimson Oath's Rive", "pen": 3541, "pieces": 5 },
  [SetEnum.TREMORSCALE]: { "name": "Tremorscale", "pen": 2640, "pieces": 2 },
  [SetEnum.ROARING_OPPORTUNIST]: {
    name: "Perfected Roaring Opportunist",
    modifiers: [
      { modifier: ModifierEnum.MAJOR_SLAYER, rating: 2, scope: ScopeEnum.GROUP }
    ],
    notes: "Assumes Jorvuld's Guidance is used",
    pieces: 5
  },
  [SetEnum.SPELL_POWER_CURE]: {
    name: "Spell Power Cure",
    modifiers: [
      { modifier: ModifierEnum.MAJOR_COURAGE, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PERFECTED_OLORIME]: {
    name: "Perfected Vestment of Olorime",
    modifiers: [
      { modifier: ModifierEnum.MAJOR_COURAGE, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PERFECTED_SAXHLEEL_CHAMPION]: {
    name: "Perfected Saxhleel Champion",
    modifiers: [
      { modifier: ModifierEnum.MAJOR_FORCE, rating: 2, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.MASTER_ARCHITECT]: {
    name: "Master Architect",
    modifiers: [
      { modifier: ModifierEnum.MAJOR_SLAYER, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.WAR_MACHINE]: {
    name: "War Machine",
    modifiers: [
      { modifier: ModifierEnum.MAJOR_SLAYER, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PEARLESCENT_WARD_SET]: {
    name: "Pearlescent Ward",
    modifiers: [
      { modifier: ModifierEnum.PEARLESCENT_WARD, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.POWERFUL_ASSAULT_SET]: {
    name: "Powerful Assault",
    modifiers: [
      { modifier: ModifierEnum.POWERFUL_ASSAULT, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.LORD_WARDEN_SET]: {
    name: "Lord Warden",
    modifiers: [
      { modifier: ModifierEnum.LORD_WARDEN, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.JORVULDS_GUIDANCE]: {
    name: "Jorvuld's Guidance",
    notes: "Increases the duration of all Major buffs, Minor buffs, and damage shields you apply to yourself and allies by 40%.",
    pieces: 5
  },
  [SetEnum.SYMPHONY_OF_BLADES_SET]: {
    name: "Symphony of Blades",
    modifiers: [
      { modifier: ModifierEnum.SYMPHONY_OF_BLADES, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.OZEZAN_THE_INFERNO]: {
    name: "Ozezan the Inferno",
    modifiers: [
      { modifier: ModifierEnum.OZEZANS_PLATING, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.ARCH_DRUID]: {
    name: "Archdruid Devyric",
    modifiers: [
      { modifier: ModifierEnum.MAJOR_VULNERABILITY, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.TURNING_TIDE]: {
    name: "Turning Tide",
    modifiers: [
      { modifier: ModifierEnum.MAJOR_VULNERABILITY, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.YOLNAHKRIIN]: {
    name: "Claw of Yolnahkriin",
    modifiers: [
      { modifier: ModifierEnum.MINOR_COURAGE, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PILLAGERS_PROFIT]: {
    name: "Pillager's Profit",
    modifiers: [
      { modifier: ModifierEnum.MAJOR_SLAYER, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.BARON_ZAUDRUS]: {
    name: "Baron Zaudrus",
    modifiers: [
      { modifier: ModifierEnum.BARON_ZAUDRUS_DEBUFF, rating: 2, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.NAZARAY]: {
    name: "Nazaray",
    modifiers: [
      { modifier: ModifierEnum.NAZARAY_EFFECT, rating: 2, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
};