import { Router, Request, Response } from 'express';
import Transfer from '../../models/bookings/transfer';
// import { sendMail } from '../../mailer';

const router = Router();

let transfers: Transfer[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newTransfer = await Transfer.create({
            status: req.body.status,
            client_id: req.body.client_id,
            client_mobile: req.body.client_mobile,
            client_email: req.body.client_email,
            client_company: req.body.client_company,
            asset_id: req.body.asset_id,
            driver_name: req.body.driver_name,
            pickup_address: req.body.pickup_address,
            dropoff_address: req.body.dropoff_address,
            pickup_date: req.body.pickup_date,
            dropoff_date: req.body.dropoff_date,
            amount: req.body.amount,
            action_date: req.body.action_date,
            description: req.body.description,
        });

        res.status(201).json(newTransfer);

        // Send email notification
        // sendMail('paul.mwige@fleetglobaltechnology.com', 'New Transfer Booking Created', `A new booking has been created: ${JSON.stringify(newTransfer)}` )
    
      } catch (error) {
        console.error('Error adding transfer:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all bookings
router.get('/', async (req: Request, res: Response) => {
    try {
        const transfers = await Transfer.findAll();
        res.json(transfers);
    } catch (error) {
        console.error('Error fetching transfers:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single booking
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const transfer = await Transfer.findByPk(req.params.id);
  
      if (!transfer) {
        res.status(404).send('Transfer not found');
      } else {
        res.json(transfer);
      }
    } catch (error) {
      console.error('Error fetching transfer:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a booking by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const transfer = await Transfer.findByPk(req.params.id);
  
      if (!transfer) {
        res.status(404).send('Transfer not found');
      } else {
        await transfer.update({
          status: req.body.status || transfer.status,
          client_id: req.body.client_id || transfer.client_id,
          client_mobile: req.body.client_mobile || transfer.client_mobile,
          client_email: req.body.client_email || transfer.client_email,
          client_company: req.body.client_company || transfer.client_company,
          asset_id: req.body.asset_id || transfer.asset_id,
          driver_name: req.body.driver_name || transfer.driver_name,
          pickup_address: req.body.pickup_address || transfer.pickup_address,
          dropoff_address: req.body.dropoff_address || transfer.dropoff_address,
          pickup_date: req.body.pickup_date || transfer.pickup_date,
          dropoff_date: req.body.dropoff_date || transfer.dropoff_date,
          amount: req.body.price || transfer.amount,
          action_date: req.body.price || transfer.action_date,
          description: req.body.description || transfer.description,
        });
  
        res.json(transfer);

        // Send email notification
        // if (req.body.status === 'Approved' || req.body.status === 'Rejected') {
        //   sendMail(transfer.client_email, `Transfer booking ${req.body.status}`, `Your transfer booking has been ${req.body.status.toLowerCase()}: ${JSON.stringify(transfer)}`);
        // }

      }
    } catch (error) {
      console.error('Error updating transfer:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a booking by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const transfer = await Transfer.findByPk(req.params.id);
  
      if (!transfer) {
        res.status(404).send('Transfer not found');
      } else {
        await transfer.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting transfer:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
