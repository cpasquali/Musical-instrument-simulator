import React, { useEffect, useState } from "react";
import "../components/instrument.css";
import useTogleTheme from "../customHooks/togleThemeHook";
import SOUNDS from "../utils/soundsUtil";

export const Instrument = () => {
  const { theme, togleTheme } = useTogleTheme();
  const NOTES = ["A", "S", "D", "F", "G", "H", "J"];
  const [notePress, setNotePress] = useState(null);

  useEffect(() => {
    const handleInstrument = (e) => {
      setNotePress(e.key.toUpperCase());
      soundToPlay(e.key.toUpperCase());
    };

    window.addEventListener("keydown", handleInstrument);
    window.addEventListener("keyup", () => setNotePress(null));
  }, []);

  const soundToPlay = (note) => {
    const sound = SOUNDS[note];
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  const soundToPlayClick = (note) => {
    soundToPlay(note);
  };

  useEffect(() => {
    document.body.className = `body-${theme}`;
  }, [theme]);

  return (
    <section className={`container-${theme}`}>
      <button className={`btnTheme-${theme}`} onClick={togleTheme}>
        {theme === "light" ? (
          <ion-icon name="sunny-outline"></ion-icon>
        ) : (
          <ion-icon name="moon-outline"></ion-icon>
        )}
      </button>
      <ul className={"notes"}>
        {NOTES.map((note) => (
          <li
            className={`note ${notePress === note ? "pressed" : ""}`}
            key={note}
            onClick={() => {
              soundToPlayClick(note);
              soundToPlay(note);
            }}
          >
            {note}
          </li>
        ))}
      </ul>
    </section>
  );
};
