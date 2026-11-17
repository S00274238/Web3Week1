import { NotFoundError } from '../apperrors/AppError';
import { CarModel, ICar } from '../models/cars'
import { HydratedDocument } from 'mongoose';

export class CarService {



  async getAllCars(): Promise<ICar[]> {
    console.log("Fetching all cars from the database...");
    return await CarModel.find().lean(); 
  }

    async getCarById(id: string): Promise<ICar> {
    const car = await CarModel.findById(id).lean();
    if (!car) throw new NotFoundError('Car');
    return car;
  }


  async createCar(carData: ICar): Promise<HydratedDocument<ICar>> {
    const car = new CarModel(carData);
    return await car.save();
  }
  
  async createUser(userData: ICar): Promise<HydratedDocument<ICar>> {
    const user = new CarModel(userData);
    return await user.save();
  }

  async updateCar(id: string, carData: Partial<ICar>): Promise<ICar | null> {
    return await CarModel.findByIdAndUpdate(id, carData, { returnDocument: 'after' }).lean();
  }

  async deleteCar(id: string): Promise<ICar | null> {
    return await CarModel.findByIdAndDelete(id).lean();
  }

}
