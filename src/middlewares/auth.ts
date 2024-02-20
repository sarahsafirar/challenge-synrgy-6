import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface DecodedToken extends JwtPayload {
  role: string;
}

function authToken(request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    response.status(401).json({ error: 'Unauthorized access' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string) as DecodedToken;

    if (decoded == null) {
      response.status(401).json({ error: 'Unauthorized access' });
      return;
    }

    console.log(decoded);

    if (decoded.role == 'ADMIN' || decoded.role == 'SUPERADMIN') {
      next();
      return;
    }

    if (decoded.role == 'MEMBER' && (request.method == 'POST' || request.method == 'PUT' || request.method == 'DELETE')) {
      response.status(401).json({ error: 'You cannot do this operation' });
      return;
    }

    next();
  } catch (err) {
    response.status(401).json({ error: 'Unauthorized access' });
    throw err;
  }
}

export default authToken;
