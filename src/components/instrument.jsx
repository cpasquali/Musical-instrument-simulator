import React, { useEffect, useState } from "react";
import "../components/instrument.css";
import useToggleTheme from "../customHooks/toggleThemeHook";
import { soundToPlay, soundToPlayClick } from "../utils/soundsUtil";
import { NOTES } from "../utils/arraysNotesUtil"
import useToggleShowNotes from "../customHooks/toggleShowNotes";

export const Instrument = () => {
  const { theme, toggleTheme } = useToggleTheme();
  const [notePress, setNotePress] = useState(null);
  const { show, toggleShowNotes} = useToggleShowNotes();

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
  }, []);

  useEffect(() => {
    document.body.className = `body ${theme}`;
  }, [theme]);

  return (
    <section className={`container ${theme}`}>
      <section className="buttonsContainer">
        <button className={`btnTheme ${theme}`} onClick={toggleTheme}>
          {theme === "light" ? (
            <ion-icon name="sunny-outline"></ion-icon>
          ) : (
            <ion-icon name="moon-outline"></ion-icon>
          )}
        </button>
        <button className={`btnMostrar ${theme}`} onClick={toggleShowNotes}>Mostrar</button>
      </section>
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
            {show ? <sub>{note}</sub> : ""}
          </li>
        ))}
      </ul>
    </section>
  );
};
