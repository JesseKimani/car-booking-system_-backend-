import { Router, Request, Response } from 'express';
import Revenue from '../../models/finance/revenue';
const router = Router();

let revenues: Revenue[] = [];


// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newRevenue= await Revenue.create({
            booking_type: req.body.booking_type,
            client_id: req.body.client_id,
            company_id: req.body.company_id,
            asset_id: req.body.asset_id,
            driver_id: req.body.driver_id,
            amount: req.body.amount,
            action_date: req.body.action_date,
            payment_status: req.body.payment_status,
        });

        res.status(201).json(newRevenue);
    } catch (error) {
        console.error('Error adding revenue:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const revenues = await Revenue.findAll();
        res.json(revenues);
    } catch (error) {
        console.error('Error fetching revenues:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const revenue = await Revenue.findByPk(req.params.id);
  
      if (!revenue) {
        res.status(404).send('Revenue not found');
      } else {
        res.json(revenue);
      }
    } catch (error) {
      console.error('Error fetching revenue:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const revenue = await Revenue.findByPk(req.params.id);
  
      if (!revenue) {
        res.status(404).send('Revenue not found');
      } else {
        await revenue.update({
            booking_type: req.body.booking_type || revenue.booking_type,
            client_id: req.body.client_id || revenue.client_id,
            company_id: req.body.company_id || revenue.company_id,
            asset_id: req.body.asset_id || revenue.asset_id,
            driver_id: req.body.driver_id || revenue.driver_id,
            amount: req.body.amount || revenue.amount,
            action_date: req.body.action_date || revenue.action_date,
            payment_status: req.body.payment_status || revenue.payment_status,
        });
  
        res.json(revenue);
      }
    } catch (error) {
      console.error('Error updating revenue:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const revenue = await Revenue.findByPk(req.params.id);
  
      if (!revenue) {
        res.status(404).send('Revenue not found');
      } else {
        await revenue.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting revenue:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;