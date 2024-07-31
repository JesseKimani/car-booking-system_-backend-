import { Router, Request, Response } from 'express';
import CarRental from '../../models/bookings/car_rental';
// import { sendMail } from '../../mailer';

const router = Router();

let car_rentals: CarRental[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newCarRental = await CarRental.create({
            status: req.body.status,
            client_id: req.body.client_id,
            client_mobile: req.body.client_mobile,
            client_email: req.body.client_email,
            asset_id: req.body.asset_id,
            driver_name: req.body.driver_name,
            from_address: req.body.from_address,
            to_address: req.body.to_address,
            start_date: req.body.start_date,
            start_time: req.body.start_time,
            end_date: req.body.end_time,
            end_time: req.body.end_time,
            mileage: req.body.mileage,
            fuel_level: req.body.fuel_level,
            amount: req.body.amount,
            vehicle_park_fee: req.body.vehicle_park_fee,
            driver_charges: req.body.driver_charges,
            delivery_charges: req.body.delivery_charges,
            supplier_price: req.body.supplier_price,
            client_address: req.body.client_address,
            client_company_id: req.body.client_company_id,
            client_department: req.body.client_department,
            action_date: req.body.action_date,
            description: req.body.description,
        });

        res.status(201).json(newCarRental);

        // Send email notification
        // sendMail('paul.mwige@fleetglobaltechnology.com', 'New Car Rental Booking Created', `A new car rental booking has been created: ${JSON.stringify(newCarRental)}` )

    } catch (error) {
        console.error('Error adding booking:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all bookings
router.get('/', async (req: Request, res: Response) => {
    try {
        const car_rentals = await CarRental.findAll();
        res.json(car_rentals);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single booking
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const car_rental = await CarRental.findByPk(req.params.id);
  
      if (!car_rental) {
        res.status(404).send('Booking not found');
      } else {
        res.json(car_rental);
      }
    } catch (error) {
      console.error('Error fetching booking:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update an asset by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const car_rental = await CarRental.findByPk(req.params.id);
  
      if (!car_rental) {
        res.status(404).send('Booking not found');
      } else {
        await car_rental.update({
          status: req.body.status || car_rental.status,
          client_id: req.body.client_id || car_rental.client_id,
          client_mobile: req.body.client_mobile || car_rental.client_mobile,
          client_email: req.body.client_email || car_rental.client_email,
          asset_id: req.body.asset_id || car_rental.asset_id,
          driver_name: req.body.driver_name || car_rental.driver_name,
          from_address: req.body.from_address || car_rental.from_address,
          to_address: req.body.to_address || car_rental.to_address,
          start_date: req.body.start_date || car_rental.start_date,
          start_time: req.body.start_time || car_rental.start_time,
          end_date: req.body.end_date || car_rental.end_date,
          end_time: req.body.end_time || car_rental.end_time,
          mileage: req.body.mileage || car_rental.mileage,
          fuel_level: req.body.fuel_level || car_rental.fuel_level,
          amount: req.body.price || car_rental.amount,
          vehicle_park_fee: req.body.vehicle_park_fee || car_rental.vehicle_park_fee,
          driver_charges: req.body.driver_charges || car_rental.driver_charges,
          delivery_charges: req.body.delivery_charges || car_rental.delivery_charges,
          supplier_price: req.body.supplier_price || car_rental.supplier_price,
          client_address: req.body.client_address || car_rental.client_address,
          client_company_id: req.body.client_company_id || car_rental.client_company_id,
          client_department: req.body.client_department || car_rental.client_department,
          action_date: req.body.client_department || car_rental.action_date,
          description: req.body.description || car_rental.description,
        });
  
        res.json(car_rental);

        // Send email notification
        // if (req.body.status === 'Approved' || req.body.status === 'Rejected') {
        //   sendMail(car_rental.client_email, `Car rental booking ${req.body.ststus}`, `Your car rental booking has been ${req.body.status.toLowerCase()}: ${JSON.stringify(car_rental)}`);
        // }

      }
    } catch (error) {
      console.error('Error updating booking:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete an asset by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const car_rental = await CarRental.findByPk(req.params.id);
  
      if (!car_rental) {
        res.status(404).send('Booking not found');
      } else {
        await car_rental.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
