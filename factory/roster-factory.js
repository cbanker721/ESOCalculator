class RosterFactory {

    createDefaultRoster() {
        const playerList = {
            "MainTank1": new Player(
                "MT", "Main Tank", roleTemplates.MainTank1, null
            ),
            "OffTank1": new Player(
                "OT", "Off Tank", roleTemplates.OffTank1, null
            ),
            "SPCHealer1": new Player(
                "H1", "SPC Healer", roleTemplates.SPCHealer1, null
            ),
            "ROJOHealer1": new Player(
                "H2", "ROJO Healer", roleTemplates.ROJOHealer1, null
            ),
        }
        for (let i = 1; i <= 8; i++) {
            playerList[`ParseDPS${i}`] = new Player(
                `ParseDPS${i}`, "", roleTemplates.ParseDPS1, null
            );
        }
    }
}