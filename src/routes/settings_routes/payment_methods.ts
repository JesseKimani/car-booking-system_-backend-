import { Router, Request, Response } from 'express';
import PaymentMethod from '../../models/settings/payment_method';
const router = Router();


let payment_methods: PaymentMethod[] = [];


// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newPaymentMethod = await PaymentMethod.create({
            name: req.body.name,
            description: req.body.description,
        });

        res.status(201).json(newPaymentMethod);
    } catch (error) {
        console.error('Error adding payment method:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const payment_methods = await PaymentMethod.findAll();
        res.json(payment_methods);
    } catch (error) {
        console.error('Error fetching payment methods:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const payment_method = await PaymentMethod.findByPk(req.params.id);
  
      if (!payment_method) {
        res.status(404).send('Payment method not found');
      } else {
        res.json(payment_method);
      }
    } catch (error) {
      console.error('Error fetching payment method:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const payment_method = await PaymentMethod.findByPk(req.params.id);
  
      if (!payment_method) {
        res.status(404).send('Payment method not found');
      } else {
        await payment_method.update({
            name: req.body.name || payment_method.name,
            description: req.body.address || payment_method.description,
        });
  
        res.json(payment_method);
      }
    } catch (error) {
      console.error('Error updating payment method:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const payment_method = await PaymentMethod.findByPk(req.params.id);
  
      if (!payment_method) {
        res.status(404).send('Payment method not found');
      } else {
        await payment_method.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting payment method:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
