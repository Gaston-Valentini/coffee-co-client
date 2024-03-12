import style from "./MenuSection.module.css";
import { GiCoffeeBeans } from "react-icons/gi";
import background from "../../assets/images/contactBg.jpg";

export default function MenuSection({ id, title, text, menu }) {
    return (
        <section className={style.container} style={id % 2 != 1 ? { backgroundImage: `url(${background})` } : {}}>
            <div className={style.title}>{title}</div>
            <div className={style.divisor}>
                <span />
                <GiCoffeeBeans style={id % 2 != 1 ? { color: "var(--black)" } : {}} />
                <span />
            </div>
            <div className={style.text} style={id % 2 != 1 ? { color: "var(--black)" } : {}}>
                {text}
            </div>
            <div className={style.menu}>
                {menu.map((e) => (
                    <div className={style.menuItem} key={e.id}>
                        <div className={style.menuItemImage}>
                            <img src={e.image} alt={e.name} />
                        </div>
                        <div className={style.menuItemData}>
                            <div className={style.menuItemDataNameAndPrice}>
                                <div className={style.menuItemDataNameAndPriceName}>{e.name}</div>
                                <hr />
                                <div className={style.menuItemDataNameAndPricePrice} style={id % 2 != 1 ? { color: "var(--black)" } : {}}>
                                    ${e.price.toFixed(2)}
                                </div>
                            </div>
                            <div className={style.menuItemDataDescription} style={id % 2 != 1 ? { color: "var(--black)" } : {}}>
                                {e.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
