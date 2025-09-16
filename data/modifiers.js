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
  [ModifierEnum.MAJOR_BREACH]: { "name": "Major Breach", "shortName": "Maj Breach", "pen": 5948, type: ModifierTypeEnum.OFFENSE_DEBUFF },
  [ModifierEnum.MINOR_BREACH]: { "name": "Minor Breach", "shortName": "Min Breach", "pen": 2974, type: ModifierTypeEnum.OFFENSE_DEBUFF },
  [ModifierEnum.RUNIC_SUNDER]: { "name": "Runic Sunder", "shortName": "Runic Sunder", "pen": 2200, class: ClassEnum.ARCANIST, skillLine: SkillLineEnum.HERALD_OF_THE_TOME, tooltip: "Reduces enemy armor by 2200.", type: ModifierTypeEnum.OFFENSE_DEBUFF },
  [ModifierEnum.CRYSTAL_WEAPON]: { "name": "Crystal Weapon", "shortName": "Crystal Weapon", "pen": 1000, class: ClassEnum.SORCERER, skillLine: SkillLineEnum.DARK_MAGIC, tooltip: "Reduces enemy armor by 1000.", type: ModifierTypeEnum.OFFENSE_DEBUFF },

  // Critical Damage Buffs
  [ModifierEnum.MAJOR_FORCE]: { "name": "Major Force", "shortName": "Maj Force", "critDamage": 20, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MINOR_FORCE]: { "name": "Minor Force", "shortName": "Min Force", "critDamage": 10, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MAJOR_BRITTLE]: { "name": "Major Brittle", "critDamage": 20, type: ModifierTypeEnum.OFFENSE_DEBUFF },
  [ModifierEnum.MINOR_BRITTLE]: { "name": "Minor Brittle", "critDamage": 10, type: ModifierTypeEnum.OFFENSE_DEBUFF },

  // Target Damage Taken Debuffs
  [ModifierEnum.MAJOR_VULNERABILITY]: { "name": "Major Vulnerability", "targetDamageTakenPercent": 10, type: ModifierTypeEnum.OFFENSE_DEBUFF },
  [ModifierEnum.MINOR_VULNERABILITY]: { "name": "Minor Vulnerability", "targetDamageTakenPercent": 5, type: ModifierTypeEnum.OFFENSE_DEBUFF },

  // Damage Done Buffs
  [ModifierEnum.MAJOR_BERSERK]: { "name": "Major Berserk", "damageDonePercent": 10, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MINOR_BERSERK]: { "name": "Minor Berserk", "damageDonePercent": 5, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MAJOR_SLAYER]: { "name": "Major Slayer", "dungeonDamageDonePercent": 10, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MINOR_SLAYER]: { "name": "Minor Slayer", "dungeonDamageDonePercent": 5, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.EMPOWER]: { "name": "Empower", "heavyAttackDamagePercent": 80, type: ModifierTypeEnum.OFFENSE_BUFF },

  // Weapon/Spell Damage Buffs
  [ModifierEnum.MAJOR_COURAGE]: { "name": "Major Courage", "weaponAndSpellDamage": 430, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MINOR_COURAGE]: { "name": "Minor Courage", "weaponAndSpellDamage": 215, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.PEARLESCENT_WARD]: { "name": "Pearlescent Ward", "weaponAndSpellDamage": 180, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.POWERFUL_ASSAULT]: { "name": "Powerful Assault", "weaponAndSpellDamage": 307, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MAJOR_BRUTALITY]: { "name": "Major Brutality", "weaponDamagePercent": 20, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MINOR_BRUTALITY]: { "name": "Minor Brutality", "weaponDamagePercent": 10, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MAJOR_SORCERY]: { "name": "Major Sorcery", "spellDamagePercent": 20, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MINOR_SORCERY]: { "name": "Minor Sorcery", "spellDamagePercent": 10, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.WAR_HORN]: { "name": "War Horn (Aggressive Horn)", "maxMagickaPercent": 10, "maxStaminaPercent": 10, "notes": "Also grants Major Force.", type: ModifierTypeEnum.OFFENSE_BUFF },

  // Critical Chance Buffs
  [ModifierEnum.MAJOR_SAVAGERY]: { "name": "Major Savagery", "weaponCritRating": 2629, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MINOR_SAVAGERY]: { "name": "Minor Savagery", "weaponCritRating": 1314, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MAJOR_PROPHECY]: { "name": "Major Prophecy", "spellCritRating": 2629, type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MINOR_PROPHECY]: { "name": "Minor Prophecy", "spellCritRating": 1314, type: ModifierTypeEnum.OFFENSE_BUFF },

  // Ulti-gen Buffs
  [ModifierEnum.MAJOR_HEROISM]: { "name": "Major Heroism", "notes": "Grants 3 Ultimate every 1.5 seconds.", type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.MINOR_HEROISM]: { "name": "Minor Heroism", "notes": "Grants 1 Ultimate every 1.5 seconds.", type: ModifierTypeEnum.OFFENSE_BUFF },

  // Damage Debuffs
  [ModifierEnum.MAJOR_COWARDICE]: { "name": "Major Cowardice", "weaponAndSpellDamage": 430, type: ModifierTypeEnum.DEFENSE_DEBUFF },
  [ModifierEnum.MINOR_COWARDICE]: { "name": "Minor Cowardice", "weaponAndSpellDamage": 215, type: ModifierTypeEnum.DEFENSE_DEBUFF},
  [ModifierEnum.MAJOR_MAIM]: { "name": "Major Maim", "spellDamagePercent": 10, type: ModifierTypeEnum.DEFENSE_DEBUFF },
  [ModifierEnum.MINOR_MAIM]: { "name": "Minor Maim", "spellDamagePercent": 5, type: ModifierTypeEnum.DEFENSE_DEBUFF},

  // Defensive & Set-specific Buffs
  [ModifierEnum.MAJOR_PROTECTION]: { "name": "Major Protection", "damageReductionPercent": 10, type: ModifierTypeEnum.DEFENSE_BUFF },
  [ModifierEnum.MINOR_PROTECTION]: { "name": "Minor Protection", "damageReductionPercent": 5, type: ModifierTypeEnum.DEFENSE_BUFF },
  [ModifierEnum.MAJOR_RESOLVE]: { "name": "Major Resolve", "resistance": 1, type: ModifierTypeEnum.DEFENSE_BUFF },
  [ModifierEnum.MINOR_RESOLVE]: { "name": "Minor Resolve", "resistance": 2, type: ModifierTypeEnum.DEFENSE_BUFF },
  [ModifierEnum.MAJOR_AEGIS]: { "name": "Major Aegis", "damageReductionPercent": 10, type: ModifierTypeEnum.DEFENSE_BUFF },
  [ModifierEnum.MINOR_AEGIS]: { "name": "Minor Aegis", "damageReductionPercent": 5, type: ModifierTypeEnum.DEFENSE_BUFF },
  [ModifierEnum.LORD_WARDEN]: { "name": "Lord Warden", "resistance": 3180, type: ModifierTypeEnum.DEFENSE_BUFF },
  [ModifierEnum.SYMPHONY_OF_BLADES]: { "name": "Symphony of Blades", type: ModifierTypeEnum.SUSTAIN_BUFF },
  [ModifierEnum.OZEZANS_PLATING]: { "name": "Ozezans Plating", type: ModifierTypeEnum.DEFENSE_BUFF },
  [ModifierEnum.BARON_ZAUDRUS]: { "name": "Baron Zaudrus", type: ModifierTypeEnum.OFFENSE_BUFF },
  [ModifierEnum.NAZARAY]: { "name": "Nazaray", type: ModifierTypeEnum.MISC_BUFF },
};

const modifiersTypeData = {
  [ModifierTypeEnum.OFFENSE_BUFF]: { name: "Offensive Buff" },
  [ModifierTypeEnum.OFFENSE_DEBUFF]: { name: "Offensive Debuff" },
  [ModifierTypeEnum.DEFENSE_BUFF]: { name: "Defensive Buff" },
  [ModifierTypeEnum.DEFENSE_DEBUFF]: { name: "Defensive Debuff" },
  [ModifierTypeEnum.SUSTAIN_BUFF]: { name: "Sustain Buff" },
  [ModifierTypeEnum.SUSTAIN_DEBUFF]: { name: "Sustain Debuff" },
  [ModifierTypeEnum.MISC_BUFF]: { name: "Misc Buff" },
}