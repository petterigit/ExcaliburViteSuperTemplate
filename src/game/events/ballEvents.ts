import { Actor } from "excalibur";
import { Ball } from "../objects/ball";
import { Sounds } from "../sounds/sounds";
import { playWinningSound } from "../sounds/utils";

interface Props {
  ball: Ball;
  bricks: Actor[];
  sounds: Sounds;
}

export const ballEvents = (props: Props) => {
  const { ball, bricks, sounds } = props;

  ball.colliding = false;

  ball.on("collisionstart", async (event) => {
    const hitBrick = bricks.includes(event.other);

    if (hitBrick) {
      event.other.kill();

      const deadBricks = bricks.filter((brick) => brick.isKilled());

      if (bricks.length === deadBricks.length) {
        playWinningSound(sounds);
        await new Promise((res) => setTimeout(res, 500));
        alert("You win!");
      } else {
        sounds.viisKauttaViis.play(0.75);
      }
    } else {
      sounds.onSound.play(0.5);
    }

    var intersection = event.contact.mtv.normalize();

    if (!ball.colliding) {
      ball.colliding = true;
      if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
        ball.vel.x *= -1;
      } else {
        ball.vel.y *= -1;
      }
    }
  });

  ball.on("collisionend", () => {
    ball.colliding = false;
  });

  ball.on("exitviewport", () => {
    sounds.aijaijai.play(1);
  });
};
