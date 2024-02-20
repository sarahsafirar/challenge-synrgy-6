
// import fotoMobil from './assets/img/car01.min.jpg'

import styles from './assets/css/card.module.css'
import { useEffect, useState } from "react";
import axios from "axios";

const CARS_ENDPOINT_URL = "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const Cards = () => {
  const [cars, setCars] = useState([]);
  const [filterCarParams, setFilterCar] = useState({});

  useEffect(() => {
    getAllCars();
  }, []);

  const getAllCars = async () => {
    const cars = await axios.get(CARS_ENDPOINT_URL);
    console.log(cars.data);
    setCars(cars.data);
  };

  const onFilterCarCapacityParam = async (event) => {
    const capacityParam = parseInt(event.target.value);

    if (capacityParam === null || capacityParam === "") {
        getAllCars();
    }

    setFilterCar((prevState) => ({
        ...prevState,
        capacity: capacityParam
    }))
    console.log(capacityParam);
  };

  const onShowFilterCars = async (filter) => {
    if (filter.capacity != null) {
        const filteredCars = await axios.get(CARS_ENDPOINT_URL + '?capacity=' + filter.capacity);
        setCars(filteredCars.data);
        console.log(filteredCars.data)
    };
  }

  const onEventSubmitFilter = (event) => {

    onShowFilterCars(filterCarParams);
    console.log(filterCarParams);

    event.preventDefault();
};


  return (
    <div>
      <section id="search">
        <div className=''>
          <div className="d-flex justify-content-center p-5">
            <div className="search-rectangle p-4" style={{ position: "relative", marginTop: "-3%" }}>
              <form className="row p-2" onSubmit={(event) => onEventSubmitFilter(event)}>
                <div className="col p-2">
                  <label className="form-label">Tipe Driver</label>
                  <select className="form-select" id="tipe-driver">
                    <option defaultValue value="default">Pilih Tipe Driver</option>
                    <option value="dengan_sopir">Dengan Sopir</option>
                    <option value="tanpa_sopir">Tanpa Sopir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col p-2">
                  <label className="form-label">Tanggal</label>
                  <input className="form-control" id="tanggal-booking" type="date"
                    placeholder="Pilih Tanggal" />
                </div>
                <div className="col p-2">
                  <label className="form-label">Waktu Jemput/Ambil</label>
                  <select id="waktu-booking" className="form-select">
                    <option defaultValue value="default">Pilih waktu jemput</option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="col-3 p-2">
                  <label className="form-label">Jumlah Penumpang (optional)</label>
                  <select id="jumlah-penumpang" className="form-select" onChange={(event) => onFilterCarCapacityParam(event)}>
                    <option defaultValue value="0">Pilih Jumlah Penumpang</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div className="col-2 p-2 d-flex align-items-end">
                  <button type="submit" className={styles.Button} id="submit-btn">Cari Mobil</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>

      <div className="d-flex justify-content-center row">{
        cars.map((car, index) => {
          return (

            <div key={index} className="col-3 px-2">

              <div className="card p-4 my-3 mx-1">

                <img className={styles.carImg} src={car.image} alt=".." />

                <div className="py-3">
                  <h5 className={styles.textTitle}>{car.manufacture} {car.model}</h5>
                  <h4 className={styles.textTitle}>Rp. {car.rentPerDay} / hari</h4>
                </div>

                <div>
                  <p className={styles.textSubtitle}>{car.description}</p>
                </div>

                <div>
                  <p className={styles.textSubtitle}>
                    <span className="fa fa-user px-2"></span>
                    {car.capacity} Orang
                  </p>
                  <p className={styles.textSubtitle}>
                    <i className="fa fa-cog px-2" aria-hidden="true"></i>
                    {car.transmission}
                  </p>
                  <a href="./pilih-mobil">
                    <button className={styles.Button} style={{ width: "100%" }}> Pilih Mobil </button>
                  </a>
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </div>




  )
}

export default Cards;