import React, { useState, useEffect } from "react";
import allWords from "../../../assets/words.json";
import commonWords from "../../../assets/commonWords.json";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { toast } from "react-toastify";
import "./Wordle.css";
import "react-simple-keyboard/build/css/index.css";

const Wordle = () => {
  const [stateOfColors, setStateOfColors] = useState({});
  const [words, setWords] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [colors, setColors] = useState([
    ["gray", "gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray", "gray"],
  ]);
  const [textWord, setTextWord] = useState("");
  const [counter, setCounter] = useState(0);
  const [theWord, setTheWord] = useState("");
  const [numberOfPieces, setNumberOfPieces] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const initialColors = letters.reduce((acc, letter) => {
      acc[letter] = "gray";
      return acc;
    }, {});
    setStateOfColors(initialColors);
    setTheWord(commonWords[Math.floor(Math.random() * commonWords.length)]);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkIfItsThere();
    }
  };

  const onKeyPress = (button) => {
    if (textWord.length < 5) {
      setTextWord(textWord + button);
    }
  };

  const changeColor = (guessedWords) => {
    const tempColors = [...colors];
    const updatedStateOfColors = { ...stateOfColors };

    guessedWords[counter].forEach((letter, index) => {
      if (theWord.charAt(index) === letter) {
        tempColors[counter][index] = "green";
        updatedStateOfColors[letter] = "green";
      } else if (theWord.includes(letter)) {
        tempColors[counter][index] = "yellow";
        updatedStateOfColors[letter] = "yellow";
      } else {
        updatedStateOfColors[letter] = updatedStateOfColors[letter] === "green" ? "green" : "red";
      }
    });

    setColors(tempColors);
    setStateOfColors(updatedStateOfColors);
    setCounter(counter + 1);
  };

  const checkIfItsThere = () => {
    if (allWords.includes(textWord)) {
      const newWords = [...words];
      newWords[counter] = textWord.split("");
      setWords(newWords);
      setTextWord("");
      changeColor(newWords);

      if (textWord === theWord) {
        setNumberOfPieces(800);
        setTimeout(() => {
          setNumberOfPieces(0);
        }, 10000);
      }
    } else {
      toast.error("The word does not exist 😔");
    }
  };

  return (
    <div className="wordle-container">
      <h1>
        Wordle <br />
        {counter > 4 ? `The word is ${theWord}` : ""}
      </h1>
      <Confetti
        width={width - 10}
        height={height - 10}
        numberOfPieces={numberOfPieces}
        gravity={0.2}
        opacity={0.5}
        style={{ position: "fixed" }}
      />
      <div className="wordle-keyboard-flex">
        <div className="wordle-small">
          {words.map((word, rowIndex) => (
            <div className="row" key={rowIndex}>
              {word.map((letter, colIndex) => (
                <div
                  className={`item ${colors[rowIndex][colIndex]}`}
                  key={colIndex}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
          <input
            type="text"
            onKeyDown={handleKeyDown}
            maxLength={5}
            value={textWord}
            onChange={(event) =>
              setTextWord(event.target.value.toLowerCase())
            }
          />
        </div>
        <div className="keyboard">
          <div className="keyboard-layout">
            {[
              "qwertyuiop".split(""),
              "asdfghjkl".split(""),
              "zxcvbnm".split(""),
            ].map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row.map((key) => (
                  <button
                    className={stateOfColors[key]}
                    onClick={() => onKeyPress(key)}
                    key={key}
                  >
                    {key}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wordle;
