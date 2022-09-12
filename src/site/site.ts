import { gameCanvasID, gameContainerID, gameStartButtonID } from "../consts";

export const createSite = () => {
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
