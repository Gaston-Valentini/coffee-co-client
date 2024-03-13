import style from "./Navbar.module.css";
import { LiaBarsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export default function Navbar() {
    const [isLinksActive, setIsLinksActive] = useState(false);
    const links = useRef(null);

    const onBars = () => {
        setIsLinksActive(!isLinksActive);
    };

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
                <Link to="#" className={style.profileLogin}>
                    Login
                </Link>
                <LiaBarsSolid className={style.profileBars} onClick={onBars} />
            </div>
        </nav>
    );
}
