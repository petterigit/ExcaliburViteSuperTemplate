import { Actor, CollisionType, Color, Engine } from "excalibur";

export const createPaddle = (game: Engine) => {
	const paddle = new Actor({
		x: 150,
		y: game.drawHeight - 40,
		width: 200,
		height: 20,
		color: Color.Chartreuse,
	});

	paddle.body.collisionType = CollisionType.Fixed;

	return paddle;
};
