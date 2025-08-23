const cpData = {
  [CpEnum.FightingFinesse]: { "name": "Fighting Finesse", "critDamage": 8, "default": "on" },
  [CpEnum.Backstabber]: { "name": "Backstabber", "critDamage": 10 },
  [CpEnum.ForceOfNature]: { "name": "Force of Nature", "pen": 660, "type": "dropdown", "options": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "default": 0 },
};

const passiveCPData = {
  [CpEnum.Piercing]: { "name": "Piercing", "pen": 700, "default": "on", "toolip": "Passive CP" },
};