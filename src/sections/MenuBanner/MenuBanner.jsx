import style from "./MenuBanner.module.css";

export default function MenuBanner() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.overlayText}>MENU</div>
            </div>
        </section>
    );
}
