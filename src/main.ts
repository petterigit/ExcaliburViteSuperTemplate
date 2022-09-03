import { createGame } from "./engine/game";
import { createObjects } from "./game/createObjects";
import { initGameEvents } from "./events/gameEvents";

const game = createGame();

const objects = createObjects(game);

initGameEvents({ game, objects });

game.start();
