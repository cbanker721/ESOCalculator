/**
 * @typedef {import('../enums/enums.js').ModifierEnum} ModifierEnum
 * @typedef {import('../enums/enums.js').ScopeEnum} ScopeEnum
 */

class ModifierRating { // Gemini: DO NOT MOVE THIS CLASS TO A NEW FILE
  /**
   * Creates an instance of ModifierRating.
   * @param {object} config
   * @param {ModifierEnum} config.modifier The enum key for the modifier.
   * @param {number} config.rating An integer from 1 to 3 representing the modifier's reliability.
   * @param {ScopeEnum} [config.scope=ScopeEnum.GROUP] The scope of the modifier's application.
   */
  constructor({ modifier, rating, scope = ScopeEnum.GROUP }) {
    /**
     * The specific modifier being applied.
     * @type {ModifierEnum}
     */
    this.modifier = modifier;

    /**
     * An integer from 1-3 representing the modifier's reliability.
     * @type {number}
     */
    this.rating = rating;

    /**
     * The scope of the modifier's application (e.g., Self, Group).
     * @type {ScopeEnum}
     */
    this.scope = scope;
  }
}

const modifiersData = {
  // Penetration Debuffs
  [ModifierEnum.MAJOR_BREACH]: { "name": "Major Breach", "pen": 5948 },
  [ModifierEnum.MINOR_BREACH]: { "name": "Minor Breach", "pen": 2974 },
  [ModifierEnum.RUNIC_SUNDER]: { "name": "Runic Sunder", "pen": 2200, class: ClassEnum.ARCANIST, skillLine: SkillLineEnum.HERALD_OF_THE_TOME, tooltip: "Reduces enemy armor by 2200." },
  [ModifierEnum.CRYSTAL_WEAPON]: { "name": "Crystal Weapon", "pen": 1000, class: ClassEnum.SORCERER, skillLine: SkillLineEnum.DARK_MAGIC, tooltip: "Reduces enemy armor by 1000." },

  // Critical Damage Buffs
  [ModifierEnum.MAJOR_FORCE]: { "name": "Major Force", "critDamage": 20 },
  [ModifierEnum.MINOR_FORCE]: { "name": "Minor Force", "critDamage": 10 },
  [ModifierEnum.MAJOR_BRITTLE]: { "name": "Major Brittle", "critDamage": 20 },
  [ModifierEnum.MINOR_BRITTLE]: { "name": "Minor Brittle", "critDamage": 10 },

  // Target Damage Taken Debuffs
  [ModifierEnum.MAJOR_VULNERABILITY]: { "name": "Major Vulnerability", "targetDamageTakenPercent": 10 },
  [ModifierEnum.MINOR_VULNERABILITY]: { "name": "Minor Vulnerability", "targetDamageTakenPercent": 5 },

  // Damage Done Buffs
  [ModifierEnum.MAJOR_BERSERK]: { "name": "Major Berserk", "damageDonePercent": 10 },
  [ModifierEnum.MINOR_BERSERK]: { "name": "Minor Berserk", "damageDonePercent": 5 },
  [ModifierEnum.MAJOR_SLAYER]: { "name": "Major Slayer", "dungeonDamageDonePercent": 10 },
  [ModifierEnum.MINOR_SLAYER]: { "name": "Minor Slayer", "dungeonDamageDonePercent": 5 },
  [ModifierEnum.EMPOWER]: { "name": "Empower", "heavyAttackDamagePercent": 80 },

  // Weapon/Spell Damage Buffs
  [ModifierEnum.MAJOR_COURAGE]: { "name": "Major Courage", "weaponAndSpellDamage": 430 },
  [ModifierEnum.MINOR_COURAGE]: { "name": "Minor Courage", "weaponAndSpellDamage": 215 },
  [ModifierEnum.PEARLESCENT_WARD]: { "name": "Pearlescent Ward", "weaponAndSpellDamage": 180 },
  [ModifierEnum.POWERFUL_ASSAULT]: { "name": "Powerful Assault", "weaponAndSpellDamage": 307 },
  [ModifierEnum.MAJOR_BRUTALITY]: { "name": "Major Brutality", "weaponDamagePercent": 20 },
  [ModifierEnum.MINOR_BRUTALITY]: { "name": "Minor Brutality", "weaponDamagePercent": 10 },
  [ModifierEnum.MAJOR_SORCERY]: { "name": "Major Sorcery", "spellDamagePercent": 20 },
  [ModifierEnum.MINOR_SORCERY]: { "name": "Minor Sorcery", "spellDamagePercent": 10 },
  [ModifierEnum.WAR_HORN]: { "name": "War Horn (Aggressive Horn)", "maxMagickaPercent": 10, "maxStaminaPercent": 10, "notes": "Also grants Major Force." },

  // Critical Chance Buffs
  [ModifierEnum.MAJOR_SAVAGERY]: { "name": "Major Savagery", "weaponCritRating": 2629 },
  [ModifierEnum.MINOR_SAVAGERY]: { "name": "Minor Savagery", "weaponCritRating": 1314 },
  [ModifierEnum.MAJOR_PROPHECY]: { "name": "Major Prophecy", "spellCritRating": 2629 },
  [ModifierEnum.MINOR_PROPHECY]: { "name": "Minor Prophecy", "spellCritRating": 1314 },

  // Ulti-gen Buffs
  [ModifierEnum.MAJOR_HEROISM]: { "name": "Major Heroism", "notes": "Grants 3 Ultimate every 1.5 seconds." },
  [ModifierEnum.MINOR_HEROISM]: { "name": "Minor Heroism", "notes": "Grants 1 Ultimate every 1.5 seconds." },

  // Defensive & Set-specific Buffs
  [ModifierEnum.MAJOR_PROTECTION]: { "name": "Major Protection", "damageReductionPercent": 10 },
  [ModifierEnum.MINOR_PROTECTION]: { "name": "Minor Protection", "damageReductionPercent": 5 },
  [ModifierEnum.MAJOR_AEGIS]: { "name": "Major Aegis", "damageReductionPercent": 10 },
  [ModifierEnum.MINOR_AEGIS]: { "name": "Minor Aegis", "damageReductionPercent": 5 },
  [ModifierEnum.LORD_WARDEN]: { "name": "Lord Warden", "resistance": 3180 },
  [ModifierEnum.SYMPHONY_OF_BLADES]: { "name": "Symphony of Blades" },
  [ModifierEnum.OZEZANS_PLATING]: { "name": "Ozezans Plating" },
  [ModifierEnum.BARON_ZAUDRUS]: { "name": "Baron Zaudrus" },
  [ModifierEnum.NAZARAY]: { "name": "Nazaray" },
};