import style from "./UserData.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../apiCalls/apiCalls";
import { setUserRedux } from "../../features/user/userSlice";

export default function UserData() {
    // Función para despachar acciones de Redux.
    const dispatch = useDispatch();

    // Función de navegación.
    const navigate = useNavigate();

    // Almacena el usuario autenticado.
    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm: "",
        phone: "",
        photo: "",
    });

    // Usuario autenticado en Redux.
    const authUser = useSelector((state) => state.user.data);
    const authToken = useSelector((state) => state.user.token);

    // Estado de errores.
    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirm: "",
        phone: "",
        photo: "",
    });

    // Función de validación de contraseña.
    const validatePassword = (password) => {
        if (!password) return "Password is required";
        if (password.length < 8) return "Password must be at least 8 characters long";
        if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
        if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
        if (!/\d/.test(password)) return "Password must contain at least one number";
        return "";
    };

    // Función que actualiza el estado de usuario.
    const handleInput = (e) => {
        // Actualiza el estado de usuario con el atributo name con el value del elemento que ejecuta el evento.
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

    // Sube la imagen de perfil a Cloudinary.
    const selectImage = async (e) => {
        const image = e.target.files[0];

        // Verificar si el tipo de archivo es una imagen.
        if (!image.type.startsWith("image")) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                photo: "Please select an image file",
            }));
            return;
        }

        // Subir la imagen a Cloudinary.
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "nhkcnosu");
        formData.append("api_key", "548415732373855");

        try {
            // Actualiza el estado de usuario con la URL de la imagen almacenada en Cloudinary.
            const res = await axios.post("https://api.cloudinary.com/v1_1/dmltmuab5/image/upload", formData);
            setUser((prevState) => ({
                ...prevState,
                photo: res.data.url,
            }));
        } catch (error) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                photo: "There was an error uploading the image",
            }));
        }
    };

    // Actualiza el usuario en la base de datos con los datos del estado del ususario actual
    const handleSubmitUser = async (e) => {
        // Previene el comportamiento por defecto del formulario para que no recargue la página.
        e.preventDefault();

        // Ejecuta la llamada de actualizar usuario al servidor.
        const res = await updateUser(authToken, user.id, user);

        // Actualiza el estado de usuario de Redux
        dispatch(setUserRedux(res.data.user));

        // Navega a la vista home
        navigate("/");
    };

    useEffect(() => {
        setUser(authUser);
    }, [authUser]);

    return (
        <section className={style.container}>
            <div className={style.title}>Personal Info</div>
            <div className={style.photo}>
                <div className={style.photoImage}>
                    <img src={user.photo} />
                </div>

                <div className={style.photoName}>
                    {user.name} {user.surname}
                </div>
            </div>
            <form
                className={style.form}
                onSubmit={(e) => {
                    handleSubmitUser(e);
                }}
            >
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
                <div className={`${style.formSection} ${errors.photo && style.error}`}>
                    <div className={style.formSectionTitle}>Profile Photo</div>
                    <input
                        type="file"
                        accept="image"
                        name="photo"
                        style={{ backgroundColor: "white" }}
                        onChange={(e) => {
                            selectImage(e);
                        }}
                    />
                    <div className={style.formSectionError}>{errors.photo}</div>
                </div>
                <input className={style.formSubmit} type="submit" value="Save" disabled={Object.values(errors).some((error) => error !== "")} />
            </form>
        </section>
    );
}
