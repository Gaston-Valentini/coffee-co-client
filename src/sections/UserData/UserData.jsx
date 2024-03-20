import style from "./UserData.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleInput } from "../../functions/functions";
import { updateUser } from "../../apiCalls/apiCalls";
import { setUserRedux, logout } from "../../features/user/userSlice";

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

    // Actualiza el usuario en la base de datos con los datos del estado del ususario actual.
    const handleSubmitUser = async (e) => {
        // Previene el comportamiento por defecto del formulario para que no recargue la página.
        e.preventDefault();

        // Ejecuta la llamada de actualizar usuario al servidor.
        const res = await updateUser(authToken, user.id, user);

        // Actualiza el estado de usuario de Redux.
        dispatch(setUserRedux(res.data.user));

        // Navega a la vista home.
        navigate("/");
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
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
                    <input type="text" name="name" defaultValue={user.name} onChange={(e) => handleInput(e, user, setUser, setErrors)} onBlur={(e) => handleInput(e, user, setUser, setErrors)} />
                    <div className={style.formSectionError}>{errors.name}</div>
                </div>
                <div className={`${style.formSection} ${errors.surname && style.error}`}>
                    <div className={style.formSectionTitle}>Surname</div>
                    <input type="text" name="surname" defaultValue={user.surname} onChange={(e) => handleInput(e, user, setUser, setErrors)} onBlur={(e) => handleInput(e, user, setUser, setErrors)} />
                    <div className={style.formSectionError}>{errors.surname}</div>
                </div>
                <div className={`${style.formSection} ${errors.email && style.error}`}>
                    <div className={style.formSectionTitle}>Email</div>
                    <input type="email" name="email" defaultValue={user.email} onChange={(e) => handleInput(e, user, setUser, setErrors)} onBlur={(e) => handleInput(e, user, setUser, setErrors)} />
                    <div className={style.formSectionError}>{errors.email}</div>
                </div>
                <div className={`${style.formSection} ${errors.password && style.error}`}>
                    <div className={style.formSectionTitle}>Password</div>
                    <input type="password" name="password" onChange={(e) => handleInput(e, user, setUser, setErrors)} onBlur={(e) => handleInput(e, user, setUser, setErrors)} />
                    <div className={style.formSectionError}>{errors.password}</div>
                </div>
                <div className={`${style.formSection} ${errors.confirm && style.error}`}>
                    <div className={style.formSectionTitle}>Confirm Password</div>
                    <input type="password" name="confirm" onChange={(e) => handleInput(e, user, setUser, setErrors)} onBlur={(e) => handleInput(e, user, setUser, setErrors)} />
                    <div className={style.formSectionError}>{errors.confirm}</div>
                </div>
                <div className={`${style.formSection} ${errors.phone && style.error}`}>
                    <div className={style.formSectionTitle}>Phone</div>
                    <PhoneInput placeholder="Phone number" style={{ gap: "5px" }} value={user.phone || ""} onChange={(value) => setUser((prevState) => ({ ...prevState, phone: value || "" }))} onBlur={(e) => handleInput({ target: { name: "phone", value: e.target.value } }, user, setUser, setErrors)} />
                    <div className={style.formSectionError}>{errors.phone}</div>
                </div>
                <div className={`${style.formSection} ${errors.photo && style.error}`}>
                    <div className={style.formSectionTitle}>Profile Photo</div>
                    <input type="file" accept="image" name="photo" style={{ backgroundColor: "white" }} onChange={(e) => selectImage(e)} />
                    <div className={style.formSectionError}>{errors.photo}</div>
                </div>
                <div className={style.formButtons}>
                    <input className={style.formButtonsSubmit} type="submit" value="Save" disabled={Object.values(errors).some((error) => error !== "")} />
                    <div className={style.formButtonsLogout} onClick={handleLogout}>
                        Logout
                    </div>
                </div>
            </form>
        </section>
    );
}
