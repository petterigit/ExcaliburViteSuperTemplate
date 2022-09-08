import { Actor, Engine } from "excalibur";
import { Ball } from "./objects/ball";
import { Sounds } from "./sounds/sounds";

export type Game = Engine;

export interface GameObjects {
	ball: Ball;
	paddle: Actor;
	bricks: Actor[];
}

export interface AllProps {
	game: Game;
	objects: GameObjects;
	sounds: Sounds;
}
