import React from "react";
import styles from "./App.scss";
import imageSrc from "../../assets/obrazek.jpg"

export default class App extends React.Component{
    render() {
        return <div className={styles.app}>

            <img src={imageSrc} alt="Alt"/>
            Wszystko śmiga brum brum</div>
    }
}