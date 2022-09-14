import { Sound } from "excalibur";

import aijaijai from "../assets/sounds/aijaijai.mp3";
import eikasiitasenenempaa from "../assets/sounds/eikasiitasenenempaa.mp3";
import eisiitasenenempaa from "../assets/sounds/eisiitasenenempaa.mp3";
import eitassasenkummempaa from "../assets/sounds/eitassasenkummempaa.mp3";
import eiketaankiinnosta from "../assets/sounds/eiketaankiinnosta.mp3";
import onSound from "../assets/sounds/on.mp3";
import viiskauttaviis from "../assets/sounds/viiskauttaviis1.mp3";

type SoundType =
  | "aijaijai"
  | "eikasiitasenenempaa"
  | "eisiitasenenempaa"
  | "eitassasenkummempaa"
  | "eiketaankiinnosta"
  | "onSound"
  | "viisKauttaViis";

export type Sounds = { [S in SoundType]: Sound };

export const createSounds = (): Sounds => {
  const sounds: Sounds = {
    aijaijai: new Sound(aijaijai),
    eikasiitasenenempaa: new Sound(eikasiitasenenempaa),
    eisiitasenenempaa: new Sound(eisiitasenenempaa),
    eitassasenkummempaa: new Sound(eitassasenkummempaa),
    eiketaankiinnosta: new Sound(eiketaankiinnosta),
    onSound: new Sound(onSound),
    viisKauttaViis: new Sound(viiskauttaviis),
  };

  return sounds;
};
