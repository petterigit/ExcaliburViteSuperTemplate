import { Sounds } from "./sounds";

export const playWinningSound = (sounds: Sounds) => {
  const winSounds = [
    sounds.eikasiitasenenempaa,
    sounds.eiketaankiinnosta,
    sounds.eisiitasenenempaa,
    sounds.eitassasenkummempaa,
  ];

  const randomIndex = Math.floor(Math.random() * winSounds.length);

  console.log(winSounds[randomIndex]);
  winSounds[randomIndex].play(0.75);
};
