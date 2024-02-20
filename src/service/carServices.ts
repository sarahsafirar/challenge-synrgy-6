import CarRepository from '../repositories/carRepositories';
import Car from "../database/models/carModels"

class CarService {
  async findAll(): Promise<Car[]> {
    return await CarRepository.getAll();
  }

  async create(data: Car): Promise<Car> {
    return await CarRepository.create(data);
  }

  async findOne(id: number): Promise<Car | undefined> {
    return await CarRepository.getById(id);
  }

  async update(id: number, data: Car): Promise<number> {
    return await CarRepository.update(id, data);
  }

  async delete(id: number): Promise<number> {
    return await CarRepository.delete(id);
  }
}

export default new CarService();
