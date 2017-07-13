'use strict';

exports.BattlePokedex = {
	Machamp: {
		inherit: true,
		types: ["Fighting"],
	},
	Garchomp: {
		inherit: true,
		types: ["Ground", "Dragon"],
	},
	Gyarados: {
		inherit: true,
		types: ["Water", "Flying"],
	},
	Moltres: {
		inherit: true,
		types: ["Fire", "Flying"],
	},
	porygon2: {
		inherit: true,
		types: ["Sound"],
	},
	gengar: {
		inherit: true,
		types: ["Ghost", "Gas"],
	},
	porygonz: {
		inherit: true,
		types: ["Sound"],
	},
	sylveon: {
		species: "Sylveon",
		types: ["Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60},
		abilities: {0: "Cute Charm", H: "Pixilate"},
		heightm: 1,
		weightkg: 23.5,
		color: "Pink",
		prevo: "eevee",
		evoLevel: 2,
		eggGroups: ["Field"],
	},
};
