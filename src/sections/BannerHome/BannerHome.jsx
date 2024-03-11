import style from "./BannerHome.module.css";
import logo from "../../assets/images/logo-white.png";

export default function Banner() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.logo}>
                    <img src={logo} />
                </div>
            </div>
        </section>
    );
}
