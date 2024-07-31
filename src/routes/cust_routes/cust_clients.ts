import { Router, Request, Response } from 'express';
import CustClient from '../../models/cust/cust_client';

const router = Router();

let cust_clients: CustClient[] = [];


// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newCustClient = await CustClient.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
            company: req.body.company,
            department: req.body.department,
            is_active: req.body.is_active,
        });


        res.status(201).json(newCustClient);
    } catch (error) {
        console.error('Error adding customer:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const cust_clients = await CustClient.findAll();
        res.json(cust_clients);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const cust_client = await CustClient.findByPk(req.params.id);
  
      if (!cust_client) {
        res.status(404).send('Customer not found');
      } else {
        res.json(cust_client);
      }
    } catch (error) {
      console.error('Error fetching customer:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const cust_client = await CustClient.findByPk(req.params.id);
  
      if (!cust_client) {
        res.status(404).send('Cust client not found');
      } else {
        await cust_client.update({
          first_name: req.body.first_name || cust_client.first_name,
          last_name: req.body.last_name || cust_client.last_name,
          email: req.body.email || cust_client.email,
          password: req.body.password || cust_client.password,
          address: req.body.address || cust_client.address,
          phone: req.body.phone || cust_client.phone,
          company: req.body.company || cust_client.company,
          department: req.body.department || cust_client.department,
          is_active: req.body.is_active || cust_client.is_active,
          
        });
  
        res.json(cust_client);
      }
    } catch (error) {
      console.error('Error updating customer:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const cust_client = await CustClient.findByPk(req.params.id);
  
      if (!cust_client) {
        res.status(404).send('Customer not found');
      } else {
        await cust_client.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting customer:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
