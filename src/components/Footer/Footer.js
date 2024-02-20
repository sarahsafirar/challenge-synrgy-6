
import BCRLogo from './assets/img/img_logo.png'
import iconTwitter from './assets/img/icon_twitter.png'
import iconTwitch from './assets/img/icon_twitch.png'
import iconMail from './assets/img/icon_mail.png'
import iconFacebook from './assets/img/icon_facebook.png'
import iconInstagram from './assets/img/icon_instagram.png'

import styles from './assets/css/footer.module.css'

const Footer = () => {
    return (
        <section id="footer">
        <div className="container p-5">
            <div className={styles.textSubtitle}>
                <div className="row">
                    <div className="col col-12 col-lg-3">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col col-12 col-lg-2 ">
                        <a href="./#our-service" className="text-subtitle text-dark text-decoration-none">
                            <p><strong>Our Services</strong></p>
                        </a>
                        <a href="./#why-us" className="text-subtitle text-dark text-decoration-none">
                            <p><strong>Why Us?</strong></p>
                        </a>
                        <a href="./#testimonial" className="text-subtitle text-dark text-decoration-none">
                            <p><strong>Testimonial</strong></p>
                        </a>
                        <a href="./#faq" className="text-subtitle text-dark text-decoration-none">
                            <p><strong>FAQ</strong></p>
                        </a>
                    </div>
                    <div className="col col-12 col-lg-3">
                        <p>Connect with us</p>
                        <div className="pb-3">
                            <img src={iconFacebook} alt="icon_facebook" className="icon-footer p-1"/>
                            <img src={iconInstagram} alt="icon_instagram" className="icon-footer p-1"/>
                            <img src={iconTwitter} alt="icon_twitter" className="icon-footer p-1"/>
                            <img src={iconMail} alt="icon_mail" className="icon-footer p-1"/>
                            <img src={iconTwitch} alt="icon_twitch" className="icon-footer p-1"/>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-3">
                        <p>Copyright Binar 2022</p>
                        <img src={BCRLogo} alt="img_logo"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
    )
}

export default Footer