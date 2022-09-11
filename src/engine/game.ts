import { Engine } from "excalibur";

export const createGame = () => {
	const game = new Engine({
		resolution: {
			width: 800,
			height: 600,
		},
	});

	return game;
};
