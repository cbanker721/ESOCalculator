/**
 * A dictionary to hold the default "on" or "off" state for various selectable items.
 * The key is the enum for the item, and the value is a boolean or number representing the default state.
 * This centralizes the default configuration of the calculator's initial state.
 */
const SpecialModifierEnum = Object.freeze({
  ARMOR_SET_PEN_PASSIVE: "ARMOR_SET_PEN_PASSIVE",
  ARENA_WEAPON_1_PIECE: "ARENA_1_PIECE",
});

const classSkills = Object.fromEntries(Object.entries(skillsData).filter(([_, value]) => value.categorization === SkillTypeEnum.CLASS_SKILL));
const classPassives = Object.fromEntries(Object.entries(skillsData).filter(([_, value]) => value.categorization === SkillTypeEnum.CLASS_PASSIVE));
const weaponPassives = Object.fromEntries(Object.entries(skillsData).filter(([_, value]) => value.categorization === SkillTypeEnum.WEAPON_PASSIVE));
const armorPassives = Object.fromEntries(Object.entries(skillsData).filter(([_, value]) => value.categorization === SkillTypeEnum.ARMOUR_PASSIVE));
const supportSetsData = Object.fromEntries(Object.entries(setsData).filter(([_, value]) => value.setType === SetTypeEnum.SUPPORT_SET));
const mythicsData = Object.fromEntries(Object.entries(setsData).filter(([_, value]) => value.setType === SetTypeEnum.MYTHIC_SET));
const personalSetsData = Object.fromEntries(Object.entries(setsData).filter(([_, value]) => value.setType === SetTypeEnum.PERSONAL_SET));

const rosterDefaultExpectations = {
  [EnchantEnum.INFUSED_CRUSHER]: enchantData[EnchantEnum.INFUSED_CRUSHER],
  [CpEnum.PIERCING]: passiveCPData[CpEnum.PIERCING]
}


const RenderCategoryEnum = Object.freeze({
  UNIVERSAL: "RENDER_CATEGORY_UNIVERSAL",
  MODIFIERS: "RENDER_CATEGORY_MODIFIERS",
  ARMOUR_PASSIVES: "RENDER_CATEGORY_ARMOUR_PASSIVES",
  MYTHICS: "RENDER_CATEGORY_MYTHICS",
  CLASS_PASSIVES: "RENDER_CATEGORY_CLASS_PASSIVES",
  RACIAL_PASSIVES: "RENDER_CATEGORY_RACIAL_PASSIVES",
  PERSONAL_SETS: "RENDER_CATEGORY_PERSONAL_SETS",
  SUPPORT_SETS: "RENDER_CATEGORY_SUPPORT_SETS",
  CHAMPION_POINTS: "RENDER_CATEGORY_CHAMPION_POINTS",
  CLASS_SKILLS: "RENDER_CATEGORY_CLASS_SKILLS",
  WEAPON_PASSIVES: "RENDER_CATEGORY_WEAPON_PASSIVES",
  MUNDUS_STONES: "RENDER_CATEGORY_MUNDUS_STONES",
});

const categoryRenderConfig = {
  [RenderCategoryEnum.UNIVERSAL]: { limit: Infinity, name: "Universal", dataStore: rosterDefaultExpectations },
  [RenderCategoryEnum.RACIAL_PASSIVES]: { limit: Infinity, name: "Racial", dataStore: racialPassivesData, export: false },
  [RenderCategoryEnum.PERSONAL_SETS]: { limit: 2, name: "Item Sets", dataStore: personalSetsData },
  [RenderCategoryEnum.MYTHICS]: { limit: 1, name: "Mythics", dataStore: mythicsData, export: false },
  [RenderCategoryEnum.MUNDUS_STONES]: { limit: 1, name: "Mundus Stones", dataStore: mundusData, export: false },
  [RenderCategoryEnum.SUPPORT_SETS]: { limit: Infinity, name: "Support Sets", dataStore: supportSetsData },
  [RenderCategoryEnum.MODIFIERS]: { limit: Infinity, name: "Modifiers", dataStore: modifiersData },
  [RenderCategoryEnum.CHAMPION_POINTS]: { limit: Infinity, name: "Champion Points", dataStore: cpData },
  [RenderCategoryEnum.CLASS_SKILLS]: { limit: Infinity, name: "Class Skills", dataStore: classSkills, export: false },
  [RenderCategoryEnum.CLASS_PASSIVES]: { limit: Infinity, name: "Class Passives", dataStore: classPassives, export: false },
  [RenderCategoryEnum.WEAPON_PASSIVES]: { limit: Infinity, name: "Weapon Passives", dataStore: weaponPassives },
  [RenderCategoryEnum.ARMOUR_PASSIVES]: { limit: Infinity, name: "Armour Passives", dataStore: armorPassives }
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
