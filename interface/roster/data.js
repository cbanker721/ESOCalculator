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