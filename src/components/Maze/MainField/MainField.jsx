import React from "react";
import s from './MainField.module.css'
import NavPanels from "./NavPanels";
import GameCells from "./Cells/GameCells";


const MainField = ({maze, generateNewGameData, setShowResult})=>{

    return <div className={s.wrapper}>
        <NavPanels fieldSize={maze.fieldSize}/>
        <GameCells
            resultPosition = {maze.resultPosition}
            markerPozition={maze.markerPozition}
            showResult={maze.showResult}
            isLoadData={maze.isLoadData}
            fieldSize={maze.fieldSize}
            setShowResult={setShowResult} generateNewGameData={generateNewGameData}  maze={maze}/>
    </div>
};

export default MainField