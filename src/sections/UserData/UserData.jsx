import style from "./UserData.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";

export default function UserData() {
    // Almacena el usuario autenticado
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
        photo: "",
    });

    // Estado de errores.
    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm: "",
        phone: "",
    });

    // Obtiene la información del usuario autenticado
    const getUserAuth = () => {
        const authUser = localStorage.getItem("user");
        setUser(JSON.parse(authUser));
    };

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

    useEffect(() => {
        getUserAuth();
    }, []);

    return (
        <section className={style.container}>
            <div className={style.title}>Personal Info</div>
            <div className={style.photo}>
                <img src={user.photo} />
            </div>
            <form className={style.form}>
                <div className={`${style.formSection} ${errors.name && style.error}`}>
                    <div className={style.formSectionTitle}>Name</div>
                    <input
                        type="text"
                        name="name"
                        defaultValue={user.name}
                        onChange={(e) => {
                            handleInput(e);
                        }}
                        onBlur={(e) => {
                            handleInput(e);
                        }}
                    />
                    <div className={style.formSectionError}>{errors.name}</div>
                </div>
                <div className={`${style.formSection} ${errors.surname && style.error}`}>
                    <div className={style.formSectionTitle}>Surname</div>
                    <input
                        type="text"
                        name="surname"
                        defaultValue={user.surname}
                        onChange={(e) => {
                            handleInput(e);
                        }}
                        onBlur={(e) => {
                            handleInput(e);
                        }}
                    />
                    <div className={style.formSectionError}>{errors.surname}</div>
                </div>
                <div className={`${style.formSection} ${errors.email && style.error}`}>
                    <div className={style.formSectionTitle}>Email</div>
                    <input
                        type="email"
                        name="email"
                        defaultValue={user.email}
                        onChange={(e) => {
                            handleInput(e);
                        }}
                        onBlur={(e) => {
                            handleInput(e);
                        }}
                    />
                    <div className={style.formSectionError}>{errors.email}</div>
                </div>
                <div className={`${style.formSection} ${errors.password && style.error}`}>
                    <div className={style.formSectionTitle}>Password</div>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => {
                            handleInput(e);
                        }}
                        onBlur={(e) => {
                            handleInput(e);
                        }}
                    />
                    <div className={style.formSectionError}>{errors.password}</div>
                </div>
                <div className={`${style.formSection} ${errors.confirm && style.error}`}>
                    <div className={style.formSectionTitle}>Confirm Password</div>
                    <input
                        type="password"
                        name="confirm"
                        onChange={(e) => {
                            handleInput(e);
                        }}
                        onBlur={(e) => {
                            handleInput(e);
                        }}
                    />
                    <div className={style.formSectionError}>{errors.confirm}</div>
                </div>
                <div className={`${style.formSection} ${errors.phone && style.error}`}>
                    <div className={style.formSectionTitle}>Phone</div>
                    <PhoneInput placeholder="Phone number" style={{ gap: "5px" }} value={user.phone || ""} onChange={(value) => setUser((prevState) => ({ ...prevState, phone: value || "" }))} onBlur={(e) => handleInput({ target: { name: "phone", value: e.target.value } })} />
                    <div className={style.formSectionError}>{errors.phone}</div>
                </div>
                <div className={style.formSection}>
                    <div className={style.formSectionTitle}>Profile Photo</div>
                    <input type="file" style={{ backgroundColor: "white" }} />
                </div>
                <input className={style.formSubmit} type="submit" value="Save" disabled={Object.values(errors).some((error) => error !== "")} />
            </form>
        </section>
    );
}
