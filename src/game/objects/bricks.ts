import { Actor, Color, Engine } from "excalibur";
import { createBrick } from "./brick";

export const createBricks = (game: Engine) => {
  const brickColor = [Color.Violet, Color.Orange, Color.Yellow];

  const padding = 20;
  const columns = 5;
  const rows = 4;

  // Width = game width minus padding of each column / number of columns
  const brickWidth = (game.drawWidth - padding * (columns + 2)) / columns;

  const brickHeight = brickWidth * 0.5; // px

  const bricks: Actor[] = [];

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < columns; i++) {
      bricks.push(
        createBrick(
          // place at start of brick, x columns to right, 1.5*padding from wall
          brickWidth * 0.5 + i * (brickWidth + padding) + padding * 1.5,
          brickHeight * 0.5 + j * (brickHeight + padding) + padding * 1.5,
          brickWidth,
          brickHeight,
          brickColor[j % brickColor.length]
        )
      );
    }
  }
  return bricks;
};
