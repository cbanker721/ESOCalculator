/**
 * @typedef {import('../enums/enums.js').RoleEnum} RoleEnum
 * @typedef {import('../enums/enums.js').SkillLineEnum} SkillLineEnum
 * @typedef {import('../enums/sets.js').SetEnum} SetEnum
 */

/**
 * Represents a player's build configuration, including their role,
 * skill lines, and equipped gear sets.
 */
class RoleTemplate {
  /**
   * Creates an instance of a Player.
   * @param {object} config - The player's configuration.
   * @param {RoleEnum} config.role - The role of the player (e.g., DPS, TANK).
   * @param {SkillLineEnum | null} [config.skillLine1=null] - The first selected skill line.
   * @param {SkillLineEnum | null} [config.skillLine2=null] - The second selected skill line.
   * @param {SkillLineEnum | null} [config.skillLine3=null] - The third selected skill line.
   * @param {SetEnum | null} [config.monsterSet=null] - The equipped monster set.
   * @param {SetEnum | null} [config.mythic=null] - The equipped mythic item.
   * @param {Array<SetEnum | null>} [config.sets=[null, null]] - The equipped complete sets
   * @param {Array<SetEnum | null>} [config.sets=[null, null]] - The equipped partial sets
   */
  constructor({
    role,
    skillLine1 = null,
    skillLine2 = null,
    skillLine3 = null,
    monsterSet = null,
    mythic = null,
    sets = [null, null],
    partialSets = [],
    description = "",
  }) {
    /**
     * The role of the player.
     * @type {RoleEnum}
     */
    this.role = role;

    /**
     * Description of the player.
     * @type {RoleEnum}
     */
    this.description = description;

    /**
     * The first selected skill line.
     * @type {SkillLineEnum | null}
     */
    this.skillLine1 = skillLine1;

    /**
     * The second selected skill line.
     * @type {SkillLineEnum | null}
     */
    this.skillLine2 = skillLine2;

    /**
     * The third selected skill line.
     * @type {SkillLineEnum | null}
     */
    this.skillLine3 = skillLine3;

    /**
     * The equipped monster set.
     * @type {SetEnum | null}
     */
    this.monsterSet = monsterSet;

    /**
     * The equipped mythic item.
     * @type {SetEnum | null}
     */
    this.mythic = mythic;

    /**
     * An array containing the complete non-monster sets worn (e.g. two main equipped 5-piece sets)
     * @type {Array<SetEnum | null>}
     */
    this.sets = sets;

    /**
     * An array containing any partial sets worn (e.g. 1-piece slimecraw, 4-piece Tideborn))
     * @type {Array<SetEnum | null>}
     */
    this.partialSets = partialSets
  }
}