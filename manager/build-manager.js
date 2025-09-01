class ModifierSource {
    constructor(
        playerName,
        sourceId,
        sourceType
    ) {
        this.playerName = playerName;
        this.sourceId = sourceId;
        this.sourceType = sourceType;
    }
}

class AggregateModifier {
    constructor({
        name,
        rating,
        sources}) {
        this.name = name;
        this.rating = rating;
        this.sources = sources;
    }
}

class BuildManager {
    constructor() {

    }

    getGroupModifierData(players) {
        const modifierData = {}
        for (const player of players) {
            const setIds = player.roleTemplate.sets
            for (const setId of setIds) {
                const set = setsData[setId]
                if (set.modifiers) {
                    for (const modifier of set.modifiers) {
                        if (modifier.scope !== ScopeEnum.GROUP) {
                            continue;
                        }
                        const modifierSource = new ModifierSource(player.name, setId, ModifierSourceEnum.SET);
                        if (!modifierData[modifier.modifier]) {
                            modifierData.modifier = AggregateModifier(modifier.modifier, modifier.rating, [modifierSource]);
                        } else {
                            modifierData.modifier.rating += modifier.rating;
                            modifierData.modifier.sources.append(modifierSource);
                        }
                   }
                }
            }
        }
        return modifierData
    }

    getPersonalModifierData(player) {
        const modifierData = {}
        const setIds = player.roleTemplate.sets
        for (const setId of setIds) {
            const set = setsData[setId]
            if (set.modifiers) {
                for (const modifier of set.modifiers) {
                    if (modifier.scope !== ScopeEnum.GROUP) {
                        continue;
                    }
                    const modifierSource = new ModifierSource(player.name, setId, ModifierSourceEnum.SET);
                    if (!modifierData[modifier.modifier]) {
                        modifierData.modifier = AggregateModifier(modifier.modifier, modifier.rating, [modifierSource]);
                    } else {
                        modifierData.modifier.rating += modifier.rating;
                        modifierData.modifier.sources.append(modifierSource);
                    }
                }
            }
        }
        return modifierData
    }
}