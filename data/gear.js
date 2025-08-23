const TraitEnum = Object.freeze({
  DIVINES: "DIVINES",
  INFUSED: "INFUSED",
  SHARPENED: "SHARPENED",
  STURDY: "STURDY",
  TRAINED: "TRAINED",
  WELL_FITTED: "WELL_FITTED",
});

const EnchantEnum = Object.freeze({
  INFUSED_CRUSHER: "INFUSED_CRUSHER",
  INFUSED_WEAKENING: "INFUSED_WEAKENING",
});

const enchantData = {
    [EnchantEnum.INFUSED_CRUSHER]: { "name": "Infused Crusher Enchant", "pen": 2108 },
    [EnchantEnum.INFUSED_WEAKENING]: { "name": "Infused Weakenning Enchant"},
}

const traitData = {
  [TraitEnum.SHARPENED]: { "name": "Sharpened", "pen": 1650, "range": [0, 1, 2], "sourceUrl": "https://eso-hub.com/en/traits", "tooltip": "Increases Physical and Spell Penetration. The value is per weapon with the Sharpened trait. (Base value shown is for a 1H weapon).", "hyperlink": "https://en.uesp.net/wiki/Online:Sharpened" },
};