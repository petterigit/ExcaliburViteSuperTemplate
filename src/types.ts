import { Actor, Engine } from "excalibur";

export type Game = Engine;

export interface GameObjects {
	ball: Actor;
	paddle: Actor;
	bricks: Actor[];
}

export interface AllProps {
	game: Game;
	objects: GameObjects;
}
