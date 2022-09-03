import { createGame } from "./engine/game";
import { createObjects } from "./game/createObjects";
import { initGameEvents } from "./events/gameEvents";
import { useDevUtils } from "./devutils";
import { AllProps, Game, GameObjects } from "./types";

const game: Game = createGame();
const objects: GameObjects = createObjects(game);
const allProps: AllProps = { game, objects };
initGameEvents(allProps);

if (import.meta.env.MODE === "useDevUtils") {
	useDevUtils(allProps);
}

game.start();
