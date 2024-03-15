import style from "./Register.module.css";
import logo from "../../assets/images/logo-white.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Switch from "react-switch";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../apiCalls/apiCalls.js";

export default function Register() {
    // Función de navegación.
    const navigate = useNavigate();

    // Estado de los términos.
    const [isChecked, setIsChecked] = useState(false);

    // Estado de usuario.
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
    });

    // Estado de errores.
    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm: "",
        phone: "",
        terms: "",
    });

    // Estado de mensaje.
    const [message, setMessage] = useState("");

    // Función de validación de contraseña.
    const validatePassword = (password) => {
        if (!password) return "Password is required";
        if (password.length < 8) return "Password must be at least 8 characters long";
        if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
        if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
        if (!/\d/.test(password)) return "Password must contain at least one number";
        return "";
    };

    // Función que actualiza el estado del usuario.
    const handleInput = (e) => {
        // Actualiza el estado de usuario con el atributo name y el valor del elemento que ejecuta el evento.
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        // Teniendo en cuenta el name del elemento, valida el value y en caso de haber un error actualiza el mensaje de error con el valor correspondiente a ese name.
        let errorMessage = "";
        switch (name) {
            case "name":
                errorMessage = value.trim() ? "" : "Name is required";
                break;
            case "surname":
                errorMessage = value.trim() ? "" : "Surname is required";
                break;
            case "email":
                const emailRegex = /\S+@\S+\.\S+/;
                errorMessage = value.trim() && emailRegex.test(value) ? "" : "Invalid email address";
                break;
            case "password":
                errorMessage = validatePassword(value);
                break;
            case "confirm":
                errorMessage = value === user.password ? "" : "Passwords do not match";
                break;
            case "phone":
                errorMessage = value.trim() ? "" : "Phone number is required";
                break;
            default:
                break;
        }

        // Actualiza el estado de errores (será una cadena vacía si no hay errores).
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    };

    // Ejecuta el envío del formulario.
    const onSubmit = async (e) => {
        // Previene el comportamiento por defecto del formulario para que no recargue la página.
        e.preventDefault();

        // Ejecuta la llamada de registro al servidor.
        const res = await register(user);

        // Si hay un error en la respuesta actualiza el estado de errores con el mensaje de la respuesta...
        if (res.data.success == false) {
            switch (res.data.message) {
                // ...si es de email.
                case "There is already a user registered with that email":
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        email: res.data.message,
                    }));
                    break;
                default:
                    break;
            }
        } else {
            // Si no hay error actualiza el mensaje general del formulario para que el usuario sepa que todo fué bien
            setMessage(res.data.message);

            // Luego de 2 segundos almacena el token del usuario y navega a la vista home
            setTimeout(() => {
                localStorage.setItem("token", res.data.token);
                navigate("/");
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
                    <div className={style.formTitlesTitle}>Register</div>
                    <div className={style.formTitlesSubtitle}>Sign up for access to your benefits</div>
                </div>
                <form className={style.formData} onSubmit={onSubmit}>
                    <div className={style.formDataFields}>
                        <div className={style.formDataFieldsMessage}>{message}</div>
                        <div className={`${style.formDataFieldsField} ${errors.name && style.error}`}>
                            <input placeholder="Name" type="text" name="name" onChange={(e) => handleInput(e)} onBlur={(e) => handleInput(e)} />
                            <div className={style.formDataFieldsFieldError}>{errors.name}</div>
                        </div>
                        <div className={`${style.formDataFieldsField} ${errors.surname && style.error}`}>
                            <input placeholder="Surname" type="text" name="surname" onChange={(e) => handleInput(e)} onBlur={(e) => handleInput(e)} />
                            <div className={style.formDataFieldsFieldError}>{errors.surname}</div>
                        </div>
                        <div className={`${style.formDataFieldsField} ${errors.email && style.error}`}>
                            <input placeholder="Email" type="email" name="email" onChange={(e) => handleInput(e)} onBlur={(e) => handleInput(e)} />
                            <div className={style.formDataFieldsFieldError}>{errors.email}</div>
                        </div>
                        <div className={`${style.formDataFieldsField} ${errors.password && style.error}`}>
                            <input placeholder="Password" type="password" name="password" onChange={(e) => handleInput(e)} onBlur={(e) => handleInput(e)} />
                            <div className={style.formDataFieldsFieldError}>{errors.password}</div>
                        </div>
                        <div className={`${style.formDataFieldsField} ${errors.confirm && style.error}`}>
                            <input placeholder="Confirm password" type="password" name="confirm" onChange={(e) => handleInput(e)} onBlur={(e) => handleInput(e)} />
                            <div className={style.formDataFieldsFieldError}>{errors.confirm}</div>
                        </div>
                        <div className={`${style.formDataFieldsField} ${errors.phone && style.error}`}>
                            <PhoneInput placeholder="Phone number" style={{ gap: "5px" }} value={user.phone || ""} onChange={(value) => setUser((prevState) => ({ ...prevState, phone: value || "" }))} onBlur={(e) => handleInput({ target: { name: "phone", value: e.target.value } })} />
                            <div className={style.formDataFieldsFieldError}>{errors.phone}</div>
                        </div>
                    </div>
                    <div className={style.formDataTerms}>
                        <Switch onChange={() => setIsChecked(!isChecked)} checked={isChecked} offColor="#d3d3d3" onColor="#be9c79" height={20} width={40} handleDiameter={18} onHandleColor="#fff" name="terms" />
                        <div className={style.formDataTermsField}>
                            I have read and agree to the <Link to="#">Terms and Conditions</Link>.
                        </div>
                    </div>
                    <div className={style.formDataAuth}>
                        <input className={style.formDataAuthSubmit} type="submit" value="Register" disabled={!isChecked || Object.values(user).some((value) => value === "") || Object.values(errors).some((error) => error !== "")} />
                        <div className={style.formDataAuthRedirect}>
                            Do you have an account? <Link to="/login">Log in now</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
