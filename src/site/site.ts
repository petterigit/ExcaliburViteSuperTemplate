import { gameCanvasID, gameContainerID, gameStartButtonID } from "../consts";

export const createSite = () => {
	const mediaQuery = window.matchMedia("(min-width: 700px)");
	if (!mediaQuery.matches) {
		/* If on mobile 
			"ratti pohjaan excalibur ohjaa"
			"let excalibur take the wheel"
			i.e. just show full screen, no need for anything else
		*/
		return;
	}

	const siteMain = document.getElementById("app");
	if (!siteMain) {
		throw "Document main must have id 'app'!";
	}

	siteMain.className = "siteMain";

	const gameContainer = document.createElement("div");
	gameContainer.className = "gameContainer";
	gameContainer.id = gameContainerID;

	const gameCanvas = document.createElement("canvas");
	gameCanvas.id = gameCanvasID;

	const gameButton = document.createElement("button");
	gameButton.id = gameStartButtonID;
	gameButton.className = "gameStartButton";
	gameButton.textContent = "Start the game";

	gameContainer.appendChild(gameCanvas);
	gameContainer.appendChild(gameButton);
	siteMain.appendChild(gameContainer);
};
