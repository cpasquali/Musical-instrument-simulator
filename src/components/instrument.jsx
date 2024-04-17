import React, { useEffect, useState } from "react";
import "../components/instrument.css";
import useTogleTheme from "../customHooks/togleThemeHook";
import { soundToPlay, soundToPlayClick } from "../utils/soundsUtil";

export const Instrument = () => {
  const { theme, togleTheme } = useTogleTheme();
  const NOTES = ["A", "S", "D", "F", "G", "H", "J"];
  const [notePress, setNotePress] = useState(null);

  useEffect(() => {
    const handleInstrument = (e) => {
      const key = e.key.toUpperCase();
      if (NOTES.includes(key)) {
        setNotePress(key);
        soundToPlay(key);
      }
    };

    window.addEventListener("keydown", handleInstrument);
    window.addEventListener("keyup", () => setNotePress(null));

    return () => {
      window.removeEventListener("keydown", handleInstrument);
      window.removeEventListener("keyup", () => setNotePress(null));
    };
  }, [NOTES]);

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
