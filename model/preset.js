/**
 * Represents a user-configurable build preset.
 * Provides methods for serialization and deserialization to allow for saving and sharing.
 */
class Preset {
  /**
   * @param {string} name - The name of the preset.
   * @param {RaceEnum} race - The key for the selected race (e.g., RaceEnum.DARK_ELF).
   * @param {MundusEnum} mundus - The key for the selected Mundus stone (e.g., MundusEnum.THE_THIEF).
   * @param {MythicEnum} mythic - The key for the selected Mythic item (e.g., MythicEnum.VELOTHI_UR_MAGE).
   * @param {SkillLineEnum} mainSkillLine - The key for the main skill line.
   * @param {SkillLineEnum} skillLine2 - The key for the second skill line.
   * @param {SkillLineEnum} skillLine3 - The key for the third skill line.
   */
  constructor(name, race, mundus, mythic, mainSkillLine, skillLine2, skillLine3) {
    this.name = name || 'Untitled Preset';
    this.race = race || '';
    this.mundus = mundus || '';
    this.mythic = mythic || '';
    this.mainSkillLine = mainSkillLine || '';
    this.skillLine2 = skillLine2 || '';
    this.skillLine3 = skillLine3 || '';
  }

  /**
   * Serializes the preset object into a Base64-encoded JSON string.
   * This is useful for easily sharing presets via URL parameters or simple text.
   * @returns {string} A Base64-encoded JSON string representation of the preset.
   */
  serialize() {
    const jsonString = JSON.stringify(this);
    return btoa(jsonString);
  }

  /**
   * Deserializes a Base64-encoded JSON string into a Preset object.
   * @param {string} base64String - The Base64-encoded JSON string to deserialize.
   * @returns {Preset} A new Preset instance.
   * @throws {Error} If the JSON string is invalid.
   */
  static deserialize(base64String) {
    const jsonString = atob(base64String);
    const obj = JSON.parse(jsonString);
    // A simple check to ensure it's a preset-like object. More robust validation could be added.
    if (!obj || typeof obj.name !== 'string') {
      throw new Error('Invalid preset format.');
    }
    return new Preset(obj.name, obj.race, obj.mundus, obj.mythic, obj.mainSkillLine, obj.skillLine2, obj.skillLine3);
  }
}