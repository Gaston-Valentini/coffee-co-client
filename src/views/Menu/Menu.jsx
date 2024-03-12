import style from "./Menu.module.css";
import MenuBanner from "../../sections/MenuBanner/MenuBanner";

export default function Menu() {
    return (
        <section className={style.container}>
            <MenuBanner />
        </section>
    );
}
