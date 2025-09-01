class RosterFactory {

    createDefaultRoster() {
        const playerList = {
            "MainTank1": new Player(
                {name: "MT Name", description: "Main Tank", roleTemplate: roleTemplates[DefaultRoleTemplateId.MAIN_TANK_1], playerBuild: null}
            ),
            "OffTank1": new Player(
                {name: "OT Name", description: "Off Tank", roleTemplate: roleTemplates[DefaultRoleTemplateId.OFF_TANK_1], playerBuild: null}
            ),
            "SPCHealer1": new Player(
                {name: "H1 Name", description: "SPC Healer", roleTemplate: roleTemplates[DefaultRoleTemplateId.SPEC_HEALER_1], playerBuild: null}
            ),
            "ROJOHealer1": new Player(
                {name: "H2 Name", description: "ROJO Healer", roleTemplate: roleTemplates[DefaultRoleTemplateId.ROJO_HEALER_1], playerBuild: null}
            ),
        }
        for (let i = 1; i <= 8; i++) {
            playerList[`ParseDPS${i}`] = new Player(
                {name: `ParseDPS${i} Name`, description: "", roleTemplate: roleTemplates[DefaultRoleTemplateId.PARSE_DPS_1], playerBuild: null}
            );
        }
        return playerList;
    }
}