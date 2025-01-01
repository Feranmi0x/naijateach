import { auth } from "@clerk/nextjs/server";

const allowedIds = [
"user_2qtHmR0Vh4fpqavqeCHh8Y6KO0c",
"user_2qd7fyp9lLktBkYxt35ObVNDWNe",
];

export const isAdmin = () => {
const { userId } = auth();

if (!userId) { 
    return false;
};

return allowedIds.indexOf(userId) !== -1
}