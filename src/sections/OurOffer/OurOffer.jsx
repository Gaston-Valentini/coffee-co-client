import style from "./OurOffer.module.css";
import { GiCoffeeBeans } from "react-icons/gi";
import coffeeCup from "../../assets/images/coffeeCupPng.png";
import coffeeBeans from "../../assets/images/coffeeBeansPng.png";
import croissant from "../../assets/images/croissantPng.png";
import coffeeToGo from "../../assets/images/coffeeToGoPng.png";

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
                    <img src={coffeeCup} />
                    <div className={style.cardsCardTitle}>Types of Coffee</div>
                    <div className={style.cardsCardText}>Explore popular brewing methods, from classic pour-over to foamy espresso</div>
                </div>
                <div className={style.cardsCard}>
                    <img src={coffeeBeans} />
                    <div className={style.cardsCardTitle}>Bean Varieties</div>
                    <div className={style.cardsCardText}>Discover the world of Arabica, Robusta, and other varieties. Learn how origin and roasting affect flavor</div>
                </div>
                <div className={style.cardsCard}>
                    <img src={croissant} />
                    <div className={style.cardsCardTitle}>Beans & Pastry</div>
                    <div className={style.cardsCardText}>Pair your favorite coffee with croissants, cakes, and other delicacies for a complete experience</div>
                </div>
                <div className={style.cardsCard}>
                    <img src={coffeeToGo} />
                    <div className={style.cardsCardTitle}>Coffee to Go</div>
                    <div className={style.cardsCardText}>Enjoy your favorite coffee on the go with thermal cups, cold brew, and specialty options</div>
                </div>
            </div>
        </section>
    );
}
