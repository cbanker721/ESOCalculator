const modifierRenderOrder = {
    
}

const modifierTypeRenderOrder = [
    ModifierTypeEnum.OFFENSE_BUFF,
    ModifierTypeEnum.DEFENSE_DEBUFF,
    ModifierTypeEnum.DEFENSE_BUFF,
    ModifierTypeEnum.DEFENSE_DEBUFF,
    ModifierTypeEnum.SUSTAIN_BUFF,
    ModifierTypeEnum.MISC_BUFF
]

const defaultExpectedTankModifiers = new Set([
    ModifierEnum.MINOR_AEGIS,
    ModifierEnum.MAJOR_RESOLVE, ModifierEnum.MINOR_RESOLVE,
    ModifierEnum.MAJOR_PROTECTION, ModifierEnum.MINOR_PROTECTION,
])

const defaultExpectedHealerModifiers = new Set([
    ModifierEnum.MAJOR_RESOLVE, ModifierEnum.MINOR_RESOLVE,
])

const defaultExpectedDpsModifiers = new Set([
    ModifierEnum.MINOR_BERSERK,
    ModifierEnum.MINOR_FORCE,
    ModifierEnum.MINOR_SLAYER,
    ModifierEnum.MAJOR_PROPHECY, ModifierEnum.MAJOR_SAVAGERY,
    ModifierEnum.MAJOR_SORCERY, ModifierEnum.MAJOR_BRUTALITY,
])

const defaultExpectedRoleModifiers = {
    [RoleEnum.TANK]: defaultExpectedTankModifiers,
    [RoleEnum.HEALER]: defaultExpectedHealerModifiers,
    [RoleEnum.DPS]: defaultExpectedDpsModifiers,
    [RoleEnum.SUPPORT_DPS]: defaultExpectedDpsModifiers
}

const defaultExpectedGroupModifiers = new Set([
    // Offensive Buff
    ModifierEnum.MAJOR_COURAGE, ModifierEnum.MINOR_COURAGE, 
    ModifierEnum.MAJOR_SORCERY, ModifierEnum.MINOR_SORCERY,
    ModifierEnum.MAJOR_BRUTALITY, ModifierEnum.MINOR_BRUTALITY,
    ModifierEnum.MINOR_SAVAGERY,
    ModifierEnum.MINOR_BERSERK,
    ModifierEnum.POWERFUL_ASSAULT,
    ModifierEnum.PEARLESCENT_WARD,

    // Offensive Debuff
    ModifierEnum.MAJOR_BREACH, ModifierEnum.MINOR_BREACH,
    ModifierEnum.MAJOR_VULNERABILITY, ModifierEnum.MINOR_VULNERABILITY,
    

    // Defensive Buff
    ModifierEnum.MAJOR_RESOLVE, ModifierEnum.MINOR_RESOLVE,
    ModifierEnum.MINOR_PROTECTION,

    // Defensive Debuff
    ModifierEnum.MAJOR_MAIM, ModifierEnum.MINOR_MAIM,
]);