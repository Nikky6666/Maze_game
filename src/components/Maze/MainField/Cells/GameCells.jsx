import React, {useState} from "react";
import GameCell from "./GameCell";
import s from "../MainField.module.css";

const GameCells = ({resultPosition, markerPozition,showResult,isLoadData,fieldSize, generateNewGameData, setShowResult}) => {
    const gameCells = [];
    for(let i=0; i<fieldSize*fieldSize;i++) gameCells.push(
        <GameCell
            generateNewGameData={generateNewGameData}
            resultPosition = {resultPosition}
            markerPozition={markerPozition}
            showResult={showResult}
            setShowResult={setShowResult}
            i={i}
            isLoadData={isLoadData}
            fieldSize={fieldSize}/>);

    return <div className={s.mainField}>{gameCells}</div>
};

export default GameCells