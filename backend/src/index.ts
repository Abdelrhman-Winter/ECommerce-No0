import cors from "cors";

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";
import { userRouter } from "./routers/userRouter";
import { orderRouter } from "./routers/orderRouter";
import { keyRouter } from "./routers/keyRouter";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.set("strictQuery", true);
//conect to mongodb database
mongoose
  .connect(MONGODB_URI!)
  .then(() => {
    console.log(`MongoDB Connected #73 `.cyan.underline);
  })
  .catch(() => console.log(`MongoDB Connected Failed`.red.underline));

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/products', (req: Request, res: Response) => {
//   res.json(sampleProducts)
// })

// app.get('/api/products/:slug',(req:Request,res:Response)=>{
//   res.json(sampleProducts.find((x)=>x.slug===req.params.slug))
// })

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/seed", seedRouter);
app.use("/api/keys", keyRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(
    colors.magenta.underline(`server started at http://localhost:${PORT}`)
  );
});
