import express, {Application, Request, Response} from "express" ;
// import userRoutes from './routes/';
import carRoutes from './routes/cars';

const PORT = process.env.PORT || 3001;

const app: Application = express();

app.use(express.json());
app.use('/api/v1/cars', carRoutes);

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

app.get('/Borya', async (_req : Request, res: Response) => {
    res.json({
    message: "Dai deneg bazhezhda",
    });
});

app.use((req, _res, next) => {  
    console.log(`${req.method} ${req.originalUrl} papapopope`);
    next();
});



app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    });

