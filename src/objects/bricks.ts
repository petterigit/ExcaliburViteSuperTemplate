import { Actor, Color, Engine } from "excalibur";
import { createBrick } from "./brick";

export const createBricks = (game: Engine) => {
	const padding = 20;
	const xoffset = 65;
	const yoffset = 20;
	const columns = 5;
	const rows = 3;

	const brickColor = [Color.Violet, Color.Orange, Color.Yellow];
	const brickWidth = game.drawWidth / columns - padding - padding / columns; // px
	const brickHeight = 30; // px

	const bricks: Actor[] = [];

	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < columns; i++) {
			bricks.push(
				createBrick(
					xoffset + i * (brickWidth + padding) + padding,
					yoffset + j * (brickHeight + padding) + padding,
					brickWidth,
					brickHeight,
					brickColor[j % brickColor.length]
				)
			);
		}
	}
	return bricks;
};
