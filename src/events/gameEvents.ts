import { Actor, Engine } from "excalibur";
import { ballEvents } from "./ballEvents";
import { inputs } from "./inputs";

interface GameObjects {
	ball: Actor;
	paddle: Actor;
	bricks: Actor[];
}

interface Props {
	game: Engine;
	objects: GameObjects;
}

export const initGameEvents = (props: Props) => {
	const { game, objects } = props;
	const { ball, paddle, bricks } = objects;

	inputs({ game, paddle });
	ballEvents({ ball, bricks });
};
