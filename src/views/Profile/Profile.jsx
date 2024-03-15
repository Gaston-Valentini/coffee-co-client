import style from "./Profile.module.css";
import { GiCoffeeBeans } from "react-icons/gi";
import UserData from "../../sections/UserData/UserData";

export default function Profile() {
    return (
        <section className={style.container}>
            <div className={style.title}>YOUR AREA</div>
            <div className={style.divisor}>
                <span />
                <GiCoffeeBeans />
                <span />
            </div>
            <div className={style.text}>Access your personal information and manage your reservations.</div>
            <div className={style.data}>
                <UserData />
            </div>
        </section>
    );
}
