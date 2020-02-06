import React from "react";
import s from './Header.module.css'

const Header = (props) => {
    return <div className={s.wrapper}>
        <div className={s.nameGame}>Maze</div>
        <div className={s.line}/>

    </div>
};

export default Header