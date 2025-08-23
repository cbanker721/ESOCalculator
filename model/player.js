/**
 * @typedef {import('./role.js').RoleTemplate} RoleTemplate
 * @typedef {import('./player-build.js').PlayerBuild} PlayerBuild
 */

/**
 * Represents a player slot within a raid composition or encounter. This class
 * is designed to hold information about a specific player and the role
 * they are assigned.
 */
class Player {
  /**
   * Creates an instance of a Player.
   * @param {object} config
   * @param {string} config.name The name of the player (e.g., "Andy").
   * @param {string} [config.description=""] A description or note for this player.
   * @param {RoleTemplate | null} [config.roleTemplate=null] The assigned role template, likely an object from `playerTemplates.js`.
   * @param {PlayerBuild | null} [config.playerBuild=null] The specific build for this player, which could be derived from the template.
   */
  constructor({
    name,
    description = '',
    roleTemplate,
    playerBuild,
  }) {
    /**
     * The name of the player.
     * @type {string}
     */
    this.name = name;

    /**
     * A description or note for this player.
     * @type {string}
     */
    this.description = description;

    /**
     * The assigned role template for this player.
     * @type {object | null}
     */
    this.roleTemplate = roleTemplate;

    /**
     * The specific build for this player.
     * @type {object | null}
     */
    this.playerBuild = playerBuild;
  }
}
