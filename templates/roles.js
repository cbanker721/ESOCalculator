const rolesTemplates = {
    "SPCHealer1": new RoleTemplate(
        {
            role: RoleEnum.HEALER,
            description: "SPC Healer",
            skillLine1: SkillLineEnum.GREEN_BALANCE,
            skillLine2: SkillLineEnum.CURATIVE_RUNEFORMS,
            skillLine3: SkillLineEnum.SIPHONING,
            monsterSet: SetEnum.SYMPHONY_OF_BLADES,
            mythic: SetEnum.PEARLS_OF_EHLNOFEY,
            sets: [SetEnum.PILLAGERS_PROFIT, SetEnum.SPELL_POWER_CURE],
            partialSets: []
        }
    ),
    "ROJOHealer1": new RoleTemplate(
        {
            role: RoleEnum.HEALER,
            description: "ROJO Healer",
            skillLine1: SkillLineEnum.RESTORING_LIGHT,
            skillLine2: SkillLineEnum.GRAVE_LORD,
            skillLine3: SkillLineEnum.SIPHONING,
            monsterSet: SetEnum.OZEZAN_THE_INFERNO,
            mythic: undefined,
            sets: [SetEnum.ROARING_OPPORTUNIST, SetEnum.JORVULDS_GUIDANCE],
            partialSets: []
        }
    ),
    "MainTank1": new RoleTemplate(
        {
            role: RoleEnum.TANK,
            description: "Main Tank",
            skillLine1: SkillLineEnum.WINTERS_EMBRACE,
            skillLine2: SkillLineEnum.SOLDIER_OF_APOCRYPHA,
            skillLine3: SkillLineEnum.DAEDRIC_SUMMONING,
            monsterSet: SetEnum.NAZARAY,
            mythic: undefined,
            sets: [SetEnum.TURNING_TIDE, SetEnum.PEARLESCENT_WARD],
            partialSets: []
        }
    ),
    "OffTank1": new RoleTemplate(
        {
            role: RoleEnum.TANK,
            description: "Off Tank",
            skillLine1: SkillLineEnum.DARK_MAGIC,
            skillLine2: SkillLineEnum.BONE_TYRANT,
            skillLine3: SkillLineEnum.EARTHEN_HEART,
            monsterSet: SetEnum.BARON_ZAUDRUS,
            mythic: undefined,
            sets: [SetEnum.YOLNAHKRIIN, SetEnum.POWERFUL_ASSAULT],
            partialSets: []
        }
    ),
    "ParseDPS1": new RoleTemplate(
        {
            role: RoleEnum.DPS,
            description: "Parse DPS",
            skillLine1: SkillLineEnum.ARDENT_FLAME,
            skillLine2: SkillLineEnum.ASSASSINATION,
            skillLine3: SkillLineEnum.HERALD_OF_THE_TOME,
            monsterSet: undefined,
            mythic: SetEnum.VELOTHI_UR_MAGE,
            sets: [SetEnum.WHORL_OF_THE_DEPTHS, SetEnum.TIDE_KING_GAZE],
            partialSets: [SetEnum.PERSONAL_CRIT_SET]
        }
    ),
}