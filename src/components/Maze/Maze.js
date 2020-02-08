import React, {useEffect} from "react";
import s from './Maze.module.css'
import Header from "./Header/Header";
import MainField from "./MainField/MainField";
import DirectionsPanel from "./MainField/DirectionsPanel/DirectionsPanel";

const Maze = ({maze, generateNewGameData, setIsDisplayResult, setIsLoadData}) => {

    useEffect(() =>{
        generateNewGameData();
    }, []);

    return <div className={s.wrapper}>
        <Header/>
        <MainField maze={maze} generateNewGameData={generateNewGameData} setIsDisplayResult={setIsDisplayResult}/>
        <DirectionsPanel directions={maze.directions} setIsLoadData={setIsLoadData}/>
    </div>
};

export default Maze