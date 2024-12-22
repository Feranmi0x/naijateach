import { auth } from "@clerk/nextjs/server";

const allowedIds = [
"user_2mAFalbTFzCSJ7JItlPU8o8wB0h",
];

export const isAdmin = () => {
const { userId } = auth();

if (!userId) { 
    return false;
};

return allowedIds.indexOf(userId) !== -1
}