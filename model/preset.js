/**
 * Represents a user-configurable build preset.
 * Provides methods for serialization and deserialization to allow for saving and sharing.
 */
class Preset {
  /**
   * @param {string} name - The name of the preset.
   * @param {string} race - The key for the selected race (e.g., "DARK_ELF").
   * @param {string} mundus - The key for the selected Mundus stone (e.g., "TheThief").
   * @param {string} mythic - The key for the selected Mythic item (e.g., "VelothiUrMage").
   * @param {string} mainSkillLine - The key for the main skill line.
   * @param {string} skillLine2 - The key for the second skill line.
   * @param {string} skillLine3 - The key for the third skill line.
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
   * Serializes the preset object into a JSON string.
   * @returns {string} A JSON string representation of the preset.
   */
  serialize() {
    return JSON.stringify(this);
  }

  /**
   * Deserializes a JSON string into a Preset object.
   * @param {string} jsonString - The JSON string to deserialize.
   * @returns {Preset} A new Preset instance.
   * @throws {Error} If the JSON string is invalid.
   */
  static deserialize(jsonString) {
    const obj = JSON.parse(jsonString);
    // A simple check to ensure it's a preset-like object. More robust validation could be added.
    if (!obj || typeof obj.name !== 'string') {
      throw new Error('Invalid preset format.');
    }
    return new Preset(obj.name, obj.race, obj.mundus, obj.mythic, obj.mainSkillLine, obj.skillLine2, obj.skillLine3);
  }
}