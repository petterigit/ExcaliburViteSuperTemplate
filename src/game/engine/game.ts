import { DisplayMode, Engine } from "excalibur";
import { gameCanvasID } from "../../consts";

export const createGame = () => {
	let displayMode;
	let canvasElementId = undefined;
	const mediaQuery = window.matchMedia("(min-width: 700px)");
	if (mediaQuery.matches) {
		/* If on desktop 
			Set display mode to fit canvas
			AND tell excalibur to use canvas
		*/
		displayMode = DisplayMode.FitContainer;
		canvasElementId = gameCanvasID;
		console.log("aaa");
	} else {
		/* If on mobile 
			Set display mode to fit screen
			AND omit canvas so excalibur does not try and use it
		*/
		displayMode = DisplayMode.FillScreen;
	}

	const game = new Engine({
		resolution: {
			width: 600,
			height: 800,
		},
		displayMode: displayMode,
		canvasElementId: canvasElementId,
	});

	return game;
};
