import { createBall } from "./components/ball";
import { createBricks } from "./components/bricks";
import { createGame } from "./components/game";
import { createPaddle } from "./components/paddle";

const game = createGame();

const paddle = createPaddle(game);

game.add(paddle);

game.input.pointers.primary.on("move", (evt) => {
	paddle.pos.x = evt.worldPos.x;
});

const ball = createBall(game);

game.add(ball);

const bricks = createBricks(game);

bricks.forEach((brick) => game.add(brick));

let colliding = false;

ball.on("collisionstart", function (ev) {
	if (bricks.indexOf(ev.other) > -1) {
		ev.other.kill();
	}

	var intersection = ev.contact.mtv.normalize();

	if (!colliding) {
		colliding = true;
		if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
			ball.vel.x *= -1;
		} else {
			ball.vel.y *= -1;
		}
	}
});

ball.on("collisionend", () => {
	colliding = false;
});

ball.on("exitviewport", () => {
	alert("You lose!");
});

game.start();
