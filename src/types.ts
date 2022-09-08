import { Actor, Engine } from "excalibur";
import { Sounds } from "./sounds/sounds";

export type Game = Engine;

export interface GameObjects {
	ball: Actor;
	paddle: Actor;
	bricks: Actor[];
}

export interface AllProps {
	game: Game;
	objects: GameObjects;
	sounds: Sounds;
}
