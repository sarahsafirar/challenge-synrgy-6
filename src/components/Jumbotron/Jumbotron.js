import jumbotronCarImage from './assets/img/img_car.png'
import styles from './assets/css/jumbotron.module.css'

const JumbotronBCR = () => {
    return (
        <section id="highlight">
        <div className="container-fluid" style={{background: "#F1F3FF"}}>
            <div className="row">
                <div className="col col-12 col-md-6 p-5">
                    <div className="ps-lg-5 ms-lg-5">
                        <div >
                            <h1 className={styles.HeroTitle}>Sewa & Rental Mobil Terbaik di Kawasan Jogjakarta</h1>
                            <p className={styles.textSubtitle}>Selamat datang di Binar Car Rental. Kami
                                menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                                kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            <a href="./cars">
                                <button className={styles.ButtonBCR}>Mulai Sewa Mobil
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col col-12 col-md-6">
                    <img src={jumbotronCarImage} alt="img_car" style={{float: "right", paddingTop: "92px"} } />
                </div>
            </div>
        </div>
    </section>
        
    )
}

export default JumbotronBCR