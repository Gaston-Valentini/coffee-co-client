import style from "./Contact.module.css";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
    return (
        <section className={style.container}>
            <div className={style.title}>CONTACT US</div>
            <div className={style.divisor}>
                <span />
                <GiCoffeeBeans />
                <span />
            </div>
            <div className={style.text}>We'd love to hear from you! Whether you have questions, comments, or just want to say hello, feel free to get in touch with us. We're here to assist you.</div>
            <div className={style.contact}>
                <div className={style.contactData}>
                    <div className={style.contactDataTitle}>GET IN TOUCH</div>
                    <div className={style.contactDataText}>We'd love to hear from you! Whether you have questions, comments, or just want to say hello, feel free to get in touch with us. We're here to assist you.</div>
                    <div className={style.contactDataInfo}>
                        <div className={style.contactDataInfoItem}>123 Quantum Avenue, Nebula City, NG-98765</div>
                        <div className={style.contactDataInfoItem}>+1 (555) 123-4567</div>
                        <div className={style.contactDataInfoItem}>info@coffee&co.com</div>
                        <div className={style.contactDataInfoItem}>Tuesday to Sunday: 12:00 - 23:00</div>
                        <div className={style.contactDataInfoSocial}>
                            <a href="#">
                                <FaInstagram />
                            </a>
                            <a href="#">
                                <FaFacebookF />
                            </a>
                            <a href="#">
                                <FaXTwitter />
                            </a>
                            <a href="#">
                                <FaTripadvisor />
                            </a>
                        </div>
                    </div>
                </div>
                <form className={style.form} onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" className={style.formName} />
                    <input type="email" placeholder="Your Email" className={style.formEmail} />
                    <input type="text" placeholder="Subject" className={style.formSubject} />
                    <textarea placeholder="Messagge here..." className={style.formMessage} />
                    <input type="submit" value="SEND MESSAGE" className={style.formSubmit} />
                </form>
            </div>
        </section>
    );
}
