import { Router, Request, Response } from "express";
import { getAuth, requireAuth } from "@clerk/express";
import { syncUserIfNeeded } from "./clerk";

const router = Router();

router.get('/sync', async (req: Request, res: Response): Promise<void> => {
    console.log("GET /me called");
    console.log("Request Headers:", req.headers);
    try {
        const { userId } = getAuth(req);
        console.log("The user is ", userId);
        if (!userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }

        const user = await syncUserIfNeeded(userId);
        res.status(200).json({ user });
    } catch (err) {
        console.error("Error in /me route:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/ys', (req: Request, res: Response) => {
    res.status(200).json({ message: 'ys call successful!' });
});

export const userRouter = router;
