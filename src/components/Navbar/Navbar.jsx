import style from "./Navbar.module.css";
import { LiaBarsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getUser } from "../../apiCalls/apiCalls.js";

export default function Navbar() {
    // Define la aparición del navbar en dispositivos móviles
    const [isLinksActive, setIsLinksActive] = useState(false);

    // Referencia al navbar
    const links = useRef(null);

    // Almacena el token del ususario autenticado
    const [token, setToken] = useState(localStorage.getItem("token"));

    // Almacena el usuario autenticado
    const [user, setUser] = useState();

    // Ejecuta la aparición o desaparición del navbar
    const onBars = () => {
        setIsLinksActive(!isLinksActive);
    };

    // Obtiene la información del usuario relacionado con el token
    const getUserData = async () => {
        const res = await getUser(token);
        setUser(res.data.user);
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <nav className={style.container}>
            <div className={style.logo}>Coffee & Co</div>
            <div className={`${style.links} ${isLinksActive ? style.linksActive : ""}`} ref={links}>
                <Link to="/" className={style.linksLink} onClick={onBars}>
                    Home
                </Link>
                <Link to="/menu" className={style.linksLink} onClick={onBars}>
                    Menu
                </Link>
                <Link to="#" className={style.linksLink} onClick={onBars}>
                    Reservation
                </Link>
                <Link to="#" className={style.linksLink} onClick={onBars}>
                    Blog
                </Link>
            </div>
            <div className={style.profile}>
                {user ? (
                    <Link to="/profile" className={style.profileName}>
                        {user.name}
                    </Link>
                ) : (
                    <Link to="/login" className={style.profileLogin}>
                        Login
                    </Link>
                )}
                <LiaBarsSolid className={style.profileBars} onClick={onBars} />
            </div>
        </nav>
    );
}
