import { Router, Request, Response } from 'express';
import EmpPosition from '../../models/settings/emp_position';

const router = Router();


let emp_positions: EmpPosition[] = [];


// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newEmpPosition = await EmpPosition.create({
            name: req.body.name,
            description: req.body.description,
           
        });

        res.status(201).json(newEmpPosition);
    } catch (error) {
        console.error('Error adding emp position:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const emp_positions = await EmpPosition.findAll();
        res.json(emp_positions);
    } catch (error) {
        console.error('Error fetching emp positions:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const emp_position = await EmpPosition.findByPk(req.params.id);
  
      if (!emp_position) {
        res.status(404).send('emp position type not found');
      } else {
        res.json(emp_position);
      }
    } catch (error) {
      console.error('Error fetching emp position:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const emp_position = await EmpPosition.findByPk(req.params.id);
  
      if (!emp_position) {
        res.status(404).send('Emp position not found');
      } else {
        await emp_position.update({
          name: req.body.asset_id || emp_position.name,
          description: req.body.description || emp_position.description,
        });
  
        res.json(emp_position);
      }
    } catch (error) {
      console.error('Error updating emp position:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const emp_position = await EmpPosition.findByPk(req.params.id);
  
      if (!emp_position) {
        res.status(404).send('Emp position not found');
      } else {
        await emp_position.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting emp position:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;