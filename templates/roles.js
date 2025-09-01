const DefaultRoleTemplateId = Object.freeze({
    SPEC_HEALER_1: "ROLE_TEMPLATE_ID_SPEC_HEALER_1",
    ROJO_HEALER_1: "ROLE_TEMPLATE_ID_ROJO_HEALER_1",
    MAIN_TANK_1: "ROLE_TEMPLATE_ID_MAIN_TANK_1",
    OFF_TANK_1: "ROLE_TEMPLATE_ID_OFF_TANK_1",
    PARSE_DPS_1: "ROLE_TEMPLATE_ID_PARSE_DPS_1",
});

const roleTemplates = {
    [DefaultRoleTemplateId.SPEC_HEALER_1]: new RoleTemplate(
        {
            role: RoleEnum.HEALER,
            description: "SPC Healer",
            skillLine1: SkillLineEnum.GREEN_BALANCE,
            skillLine2: SkillLineEnum.CURATIVE_RUNEFORMS,
            skillLine3: SkillLineEnum.SIPHONING,
            sets: [SetEnum.PILLAGERS_PROFIT, SetEnum.SPELL_POWER_CURE, SetEnum.SYMPHONY_OF_BLADES, SetEnum.PEARLS_OF_EHLNOFEY],
            partialSets: []
        }
    ),
    [DefaultRoleTemplateId.ROJO_HEALER_1]: new RoleTemplate(
        {
            role: RoleEnum.HEALER,
            description: "ROJO Healer",
            skillLine1: SkillLineEnum.RESTORING_LIGHT,
            skillLine2: SkillLineEnum.GRAVE_LORD,
            skillLine3: SkillLineEnum.SIPHONING,
            sets: [SetEnum.ROARING_OPPORTUNIST, SetEnum.JORVULDS_GUIDANCE, SetEnum.OZEZAN_THE_INFERNO],
            partialSets: []
        }
    ),
    [DefaultRoleTemplateId.MAIN_TANK_1]: new RoleTemplate(
        {
            role: RoleEnum.TANK,
            description: "Main Tank",
            skillLine1: SkillLineEnum.WINTERS_EMBRACE,
            skillLine2: SkillLineEnum.SOLDIER_OF_APOCRYPHA,
            skillLine3: SkillLineEnum.DAEDRIC_SUMMONING,
            sets: [SetEnum.TURNING_TIDE, SetEnum.PEARLESCENT_WARD, SetEnum.NAZARAY],
            partialSets: []
        }
    ),
    [DefaultRoleTemplateId.OFF_TANK_1]: new RoleTemplate(
        {
            role: RoleEnum.TANK,
            description: "Off Tank",
            skillLine1: SkillLineEnum.DARK_MAGIC,
            skillLine2: SkillLineEnum.BONE_TYRANT,
            skillLine3: SkillLineEnum.EARTHEN_HEART,
            sets: [SetEnum.YOLNAHKRIIN, SetEnum.POWERFUL_ASSAULT, SetEnum.BARON_ZAUDRUS],
            partialSets: []
        }
    ),
    [DefaultRoleTemplateId.PARSE_DPS_1]: new RoleTemplate(
        {
            role: RoleEnum.DPS,
            description: "Parse DPS",
            skillLine1: SkillLineEnum.ARDENT_FLAME,
            skillLine2: SkillLineEnum.ASSASSINATION,
            skillLine3: SkillLineEnum.HERALD_OF_THE_TOME,
            sets: [SetEnum.WHORL_OF_THE_DEPTHS, SetEnum.TIDE_BORN_WILDSTALKER, SetEnum.VELOTHI_UR_MAGE],
            partialSets: [SetEnum.PERSONAL_CRIT_SET]
        }
    ),
}