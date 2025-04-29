import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import router from './routes/routes';
import { clerkMiddleware } from '@clerk/express';
import { createDcConnection } from './config/db';
import { PrismaClient } from '@prisma/client';

// Load environment variables
dotenv.config();

const app: Application = express();

// connect to db
createDcConnection();

// Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// clerk middleware
app.use(clerkMiddleware());

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});


app.use("/api/v1", router);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
