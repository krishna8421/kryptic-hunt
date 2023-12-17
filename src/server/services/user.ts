import { db } from "@/server/db";

export const getUser = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      personalEmail: email,
    },
  });
  return user;
};
