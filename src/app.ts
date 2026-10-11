import express, {Application, Request, Response} from "express" ;
// import userRoutes from './routes/';
import carRoutes from './routes/cars';
import { env } from "./config/env";
import { connectDB } from "./config/database";
import {authenticateKey} from './middleware/auth.middleware';
import { myLogger } from './middleware/logger.middleware';
import { swaggerSpec } from "./config/swagger";
import swaggerUi from 'swagger-ui-express';

const PORT = env.port

const app: Application = express();
app.use(myLogger);



const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

}
startServer();
app.use(express.json());
app.use('/api/v1/cars', carRoutes);
app.use('/api/v1/cars', authenticateKey, carRoutes);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);


app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "hello from Serhii (Borya dai deneg)"
    });
});

app.get('/bananas', async (_req : Request, res: Response) => {
    res.json({
    message: "this is bananas",
    });
});

app.get('/Borya', myLogger, async (_req : Request, res: Response) => {
    res.json({
    message: "Dai deneg bazhezhda",
    });
});




