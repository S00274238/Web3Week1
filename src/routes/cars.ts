import { Router } from 'express';
import { CarController } from '../controllers/cars';
import { authenticateKey } from '../middleware/auth.middleware';
import {validate} from '../middleware/validate.middleware';
import {carParamsSchema, createCarZSchema, updateCarZSchema}  from '../models/cars';


const router = Router();
const carController = new CarController();

router.get('/', authenticateKey, carController.getAllCars)
// router.post('/', authenticateKey, carController.createCar);
router.get('/:id', carController.getCarById);
router.get('/:id', validate(carParamsSchema),carController.getCarById);
router.put('/:id', validate(updateCarZSchema), carController.updateCar);
router.delete('/:id', carController.deleteCar);
router.post('/', validate(createCarZSchema), carController.createCar);

export default router;
