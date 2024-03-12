import style from "./ScrollTop.module.css";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
    const onScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={style.container} onClick={onScrollTop}>
            <FaArrowUp />
        </div>
    );
}
