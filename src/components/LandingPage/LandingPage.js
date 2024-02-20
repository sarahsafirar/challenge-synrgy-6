import ourServiceImage from './assets/img/img_service.png'
import iconComplete from './assets/img/icon_complete.png'
import iconPrice from './assets/img/icon_price.png'
import iconProfessional from './assets/img/icon_professional.png'
import icon24Hours from './assets/img/icon_24hrs.png'
import imgPhoto1 from './assets/img/img_photo1.png'
import imgPhoto2 from './assets/img/img_photo2.png'
import iconStar from './assets/img/icon_star.png'
import styles from './assets/css/landingPage.module.css'

const LandingPage = () => {
    return (
        <div>
            <section id="our-service">
                <div className="d-flex flex-row justify-content-center flex-wrap p-lg-5 p-md-4 py-5 my-5">
                    <div className="px-5 py-3">
                        <img src={ourServiceImage} alt="img_service" className="img-fluid" />
                    </div>
                    <div className="px-5 py-5" style={{ width: "500px" }}>
                        <h1 className={styles.textTitle}>Best Car Rental for any kind of trip in Jogjakarta!</h1>
                        <p className={styles.textSubtitle}>Sewa mobil di (Lokasimu) bersama Binar Car Rental
                            jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan
                            terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <ul>
                            <li className="m-1">Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                            <li className="m-1">Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                            <li className="m-1">Sewa Mobil Jangka Panjang Bulanan</li>
                            <li className="m-1">Gratis Antar - Jemput Mobil di Bandara</li>
                            <li className="m-1">Layanan Airport Transfer / Drop In Out</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="why-us">
                <div className="container px-5 py-4">
                    <h1 className={styles.textTitle}>Why Us?</h1>
                    <p className={styles.textSubtitle}>Mengapa harus pilih Binar Car Rental?</p>
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12 d-flex p-2 p-lg-4">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="p-4">
                                    <img src={iconComplete} alt="icon_complete" className="why-us-icon" />
                                    <h6 className={styles.textSubtitle}><strong>Mobil Lengkap</strong></h6>
                                    <p className={styles.textSubtitle}>Tersedia banyak pilihan mobil, kondisi masih baru,bersih dan
                                        terawat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 d-flex p-2 p-lg-4">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="p-4">
                                    <img src={iconPrice} alt="icon_price" className="why-us-icon" />
                                    <h6 className={styles.textSubtitle}><strong>Harga Murah</strong>
                                    </h6>
                                    <p className={styles.textSubtitle}>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                                        mobil lain</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 d-flex p-2 p-lg-4">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="p-4">
                                    <img src={icon24Hours} alt="icon_24hrs" className="why-us-icon" />
                                    <h6 className={styles.textSubtitle}><strong>Layanan 24 Jam</strong> </h6>
                                    <p className={styles.textSubtitle}>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                        tersedia di akhir minggu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 d-flex p-2 p-lg-4">
                            <div className="card" style={{ width: "100%" }}>
                                <div className="p-4">
                                    <img src={iconProfessional} alt="icon_professional" className="why-us-icon" />
                                    <h6 className={styles.textSubtitle}><strong>Sopir Profesional</strong></h6>
                                    <p className={styles.textSubtitle}>Sopir yang profesional,berpengalaman, jujur, ramah dan selalu tepat
                                        waktu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonial">
                <div className="container p-5">
                    <div className="justify-content-center row">
                        <div className="col-12" style={{ textAlign: "center" }}>
                            <h1 className={styles.textTitle}>Testimonial</h1>
                            <p className={styles.textSubtitle}>Berbagai review positif dari para pelanggan kami
                            </p>
                        </div>

                        <div id="carouselExampleIndicators" className="carousel slide col-10 col-lg-6" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" dataSlide-to="0"></li>
                                <li data-target="#carouselExampleIndicators" dataSlide-to="1" className="active"></li>
                                <li data-target="#carouselExampleIndicators" dataSlide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <div className="card" style={{ background: "#F1F3FF", border: '0px' }}>
                                        <div className="m-5">
                                            <div className="row">
                                                <div className="col-12 col-lg-3 col-md-12 my-3">
                                                    <img src={imgPhoto1} alt="img-photo"
                                                        className="testimonial-photo mx-auto d-block" />
                                                </div>
                                                <div className="col">
                                                    <div>
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                    </div>
                                                    <p className={styles.textSubtitle} style={{ margin: "8px 0px" }}>"Lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit, sed do eiusmod"
                                                    </p>
                                                    <p className={styles.textSubtitle}><strong>John Dee 32, Bromo</strong> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item active">
                                    <div className="card" style={{ background: "#F1F3FF", border: '0px' }}>
                                        <div className="m-5">
                                            <div className="row">
                                                <div className="col-12 col-lg-3 col-md-12 my-3">
                                                    <img src={imgPhoto2} alt="img-photo"
                                                        className="testimonial-photo mx-auto d-block" />
                                                </div>
                                                <div className="col">
                                                    <div>
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                    </div>
                                                    <p className={styles.textSubtitle} style={{ margin: "8px 0px" }}>"Lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit, sed do eiusmod"
                                                    </p>
                                                    <p className={styles.textSubtitle}><strong>John Dee 32, Bromo</strong> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card" style={{ background: "#F1F3FF", border: '0px' }}>
                                        <div className="m-5">
                                            <div className="row">
                                                <div className="col-12 col-lg-3 col-md-12 my-3">
                                                    <img src={imgPhoto1} alt="img-photo"
                                                        className="testimonial-photo mx-auto d-block" />
                                                </div>
                                                <div className="col">
                                                    <div>
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                        <img src={iconStar} alt="icon-star" />
                                                    </div>
                                                    <p className={styles.textSubtitle} style={{ margin: "8px 0px" }}>"Lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                                        amet, consectetur adipiscing elit, sed do eiusmod"
                                                    </p>
                                                    <p className={styles.textSubtitle}><strong>John Dee 32, Bromo</strong> </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a className="p-2 py-3" href="#carouselExampleIndicators" role="button" >
                                    <button className={styles.leftButton}></button>
                                </a>
                                <a className="p-2 py-3" href="#carouselExampleIndicators" role="button" >
                                    <button className={styles.rightButton}></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq">
                <div className="container p-5">
                    <div className="row">
                        <div className="col col-12 col-lg-5">
                            <div>
                                <h1 className={styles.textTitle}> Frequently Asked Question</h1>
                                <p className={styles.textSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                        <div className="col col-12 col-lg-7">
                            <select className="form-control-sm faq-form-padding bg-light">
                                <option>Apa saja syarat yang dibutuhkan?</option>
                            </select>
                            <select className="form-control-sm faq-form-padding bg-light">
                                <option>Berapa hari minimal sewa mobil lepas kunci?</option>
                            </select>
                            <select className="form-control-sm faq-form-padding bg-light">
                                <option>Berapa hari sebelumnya sabaiknya booking sewa mobil?</option>
                            </select>
                            <select className="form-control-sm faq-form-padding bg-light">
                                <option>Apakah Ada biaya antar-jemput?</option>
                            </select>
                            <select className="form-control-sm faq-form-padding bg-light">
                                <option>Bagaimana jika terjadi kecelakaan?</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>


        </div >
    )
}

export default LandingPage