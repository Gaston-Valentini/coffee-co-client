import style from "./GalleryCard.module.css";

export default function GalleryCard({ bg, text }) {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={bg} alt="Gallery Image" />
            </div>
            <div className={style.overlay}>
                <div className={style.overlayText}>{text}</div>
            </div>
        </div>
    );
}
