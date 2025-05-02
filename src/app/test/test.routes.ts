import { Router, Request, Response } from 'express';

const router = Router();

router.post('/test', (req: Request, res: Response) => {
    res.status(200).json({ message: 'API call successful!' });
});

router.get('/test', (req: Request, res: Response) => {
    res.status(200).json({message: 'get api called'});
})

export const testRouter = router;