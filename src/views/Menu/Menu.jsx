import style from "./Menu.module.css";
import MenuBanner from "../../sections/MenuBanner/MenuBanner";
import MenuSection from "../../components/MenuSection/MenuSection";

export default function Menu() {
    const data = [
        {
            id: 1,
            title: "HOT DRINKS",
            text: "Enjoy our hot drinks varieties",
            menu: [
                {
                    id: 1,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 2,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 3,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 4,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 5,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 6,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 7,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 8,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 9,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 10,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
            ],
        },
        {
            id: 2,
            title: "PASTRIES",
            text: "Enjoy our pastries varieties",
            menu: [
                {
                    id: 1,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 2,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 3,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 4,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 5,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 6,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 7,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 8,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 9,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 10,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
            ],
        },
        {
            id: 3,
            title: "DESSERTS",
            text: "Enjoy our desserts varieties",
            menu: [
                {
                    id: 1,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 2,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 3,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 4,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 5,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 6,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 7,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 8,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 9,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 10,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
            ],
        },
        {
            id: 4,
            title: "FRAPPES AND SMOOTHIES",
            text: "Enjoy our frappes and smoothies varieties",
            menu: [
                {
                    id: 1,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 2,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 3,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 4,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 5,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 6,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 7,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 8,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 9,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
                {
                    id: 10,
                    image: "https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-1.png",
                    name: "Americano Coffee",
                    price: 2.5,
                    description: "A classic black coffee, perfect to start your day with energy.",
                },
            ],
        },
    ];

    return (
        <section className={style.container}>
            <MenuBanner />
            <div className={style.menu}>
                {data.map((section) => (
                    <MenuSection key={section.id} id={section.id} title={section.title} text={section.text} menu={section.menu} />
                ))}
            </div>
        </section>
    );
}
