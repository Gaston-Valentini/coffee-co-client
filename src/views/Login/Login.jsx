import style from "./Login.module.css";
import logo from "../../assets/images/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../apiCalls/apiCalls.js";

export default function Login() {
    // Función de navegación.
    const navigate = useNavigate();

    // Estado de usuario.
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    // Estado de errores.
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    // Estado de mensaje.
    const [message, setMessage] = useState("");

    // Función que actualiza el del estado de usuario.
    const handleInput = (e) => {
        // Actualiza el estado de usuario con el atributo name y el valor del elemento que ejecuta el evento.
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Ejecuta el envío del formulario.
    const onSubmit = async (e) => {
        // Previene el comportamiento por defecto del formulario para que no recargue la página.
        e.preventDefault();

        // Ejecuta la llamada de inicio de sesión al servidor.
        const res = await login(user);

        // Si hay un error en la respuesta actualiza el estado de errores con el mensaje de la respuesta...
        if (res.data.success == false) {
            switch (res.data.message) {
                // ...si es de email o de contraseña.
                case "Incorrect credentials":
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        email: res.data.message,
                        password: res.data.message,
                    }));
                    break;
                default:
                    break;
            }
        } else {
            // Si no hay errror actualiza el mensaje general del formulario para que el usuario sepa que todo fué bien
            setMessage(res.data.message);

            // Luego de 2 segundos almacena el token del usuario y navega a la vista home
            setTimeout(() => {
                localStorage.setItem("token", res.data.token);
                navigate("/home");
            }, 2000);
        }
    };

    return (
        <section className={style.container}>
            <div className={style.photo}>
                <div className={style.overlay}>
                    <div className={style.overlayLogo}>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className={style.overlayText}>Welcome to Coffee & Co, where the beans hold secrets, and the cups tell stories.</div>
                </div>
            </div>
            <div className={style.form}>
                <div className={style.formTitles}>
                    <div className={style.formTitlesTitle}>Login</div>
                    <div className={style.formTitlesSubtitle}>Access your account</div>
                </div>
                <form className={style.formData} onSubmit={onSubmit}>
                    <div className={style.formDataFields}>
                        <div className={style.formDataFieldsMessage}>{message}</div>

                        <div className={`${style.formDataFieldsField} ${errors.email && style.error}`}>
                            <input placeholder="Email" type="email" name="email" onChange={(e) => handleInput(e)} onBlur={(e) => handleInput(e)} />
                            <div className={style.formDataFieldsFieldError}>{errors.email}</div>
                        </div>
                        <div className={`${style.formDataFieldsField} ${errors.password && style.error}`}>
                            <input placeholder="Password" type="password" name="password" onChange={(e) => handleInput(e)} onBlur={(e) => handleInput(e)} />
                            <div className={style.formDataFieldsFieldError}>{errors.password}</div>
                        </div>
                    </div>
                    <div className={style.formDataAuth}>
                        <input className={style.formDataAuthSubmit} type="submit" value="Login" />
                        <div className={style.formDataAuthRedirect}>
                            Don't have an account? <Link to="/register">Sign up now</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
