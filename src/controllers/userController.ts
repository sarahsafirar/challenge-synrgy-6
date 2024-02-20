import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../database/models/userModels'; // Assuming User is the correct exported interface/model from your models file
import UserService from '../service/userServices'; // Update the path accordingly
import { encodeTokenJwt, checkTokenJwt } from '../utils/jwt';

const saltRounds = 12;

const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    let user: User = {} as User;

    if (role === 'SUPERADMIN' || role === 'ADMIN') {
      user = await UserService.createUser({
        email,
        password: hashPassword,
        role: 'ADMIN',
      });
    }

    if (role === 'MEMBER') {
      user = await UserService.createUser({
        email,
        password: hashPassword,
        role: 'MEMBER',
      });
    }

    res.status(201).json({
      message: 'Registered user successfully',
      data: {
        id: user.id,
        email: user.email,
        role: user.role,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    });
  } catch (err) {
    res.status(422).json({ message: 'Failed to register user' });
  }
};

const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const userByEmail = await UserService.userByEmail(email);

    if (!userByEmail) {
      res.status(401).json({ error: 'User account not found' });
      return;
    }

    const checkUserPassword = await bcrypt.compare(password, userByEmail.password);

    if (!checkUserPassword) {
      res.status(401).json({ error: 'Email or password mismatch' });
      return;
    }

    // Use the UserTokenDTO to create a token
    const tokenGenerated = encodeTokenJwt({
      id: userByEmail.id,
      email: userByEmail.email,
      role: userByEmail.role,
    });

    res.status(200).json({ message: 'Logged in successfully', token: tokenGenerated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to log in' });
  }
};

const getProfileUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({ error: 'Token not provided' });
      return;
    }

    const decodeToken = await checkTokenJwt(token);

    const userFindById = await UserService.userById(decodeToken.id);

    if (!userFindById) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({
        id: userFindById.id,
        email: userFindById.email,
        role: userFindById.role,
        created_at: userFindById.created_at,
        updated_at: userFindById.updated_at,
      });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to get user' });
  }
};

export default { registerUser, loginUser, getProfileUser };
