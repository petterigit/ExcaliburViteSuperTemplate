import { Actor } from "excalibur";

interface Props {
	ball: Actor;
	bricks: Actor[];
}

export const ballEvents = (props: Props) => {
	const { ball, bricks } = props;
	let colliding = false;
	console.log(colliding);
	ball.on("collisionstart", function (ev) {
		if (bricks.indexOf(ev.other) > -1) {
			ev.other.kill();
		}

		var intersection = ev.contact.mtv.normalize();

		if (!colliding) {
			colliding = true;
			if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
				ball.vel.x *= -1;
			} else {
				ball.vel.y *= -1;
			}
		}
	});

	ball.on("collisionend", () => {
		colliding = false;
	});

	ball.on("exitviewport", () => {
		alert("You lose!");
	});
};
