import "dotenv/config";
import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { ExpressUserRouter } from "./modules/User/infrastructure/ExpressUserRouter";
import morgan = require("morgan");
import * as cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// Opciones de configuración de CORS
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.use(ExpressUserRouter);

// Middleware de errores de Express
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.error(err.stack);
    return res.status(500).json({message: err.message});
  }
  console.error(err);
  return res.status(500).json({message: "Something Broke!"});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server runnin on port http://localhost:3000");
});
