import style from "./OurOffer.module.css";
import { GiCoffeeBeans, GiCoffeeCup, GiCroissant } from "react-icons/gi";
import { CiCoffeeCup, CiCoffeeBean } from "react-icons/ci";

export default function OurOffer() {
    return (
        <section className={style.container}>
            <div className={style.title}>OUR DELICIOUS OFFER</div>
            <div className={style.divisor}>
                <span />
                <GiCoffeeBeans />
                <span />
            </div>
            <div className={style.text}>At Coffee & Co, we believe that coffee is more than just a drink. It is an experience that awakens the senses and brings people together. That is why we are dedicated to offering you a selection of the highest quality coffees and products, made with meticulous care at every stage of the process.</div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <GiCoffeeCup />
                    <div className={style.cardsCardTitle}>Types of Coffee</div>
                    <div className={style.cardsCardText}>Explore popular brewing methods, from classic pour-over to foamy espresso</div>
                </div>
                <div className={style.cardsCard}>
                    <CiCoffeeBean />
                    <div className={style.cardsCardTitle}>Bean Varieties</div>
                    <div className={style.cardsCardText}>Discover the world of Arabica, Robusta, and other varieties. Learn how origin and roasting affect flavor</div>
                </div>
                <div className={style.cardsCard}>
                    <GiCroissant />
                    <div className={style.cardsCardTitle}>Beans & Pastry</div>
                    <div className={style.cardsCardText}>Pair your favorite coffee with croissants, cakes, and other delicacies for a complete experience</div>
                </div>
                <div className={style.cardsCard}>
                    <CiCoffeeCup />
                    <div className={style.cardsCardTitle}>Coffee to Go</div>
                    <div className={style.cardsCardText}>Enjoy your favorite coffee on the go with thermal cups, cold brew, and specialty options</div>
                </div>
            </div>
        </section>
    );
}
