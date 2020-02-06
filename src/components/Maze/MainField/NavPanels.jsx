import NavPanelCell from "./Cells/NavPanelCell";
import s from "./MainField.module.css";
import React from "react";

 const NavPanels = (props) => {
    const cellWidth = 100 / props.fieldSize - 0.5;
    const leftNavPanel = [];
    const topNavPanel = [];
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
    for (let i = 1; i <= props.fieldSize; i++) {
        leftNavPanel.push(<NavPanelCell name={i} height={Math.floor(cellWidth)}/>);
        topNavPanel.push(<NavPanelCell name={alphabet[i - 1]} width={Math.floor(cellWidth)}/>);
    }
    return <>
        <div className={s.emptySpace}/>
        <div className={s.topNavPanel}>
            {topNavPanel}
        </div>
        <div className={s.leftNavPanel}>
            {leftNavPanel}
        </div>
    </>
};
export default NavPanels;