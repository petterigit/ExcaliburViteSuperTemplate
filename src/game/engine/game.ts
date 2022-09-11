import { DisplayMode, Engine } from "excalibur";
import { gameCanvasID } from "../../consts";

export const createGame = () => {
	const game = new Engine({
		resolution: {
			width: 800,
			height: 600,
		},
		displayMode: DisplayMode.FitContainer,
		canvasElementId: gameCanvasID,
	});

	return game;
};
