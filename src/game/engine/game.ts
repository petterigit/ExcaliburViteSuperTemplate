import { DisplayMode, Engine } from "excalibur";
import { gameCanvasID } from "../../consts";

export const createGame = () => {
	const displayMode = DisplayMode.FitContainer;
	const canvasElementId = gameCanvasID;

	const game = new Engine({
		resolution: {
			width: 550,
			height: 1000,
		},
		displayMode: displayMode,
		canvasElementId: canvasElementId,
	});

	return game;
};
