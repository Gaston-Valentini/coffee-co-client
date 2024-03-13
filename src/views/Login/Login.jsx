import style from "./Login.module.css";
import logo from "../../assets/images/logo-white.png";
import { Link } from "react-router-dom";

export default function Login() {
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
                    <div className={style.formTitlesTitle}>Login</div>
                    <div className={style.formTitlesSubtitle}>Access your account</div>
                </div>
                <form className={style.formData}>
                    <div className={style.formDataFields}>
                        <input className={style.formDataFieldsEmail} placeholder="Email" type="email" />
                        <input className={style.formDataFieldsPassword} placeholder="Password" type="password" />
                    </div>
                    <div className={style.formDataAuth}>
                        <input className={style.formDataAuthSubmit} type="submit" value="Login" />
                        <div className={style.formDataAuthRedirect}>
                            Don't have an account yet? <Link to="/register">Sign up now</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
