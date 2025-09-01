/**
 * @typedef {import('../enums/enums.js').SetEnum} SetEnum
 * @typedef {import('../enums/enums.js').ModifierEnum} ModifierEnum
 * @typedef {import('../enums/enums.js').SkillLineEnum} SkillLineEnum
 * @typedef {import('../enums/enums.js').ScopeEnum} ScopeEnum
 */

const setsData = {
  [SetEnum.SPRIGGAN]: { name: "Spriggan's Thorns", pen: 3450, "pieces": 5, setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.SHATTERED_FATE]: { "name": "Shattered Fate", "pen": 7377, "pieces": 5, setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.ADVANCING_YOKEDA]: { "name": "Advancing Yokeda", "critDamage": 0, "pieces": 5, setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.SUL_XAN]: { "shortName": "Sul-Axan", "name": "Sul-Xan's Torment", "critDamage": 12, "pieces": 5, setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.MORAS_SCRIBE_THESIS]: { "name": "Mora's Scribe Thesis", "critDamage": 12, "pieces": 5, setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.WHORL_OF_THE_DEPTHS]: { "shortName": "Whorl", "name": "Whorl of the Depths", "pen": 0, "critDamage": 0, "pieces": 5, setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.TIDE_BORN_WILDSTALKER]: { "shortName": "Tide Born", "name": "Tideborn Wildstalker", "pen": 1487, "pieces": 5, "hide": true, setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.ANSUULS_TORMENT]: { "shortName": "Ansuul", "name": "Ansuul's Torment", "pen": 1487, "critDamage": 0, "pieces": 5, "hide": true, setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.PERSONAL_CRIT_SET]: { "name": "Personal Crit Set", "pieces": 1, "partial": true, "hide": true , tooltip: "Partial set that gives crit chance (e.g. 1-piece Slimecraw)", setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.PERSONAL_PEN_SET]: { "name": "Personal Pen Set", "pieces": 1, "pen": 1487, "range": [0,1,2], "partial": true, tooltip: "Partial set that gives pen (e.g. 1-piece Arch Druid, Ansuul's, Tideborn)", setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.PERSONAL_MISC_SET]: { "name": "Personal Misc Set", "pieces": 1, "partial": true, "hide": true , tooltip: "Partial set that gives some bonus (e.g. 1-piece Trainee)", setType: SetTypeEnum.PERSONAL_SET },
  [SetEnum.HARPOONER_KILT]: { "shortName": "Harpooner", "name": "Harpooner's Kilt", "critDamage": 10, "pieces": 1, setType: SetTypeEnum.MYTHIC_SET },
  [SetEnum.VELOTHI_UR_MAGE]: { "shortName": "Velothi", "name": "Velothi Amulet", "pen": 1650, "pieces": 1, setType: SetTypeEnum.MYTHIC_SET,
    modifiers: [
      { modifier: ModifierEnum.MINOR_FORCE, rating: 3, scope: ScopeEnum.SELF }
    ]
  },
  [SetEnum.PEARLS_OF_EHLNOFEY]: {
    shortName: "PoE",
    name: "Pearls of Ehlnofey",
    setType: SetTypeEnum.MYTHIC_SET,
    modifiers: [
      { modifier: ModifierEnum.MAJOR_HEROISM, rating: 3, scope: ScopeEnum.SELF }
    ],
    pieces: 1
  },
  [SetEnum.ELEMENTAL_CATALYST]: { "shortName": "EC", "name": "Elemental Catalyst", "critDamage": 15, "pieces": 5, setType: SetTypeEnum.SUPPORT_SET },
  [SetEnum.LUCENT_ECHOES]: { "shortName": "LE",  "name": "Lucent Echoes", "critDamage": 11, "pieces": 5, setType: SetTypeEnum.SUPPORT_SET },
  [SetEnum.ALKOSH]: { "shortName": "Alkosh", "name": "Roar of Alkosh", "pen": 6000, "pieces": 5, setType: SetTypeEnum.SUPPORT_SET },
  [SetEnum.CRIMSON_OATH]: { "shortName": "Crimson", "name": "Crimson Oath's Rive", "pen": 3541, "pieces": 5, setType: SetTypeEnum.SUPPORT_SET },
  [SetEnum.TREMORSCALE]: { "shortName": "Trem", "name": "Tremorscale", "pen": 2640, "pieces": 2, setType: SetTypeEnum.SUPPORT_SET },
  [SetEnum.ROARING_OPPORTUNIST]: {
    shortName: "RO", 
    name: "Perfected Roaring Opportunist",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.MAJOR_SLAYER, rating: 2, scope: ScopeEnum.GROUP }
    ],
    notes: "Assumes Jorvuld's Guidance is used",
    pieces: 5
  },
  [SetEnum.SPELL_POWER_CURE]: {
    shortName: "SPC", 
    name: "Spell Power Cure",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.MAJOR_COURAGE, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PERFECTED_OLORIME]: {
    shortName: "Olo",
    name: "Perfected Vestment of Olorime",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.MAJOR_COURAGE, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PERFECTED_SAXHLEEL_CHAMPION]: {
    shortName: "Sax", 
    name: "Perfected Saxhleel Champion",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.MAJOR_FORCE, rating: 2, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.MASTER_ARCHITECT]: {
    shortName: "MA",
    name: "Master Architect",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.MAJOR_SLAYER, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.WAR_MACHINE]: {
    shortName: "WM",
    name: "War Machine",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.MAJOR_SLAYER, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PEARLESCENT_WARD]: {
    shortName: "PW",
    name: "Pearlescent Ward",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.PEARLESCENT_WARD, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.POWERFUL_ASSAULT]: {
    shortName: "PA",
    name: "Powerful Assault",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.POWERFUL_ASSAULT, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.LORD_WARDEN]: {
    name: "Lord Warden",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.LORD_WARDEN, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.JORVULDS_GUIDANCE]: {
    shortName: "JO",
    name: "Jorvuld's Guidance",
    setType: SetTypeEnum.SUPPORT_SET,
    notes: "Increases the duration of all Major buffs, Minor buffs, and damage shields you apply to yourself and allies by 40%.",
    pieces: 5
  },
  [SetEnum.TURNING_TIDE]: {
    shortName: "TT",
    name: "Turning Tide",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.MAJOR_VULNERABILITY, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.YOLNAHKRIIN]: {
    shortName: "Yoln",
    name: "Claw of Yolnahkriin",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.MINOR_COURAGE, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  [SetEnum.PILLAGERS_PROFIT]: {
    shortName: "PP",
    name: "Pillager's Profit",
    setType: SetTypeEnum.SUPPORT_SET,
    modifiers: [
      { modifier: ModifierEnum.MAJOR_SLAYER, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 5
  },
  
  [SetEnum.SYMPHONY_OF_BLADES]: {
    shortName: "Sym",
    name: "Symphony of Blades",
    setType: SetTypeEnum.MONSTER_SET,
    modifiers: [
      { modifier: ModifierEnum.SYMPHONY_OF_BLADES, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.OZEZAN_THE_INFERNO]: {
    shortName: "Oze",
    name: "Ozezan the Inferno",
    setType: SetTypeEnum.MONSTER_SET,
    modifiers: [
      { modifier: ModifierEnum.OZEZANS_PLATING, rating: 3, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.ARCH_DRUID]: {
    shortName: "AD",
    name: "Archdruid Devyric",
    setType: SetTypeEnum.MONSTER_SET,
    modifiers: [
      { modifier: ModifierEnum.MAJOR_VULNERABILITY, rating: 1, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
  [SetEnum.BARON_ZAUDRUS]: {
    shortName: "Baron",
    name: "Baron Zaudrus",
    setType: SetTypeEnum.MONSTER_SET,
    modifiers: [
      { modifier: ModifierEnum.BARON_ZAUDRUS, rating: 2, scope: ScopeEnum.SELF }
    ],
    pieces: 2
  },
  [SetEnum.NAZARAY]: {
    shortName: "Naz",
    name: "Nazaray",
    setType: SetTypeEnum.MONSTER_SET,
    modifiers: [
      { modifier: ModifierEnum.NAZARAY, rating: 2, scope: ScopeEnum.GROUP }
    ],
    pieces: 2
  },
};