import React from "react";
import styles from "./news.scss"


class News extends React.Component{
    render(){
        return(<div className={styles.box}>
                <div className={styles.Iam}>
                    <p>Pakt z </p>
                    <b>
                        <div className={styles.ally}>
                            N.S.S<br/>
                            N W O<br/>
                            * 3.O.D *<br/>
                            ARMIA LEONIDASA<br/>
                            TERRORMACHINE
                        </div>
                    </b>

                    <p>Wojna z</p>
                    <b>
                        <div className={styles.enemy}>
                            **LEGENDARNICARTHAG0**<br/>
                            Angel-GT<br/>
                            MACEDONIA<br/>
                            Na chwałę Posejdona<br/>
                            Valhalla
                        </div>
                    </b>

                </div>
            </div>

        )
    }
}
export default News

