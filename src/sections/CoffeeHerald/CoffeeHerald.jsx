import style from "./CoffeeHerald.module.css";
import { GiCoffeeBeans } from "react-icons/gi";
import image_1 from "../../assets/images/herald_1.jpg";
import image_2 from "../../assets/images/herald_2.jpg";
import image_3 from "../../assets/images/herald_3.jpg";

export default function CoffeeHerald() {
    return (
        <section className={style.container}>
            <div className={style.title}>OUR DELICIOUS OFFER</div>
            <div className={style.divisor}>
                <span />
                <GiCoffeeBeans />
                <span />
            </div>
            <div className={style.text}>Welcome to Coffee Herald! Explore the magic of coffee with innovative methods, from the elegance of the French Press to the exotic flavors of the Turkish Ibrik. Ready to dive into the art of coffee?</div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={image_3} />
                    </div>
                    <div className={style.cardsCardTitle}>Prep Techniques</div>
                    <div className={style.cardsCardText}>Discover exceptional preparation methods, from traditional techniques to modern approaches.</div>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={image_1} />
                    </div>
                    <div className={style.cardsCardTitle}>Turkish Ibrik Delights</div>
                    <div className={style.cardsCardText}>Travel through exotic flavors with the Turkish Ibrik. Uncover the magic from grinding to spices, and let yourself be transported to the streets of Istanbul with every sip.</div>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={image_2} />
                    </div>
                    <div className={style.cardsCardTitle}>French Press Elegance</div>
                    <div className={style.cardsCardText}>Immerse yourself in the elegance of the French Press. From choosing beans to perfect infusion times, enjoy rich and flavorful cups.</div>
                </div>
            </div>
        </section>
    );
}
