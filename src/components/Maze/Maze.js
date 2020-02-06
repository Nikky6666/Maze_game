import React, {useEffect} from "react";
import s from './Maze.module.css'
import Header from "./Header/Header";
import MainField from "./MainField/MainField";
import DirectionsPanel from "./MainField/DirectionsPanel/DirectionsPanel";

const Maze = ({maze, generateNewGameData, setShowResult, setIsLoadData}) => {

    useEffect(() =>{
        generateNewGameData();
    }, []);

    return <div className={s.wrapper}>
        <Header/>
        <MainField maze={maze} generateNewGameData={generateNewGameData} setShowResult={setShowResult}/>
        <DirectionsPanel directions={maze.directions} setIsLoadData={setIsLoadData}/>
    </div>
};

export default Maze