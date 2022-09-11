import { gameCanvasID } from "../consts";

export const createSite = () => {
	const siteMain = document.getElementById("app");
	if (!siteMain) {
		throw "Document main must have id 'app'!";
	}

	siteMain.className = "siteMain";

	const siteContainer = document.createElement("div");
	siteContainer.className = "gameContainer";

	const gameCanvas = document.createElement("canvas");

	gameCanvas.id = gameCanvasID;

	siteContainer.appendChild(gameCanvas);
	siteMain.appendChild(siteContainer);
};
