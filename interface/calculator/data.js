/**
 * A dictionary to hold the default "on" or "off" state for various selectable items.
 * The key is the enum for the item, and the value is a boolean or number representing the default state.
 * This centralizes the default configuration of the calculator's initial state.
 */
const SpecialModifierEnum = Object.freeze({
  ARMOR_SET_PEN_PASSIVE: "ARMOR_SET_PEN_PASSIVE",
  ARENA_WEAPON_1_PIECE: "ARENA_1_PIECE",
});

const RenderCategoryEnum = Object.freeze({
  UNIVERSAL: "universal",
  MODIFIERS: "modifiersData",
  ARMOUR_PASSIVES: "armorPassives",
  MYTHICS: "mythicsData",
  CLASS_PASSIVES: "classPassives",
  RACIAL_PASSIVES: "racialPassivesData",
  PERSONAL_SETS: "setsData",
  SUPPORT_SETS: "supportSetsData",
  CHAMPION_POINTS: "cpData",
  CLASS_SKILLS: "classSkills",
  WEAPON_PASSIVES: "weaponPassives",
  MUNDUS_STONES: "mundusData",
});

const rosterDefaultExpectations = {
  [EnchantEnum.INFUSED_CRUSHER]: enchantData[EnchantEnum.INFUSED_CRUSHER],
  [CpEnum.PIERCING]: passiveCPData[CpEnum.PIERCING]
}


const calculatorUiConfig = {
  [SpecialModifierEnum.ARMOR_SET_PEN_PASSIVE]: { "name": "Armor-set Passive", "pen": 1487, "type": "dropdown", "range": [0, 1, 2, 3], tooltip: "Pen from armor sets like Arch Druid (1-piece), Ansuul's Torment, and Tideborn" },
  [SpecialModifierEnum.ARENA_WEAPON_1_PIECE]: { "name": "Arena 1-piece", "pen": 1190, "pieces": 1, "tooltip": "Pen from arena weapons like Perfected Maelstrom staff" },

  [CpEnum.FIGHTING_FINESSE]: {"default": true },
  [CpEnum.FORCE_OF_NATURE]: {"default": 0 },
  [CpEnum.PIERCING]: {"default": true },

  [EnchantEnum.INFUSED_CRUSHER]: {"default": true },

  [ModifierEnum.MAJOR_BREACH]: { "default": true },
  [ModifierEnum.MINOR_BREACH]: { "default": true },

  // Critical Damage Buffs
  [ModifierEnum.MINOR_FORCE]: {"default": true },
  [ModifierEnum.MINOR_BRITTLE]: {"default": true, },

  // From sets.js
  [SetEnum.VELOTHI_UR_MAGE]: {"default": true, "triggers": [{ "key": ModifierEnum.MinorForce, "action": "check" }], },
  [SetEnum.LUCENT_ECHOES]: {"default": true },
  [SkillEnum.TWIN_BLADE_BLUNT_AXES]: {"default": 0 },
  [SkillEnum.TWIN_BLADE_BLUNT_MACES]: {"default": 0 },

  [SkillEnum.CONCENTRATION]: {"default": 1 },
  [SkillEnum.DEXTERITY]: { "default": 6 },

  [SkillEnum.SPLINTERED_SECRETS]: { "default": 2 },

  [SkillEnum.ADVANCED_SPECIES]: { "default": 0 },
  [SkillEnum.DISMEMBER]: { "default": true },
  [SkillEnum.FATED_FORTUNE]: { "default": true},
  [SkillEnum.HEMORRHAGE]: { "default": true },
  [SkillEnum.PIERCING_SPEAR]: { "default": true },

  [TraitEnum.SHARPENED]: {"sourceUrl": "https://eso-hub.com/en/traits", "tooltip": "Increases Physical and Spell Penetration. The value is per weapon with the Sharpened trait. (Base value shown is for a 1H weapon).", "hyperlink": "https://en.uesp.net/wiki/Online:Sharpened" },
}
