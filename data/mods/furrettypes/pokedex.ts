export const Pokedex = {
    furret: {
        inherit: true,
        otherFormes: ["Furret-Fire"],
        formeOrder: ["Furret", "Furret-Fire"],
    },

    furretfire: {
    num: -101,
    name: "Furret-Fire",
    baseSpecies: "Furret",
    forme: "Fire",
    types: ["Fire"],
    baseStats: {hp: 85, atk: 76, def: 64, spa: 45, spd: 55, spe: 90},
    abilities: {0: "Run Away", 1: "Keen Eye", H: "Blaze"},
    heightm: 1.8,
    weightkg: 32.5,
    tier: "OU",
    gen: 9,
    exists: true,
requiredItem: null,
changesFrom: "Furret",
}
};
