import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import styles from "./navigation.scss";
import logo from "../../assets/logo.jpg";

import { NavLink } from "react-router-dom";


class Navigation extends React.Component{
    render() {
        return <div className={styles.nav_main}>

            <ul className={styles.navigation}>
            <li><NavLink to={ "/aboutUs" }>O nas</NavLink></li>
            <li><NavLink to={"/news"}>Dyplomacja</NavLink></li>
            <li><NavLink to={ "/members" }>Członkowie</NavLink></li>
                <NavLink to={ "/" }><img className={styles.logo} src={logo}/></NavLink>
            <li><NavLink to={"/maps"}>Mapy</NavLink></li>
            <li><NavLink to={ "/form" }>Rekrutacja</NavLink></li>
            <li><NavLink to={"/gallery"}>Galeria</NavLink></li>
        </ul>

        </div>
    }
}

export default Navigation;

/*<ReactAudioPlayer
                src="http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3"
                autoPlay
            />*/