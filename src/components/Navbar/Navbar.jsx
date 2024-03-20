import style from "./Navbar.module.css";
import { LiaBarsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
    // Estado del usuario.
    const [user, setUser] = useState(null);

    // Usuario autenticado en Redux.
    const authUser = useSelector((state) => state.user.data);

    // Define la aparición del navbar en dispositivos móviles.
    const [isLinksActive, setIsLinksActive] = useState(false);

    // Referencia al navbar
    const links = useRef(null);

    // Ejecuta la aparición o desaparición del navbar.
    const onBars = () => {
        setIsLinksActive(!isLinksActive);
    };

    useEffect(() => {
        setUser(authUser);
    }, [authUser]);

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
