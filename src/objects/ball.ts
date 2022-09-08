import { Actor, ActorArgs, CollisionType, Engine, vec, Vector } from "excalibur";

export class Ball extends Actor {
	public ballSpeed: Vector = vec(100, 100);
	private _colliding: boolean = false;

	constructor(args: ActorArgs, game: Engine) {
		super(args);
		this.body.collisionType = CollisionType.Passive;
		this.vel = this.ballSpeed;

		this.on("postupdate", () => {
			if (this.pos.x < this.width / 2) {
				this.vel.x = this.ballSpeed.x;
			}
			if (this.pos.x + this.width / 2 > game.drawWidth) {
				this.vel.x = this.ballSpeed.x * -1;
			}
			if (this.pos.y < this.height / 2) {
				this.vel.y = this.ballSpeed.y;
			}
		});
	}

	public get colliding() {
		return this._colliding;
	}

	public set colliding(arg: boolean) {
		this._colliding = arg;
	}
}
