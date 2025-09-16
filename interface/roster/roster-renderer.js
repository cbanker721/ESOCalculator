class RosterRenderer {
    constructor(rosterManager, buildManager) {
        this.rosterManager = rosterManager;
        this.buildManager = buildManager;
        this.initialize();
    }

    initialize() {
        this.grid = document.getElementById('roster-grid');
        this.modifierPanel = document.getElementById('modifier-panel');
    }

    renderRoster(players) {
        const roster = Object.values(players);
        this.grid.innerHTML = '';
        Object.values(players).forEach(player => {
            const card = this.renderPlayerCard(player, roster);
            this.grid.appendChild(card);
        });
        this.renderModifierPanel(roster);
    }

    renderPlayerCard(player, roster) {
        console.log('Rendering player:', player);
        const card = document.createElement('div');
        card.className = 'player-card';

        const roleTemplate = player.roleTemplate;
        const role = roleTemplate.role || 'unknown';
        const sets = roleTemplate.sets || [];
        const roleLabel = roleRenderData[role]?.label || '';
        const roleColor = roleRenderData[role]?.color || '#3a6ea5';
        let roleIcon = roleRenderData[role]?.icon || '';

        // Set the background color using a CSS variable
        card.style.setProperty('--role-color', roleColor);

        // Header row: icon with tooltip, description
        const headerDiv = document.createElement('div');
        headerDiv.className = 'player-card-header';

        // Role icon with tooltip
        const iconSpan = document.createElement('span');
        iconSpan.className = 'role-icon';
        iconSpan.innerHTML = roleIcon;
        iconSpan.title = roleLabel;

        // Description
        const desc = document.createElement('small');
        desc.textContent = player.description || player.roleTemplate?.description || '';

        headerDiv.appendChild(iconSpan);
        headerDiv.appendChild(desc);

        // Name input
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = player.name;
        nameInput.className = 'player-name-input';
        headerDiv.appendChild(nameInput);

        card.appendChild(headerDiv);

        // Sets as badges
        const setsDiv = document.createElement('div');
        const setsLabel = document.createElement('span');
        setsLabel.className = 'sets-label';
        setsLabel.textContent = 'Sets: ';
        setsDiv.appendChild(setsLabel);
        const setsList = document.createElement('span');
        setsList.className = 'sets-list';
        const setIds = [];
        if (sets.length > 0) {
            sets.forEach(set => setIds.push(set));
        }
        setIds.forEach(set => {
            const setType = setsData[set]?.setType || 'unknown';
            const setTypeColor = setTypeRenderData[setType].color || '#3a6ea5';
            const badge = document.createElement('span');
            badge.className = 'set-badge';
            badge.textContent = this.getSetName(set);
            badge.style.setProperty('--set-type-color', setTypeColor);
            setsList.appendChild(badge);
        });
        setsDiv.appendChild(setsList);
        card.appendChild(setsDiv);

        const providedGroupModifiers = this.buildManager.getGroupModifierData([player]);
        const groupModifiersDiv = this.createModifierRow('Group', Object.keys(providedGroupModifiers));
        card.appendChild(groupModifiersDiv);

        const personalModifiers = this.buildManager.getPersonalModifierData(player);
        const personalModifiersDiv = this.createModifierRow('Personal', Object.keys(personalModifiers));
        card.appendChild(personalModifiersDiv);

        const expectedModifiers = defaultExpectedGroupModifiers.union(defaultExpectedRoleModifiers[player.getRole()]).values();
        const groupWideModifiers = this.buildManager.getGroupModifierData(roster);
        const missingModifiers = [];
        for (const expectedModifier of expectedModifiers) {
            if (groupWideModifiers[expectedModifier] === undefined && personalModifiers[expectedModifier] === undefined) {
                missingModifiers.push(expectedModifier);
            }
        }
        const missingModifiersDiv = this.createModifierRow('Missing', missingModifiers, "#ff0000");
        card.appendChild(missingModifiersDiv);

        return card;
    }

    renderModifierPanel(players) {
        const panel = document.createElement('div');
        panel.className = 'modifier-subpanel';
        const activeGroupModifiers = this.buildManager.getGroupModifierData(players);
        const renderedModifiers = new Set([...Object.keys(activeGroupModifiers), ...defaultExpectedGroupModifiers.values()]);
        const renderedModifiersByType = {};
        for (const key of renderedModifiers) {
            const modifier = modifiersData[key];
            const modifierType = modifier.type;
            if (renderedModifiersByType[modifierType] === undefined) {
                renderedModifiersByType[modifierType] = [];
            }
            const x = [];
            
            renderedModifiersByType[modifierType].push(key);
        }

        if (renderedModifiersByType) {
            for (const modifierType of modifierTypeRenderOrder) {
                const modifiersToRender = renderedModifiersByType[modifierType];
                if (renderedModifiersByType[modifierType] === undefined) {
                    continue;
                }
                const modifiersList = document.createElement('span');
                modifiersList.className = 'modifiers-list';
                for (const modifier of modifiersToRender) {
                    const badge = this.createGroupModifierBadge(modifier, activeGroupModifiers, modifiersList);
                    modifiersList.appendChild(badge);
                }
                const modifierTypeHeader = document.createElement('div');
                modifierTypeHeader.className = "group-modifier-type";
                modifierTypeHeader.textContent = modifiersTypeData[modifierType].name;
                panel.appendChild(modifierTypeHeader)
                panel.appendChild(modifiersList);
            }
        } else {
            modifiersList.textContent = 'None';
        }
        this.modifierPanel.appendChild(panel);

    }

    createGroupModifierBadge(modifier, activeModifiers) {
        const badge = document.createElement('span');
        if (defaultExpectedGroupModifiers.has(modifier)) {
            if (activeModifiers[modifier] === undefined) {
                badge.className = 'modifier-badge unfulfilled-modifier';
            } else {
                badge.className = 'modifier-badge fulfilled-modifier';
            }
        } else {
            badge.className = 'modifier-badge';
        }
        badge.textContent = modifiersData[modifier]?.shortName || modifiersData[modifier]?.name || modifier;
        badge.dataset.fullname = modifiersData[modifier]?.name || modifier;
        badge.style.setProperty('--modifier-type-color', "#666666ff");
        return badge;
    }

    getSetName(setId) {
        return setsData[setId]?.shortName || setsData[setId]?.name || setId;
    }

    createModifierRow(label, modifiers, badgeColor = "#666666ff") {
        const modifiersDiv = document.createElement('div');
        const modifiersLabel = document.createElement('span');
        modifiersLabel.className = 'modifiers-label';
        modifiersLabel.textContent = `${label}: `;
        modifiersDiv.appendChild(modifiersLabel);
    
        const modifiersList = document.createElement('span');
        modifiersList.className = 'modifiers-list';
        if (modifiers) {
            for (const modifier of modifiers) {
                const badge = this.createPlayerModifierBadge(modifier, badgeColor);
                modifiersList.appendChild(badge);
            }
        } else {
            modifiersList.textContent = 'None';
        }
        modifiersDiv.appendChild(modifiersList);
        return modifiersDiv;
    }

    createPlayerModifierBadge(key, badgeColor) {
        const badge = document.createElement('span');
        badge.className = 'modifier-badge';
        badge.textContent = modifiersData[key]?.shortName || modifiersData[key]?.name || key;
        badge.dataset.fullname = modifiersData[key]?.name || key;
        badge.style.setProperty('--modifier-type-color', badgeColor);
        return badge;
    }
}
