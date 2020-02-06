import React from "react";
import s from './MainField.module.css'
import NavPanels from "./NavPanels";
import GameCells from "./Cells/GameCells";


const MainField = ({maze, generateNewGameData, setShowResult})=>{

    return <div className={s.wrapper}>
        <NavPanels fieldSize={maze.fieldSize}/>
        <GameCells setShowResult={setShowResult} generateNewGameData={generateNewGameData}  maze={maze}/>
    </div>
};

export default MainField