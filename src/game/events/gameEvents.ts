import { Actor, Engine } from "excalibur";
import { Ball } from "../objects/ball";
import { Sounds } from "../sounds/sounds";
import { ballEvents } from "./ballEvents";
import { inputs } from "./inputs";

interface GameObjects {
  ball: Ball;
  paddle: Actor;
  bricks: Actor[];
}

interface Props {
  game: Engine;
  objects: GameObjects;
  sounds: Sounds;
}

export const initGameEvents = (props: Props) => {
  const { game, objects, sounds } = props;
  const { ball, paddle, bricks } = objects;

  inputs({ game, paddle });
  ballEvents({ ball, bricks, sounds });
};
