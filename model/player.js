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
     * @type {object}
     */
    this.roleTemplate = roleTemplate;

    /**
     * The specific build for this player.
     * @type {object | null}
     */
    this.playerBuild = playerBuild;
  }

  toString() {
    return `Player: ${this.name}, Role: ${this.roleTemplate.name}, Build: ${this.playerBuild ? this.playerBuild.name : 'None'}`;
  }

  getRole() {
    return this.roleTemplate.role;
  }
}
