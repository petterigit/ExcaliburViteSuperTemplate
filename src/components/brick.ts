import { Actor, CollisionType, Color } from "excalibur";

export const createBrick = (x: number, y: number, width: number, height: number, color: Color) => {
	const brick = new Actor({
		x: x,
		y: y,
		width: width,
		height: height,
		color: color,
	});

	brick.body.collisionType = CollisionType.Active;

	return brick;
};
