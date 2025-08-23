const RacialPassiveEnum = Object.freeze({
  FELINE_AMBUSH: "FELINE_AMBUSH",
  HUNTERS_EYE: "HUNTERS_EYE",
});

const SkillTypeEnum = Object.freeze({
  // Non-class
  CLASS_SKILL: 'SKILL_TYPE_CLASS_SKILL',
  CLASS_PASSIVE: 'SKILL_TYPE_CLASS_PASSIVE',
  WEAPON_PASSIVE: 'SKILL_TYPE_WEAPON_PASSIVE',
  ARMOUR_PASSIVE: 'SKILL_TYPE_ARMOUR_PASSIVE',
});

const SkillEnum = Object.freeze({
  // Class Skills
  CRYSTAL_WEAPON: "CRYSTAL_WEAPON",
  RUNIC_SUNDER: "RUNIC_SUNDER",
  // Class Passives
  ADVANCED_SPECIES: "ADVANCED_SPECIES",
  DISMEMBER: "DISMEMBER",
  ENERGIZED: "ENERGIZED",
  FATED_FORTUNE: "FATED_FORTUNE",
  HEMORRHAGE: "HEMORRHAGE",
  PIERCING_COLD: "PIERCING_COLD",
  PIERCING_SPEAR: "PIERCING_SPEAR",
  SPLINTERED_SECRETS: "SPLINTERED_SECRETS",
  WORLD_IN_RUIN: "WORLD_IN_RUIN",
  // Weapon Passives
  HEAVY_WEAPONS_AXE: "HEAVY_WEAPONS_AXE",
  HEAVY_WEAPONS_MACE: "HEAVY_WEAPONS_MACE",
  TWIN_BLADE_BLUNT_AXES: "TWIN_BLADE_BLUNT_AXES",
  TWIN_BLADE_BLUNT_MACES: "TWIN_BLADE_BLUNT_MACES",
  SHARPENED: "SHARPENED",
  // Armor Passives
  CONCENTRATION: "CONCENTRATION",
  DEXTERITY: "DEXTERITY",
});

const SkillLineEnum = Object.freeze({
  // Non-class
  FIGHTERS_GUILD: 'FIGHTERS_GUILD',
  MAGES_GUILD: 'MAGES_GUILD',
  UNDAUNTED: 'UNDAUNTED',
  THIEVES_GUILD: 'THIEVES_GUILD',
  PSIJIC_ORDER: 'PSIJIC_ORDER',
  DARK_BROTHERHOOD: 'DARK_BROTHERHOOD',
  VAMPIRE: 'VAMPIRE',
  WEREWOLF: 'WEREWOLF',
  SOUL_MAGIC: 'SOUL_MAGIC',
  ASSAULT: 'ASSAULT',
  SUPPORT: 'SUPPORT',

  // Arcanist
  HERALD_OF_THE_TOME: "HERALD_OF_THE_TOME",
  SOLDIER_OF_APOCRYPHA: "SOLDIER_OF_APOCRYPHA",
  CURATIVE_RUNEFORMS: "CURATIVE_RUNEFORMS",
  // Dragonknight
  ARDENT_FLAME: "ARDENT_FLAME",
  DRACONIC_POWER: "DRACONIC_POWER",
  EARTHEN_HEART: "EARTHEN_HEART",
  // Necromancer
  GRAVE_LORD: "GRAVE_LORD",
  BONE_TYRANT: "BONE_TYRANT",
  LIVING_DEATH: "LIVING_DEATH",
  // Nightblade
  ASSASSINATION: "ASSASSINATION",
  SHADOW: "SHADOW",
  SIPHONING: "SIPHONING",
  // Sorcerer
  DAEDRIC_SUMMONING: "DAEDRIC_SUMMONING",
  DARK_MAGIC: "DARK_MAGIC",
  STORM_CALLING: "STORM_CALLING",
  // Templar
  AEDRIC_SPEAR: "AEDRIC_SPEAR",
  DAWNS_WRATH: "DAWNS_WRATH",
  RESTORING_LIGHT: "RESTORING_LIGHT",
  // Warden
  ANIMAL_COMPANIONS: "ANIMAL_COMPANIONS",
  GREEN_BALANCE: "GREEN_BALANCE",
  WINTERS_EMBRACE: "WINTERS_EMBRACE",
  // Weapons & Armor
  TWO_HANDED: "TWO_HANDED",
  ONE_HAND_AND_SHIELD: "ONE_HAND_AND_SHIELD",
  DUAL_WIELD: "DUAL_WIELD",
  BOW: "BOW",
  DESTRUCTION_STAFF: "DESTRUCTION_STAFF",
  RESTORATION_STAFF: "RESTORATION_STAFF",
  LIGHT_ARMOR: "LIGHT_ARMOR",
  MEDIUM_ARMOR: "MEDIUM_ARMOR",
  HEAVY_ARMOR: "HEAVY_ARMOR",
});

