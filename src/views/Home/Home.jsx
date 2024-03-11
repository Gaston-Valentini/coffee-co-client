import style from "./Home.module.css";
import MainBanner from "../../sections/MainBanner/MainBanner";
import OurOffer from "../../sections/OurOffer/OurOffer";
import CoffeeHerald from "../../sections/CoffeeHerald/CoffeeHerald";
import BannerHome from "../../sections/BannerHome/BannerHome";
import Numbers from "../../sections/Numbers/Numbers";

export default function Home() {
    return (
        <section className={style.container}>
            <MainBanner />
            <OurOffer />
            <CoffeeHerald />
            <BannerHome />
            <Numbers />
        </section>
    );
}
