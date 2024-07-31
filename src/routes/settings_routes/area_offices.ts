import { Router, Request, Response } from 'express';
import AreaOffice from '../../models/settings/area_office';
const router = Router();


let area_offices: AreaOffice[] = [];


// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newAreaOffice = await AreaOffice.create({
            name: req.body.name,
            city: req.body.city,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
        });

        res.status(201).json(newAreaOffice);
    } catch (error) {
        console.error('Error adding area office:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const area_offices = await AreaOffice.findAll();
        res.json(area_offices);
    } catch (error) {
        console.error('Error fetching area offices:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const area_office = await AreaOffice.findByPk(req.params.id);
  
      if (!area_office) {
        res.status(404).send('Area office not found');
      } else {
        res.json(area_office);
      }
    } catch (error) {
      console.error('Error fetching area office:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const area_office = await AreaOffice.findByPk(req.params.id);
  
      if (!area_office) {
        res.status(404).send('Area office not found');
      } else {
        await area_office.update({
            name: req.body.name || area_office.name,
            city: req.body.city || area_office.city,
            email: req.body.email || area_office.email,
            phone: req.body.phone || area_office.phone,
            address: req.body.address || area_office.address,
        });
  
        res.json(area_office);
      }
    } catch (error) {
      console.error('Error updating area office:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const area_office = await AreaOffice.findByPk(req.params.id);
  
      if (!area_office) {
        res.status(404).send('Area office not found');
      } else {
        await area_office.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting area office:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
