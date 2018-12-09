import React from "react";
import styles from "../form/form.scss";

class Form extends React.Component{
    render() {
        return <div className={styles.form}>
            <form className={styles.kontakt} action="https://formspree.io/puniccy_piraci.kontakt@wp.pl" method="POST">
                <h3>Formularz zgłoszeniowy</h3>
                <h4>Rekrutacja otwarta</h4>
                <div><label><input name="Nick" placeholder="Twój nick:"/> </label></div>
                <div><label><input name="Morza" placeholder="Na jakich morzach są twoje miasta?"/></label></div>
                <div><label><input name="Doświadczenie" placeholder="Jak długo już grasz w grepolis?"/></label>
                </div>
                <div><label><input name="Email" placeholder="Twój email"/></label></div>
                <div><label> <textarea name="Motywacja"
                                       placeholder="Dlaczego chcesz do nas dołączyć?"/></label></div>

                <label> Czy posiadasz aplikację mobilną?
                    <input className={styles.radio} type="radio" name="Aplikacja" value="tak" /> Tak
                    <input className={styles.radio} type="radio" name="Aplikacja" value="nie" /> Nie
                </label>
                <button  type="submit">Wyślij</button>
                <div tabIndex="-1" data-sitekey="6LcIQ38UAAAAADZ41baxnwVZ9_DupmlbcpEX62tn"
                     data-callback="recaptchaClearErr"/>
            </form>
        </div>
    }
}
        export default Form;