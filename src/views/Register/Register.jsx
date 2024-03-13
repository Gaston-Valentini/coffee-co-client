import style from "./Register.module.css";
import logo from "../../assets/images/logo-white.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
    const [phone, setPhone] = useState();

    return (
        <section className={style.container}>
            <div className={style.photo}>
                <div className={style.overlay}>
                    <div className={style.overlayLogo}>
                        <img src={logo} />
                    </div>
                    <div className={style.overlayText}>Welcome to Coffee & Co, where the beans hold secrets, and the cups tell stories.</div>
                </div>
            </div>
            <div className={style.form}>
                <div className={style.formTitles}>
                    <div className={style.formTitlesTitle}>Register</div>
                    <div className={style.formTitlesSubtitle}>Sign up for access to your benefits</div>
                </div>
                <form className={style.formData}>
                    <div className={style.formDataFields}>
                        <input className={style.formDataFieldsName} placeholder="Name" type="text" />
                        <input className={style.formDataFieldsSurname} placeholder="Surname" type="text" />
                        <input className={style.formDataFieldsEmail} placeholder="Email" type="email" />
                        <input className={style.formDataFieldsPassword} placeholder="Password" type="password" />
                        <input className={style.formDataFieldsConfirm} placeholder="Confirm password" type="password" />
                        <PhoneInput className={style.formDataFieldsPhone} placeholder="Phone number" value={phone} onChange={setPhone} />
                    </div>
                    <div className={style.formDataRegister}>
                        <input className={style.formDataRegisterSubmit} type="submit" value="Register" />
                        <div className={style.formDataRegisterRedirect}>
                            Do you have an account? <Link to="/login">Log in now</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