const skillLinesData = {
  // Arcanist
  [SkillLineEnum.HERALD_OF_THE_TOME]: { "name": "Herald of the Tome", "type": "class", "class": ClassEnum.ARCANIST, "skills": [SkillEnum.FATED_FORTUNE, SkillEnum.SPLINTERED_SECRETS, SkillEnum.RUNIC_SUNDER], "sourceUrl": "https://en.uesp.net/wiki/Online:Herald_of_the_Tome" },
  [SkillLineEnum.SOLDIER_OF_APOCRYPHA]: { "name": "Soldier of Apocrypha", "type": "class", "class": ClassEnum.ARCANIST, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Soldier_of_Apocrypha" },
  [SkillLineEnum.CURATIVE_RUNEFORMS]: { "name": "Curative Runeforms", "type": "class", "class": ClassEnum.ARCANIST, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Curative_Runeforms" },
  // Dragonknight
  [SkillLineEnum.ARDENT_FLAME]: { "name": "Ardent Flame", "type": "class", "class": ClassEnum.DRAGONKNIGHT, "skills": [SkillEnum.WORLD_IN_RUIN], "sourceUrl": "https://en.uesp.net/wiki/Online:Ardent_Flame" },
  [SkillLineEnum.DRACONIC_POWER]: { "name": "Draconic Power", "type": "class", "class": ClassEnum.DRAGONKNIGHT, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Draconic_Power" },
  [SkillLineEnum.EARTHEN_HEART]: { "name": "Earthen Heart", "type": "class", "class": ClassEnum.DRAGONKNIGHT, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Earthen_Heart" },
  // Necromancer
  [SkillLineEnum.GRAVE_LORD]: { "name": "Grave Lord", "type": "class", "class": ClassEnum.NECROMANCER, "skills": [SkillEnum.DISMEMBER], "sourceUrl": "https://en.uesp.net/wiki/Online:Grave_Lord" },
  [SkillLineEnum.BONE_TYRANT]: { "name": "Bone Tyrant", "type": "class", "class": ClassEnum.NECROMANCER, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Bone_Tyrant" },
  [SkillLineEnum.LIVING_DEATH]: { "name": "Living Death", "type": "class", "class": ClassEnum.NECROMANCER, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Living_Death" },
  // Nightblade
  [SkillLineEnum.ASSASSINATION]: { "name": "Assassination", "type": "class", "class": ClassEnum.NIGHTBLADE, "skills": [SkillEnum.HEMORRHAGE], "sourceUrl": "https://en.uesp.net/wiki/Online:Assassination" },
  [SkillLineEnum.SHADOW]: { "name": "Shadow", "type": "class", "class": ClassEnum.NIGHTBLADE, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Shadow" },
  [SkillLineEnum.SIPHONING]: { "name": "Siphoning", "type": "class", "class": ClassEnum.NIGHTBLADE, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Siphoning" },
  // Sorcerer
  [SkillLineEnum.DAEDRIC_SUMMONING]: { "name": "Daedric Summoning", "type": "class", "class": ClassEnum.SORCERER, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Daedric_Summoning" },
  [SkillLineEnum.DARK_MAGIC]: { "name": "Dark Magic", "type": "class", "class": ClassEnum.SORCERER, "skills": [SkillEnum.CRYSTAL_WEAPON], "sourceUrl": "https://en.uesp.net/wiki/Online:Dark_Magic" },
  [SkillLineEnum.STORM_CALLING]: { "name": "Storm Calling", "type": "class", "class": ClassEnum.SORCERER, "skills": [SkillEnum.ENERGIZED], "sourceUrl": "https://en.uesp.net/wiki/Online:Storm_Calling" },
  // Templar
  [SkillLineEnum.AEDRIC_SPEAR]: { "name": "Aedric Spear", "type": "class", "class": ClassEnum.TEMPLAR, "skills": [SkillEnum.PIERCING_SPEAR], "sourceUrl": "https://en.uesp.net/wiki/Online:Aedric_Spear" },
  [SkillLineEnum.DAWNS_WRATH]: { "name": "Dawn's Wrath", "type": "class", "class": ClassEnum.TEMPLAR, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Dawn%27s_Wrath" },
  [SkillLineEnum.RESTORING_LIGHT]: { "name": "Restoring Light", "type": "class", "class": ClassEnum.TEMPLAR, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Restoring_Light" },
  // Warden
  [SkillLineEnum.ANIMAL_COMPANIONS]: { "name": "Animal Companions", "type": "class", "class": ClassEnum.WARDEN, "skills": [SkillEnum.ADVANCED_SPECIES], "sourceUrl": "https://en.uesp.net/wiki/Online:Animal_Companions" },
  [SkillLineEnum.GREEN_BALANCE]: { "name": "Green Balance", "type": "class", "class": ClassEnum.WARDEN, "skills": [], "sourceUrl": "https://en.uesp.net/wiki/Online:Green_Balance" },
  [SkillLineEnum.WINTERS_EMBRACE]: { "name": "Winter's Embrace", "type": "class", "class": ClassEnum.WARDEN, "skills": [SkillEnum.PIERCING_COLD], "sourceUrl": "https://en.uesp.net/wiki/Online:Winter%27s_Embrace" },
  // Weapons
  [SkillLineEnum.TWO_HANDED]: { "name": "Two Handed", "type": "weapon", "skills": [SkillEnum.HEAVY_WEAPONS_AXE, SkillEnum.HEAVY_WEAPONS_MACE], "sourceUrl": "https://eso-hub.com/en/skills/weapon/two-handed" },
  [SkillLineEnum.ONE_HAND_AND_SHIELD]: { "name": "One Hand and Shield", "type": "weapon", "skills": [], "sourceUrl": "https://eso-hub.com/en/skills/weapon/one-hand-and-shield" },
  [SkillLineEnum.DUAL_WIELD]: { "name": "Dual Wield", "type": "weapon", "skills": [SkillEnum.TWIN_BLADE_BLUNT_AXES, SkillEnum.TWIN_BLADE_BLUNT_MACES], "sourceUrl": "https://eso-hub.com/en/skills/weapon/dual-wield" },
  [SkillLineEnum.BOW]: { "name": "Bow", "type": "weapon", "skills": [], "sourceUrl": "https://eso-hub.com/en/skills/weapon/bow" },
  [SkillLineEnum.DESTRUCTION_STAFF]: { "name": "Destruction Staff", "type": "weapon", "skills": [], "sourceUrl": "https://eso-hub.com/en/skills/weapon/destruction-staff" },
  [SkillLineEnum.RESTORATION_STAFF]: { "name": "Restoration Staff", "type": "weapon", "skills": [], "sourceUrl": "https://eso-hub.com/en/skills/weapon/restoration-staff" },
  // Armor
  [SkillLineEnum.LIGHT_ARMOR]: { "name": "Light Armor", "type": "armor", "skills": [SkillEnum.CONCENTRATION], "sourceUrl": "https://eso-hub.com/en/skills/armor/light-armor" },
  [SkillLineEnum.MEDIUM_ARMOR]: { "name": "Medium Armor", "type": "armor", "skills": [SkillEnum.DEXTERITY], "sourceUrl": "https://eso-hub.com/en/skills/armor/medium-armor" },
  [SkillLineEnum.HEAVY_ARMOR]: { "name": "Heavy Armor", "type": "armor", "skills": [], "sourceUrl": "https://eso-hub.com/en/skills/armor/heavy-armor" }
};

const racialPassivesData = {
  [RacialPassiveEnum.FELINE_AMBUSH]: { "name": "Feline Ambush", "critDamage": 12, "race": RaceEnum.KHAJIIT },
  [RacialPassiveEnum.HUNTERS_EYE]: { "name": "Hunter's Eye", "pen": 950, "race": RaceEnum.WOOD_ELF }
};

const skillsData = {
  // Class Skills
  [SkillEnum.CRYSTAL_WEAPON]: { "name": "Crystal Weapon", "pen": 1000, "skillLine": SkillLineEnum.DARK_MAGIC, "class": ClassEnum.SORCERER, "categorization": SkillTypeEnum.CLASS_SKILL, "sourceUrl": "https://eso-hub.com/en/skills/sorcerer", "tooltip": "Reduces enemy armor by 1000.", "hyperlink": "https://en.uesp.net/wiki/Online:Crystal_Weapon" },
  [SkillEnum.RUNIC_SUNDER]: { "name": "Runic Sunder", "pen": 2200, "skillLine": SkillLineEnum.HERALD_OF_THE_TOME, "class": ClassEnum.ARCANIST, "categorization": SkillTypeEnum.CLASS_SKILL, "sourceUrl": "https://eso-hub.com/en/skills/arcanist", "tooltip": "Reduces enemy armor by 2200.", "hyperlink": "https://en.uesp.net/wiki/Online:Rune_Blades" },
  // Class Passives
  [SkillEnum.ADVANCED_SPECIES]: { "name": "Adv. Species", "critDamage": 5, "range": [0, 1, 2, 3, 4, 5, 6], "skillLine": SkillLineEnum.ANIMAL_COMPANIONS, "class": ClassEnum.WARDEN, "categorization": SkillTypeEnum.CLASS_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/warden", "tooltip": "Increase your Critical Damage by 5% for every Animal Companions ability slotted.", "hyperlink": "https://en.uesp.net/wiki/Online:Advanced_Species" },
  [SkillEnum.DISMEMBER]: { "name": "Dismember", "pen": 3271, "skillLine": SkillLineEnum.GRAVE_LORD, "class": ClassEnum.NECROMANCER, "categorization": SkillTypeEnum.CLASS_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/necromancer", "tooltip": "While a Grave Lord ability is active, your Spell and Physical Penetration are increased by 3271.", "hyperlink": "https://en.uesp.net/wiki/Online:Dismember" },
  [SkillEnum.ENERGIZED]: { "name": "Energized", "critDamage": 0, "skillLine": SkillLineEnum.STORM_CALLING, "class": ClassEnum.SORCERER, "categorization": SkillTypeEnum.CLASS_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/sorcerer", "tooltip": "Increase your Physical and Shock Damage done by 5%.", "hyperlink": "https://en.uesp.net/wiki/Online:Energized" },
  [SkillEnum.FATED_FORTUNE]: { "name": "Fated Fortune", "critDamage": 12, "skillLine": SkillLineEnum.HERALD_OF_THE_TOME, "class": ClassEnum.ARCANIST, "categorization": SkillTypeEnum.CLASS_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/arcanist", "tooltip": "Warp fate when you generate or consume Crux, increasing your Critical Damage and Critical Healing by 12% for 7 seconds.", "hyperlink": "https://en.uesp.net/wiki/Online:Fated_Fortune" },
  [SkillEnum.HEMORRHAGE]: { "name": "Hemorrhage", "critDamage": 10, "skillLine": SkillLineEnum.ASSASSINATION, "class": ClassEnum.NIGHTBLADE, "categorization": SkillTypeEnum.CLASS_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/nightblade", "tooltip": "Increase your Critical Damage by 10% when you deal a Critical Strike from Flank or from behind.", "hyperlink": "https://en.uesp.net/wiki/Online:Hemorrhage" },
  [SkillEnum.PIERCING_COLD]: { "name": "Piercing Cold", "critDamage": 0, "skillLine": SkillLineEnum.WINTERS_EMBRACE, "class": ClassEnum.WARDEN, "categorization": SkillTypeEnum.CLASS_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/warden", "tooltip": "Increase your Physical and Frost Damage done by 6%.", "hyperlink": "https://en.uesp.net/wiki/Online:Piercing_Cold" },
  [SkillEnum.PIERCING_SPEAR]: { "name": "Piercing Spear", "critDamage": 12, "skillLine": SkillLineEnum.AEDRIC_SPEAR, "class": ClassEnum.TEMPLAR, "categorization": SkillTypeEnum.CLASS_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/templar", "tooltip": "With an Aedric Spear ability slotted, increases your Critical Damage by 12% and your damage done to blocking players by 12%.", "hyperlink": "https://en.uesp.net/wiki/Online:Piercing_Spear" },
  [SkillEnum.SPLINTERED_SECRETS]: { "name": "Splintered Secrets", "pen": 1240, "range": [0, 1, 2, 3, 4, 5, 6, 6], "skillLine": SkillLineEnum.HERALD_OF_THE_TOME, "class": ClassEnum.ARCANIST, "categorization": SkillTypeEnum.CLASS_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/arcanist", "tooltip": "What they don't know can kill them. Increase your Physical and Spell Penetration by 1240 per Herald of the Tome ability slotted.", "hyperlink": "https://en.uesp.net/wiki/Online:Splintered_Secrets" },
  [SkillEnum.WORLD_IN_RUIN]: { "name": "World in Ruin", "critDamage": 0, "skillLine": SkillLineEnum.ARDENT_FLAME, "class": ClassEnum.DRAGONKNIGHT, "categorization": SkillTypeEnum.CLASS_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/dragonknight", "tooltip": "Increase your damage done with Flame and Poison area of effect abilities by 6%.", "hyperlink": "https://en.uesp.net/wiki/Online:World_in_Ruin" },
  
  // Weapon Passives
  [SkillEnum.HEAVY_WEAPONS_AXE]: { "name": "2H Weapon (Axe)", "critDamage": 12, "skillLine": SkillLineEnum.TWO_HANDED, "categorization": SkillTypeEnum.WEAPON_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/weapon/two-handed", "tooltip": "While you have a Two Handed Axe equipped, your Critical Damage is increased by 12%.", "hyperlink": "https://en.uesp.net/wiki/Online:Heavy_Weapons" },
  [SkillEnum.HEAVY_WEAPONS_MACE]: { "name": "2H Weapon (Mace)", "pen": 2974, "skillLine": SkillLineEnum.TWO_HANDED, "categorization": SkillTypeEnum.WEAPON_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/weapon/two-handed", "tooltip": "While you have a Two Handed Mace equipped, your attacks ignore 2974 of the target's Physical and Spell Resistance.", "hyperlink": "https://en.uesp.net/wiki/Online:Heavy_Weapons" },
  [SkillEnum.TWIN_BLADE_BLUNT_AXES]: { "name": "Dual Wield (Axe)", "critDamage": 6, "range": [0, 1, 2],  "skillLine": SkillLineEnum.DUAL_WIELD, "categorization": SkillTypeEnum.WEAPON_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/weapon/dual-wield", "tooltip": "While you have an Axe equipped in your main hand or off hand, your Critical Damage is increased by 6%.", "hyperlink": "https://en.uesp.net/wiki/Online:Twin_Blade_and_Blunt" },
  [SkillEnum.TWIN_BLADE_BLUNT_MACES]: { "name": "Dual Wield (Mace)", "pen": 1487, "range": [0, 1, 2], "skillLine": SkillLineEnum.DUAL_WIELD, "categorization": SkillTypeEnum.WEAPON_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/weapon/dual-wield", "tooltip": "While you have a Mace equipped in your main hand or off hand, your attacks ignore 1487 of the target's Physical and Spell Resistance.", "hyperlink": "https://en.uesp.net/wiki/Online:Twin_Blade_and_Blunt" },

  // Armor Passives
  [SkillEnum.CONCENTRATION]: { "name": "Concentration", "pen": 939, "range": [0, 1, 2, 3, 4, 5, 6, 7], "skillLine": SkillLineEnum.LIGHT_ARMOR, "categorization": SkillTypeEnum.ARMOUR_PASSIVE, "sourceUrl": "https://eso-hub.com/en/skills/armor/light-armor", "tooltip": "Increase your Physical and Spell Penetration by 939 for every piece of Light Armor equipped.", "hyperlink": "https://en.uesp.net/wiki/Online:Concentration" },
  [SkillEnum.DEXTERITY]: { "name": "Dexterity", "critDamage": 2, "range": [0, 1, 2, 3, 4, 5, 6, 7], "skillLine": SkillLineEnum.MEDIUM_ARMOR, "categorization": SkillTypeEnum.ARMOUR_PASSIVE, "skillOrPassive": "passive", "sourceUrl": "https://eso-hub.com/en/skills/armor/medium-armor", "tooltip": "Increase your Critical Damage by 2% for every piece of Medium Armor equipped.", "hyperlink": "https://en.uesp.net/wiki/Online:Dexterity" }
};
