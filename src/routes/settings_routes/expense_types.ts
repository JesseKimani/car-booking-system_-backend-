import { Router, Request, Response } from 'express';
import ExpenseType from '../../models/settings/expense_type';

const router = Router();

let expense_types: ExpenseType[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newExpenseType = await ExpenseType.create({
            name: req.body.name,
            description: req.body.description,
        });

        res.status(201).json(newExpenseType);
    } catch (error) {
        console.error('Error adding expense type:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const expense_types = await ExpenseType.findAll();
        res.json(expense_types);
    } catch (error) {
        console.error('Error fetching fuel types:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const expense_type = await ExpenseType.findByPk(req.params.id);
  
      if (!expense_type) {
        res.status(404).send('Expense type not found');
      } else {
        res.json(expense_type);
      }
    } catch (error) {
      console.error('Error fetching expense type:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const expense_type = await ExpenseType.findByPk(req.params.id);
  
      if (!expense_type) {
        res.status(404).send('Expense type not found');
      } else {
        await expense_type.update({
            name: req.body.name || expense_type.name,
            description: req.body.address || expense_type.description,
        });
  
        res.json(expense_type);
      }
    } catch (error) {
      console.error('Error updating expense type:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const expense_type = await ExpenseType.findByPk(req.params.id);
  
      if (!expense_type) {
        res.status(404).send('Expense type not found');
      } else {
        await expense_type.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting expense type', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
