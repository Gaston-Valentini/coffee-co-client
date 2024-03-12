import style from "./Home.module.css";
import MainBanner from "../../sections/MainBanner/MainBanner";
import OurOffer from "../../sections/OurOffer/OurOffer";
import CoffeeHerald from "../../sections/CoffeeHerald/CoffeeHerald";
import Numbers from "../../sections/Numbers/Numbers";
import BannerHome from "../../sections/BannerHome/BannerHome";
import Gallery from "../../sections/Gallery/Gallery";
import Contact from "../../sections/Contact/Contact";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

export default function Home() {
    return (
        <section className={style.container}>
            <MainBanner />
            <OurOffer />
            <CoffeeHerald />
            <Numbers />
            <BannerHome />
            <Gallery />
            <Contact />
            <ScrollTop />
        </section>
    );
}
