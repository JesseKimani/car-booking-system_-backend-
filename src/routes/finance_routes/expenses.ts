import { Router, Request, Response } from 'express';
import Expense from '../../models/finance/expense';
const router = Router();

let expenses: Expense[] = [];


// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newExpense= await Expense.create({
            expense_type: req.body.expense_type,
            asset_id: req.body.asset_id,
            amount: req.body.amount,
            action_date: req.body.action_date,
            client_id: req.body.client_id,
            company_id: req.body.company_id,
            description: req.body.description,
        });

        res.status(201).json(newExpense);
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const expenses = await Expense.findAll();
        res.json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const expense = await Expense.findByPk(req.params.id);
  
      if (!expense) {
        res.status(404).send('Expense not found');
      } else {
        res.json(expense);
      }
    } catch (error) {
      console.error('Error fetching expense:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const expense = await Expense.findByPk(req.params.id);
  
      if (!expense) {
        res.status(404).send('Expense not found');
      } else {
        await expense.update({
            expense_type: req.body.expense_type || expense.expense_type,
            asset_id: req.body.asset_id || expense.asset_id,
            amount: req.body.amount || expense.amount,
            action_date: req.body.action_date || expense.action_date,
            client_id: req.body.client_id || expense.client_id,
            company_id: req.body.company_id || expense.company_id,
            description: req.body.description || expense.description,
        });
  
        res.json(expense);
      }
    } catch (error) {
      console.error('Error updating expense:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const expense = await Expense.findByPk(req.params.id);
  
      if (!expense) {
        res.status(404).send('Expense not found');
      } else {
        await expense.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;