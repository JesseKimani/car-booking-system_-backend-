import { Router, Request, Response } from 'express';
import Department from '../../models/settings/department';
const router = Router();


let departments: Department[] = [];


// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newDepartment = await Department.create({
            name: req.body.name,
            description: req.body.description,
        });

        res.status(201).json(newDepartment);
    } catch (error) {
        console.error('Error adding department:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (error) {
        console.error('Error fetching departments:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const department = await Department.findByPk(req.params.id);
  
      if (!department) {
        res.status(404).send('Department not found');
      } else {
        res.json(department);
      }
    } catch (error) {
      console.error('Error fetching department:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const department = await Department.findByPk(req.params.id);
  
      if (!department) {
        res.status(404).send('Department not found');
      } else {
        await department.update({
            name: req.body.name || department.name,
            description: req.body.address || department.description,
        });
  
        res.json(department);
      }
    } catch (error) {
      console.error('Error updating department:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const department = await Department.findByPk(req.params.id);
  
      if (!department) {
        res.status(404).send('Department not found');
      } else {
        await department.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting department:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
