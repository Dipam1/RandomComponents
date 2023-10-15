import React, { useState, useEffect } from "react";
import allWords from "../../../assets/words.json";
import commonWords from "../../../assets/commonWords.json";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { toast } from "react-toastify";
import "./Wordle.css";
import "react-simple-keyboard/build/css/index.css";

const Wordle = () => {
  const [words, setwords] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [colors, setcolors] = useState([
    ["gray", "gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray", "gray"],
    ["gray", "gray", "gray", "gray", "gray"],
  ]);
  const [textWord, settextWord] = useState("");
  const [counter, setcounter] = useState(0);
  const [theWord, setTheWord] = useState("");
  const [numberOfPieces, setNumberOfPieces] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setTheWord(commonWords[Math.floor(Math.random() * 637)]);
    console.log(theWord);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      checkIfItsThere();
    }
  };

  const changeColor = (aaru) => {
    const tempColors = [...colors];
    tempColors[counter] = ["black", "black", "black", "black", "black"];
    aaru[counter].forEach((letter, index) => {
      if (theWord.includes(letter)) {
        tempColors[counter][index] = "yellow";
      }
    });
    aaru[counter].forEach((letter, index) => {
      if (theWord.charAt(index) === letter) {
        tempColors[counter][index] = "green";
      }
    });

    setcolors(tempColors);
    setcounter(counter + 1);
  };

  const checkIfItsThere = () => {
    if (allWords.includes(textWord)) {
      const aaru = [...words];
      aaru[counter] = [
        textWord.charAt(0),
        textWord.charAt(1),
        textWord.charAt(2),
        textWord.charAt(3),
        textWord.charAt(4),
      ];
      setwords(aaru);
      settextWord("");
      changeColor(aaru);
    } else {
      console.log("first");
      toast.error("The word does not exist 😔");
    }

    if (textWord === theWord) {
      setNumberOfPieces(800);
      setTimeout(() => {
        setNumberOfPieces(0);
      }, 10000);
    }
  };

  return (
    <div className="wordle-container">
      <Confetti
        width={width - 10}
        height={height - 10}
        numberOfPieces={numberOfPieces}
        gravity={0.2}
        opacity={0.5}
        style={{ position: "fixed" }}
      />
      <h1>
        Wordle <br />
        {counter > 4 ? "The word is " + theWord : ""}
      </h1>
      <div className="wordle-small">
        {words.map((word, index1) => {
          return (
            <div className="row" key={index1}>
              {word.map((letter, index2) => {
                return (
                  <div
                    className={`item ${colors[index1][index2]}`}
                    key={index2}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          );
        })}
        <input
          type="text"
          onKeyDown={handleKeyDown}
          maxLength={5}
          value={textWord}
          onChange={(event) =>
            settextWord(event.target.value.toLocaleLowerCase())
          }
        />
      </div>
      <div className="keyboard">
      </div>
    </div>
  );
};

export default Wordle;
