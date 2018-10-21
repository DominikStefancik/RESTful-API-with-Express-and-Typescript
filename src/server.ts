import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as helmet from "helmet";
import * as compression from "compression";
import * as cors from "cors";

// import router

const MONGO_URI = "mongodb://localhost/tes-rest";

// Server class
class Server {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // app config
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(logger("dev"));
    this.app.use(compression());
    this.app.use(cors());

    // set up mongoose
    mongoose.connect(MONGO_URI || process.env.MONGODB_URI)
  }
}
