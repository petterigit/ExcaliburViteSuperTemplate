import { Actor, CollisionType, Color, Engine, vec } from "excalibur";

export const createBall = (game: Engine) => {
	const ball = new Actor({
		x: 100,
		y: 300,
		radius: 10,
		color: Color.Red,
	});

	ball.body.collisionType = CollisionType.Passive;

	setTimeout(() => {
		ball.vel = ballSpeed;
	}, 1000);

	ball.on("postupdate", () => {
		if (ball.pos.x < ball.width / 2) {
			ball.vel.x = ballSpeed.x;
		}
		if (ball.pos.x + ball.width / 2 > game.drawWidth) {
			ball.vel.x = ballSpeed.x * -1;
		}
		if (ball.pos.y < ball.height / 2) {
			ball.vel.y = ballSpeed.y;
		}
	});

	return ball;
};

export const ballSpeed = vec(100, 100);
