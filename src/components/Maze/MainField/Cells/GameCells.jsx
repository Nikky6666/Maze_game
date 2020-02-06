import React, {useState} from "react";
import GameCell from "./GameCell";
import s from "../MainField.module.css";

const GameCells = ({maze, generateNewGameData, setShowResult}) => {
    const gameCells = [];
    for(let i=0; i<maze.fieldSize*maze.fieldSize;i++) gameCells.push(
        <GameCell
            generateNewGameData={generateNewGameData}
            resultPosition = {maze.resultPosition}
            markerPozition={maze.markerPozition}
            showResult={maze.showResult}
            setShowResult={setShowResult}
            i={i}
            isLoadData={maze.isLoadData}
            fieldSize={maze.fieldSize}/>);

    return <div className={s.mainField}>{gameCells}</div>
};

export default GameCells