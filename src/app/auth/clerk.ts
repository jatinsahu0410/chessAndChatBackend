import { clerkClient } from "@clerk/express";
import prisma from "../../config/db";
// import { Request, Response, NextFunction } from "express";

// // Middleware to protect routes
// export const requireClerkAuth = (req: Request, res: Response, next: NextFunction) => {
//   const { userId } = getAuth(req);
//   if (!userId){
//     res.status(401).json({ error: "Unauthorized" });
//     return ;
//   }
//   next();
// };

// Sync Clerk user to DB if not present
export const syncUserIfNeeded = async (clerkUserId: string) => {
  const existingUser = await prisma.user.findUnique({
    where: { clerkId: clerkUserId },
  });

  if (existingUser) return existingUser;

  const clerkUser = await clerkClient.users.getUser(clerkUserId);
  console.log("Clerk User:", clerkUser);
  const newUser = await prisma.user.create({
    data: {
      clerkId: clerkUser.id,
      email: clerkUser.emailAddresses[0]?.emailAddress ?? "",
      fullName: `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim(),
      avatarUrl: clerkUser.imageUrl,
    },
  });

  console.log("New User Created: and saved to db", newUser);
  return newUser;
};
