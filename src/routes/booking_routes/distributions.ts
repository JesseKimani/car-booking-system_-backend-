import { Router, Request, Response } from 'express';
import Distribution from '../../models/bookings/distribution';
// import { sendMail } from '../../mailer';

const router = Router();

let distributions: Distribution[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newDistribution = await Distribution.create({
            status: req.body.status,
            client_id: req.body.client_id,
            client_mobile: req.body.client_mobile,
            client_email: req.body.client_email,
            client_address: req.body.client_address,
            asset_id: req.body.asset_id,
            driver_name: req.body.driver_name,
            origin: req.body.origin,
            destination: req.body.destination,
            requested_on: req.body.requested_on,
            delivery_date: req.body.delivery_date,
            amount: req.body.amount,
            action_date: req.body.action_date,
            description: req.body.description,
        });

        res.status(201).json(newDistribution);

        // Send email notification
        // sendMail('paul.mwige@fleetglobaltechnology.com', 'New Distribution Booking Created', `A new distribution booking has been created: ${JSON.stringify(newDistribution)}` )

    } catch (error) {
        console.error('Error adding distribution:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all bookings
router.get('/', async (req: Request, res: Response) => {
    try {
        const distributions = await Distribution.findAll();
        res.json(distributions);
    } catch (error) {
        console.error('Error fetching distributions:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single booking
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const distribution = await Distribution.findByPk(req.params.id);
  
      if (!distribution) {
        res.status(404).send('Distribution not found');
      } else {
        res.json(distribution);
      }
    } catch (error) {
      console.error('Error fetching distribution:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update an asset by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const distribution = await Distribution.findByPk(req.params.id);
  
      if (!distribution) {
        res.status(404).send('Distribution not found');
      } else {
        await distribution.update({
          status: req.body.status || distribution.status,
          client_id: req.body.client_id || distribution.client_id,
          client_mobile: req.body.client_mobile || distribution.client_mobile,
          client_email: req.body.client_email || distribution.client_email,
          client_address: req.body.client_address || distribution.client_address,
          asset_id: req.body.asset_id || distribution.asset_id,
          driver_name: req.body.driver_name || distribution.driver_name,
          origin: req.body.origin || distribution.origin,
          destination: req.body.destination || distribution.destination,
          requested_on: req.body.requested_on || distribution.requested_on,
          delivery_date: req.body.delivery_date || distribution.delivery_date,
          amount: req.body.price || distribution.amount,
          action_date: req.body.price || distribution.action_date,
          description: req.body.description || distribution.description,
        });
  
        res.json(distribution);

        // Send email notification
        // if (req.body.status === 'Approved' || req.body.status === 'Rejected') {
        //   sendMail(distribution.client_email, `Distribution booking ${req.body.status}`, `Your distribution booking has been ${req.body.status.toLowerCase()}: ${JSON.stringify(distribution)}`);
        // }

      }
    } catch (error) {
      console.error('Error updating distribution:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete an asset by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const distribution = await Distribution.findByPk(req.params.id);
  
      if (!distribution) {
        res.status(404).send('Distribution not found');
      } else {
        await distribution.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting distribution:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
