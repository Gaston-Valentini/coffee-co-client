import style from "./MainBanner.module.css";
import logo from "../../assets/images/logo-white.png";
import { GiCoffeeBeans } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function MainBanner() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.content}>
                    <div className={style.contentLogo}>
                        <img src={logo} />
                    </div>
                    <div className={style.contentTitle}>COFFEE FACTORY</div>
                    <div className={style.contentDivisor}>
                        <span />
                        <GiCoffeeBeans />
                        <span />
                    </div>
                    <div className={style.contentText}>Explore the pleasure in every cup at our café: where coffee becomes an experience, and each sip is a journey of delight for your senses.</div>
                    <Link to="" className={style.contentReserve}>
                        BOOK NOW
                    </Link>
                </div>
            </div>
        </section>
    );
}
