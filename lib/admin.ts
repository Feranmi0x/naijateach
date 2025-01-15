import { auth } from "@clerk/nextjs/server";

const allowedIds = [
"user_2qtHmR0Vh4fpqavqeCHh8Y6KO0c",
"user_2qd7fyp9lLktBkYxt35ObVNDWNe",
"user_2rdY2hCXLtGFELEzK1Sn8i4EBdh",
"user_2rUyaRDwkCQtZVl4wt3HJqvHZ7e",
];

export const isAdmin = () => {
const { userId } = auth();

if (!userId) { 
    return false;
};

return allowedIds.indexOf(userId) !== -1
}