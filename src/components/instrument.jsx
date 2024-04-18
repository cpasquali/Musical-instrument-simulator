import React, { useEffect, useState } from "react";
import "../components/instrument.css";
import useTogleTheme from "../customHooks/togleThemeHook";
import { soundToPlay, soundToPlayClick } from "../utils/soundsUtil";
import { NOTES, N } from "../utils/arraysNotesUtil"
import useTogleShowNotes from "../customHooks/togleShowNotes";

export const Instrument = () => {
  const { theme, togleTheme } = useTogleTheme();
  const [notePress, setNotePress] = useState(null);
  const { show, togleShowNotes} = useTogleShowNotes();

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
    <section className={`container ${theme}`}>
      <section className="buttonsContainer">
        <button className={`btnTheme ${theme}`} onClick={togleTheme}>
          {theme === "light" ? (
            <ion-icon name="sunny-outline"></ion-icon>
          ) : (
            <ion-icon name="moon-outline"></ion-icon>
          )}
        </button>
        <button className={`btnMostrar ${theme}`} onClick={togleShowNotes}>Mostrar</button>
      </section>
      <ul className={"notes"}>
        {NOTES.map((note, indice) => (
          <li
            className={`note ${notePress === note ? "pressed" : ""}`}
            key={note}
            onClick={() => {
              soundToPlayClick(note);
              soundToPlay(note);
            }}
          >
            {show ? <sub>{N[indice]}</sub> : ""}
          </li>
        ))}
      </ul>
    </section>
  );
};
