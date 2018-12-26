import React from "react";
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import styles from "./App.scss";
import Navigation from "../navigation/navigation"
import Members from "../members/members"
import Form from "../form/form"
import About from "../aboutUs/about"
import News from "../news/news"
import Gallery from "../gallery/gallery"
import Maps from "../maps/maps"
import ReactAudioPlayer from "react-audio-player";

const NotFound = () => <div>Strony nie ma</div>;

const Main = () => <div>
    <div className={styles.box}><div className={styles.nav_title}>Puniccy Piraci</div></div>
    <div className={styles.nav_motto}>Życie pod czarną banderą wiąże się licznymi trudami, ciężką pracą i znojem,
        ale oferowuje wolność, jakiej próżno by szukać gdziekolwiek indziej w ówczesnym świecie.</div>
</div>;



export default class App extends React.Component{
    render() {
        return <div className={styles.styles}>
                <Router>
                    <React.Fragment>
                        <Navigation/>
                        <div className={ styles.content }>
                            <Switch>
                                <Route exact path='/' component={Main} />
                                <Route path='/aboutUs' component={About} />
                                <Route path='/news' component={News} />
                                <Route path='/members' component={Members} />
                                <Route path='/maps' component={Maps} />
                                <Route path='/form' component={Form} />
                                <Route path='/gallery' component={Gallery} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </React.Fragment>
                </Router>
        </div>
    }
}
