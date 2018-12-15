import React from "react";
import styles from "./about.scss"

class About extends React.Component{
    render(){
        return(<div className={styles.box}>
                <div className={styles.about}>Morze...Morze zapamiętuje wszystko... Jego fale wciąż niosą echa dawnych bitew...
                    Podczas których Puniccy Piraci walczyli ze swymi wrogami,ale gdy zwycięstwo zostało osiągnięte,
                    świat Jota został zamknięty. Świadectwo tamtych wspaniałych dni zostało wymazane z kart historii.
                    Jednak garstka Piratów kontynuowała swoją przygodę,dotarli oni do świata zwanym Achilles.
                    Księga znów została otworzona na tej samej stronie a sztandar wolności raz jeszcze rozpoztarł się
                    nad bezkresnym przestworem morza...
                </div>
            </div>

        )

    }
}
export default About