import { Router, Request, Response } from 'express';
import SupplierCategory from '../../models/settings/supplier_category';
const router = Router();

let supplier_categories: SupplierCategory[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newSupplierCategory = await SupplierCategory.create({
            name: req.body.name,
            description: req.body.description,
        });


        res.status(201).json(newSupplierCategory);
    } catch (error) {
        console.error('Error adding supplier category:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const supplier_categories = await SupplierCategory.findAll();
        res.json(supplier_categories);
    } catch (error) {
        console.error('Error fetching supplier categories:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const supplier_category = await SupplierCategory.findByPk(req.params.id);
  
      if (!supplier_category) {
        res.status(404).send('Supplier category not found');
      } else {
        res.json(supplier_category);
      }
    } catch (error) {
      console.error('Error fetching supplier category:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const supplier_category = await SupplierCategory.findByPk(req.params.id);
  
      if (!supplier_category) {
        res.status(404).send('Supplier category not found');
      } else {
        await supplier_category.update({
            name: req.body.name || supplier_category.name,
            description: req.body.description || supplier_category.description
        });
  
        res.json(supplier_category);
      }
    } catch (error) {
      console.error('Error updating supplier category:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const supplier_category = await SupplierCategory.findByPk(req.params.id);
  
      if (!supplier_category) {
        res.status(404).send('Supplier category not found');
      } else {
        await supplier_category.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting supplier category:', error);
      res.status(500).send('Internal Server Error');
    }
  });

// CRUD Implementation end

export default router;
