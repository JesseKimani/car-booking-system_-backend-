import { Router, Request, Response } from 'express';
import SupplierVendor from '../../models/suppliers/supplier_vendor';
const router = Router();

let supplier_vendors: SupplierVendor[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newSupplierVendor = await SupplierVendor.create({
            name: req.body.name,
            category: req.body.category,
            email: req.body.email,
            mobile: req.body.mobile,
            location: req.body.location,
            website: req.body.website,
        });

        res.status(201).json(newSupplierVendor);
    } catch (error) {
        console.error('Error adding supplier: ', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const supplier_vendors = await SupplierVendor.findAll();
        res.json(supplier_vendors);
    } catch (error) {
        console.error('Error fetching suppliers: ', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const supplier_vendor = await SupplierVendor.findByPk(req.params.id);
  
      if (!supplier_vendor) {
        res.status(404).send('Supplier not found');
      } else {
        res.json(supplier_vendor);
      }
    } catch (error) {
      console.error('Error fetching supplier: ', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const supplier_vendor = await SupplierVendor.findByPk(req.params.id);
  
      if (!supplier_vendor) {
        res.status(404).send('Supplier vendor not found');
      } else {
        await supplier_vendor.update({
            name: req.body.name || supplier_vendor.name,
            category: req.body.category || supplier_vendor.category,
            email: req.body.email || supplier_vendor.email,
            mobile: req.body.mobile || supplier_vendor.mobile,
            location: req.body.location_id || supplier_vendor.location,
            website: req.body.website || supplier_vendor.website,

        });
  
        res.json(supplier_vendor);
      }
    } catch (error) {
      console.error('Error updating supplier:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const supplier_vendor = await SupplierVendor.findByPk(req.params.id);
  
      if (!supplier_vendor) {
        res.status(404).send('Supplier not found');
      } else {
        await supplier_vendor.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting supplier vendor:', error);
      res.status(500).send('Internal Server Error');
    }
  });

// CRUD Implementation end

export default router;
