import { Actor } from "excalibur";
import { Ball } from "../objects/ball";
import { Sounds } from "../sounds/sounds";

interface Props {
	ball: Ball;
	bricks: Actor[];
	sounds: Sounds;
}

export const ballEvents = (props: Props) => {
	const { ball, bricks, sounds } = props;

	ball.colliding = false;

	ball.on("collisionstart", (event) => {
		const hitBrick = bricks.includes(event.other);

		if (hitBrick) {
			sounds.viisKauttaViis.play(0.75);
			event.other.kill();
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
