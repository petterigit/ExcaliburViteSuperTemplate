import { Actor, CollisionType, Color, Engine, vec } from "excalibur";

const game = new Engine({
	width: 800,
	height: 600,
});

const paddle = new Actor({
	x: 150,
	y: game.drawHeight - 40,
	width: 200,
	height: 20,
	color: Color.Chartreuse,
});

paddle.body.collisionType = CollisionType.Fixed;
game.add(paddle);

game.input.pointers.primary.on("move", (evt) => {
	paddle.pos.x = evt.worldPos.x;
});

const ball = new Actor({
	x: 100,
	y: 300,
	radius: 10,
	color: Color.Red,
});

const ballSpeed = vec(100, 100);

setTimeout(() => {
	ball.vel = ballSpeed;
}, 1000);

ball.body.collisionType = CollisionType.Passive;
game.add(ball);
ball.on("postupdate", () => {
	if (ball.pos.x < ball.width / 2) {
		ball.vel.x = ballSpeed.x;
	}
	if (ball.pos.x + ball.width / 2 > game.drawWidth) {
		ball.vel.x = ballSpeed.x * -1;
	}
	if (ball.pos.y < ball.height / 2) {
		ball.vel.y = ballSpeed.y;
	}
});

const padding = 20;
const xoffset = 65;
const yoffset = 20;
const columns = 5;
const rows = 3;

const brickColor = [Color.Violet, Color.Orange, Color.Yellow];

const brickWidth = game.drawWidth / columns - padding - padding / columns; // px
const brickHeight = 30; // px
const bricks: Actor[] = [];
for (let j = 0; j < rows; j++) {
	for (let i = 0; i < columns; i++) {
		bricks.push(
			new Actor({
				x: xoffset + i * (brickWidth + padding) + padding,
				y: yoffset + j * (brickHeight + padding) + padding,
				width: brickWidth,
				height: brickHeight,
				color: brickColor[j % brickColor.length],
			})
		);
	}
}

bricks.forEach(function (brick) {
	brick.body.collisionType = CollisionType.Active;
	game.add(brick);
});

let colliding = false;
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

game.start();
