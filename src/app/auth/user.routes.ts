import { Router, Request, Response } from "express";
import { getAuth, requireAuth } from "@clerk/express";
import { syncUserIfNeeded } from "./clerk";

const router = Router();

router.get("/me", requireAuth(), async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = getAuth(req);
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

export const userRouter = router;
