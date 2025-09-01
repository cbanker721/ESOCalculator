class RosterManager {
    constructor() {
        this.roster = [];
        this.buildManager() = new BuildManager();
        this.renderer = new RosterRenderer(this, this.buildManager);
    }

    initialize() {
        console.log("Initializing Roster Manager...");
        window.addEventListener('DOMContentLoaded', () => {
            const factory = new RosterFactory();
            const roster = factory.createDefaultRoster();
            this.renderer.renderRoster(roster);
        });
    }

    addPlayer(player) {
        this.roster.push(player);
    }

    removePlayer(index) {
        if (index >= 0 && index < this.roster.length) {
            this.roster.splice(index, 1);
        }
    }

    getRoster() {
        return this.roster;
    }
}