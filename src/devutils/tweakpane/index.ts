import { Pane } from "tweakpane";
import { AllProps } from "../../types";
/*

export const useTweakPane = (props: AllProps) => {
	const { game, objects } = props;
	const { ball, paddle, bricks } = objects;
	const pane = new Pane();

	const gameParams = {
		pause: false,
	};

	const gameFolder = pane.addFolder({ title: "Game", expanded: true });

	const pauseInput = gameFolder.addInput(gameParams, "pause");

	pauseInput.on("change", (e) => {
		console.log(e.value);
		if (e.value === true) {
			game.stop();
		}

		if (e.value === false) {
			game.start();
		}
	});

	const ballParams = {
		color: "red",
	};

	const ballFolder = pane.addFolder({ title: "Ball", expanded: true });

	const colorInput = ballFolder.addInput(ballParams, "color");

	colorInput.on("change", (e) => {
		console.log(e.value);
	});
};

*/
