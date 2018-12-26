import React from "react";
import styles from "./map.scss"

class Maps extends React.Component{
    render(){
        return(
            <div className={styles.box}>
                <div className={styles.main}>
                    <div className={styles.map}>
                        <span className={styles.mapTitle}>TOP 5</span>
                        <a href="http://pl21.grepolismaps.org/e3ed38ad99206f0b9957f98bb2dca4c7" target="blank">
                            <button type="button">Zobacz</button>
                        </a>
                        <img src="http://pl21.grepolismaps.org/showmap.php?id=e3ed38ad99206f0b9957f98bb2dca4c7" alt="top5"/>
                    </div>
                    <div className={styles.map}>
                        <span className={styles.mapTitle}>Pakt vs Wróg</span>
                        <a href="http://pl21.grepolismaps.org/ae1ba36ee26f74d3ea0b3b81903d4c45" target="blank">
                            <button type="button">Zobacz</button>
                        </a>
                        <img src="http://pl21.grepolismaps.org/showmap.php?id=89f677f57c3de7c2a8047e0c470c436a" alt="pakt vs wróg"/>
                    </div>

                </div>
            </div>

        )

    }
}
export default Maps