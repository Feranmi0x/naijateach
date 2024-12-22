import cron from "node-cron";
import db from "@/db/drizzle";
import { resetHeartsIfNeeded } from "./user-progress";

// Schedule the task to run every 24 hours
cron.schedule("0 0 * * *", async () => {
  try {
    const users = await db.query.userProgress.findMany(); // Get all users or a batch
    for (const user of users) {
      await resetHeartsIfNeeded(user.userId);
    }
    console.log("Hearts reset for users.");
  } catch (error) {
    console.error("Error resetting hearts:", error);
  }
});