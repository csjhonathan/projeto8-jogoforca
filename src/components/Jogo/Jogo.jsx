import Palavra from "./Palavra/Palavra"
import imagens from "../../utils/imagens"
import palavras from "../../palavras";
import { useState } from "react";

export default function Jogo({palavraAtual, setPalavraAtual, img, setImg,setDisabled, usedLetters, setUsedLetters,endGame, setEndgame , correct, setCorrect}) {
  

  const handleWord = () => {
    
    if (palavraAtual === "" || img===6 || (correct.join("") === palavraAtual && correct.join("").length === palavraAtual.length)) {
      const indiceAleatorio = parseInt(Math.random() * palavras.length) - 1;
      const word = palavras[indiceAleatorio];
      console.log(word)
      setPalavraAtual(word);
      setDisabled(false);
      setImg(0);
      setEndgame("");
      setUsedLetters([])
      setCorrect([])
    }
    
  }

  return (
    <div className="jogo">
      <div className="board">
        <img src={`${imagens[img]}`} alt="" data-test="game-image"/>
        <Palavra
          palavraAtual={palavraAtual.split("")}
          handleWord={handleWord}
          usedLetters={usedLetters}
          correct = {correct}
          endGame = {endGame}
          img = {img}
        />
      </div>
    </div>
  )
}

