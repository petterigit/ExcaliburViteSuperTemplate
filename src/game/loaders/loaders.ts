import { Loader } from "excalibur";
import { gameStartButtonID } from "../../consts";
import { Sounds } from "../sounds/sounds";

interface Props {
	sounds: Sounds;
}

export const createLoader = (props: Props) => {
	const { sounds } = props;

	const resources = Object.values({ ...sounds });
	const loader = new Loader(resources);

	loader.startButtonFactory = () => {
		let startButton = document.getElementById(gameStartButtonID);

		if (!startButton) {
			console.error("Start button not defined!");
			startButton = document.createElement("button");
			startButton.textContent = "Start game";
		}

		if (startButton.nodeName !== "BUTTON") {
			console.error("Start button not a button element!");
			startButton = document.createElement("button");
			startButton.textContent = "Start game";
		}

		return startButton as HTMLButtonElement;
	};

	return loader;
};
