import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
import CustClient from '../../models/cust/cust_client';

const router = express.Router();
const SECRET_KEY = 'JesseAPIkey';

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await CustClient.findOne({ where: { email, is_active: true } });
    if (!user) {
      return res.status(401).json({ message: 'Not registered! Please contact administrator' });
    }

    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //   return res.status(401).json({ message: 'Invalid email or password' });
    // }

    if (user.password !== password) {
        return res.status(401).json({ message: 'Wrong password'})
    }
    
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Internal server error');
  }
});

router.get('/user', async(req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).send('No token provided');
  }

  try {
    const decoded =jwt.verify(token, SECRET_KEY) as { id: number };
    const user = await CustClient.findByPk(decoded.id);

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      fullName: `${user.first_name} ${user.last_name}`
    });
  }
  catch (error) {
    console.error('Error fetching user info: ', error);
    res.status(500).send('Internal server error');
  }
});

export default router;
