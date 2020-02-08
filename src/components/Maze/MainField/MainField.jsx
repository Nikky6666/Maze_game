import React from "react";
import s from './MainField.module.css'
import NavPanels from "./NavPanels";
import GameCells from "./Cells/GameCells";


const MainField = ({maze, generateNewGameData, setIsDisplayResult})=>{

    return <div className={s.wrapper}>
        <NavPanels fieldSize={maze.fieldSize}/>
        <GameCells
            resultPosition = {maze.resultPosition}
            startPosition={maze.startPosition}
            isDisplayResult={maze.isDisplayResult}
            isLoadData={maze.isLoadData}
            fieldSize={maze.fieldSize}
            setIsDisplayResult={setIsDisplayResult} generateNewGameData={generateNewGameData}/>
    </div>
};

export default MainField