import style from "./Home.module.css";
import MainBanner from "../../sections/MainBanner/MainBanner";
import OurOffer from "../../sections/OurOffer/OurOffer";
import CoffeeHerald from "../../sections/CoffeeHerald/CoffeeHerald";

export default function Home() {
    return (
        <section className={style.container}>
            <MainBanner />
            <OurOffer />
            <CoffeeHerald />
        </section>
    );
}
