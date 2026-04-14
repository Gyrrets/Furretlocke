'use strict';

const assert = require('../../assert');
const common = require('../../common');

let battle;

describe('Game Type Rule', () => {
	describe('Validation', () => {
		it('should reject invalid game types', () => {
			assert.throws(() => Dex.formats.validate('gen9customgame@@@Game Type = Wonder Launcher'));
		});

		it('should support all game types case-insensitive', () => {
			for (const gameType of Dex.getSupportedGameTypes()) {
				Dex.formats.validate(`gen9customgame@@@Game Type = ${gameType}`);
				Dex.formats.validate(`gen9customgame@@@Game Type = ${gameType.toUpperCase()}`);
			}
		});

		it('should reject game types that require too many Pokémon', () => {
			assert.throws(() => Dex.formats.validate('gen9customgame@@@Game Type = Triples,Picked Team Size = 1'));
		});

		it('should reject Partners-in-Crime Singles', () => {
			assert.throws(() => Dex.formats.validate('gen9partnersincrime@@@Game Type = Singles'));
		});

		it('should reject Shared Power Doubles', () => {
			assert.throws(() => Dex.formats.validate('gen9sharedpower@@@Game Type = Doubles'));
		});
	});

	describe('Simulation', () => {
		afterEach(() => battle.destroy());

		it('should support adding FFA to random formats', () => {
			battle = common.createBattle({ formatid: 'gen91v1factory@@@Game Type = Free For All' });
			assert.equal(battle.gameType, 'freeforall');
			assert.equal(battle.sides.length, 4);
		});

		it('should support adding FFA to OMs', () => {
			battle = common.createBattle({ formatid: 'gen9mixandmega@@@Game Type = Free For All' }, [[
				{ species: 'Calyrex', moves: ['sleeptalk'] },
			], [
				{ species: 'Victini', ability: 'Victory Star', moves: ['vcreate'] },
			], [
				{ species: 'Chansey', moves: ['sleeptalk'] },
			], [
				{ species: 'Tyrunt', moves: ['crunch'] },
			]]);
			assert.equal(battle.gameType, 'freeforall');
			assert.equal(battle.sides.length, 4);
		});
	});
});
