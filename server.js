import express from "express";
import cors from "cors";
import DosenRoute from "./routes/DosenRoute.js";
import MatkulRoute from "./routes/MatkulRoute.js";
import PengampuMatkulRoute from "./routes/PengampuMatkulRoute.js";

const app = express();

/* add middleware */
app.use(cors());
app.use(express.json());

/* add routing into crud */
app.use(DosenRoute);
app.use(MatkulRoute);
app.use(PengampuMatkulRoute);

/* inisiasi server */
app.listen(4400, () => console.log('Server up and running...'));