class App {
    constructor() {
        // this.clearButton = document.getElementById("clear-btn");
        // this.loadButton = document.getElementById("load-btn");
        this.filterButton = document.getElementById("filter");
        this.carContainerElement = document.getElementById("cars-container");
    }

    async init() {
        await this.load();

        // Register click listener
        // this.clearButton.onclick = this.clear;
        // this.loadButton.onclick = this.run;
        this.filterButton.onclick = this.filter;
    }

    run = () => {
        Car.list.forEach((car) => {
            const node = document.createElement("div");
            node.setAttribute(`class`, 'col-md-6 col-lg-4');
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
        });
    };

    async filter() {
        // Tipe Driver
        const driver = document.getElementById('tipedriver').value
        console.log(driver)
            // Jumlah Penumpang
        const jmlPenumpang = parseInt(document.getElementById('jumlah-penumpang').value)
        console.log(jmlPenumpang)
            // Tanggal
        const tersediaPada = document.getElementById("tersedia").value
        console.log(tersediaPada)

        const cars = await Binar.listCars((e) => {
            // Tambahkan fungsi filter
            return (
                (!driver || e.typeDriver === driver) &&
                (!jmlPenumpang || e.capacity === jmlPenumpang)
            );
        });


        Car.init(cars);
        document.getElementById("cars-container").innerHTML = ''
        Car.list.forEach((car) => {
            const node = document.createElement("div");
            node.setAttribute(`class`, 'col-md-6 col-lg-4');
            node.innerHTML = car.render();
            document.getElementById("cars-container").appendChild(node);
        });
    }

    async load(filter) {
        const cars = await Binar.listCars(filter);
        Car.init(cars);
        this.carContainerElement.innerHTML = '';
        Car.list.forEach((car) => {
            const node = document.createElement("div");
            node.setAttribute("class", "col-md-6 col-lg-4");
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
        });
    }

    clear = () => {
        let child = this.carContainerElement.firstElementChild;

        while (child) {
            child.remove();
            child = this.carContainerElement.firstElementChild;
        }
    };
}