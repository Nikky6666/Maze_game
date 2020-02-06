import React, {useState} from "react";
import s from './Cells.module.css';
import startImg from '../../../../assets/images/start-line.svg'
import rightChoise from '../../../../assets/images/rightChoise.png'
import errorChoise from '../../../../assets/images/errorChoise.png'
import answerImg from '../../../../assets/images/answerImg.png'

const GameCell = ({fieldSize, i, markerPozition, resultPosition, generateNewGameData, showResult, setShowResult, isLoadData}) => {

    const[isClicked, setIsClicked] =useState(false);


    const x = i%fieldSize;
    const y = Math.floor(i/fieldSize);
    const cellSize = 100 /fieldSize - 0.5;

    const onCellClick = () => {
       // if(x === resultPosition.x && y === resultPosition.y)
        if(showResult||isLoadData) return;
            setTimeout(() => {
                setIsClicked(false);
                setShowResult(false);
                generateNewGameData();
            }, 8000);
        setShowResult(true);
            setIsClicked(true);
    };

    return <div
        style={{width: cellSize+'%', height: cellSize+'%'}}
        className={s.gameCell}
        onClick={onCellClick}
    >
        { (markerPozition.x===x && markerPozition.y===y && !showResult) ? <img src={startImg} /> :
           <>
{/*               x: {x}, y: {y}*/}
               </>}
        {isClicked && x === resultPosition.x && y === resultPosition.y ? <img className={s.displyingClicecdImg} src={rightChoise}/>: isClicked?<img className={s.displyingClicecdImg} src={errorChoise}/>: <></>}
        {showResult && x === resultPosition.x && y === resultPosition.y && !isClicked && <img src={answerImg} className={s.displayingResultImg}/>}
    </div>
};


export default GameCell;