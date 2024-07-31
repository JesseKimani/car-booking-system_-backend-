import { Router, Request, Response } from 'express';
import Driver from '../../models/settings/driver';
const router = Router();

let drivers: Driver[] = [];


// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newDriver = await Driver.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
        });

        res.status(201).json(newDriver);
    } catch (error) {
        console.error('Error adding driver:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const drivers = await Driver.findAll();
        res.json(drivers);
    } catch (error) {
        console.error('Error fetching drivers:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const driver = await Driver.findByPk(req.params.id);
  
      if (!driver) {
        res.status(404).send('Driver not found');
      } else {
        res.json(driver);
      }
    } catch (error) {
      console.error('Error fetching driver:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const driver = await Driver.findByPk(req.params.id);
  
      if (!driver) {
        res.status(404).send('Driver not found');
      } else {
        await driver.update({
            name: req.body.name || driver.name,
            email: req.body.email || driver.email,
            phone: req.body.phone || driver.phone,
            address: req.body.address || driver.address,
        });
  
        res.json(driver);
      }
    } catch (error) {
      console.error('Error updating driver:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const driver = await Driver.findByPk(req.params.id);
  
      if (!driver) {
        res.status(404).send('Driver not found');
      } else {
        await driver.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting driver:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
