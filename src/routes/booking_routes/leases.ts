import { Router, Request, Response } from 'express';
import Lease from '../../models/bookings/lease';
// import { sendMail } from '../../mailer';

const router = Router();

let leases: Lease[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newLease = await Lease.create({
            status: req.body.status,
            client_id: req.body.client_id,
            client_mobile: req.body.client_mobile,
            client_email: req.body.client_email,
            client_company: req.body.client_company,
            asset_id: req.body.asset_id,
            driver_name: req.body.driver_name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            contract_number: req.body.contract_number,
            amount: req.body.amount,
            action_date: req.body.action_date,
            description: req.body.description,
        });

        res.status(201).json(newLease);

        // Send email notification
        // sendMail('paul.mwige@fleetglobaltechnology.com', 'New Lease Booking Created', `A new booking has been created: ${JSON.stringify(newLease)}` )

    } catch (error) {
        console.error('Error adding lease:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all bookings
router.get('/', async (req: Request, res: Response) => {
    try {
        const leases = await Lease.findAll();
        res.json(leases);
    } catch (error) {
        console.error('Error fetching leases:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single booking
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const lease = await Lease.findByPk(req.params.id);
  
      if (!lease) {
        res.status(404).send('Lease not found');
      } else {
        res.json(lease);
      }
    } catch (error) {
      console.error('Error fetching lease:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a booking by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const lease = await Lease.findByPk(req.params.id);
  
      if (!lease) {
        res.status(404).send('Lease not found');
      } else {
        await lease.update({
          status: req.body.status || lease.status,
          client_id: req.body.client_id || lease.client_id,
          client_mobile: req.body.client_mobile || lease.client_mobile,
          client_email: req.body.client_email || lease.client_email,
          client_company: req.body.client_company || lease.client_company,
          asset_id: req.body.asset_id || lease.asset_id,
          driver_name: req.body.driver_name || lease.driver_name,
          start_date: req.body.start_date || lease.start_date,
          end_date: req.body.end_date || lease.end_date,
          contract_number: req.body.contract_number || lease.contract_number,
          amount: req.body.price || lease.amount,
          action_date: req.body.action_date || lease.action_date,
          description: req.body.description || lease.description,
        });
  
        res.json(lease);

        // Send email notification
        // if (req.body.status === 'Approved' || req.body.status === 'Rejected') {
        //   sendMail(lease.client_email, `Lease booking ${req.body.status}`, `Your lease booking has been ${req.body.status.toLowerCase()}: ${JSON.stringify(lease)}`);
        // }
      }
    } catch (error) {
      console.error('Error updating lease:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a booking by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const lease = await Lease.findByPk(req.params.id);
  
      if (!lease) {
        res.status(404).send('Lease not found');
      } else {
        await lease.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting lease:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
