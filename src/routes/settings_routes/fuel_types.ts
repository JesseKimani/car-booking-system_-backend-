import { Router, Request, Response } from 'express';
import FuelType from '../../models/settings/fuel_type';

const router = Router();

let fuel_types: FuelType[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newFuelType = await FuelType.create({
            name: req.body.name,
            description: req.body.description,
        });

        res.status(201).json(newFuelType);
    } catch (error) {
        console.error('Error adding fuel_type:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const fuel_types = await FuelType.findAll();
        res.json(fuel_types);
    } catch (error) {
        console.error('Error fetching fuel types:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const fuel_type = await FuelType.findByPk(req.params.id);
  
      if (!fuel_type) {
        res.status(404).send('Fuel type not found');
      } else {
        res.json(fuel_type);
      }
    } catch (error) {
      console.error('Error fetching fuel type:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const fuel_type = await FuelType.findByPk(req.params.id);
  
      if (!fuel_type) {
        res.status(404).send('Fuel type not found');
      } else {
        await fuel_type.update({
            name: req.body.name || fuel_type.name,
            description: req.body.address || fuel_type.description,
        });
  
        res.json(fuel_type);
      }
    } catch (error) {
      console.error('Error updating fuel type:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const fuel_type = await FuelType.findByPk(req.params.id);
  
      if (!fuel_type) {
        res.status(404).send('Fuel type not found');
      } else {
        await fuel_type.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting fuel type', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
