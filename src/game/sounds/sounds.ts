import { Sound } from "excalibur";

import onSound from "../assets/sounds/on.mp3";
import aijaijai from "../assets/sounds/aijaijai.mp3";
import viiskauttaviis from "../assets/sounds/viiskauttaviis1.mp3";

type SoundType = "onSound" | "viisKauttaViis" | "aijaijai";

export type Sounds = { [S in SoundType]: Sound };

export const createSounds = (): Sounds => {
	const sounds: Sounds = {
		onSound: new Sound(onSound),
		viisKauttaViis: new Sound(viiskauttaviis),
		aijaijai: new Sound(aijaijai),
	};

	return sounds;
};
