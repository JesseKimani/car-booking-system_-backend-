import { Router, Request, Response } from 'express';
import CustCompany from '../../models/cust/cust_company';

const router = Router();

let cust_companies: CustCompany[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newCustCompany = await CustCompany.create({
            name: req.body.name,
            contact_person: req.body.contact_person,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
        });
        res.status(201).json(newCustCompany);
    } catch (error) {
        console.error('Error adding cust company:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const cust_companies = await CustCompany.findAll();
        res.json(cust_companies);
    } catch (error) {
        console.error('Error fetching cust companies:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const cust_company = await CustCompany.findByPk(req.params.id);
  
      if (!cust_company) {
        res.status(404).send('Cust company not found');
      } else {
        res.json(cust_company);
      }
    } catch (error) {
      console.error('Error fetching cust company:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const cust_company = await CustCompany.findByPk(req.params.id);
  
      if (!cust_company) {
        res.status(404).send('Cust Company not found');
      } else {
        await cust_company.update({
          name: req.body.name || cust_company.name,
          contact_person: req.body.contact_person || cust_company.contact_person,
          email: req.body.email || cust_company.email,
          phone: req.body.phone || cust_company.phone,
          address: req.body.address || cust_company.address,
          
        });
        
        res.json(cust_company);
      }
    } catch (error) {
      console.error('Error updating cust company:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const cust_company = await CustCompany.findByPk(req.params.id);
  
      if (!cust_company) {
        res.status(404).send('Cust company not found');
      } else {
        await cust_company.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting cust company:', error);
      res.status(500).send('Internal Server Error');
    }
  });

// CRUD Implementation end

export default router;
