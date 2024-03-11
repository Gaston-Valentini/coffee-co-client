import style from "./Home.module.css";
import MainBanner from "../../sections/MainBanner/MainBanner";
import OurOffer from "../../sections/OurOffer/OurOffer";

export default function Home() {
    return (
        <section className={style.container}>
            <MainBanner />
            <OurOffer />
        </section>
    );
}
