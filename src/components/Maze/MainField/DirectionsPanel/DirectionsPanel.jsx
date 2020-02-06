import React, {useEffect} from "react";
import s from './DirectionsPanel.module.css'
import upArrow from '../../../../assets/images/up-arrow.png'

const DirectionsPanel = ({directions, setIsLoadData}) => {
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoadData(false)
        }, 10000)
    }, [directions])
    const imagesDirections = [];
    for(let i=0; i<directions.length; i++){
        let rotateStyle = "";
        switch (directions[i].direction) {
            case 'up': rotateStyle = 'rotate(0deg)'; break;
            case 'bottom': rotateStyle = 'rotate(180deg)'; break;
            case 'left': rotateStyle = 'rotate(270deg)'; break;
            case 'right': rotateStyle = 'rotate(90deg)'; break;
        }
        imagesDirections.push(<div className={s.imgDirection}>
            <img key={directions[i].id} style={{transform: rotateStyle, animationDelay: i+'s'}}  src={upArrow}/>
        </div>)
    }
    return <div className={s.wrapper}>
        {imagesDirections}
    </div>
};

export default DirectionsPanel