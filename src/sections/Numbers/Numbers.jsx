import style from "./Numbers.module.css";

export default function Numbers() {
    return (
        <section className={style.container}>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardNumber}>250</div>
                    <div className={style.cardsCardObject}>VARIETIES OF COFFEE</div>
                    <div className={style.cardsCardText}>Explore a diverse range of coffee options.</div>
                </div>

                <div className={style.cardsCard}>
                    <div className={style.cardsCardNumber}>323</div>
                    <div className={style.cardsCardObject}>HOURS OF TESTING</div>
                    <div className={style.cardsCardText}>Meticulously tested for quality assurance.</div>
                </div>

                <div className={style.cardsCard}>
                    <div className={style.cardsCardNumber}>120</div>
                    <div className={style.cardsCardObject}>COFFEE MARKETS</div>
                    <div className={style.cardsCardText}>Connected to coffee markets worldwide.</div>
                </div>

                <div className={style.cardsCard}>
                    <div className={style.cardsCardNumber}>210</div>
                    <div className={style.cardsCardObject}>COFFEE BRANDS</div>
                    <div className={style.cardsCardText}>Curated selection from premium coffee brands.</div>
                </div>
            </div>
        </section>
    );
}
