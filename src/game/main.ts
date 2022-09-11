import { createGame } from "./engine/game";
import { createObjects } from "./game/createObjects";
import { initGameEvents } from "./events/gameEvents";
import { useDevUtils } from "./devutils";
import { AllProps, Game, GameObjects } from "./types";
import { createLoader } from "./loaders/loaders";
import { createSounds, Sounds } from "./sounds/sounds";

export const startGame = () => {
	const game: Game = createGame();

	const objects: GameObjects = createObjects(game);
	const sounds: Sounds = createSounds();
	const allProps: AllProps = { game, objects, sounds };
	initGameEvents(allProps);

	const loader = createLoader({ sounds });

	if (import.meta.env.MODE === "useDevUtils") {
		useDevUtils(allProps);
	}

	game.start(loader);
};
