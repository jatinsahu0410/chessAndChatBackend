import express from 'express';
import { userRouter } from '../app/auth/user.routes';
import { testRouter } from '../app/test/test.routes';

const router = express.Router();

router.use('/user', userRouter);
router.use('/t', testRouter)

export default router;