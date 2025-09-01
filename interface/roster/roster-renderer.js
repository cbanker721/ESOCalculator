class RosterRenderer {
    constructor(rosterManager, buildManager) {
        this.rosterManager = rosterManager;
        this.buildManager = buildManager;
        this.initialize();
    }

    initialize() {
        this.grid = document.getElementById('roster-grid');
    }

    renderRoster(roster) {
        this.grid.innerHTML = '';
        Object.values(roster).forEach(player => {
            const card = this.renderPlayerCard(player);
            this.grid.appendChild(card);
        });
    }

    renderPlayerCard(player) {
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

        return card;
    }

    getSetName(setId) {
        return setsData[setId]?.shortName || setsData[setId]?.name || setId;
    }
}