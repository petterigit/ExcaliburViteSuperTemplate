import { Engine } from "excalibur";
import { createBall } from "../objects/ball";
import { createBricks } from "../objects/bricks";
import { createPaddle } from "../objects/paddle";

export const createObjects = (game: Engine) => {
	const paddle = createPaddle(game);
	const ball = createBall(game);
	const bricks = createBricks(game);

	game.add(paddle);
	game.add(ball);
	bricks.forEach((brick) => game.add(brick));

	return {
		paddle: paddle,
		ball: ball,
		bricks: bricks,
	};
};
