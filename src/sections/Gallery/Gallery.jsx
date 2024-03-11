import style from "./Gallery.module.css";
import { GiCoffeeBeans } from "react-icons/gi";
import image_1 from "../../assets/images/galleryImage_1.jpg";
import image_2 from "../../assets/images/galleryImage_2.jpg";
import image_3 from "../../assets/images/galleryImage_3.jpg";
import image_4 from "../../assets/images/galleryImage_4.jpg";
import image_5 from "../../assets/images/galleryImage_5.jpg";
import image_6 from "../../assets/images/galleryImage_6.jpg";
import image_7 from "../../assets/images/galleryImage_7.jpg";
import image_8 from "../../assets/images/galleryImage_8.jpg";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import { useState } from "react";

export default function Gallery() {
    const [gallery, setGallery] = useState([
        { id: 1, image: image_1, text: "BREWED" },
        { id: 2, image: image_2, text: "BEST AROMAS" },
        { id: 3, image: image_3, text: "PERFECT CUP" },
        { id: 4, image: image_4, text: "BACKED BEANS" },
        { id: 5, image: image_5, text: "CREAMS" },
        { id: 6, image: image_6, text: "ENJOYMENT" },
        { id: 7, image: image_7, text: "BIG MUGS" },
        { id: 8, image: image_8, text: "COFFEE DRIPS" },
    ]);

    return (
        <section className={style.container}>
            <div className={style.title}>OUR SWEET GALLERY</div>
            <div className={style.divisor}>
                <span />
                <GiCoffeeBeans />
                <span />
            </div>
            <div className={style.text}>Dive into our visual narrative, a gallery capturing the essence of flavor, craftsmanship, and the artistry behind each cup. Explore the story of our coffee world in captivating snapshots.</div>
            <div className={style.gallery}>
                {gallery.map((e) => (
                    <GalleryCard key={e.id} bg={e.image} text={e.text} />
                ))}
            </div>
        </section>
    );
}
