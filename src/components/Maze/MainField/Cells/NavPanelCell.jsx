import React from "react";
import s from './Cells.module.css'

const NavPanelCell = (props) => {
    return <div
        className={s.navPanel}
        style={{width: props.width+'%', height: props.height+'%'}}
    >{props.name}</div>
};

export default NavPanelCell;