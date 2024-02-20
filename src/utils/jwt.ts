// jwt.ts

import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: '../.env' });

// Define the UserTokenDTO
interface UserTokenDTO {
  id: number;
  email: string;
  role: string;
}

const encodeTokenJwt = (user: UserTokenDTO): string => {
  return jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: '12h' });
};

const checkTokenJwt = (token: string): UserTokenDTO => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as UserTokenDTO;
};

export { encodeTokenJwt, checkTokenJwt, UserTokenDTO };
