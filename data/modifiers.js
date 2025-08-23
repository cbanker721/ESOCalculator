/**
 * Represents a modifier and its associated application frequency or reliability.
 * This class formalizes the structure for a modifier and its rating, ensuring
 * a consistent data shape throughout the application.
 */
class ModifierRating {
  /**
   * Creates an instance of ModifierRating.
   * @param {object} config
   * @param {ModifierEnum} config.modifier The enum key for the modifier.
   * @param {number} config.rating An integer from 1 to 3 representing the modifier's reliability.
   */
  constructor({ modifier, rating }) {
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
  }
}


const modifiersData = {
  // Penetration Debuffs
  [ModifierEnum.MajorBreach]: { "name": "Major Breach", "pen": 5948, "default": "on" },
  [ModifierEnum.MinorBreach]: { "name": "Minor Breach", "pen": 2974, "default": "on" },

  // Critical Damage Buffs
  [ModifierEnum.MajorForce]: { "name": "Major Force", "critDamage": 20 },
  [ModifierEnum.MinorForce]: { "name": "Minor Force", "critDamage": 10 },
  [ModifierEnum.MajorBrittle]: { "name": "Major Brittle", "critDamage": 20 },
  [ModifierEnum.MinorBrittle]: { "name": "Minor Brittle", "critDamage": 10, "default": "on" },

  // Target Damage Taken Debuffs
  [ModifierEnum.MajorVulnerability]: { "name": "Major Vulnerability", "targetDamageTakenPercent": 10 },
  [ModifierEnum.MinorVulnerability]: { "name": "Minor Vulnerability", "targetDamageTakenPercent": 5 },

  // Damage Done Buffs
  [ModifierEnum.MajorBerserk]: { "name": "Major Berserk", "damageDonePercent": 10 },
  [ModifierEnum.MinorBerserk]: { "name": "Minor Berserk", "damageDonePercent": 5 },
  [ModifierEnum.MajorSlayer]: { "name": "Major Slayer", "dungeonDamageDonePercent": 10 },
  [ModifierEnum.MinorSlayer]: { "name": "Minor Slayer", "dungeonDamageDonePercent": 5 },
  [ModifierEnum.Empower]: { "name": "Empower", "heavyAttackDamagePercent": 80 },

  // Weapon/Spell Damage Buffs
  [ModifierEnum.MajorCourage]: { "name": "Major Courage", "weaponAndSpellDamage": 430 },
  [ModifierEnum.MinorCourage]: { "name": "Minor Courage", "weaponAndSpellDamage": 215 },
  [ModifierEnum.PearlescentWard]: { "name": "Pearlescent Ward", "weaponAndSpellDamage": 180 },
  [ModifierEnum.PowerfulAssault]: { "name": "Powerful Assault", "weaponAndSpellDamage": 307 },
  [ModifierEnum.MajorBrutality]: { "name": "Major Brutality", "weaponDamagePercent": 20 },
  [ModifierEnum.MinorBrutality]: { "name": "Minor Brutality", "weaponDamagePercent": 10 },
  [ModifierEnum.MajorSorcery]: { "name": "Major Sorcery", "spellDamagePercent": 20 },
  [ModifierEnum.MinorSorcery]: { "name": "Minor Sorcery", "spellDamagePercent": 10 },
  [ModifierEnum.WarHorn]: { "name": "War Horn (Aggressive Horn)", "maxMagickaPercent": 10, "maxStaminaPercent": 10, "notes": "Also grants Major Force." },

  // Critical Chance Buffs
  [ModifierEnum.MajorSavagery]: { "name": "Major Savagery", "weaponCritRating": 2629 },
  [ModifierEnum.MinorSavagery]: { "name": "Minor Savagery", "weaponCritRating": 1314 },
  [ModifierEnum.MajorProphecy]: { "name": "Major Prophecy", "spellCritRating": 2629 },
  [ModifierEnum.MinorProphecy]: { "name": "Minor Prophecy", "spellCritRating": 1314 },

  // Defensive & Set-specific Buffs
  [ModifierEnum.MajorProtection]: { "name": "Major Protection", "damageReductionPercent": 10 },
  [ModifierEnum.MinorProtection]: { "name": "Minor Protection", "damageReductionPercent": 5 },
  [ModifierEnum.MajorAegis]: { "name": "Major Aegis", "dungeonDamageReductionPercent": 10 },
  [ModifierEnum.MinorAegis]: { "name": "Minor Aegis", "dungeonDamageReductionPercent": 5 },
  [ModifierEnum.LordWarden]: { "name": "Lord Warden", "resistance": 3180 },
};