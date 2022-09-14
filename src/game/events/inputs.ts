import { Actor, Engine } from "excalibur";

interface Props {
  game: Engine;
  paddle: Actor;
}

export const inputs = (props: Props) => {
  const { game, paddle } = props;

  game.input.pointers.primary.on("move", (evt) => {
    paddle.pos.x = evt.worldPos.x;
  });
};
