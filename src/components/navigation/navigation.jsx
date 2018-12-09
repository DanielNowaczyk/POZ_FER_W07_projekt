import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import styles from "./navigation.scss";
import logo from "../../assets/logo.jpg";

import { NavLink } from "react-router-dom";


class Navigation extends React.Component{
    render() {
        return <div className={styles.nav_main}>

            <ul className={styles.navigation}>
            <li><NavLink to={ "/about-us" }>O nas</NavLink></li>
            <li><NavLink to={"/ews"}>Aktualności</NavLink></li>
            <li><NavLink to={ "/members" }>Członkowie</NavLink></li>
                <img className={styles.logo} src={logo}></img>
            <li><a href="http://pl21.grepolismaps.org/bacaaf98908512e94a45c5e418e60474" target="_blank">Mapa</a></li>
            <li><NavLink to={ "/form" }>Kontakt</NavLink></li>
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