import Car from '../database/models/carModels';

class CarRepository {
  async getAll(): Promise<Car[]> {
    return Car.query();
  }

  async getById(id: number): Promise<Car | undefined> {
    return Car.query().findById(id);
  }

  async create(data: Car): Promise<Car> {
    return Car.query().insert(data);
  }

  async update(id: number, data: Car): Promise<number> {
    return Car.query().findById(id).patch(data);
  }

  async delete(id: number): Promise<number> {
    return Car.query().deleteById(id);
  }
}

export default new CarRepository();