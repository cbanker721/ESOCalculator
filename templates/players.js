const playerTemplates = {
    "SPCHealer1": new Player(
        {
            role: RoleEnum.HEALER,
            description: "SPC Healer",
            skillLine1: SkillLineEnum.GREEN_BALANCE,
            skillLine2: SkillLineEnum.CURATIVE_RUNEFORMS,
            skillLine3: SkillLineEnum.SIPHONING,
            monsterSet: SetEnum.SymphonyOfBladesSet,
            mythic: SetEnum.PearlsOfEhlnofey,
            sets: [SetEnum.PillagersProfit, SetEnum.SpellPowerCure]
        }
    ),
    "ROJOHealer1": new Player(
        {
            role: RoleEnum.HEALER,
            description: "ROJO Healer",
            skillLine1: SkillLineEnum.RESTORING_LIGHT,
            skillLine2: SkillLineEnum.GRAVE_LORD,
            skillLine3: SkillLineEnum.SIPHONING,
            monsterSet: SetEnum.OzezanTheInferno,
            mythic: undefined,
            sets: [SetEnum.RoaringOpportunist, SetEnum.JorvuldsGuidance]
        }
    ),
    "MainTank1": new Player(
        {
            role: RoleEnum.TANK,
            description: "Main Tank",
            skillLine1: SkillLineEnum.WINTERS_EMBRACE,
            skillLine2: SkillLineEnum.SOLDIER_OF_APOCRYPHA,
            skillLine3: SkillLineEnum.DAEDRIC_SUMMONING,
            monsterSet: SetEnum.Nazaray,
            mythic: undefined,
            sets: [SetEnum.TurningTide, SetEnum.PearlescentWardSet]
        }
    ),
    "OffTank1": new Player(
        {
            role: RoleEnum.TANK,
            description: "Off Tank",
            skillLine1: SkillLineEnum.DARK_MAGIC,
            skillLine2: SkillLineEnum.BONE_TYRANT,
            skillLine3: SkillLineEnum.EARTHEN_HEART,
            monsterSet: SetEnum.BaronZaudrus,
            mythic: undefined,
            sets: [SetEnum.Yolnahkriin, SetEnum.PowerfulAssaultSet]
        }
    ),
}