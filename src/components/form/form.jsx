import React from "react";
import styles from "../form/form.scss";


const Achilles="Achilles";
const Other="Inny świat";
const None="Nie mam konta,chcę zacząć grać";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state={
                playerOrigin: Achilles,

        }
    }

    handleSelectChange =(event)=>{
        this.setState(
            {playerOrigin:event.target.value}
        )
    };

    /*onClick=()=>{
        const currentState = this.state.achilles;
        this.setState({ active: !currentState });
    };
    */
    render() {
        return <div className={styles.form}>
            <form className={styles.kontakt} action="https://formspree.io/puniccy_piraci.kontakt@wp.pl" method="POST">
                <h3>Formularz zgłoszeniowy</h3>
                <h4>Rekrutacja otwarta</h4>

                <div>
                    <p>Skąd jesteś?</p>
                    <select onChange={this.handleSelectChange} name="Świat">

                    <option>{Achilles}</option>
                    <option>{Other}</option>
                    <option>{None}</option>

                    </select>
                </div>

                <div><label><input disabled={this.state.playerOrigin === None} name="Nick" placeholder="Twój nick:"  /> </label></div>
                <div><label><input disabled={this.state.playerOrigin === None || this.state.playerOrigin === Other} name="Morza" placeholder="Na jakich morzach są twoje miasta?" /></label></div>
                <div><label><input disabled={this.state.playerOrigin === None} name="Doświadczenie" placeholder="Jak długo już grasz w grepolis?"   /></label>
                </div>
                <div><label><input disabled={ this.state.playerOrigin === Achilles } id="Email" name="Email" placeholder="Twój email"  /></label></div>
                <div><label> <textarea name="Motywacja"
                                       placeholder="Dlaczego chcesz do nas dołączyć?" required/></label></div>

                <label> Czy posiadasz aplikację mobilną?
                    <input className={styles.radio} type="radio" name="Aplikacja" value="tak" disabled={this.state.playerOrigin === None}/> Tak
                    <input className={styles.radio} type="radio" name="Aplikacja" value="nie" disabled={this.state.playerOrigin === None}/> Nie

                </label>
                <button  type="submit">Wyślij</button>
                <div tabIndex="-1" data-sitekey="6LcIQ38UAAAAADZ41baxnwVZ9_DupmlbcpEX62tn"
                     data-callback="recaptchaClearErr"/>
            </form>
        </div>
    }
}
        export default Form;