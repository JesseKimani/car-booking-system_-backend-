import { Router, Request, Response } from 'express';
import InvFuel from '../../models/store/inv_fuel';

const router = Router();

// Create
router.post('/', async (req: Request, res: Response) => {
    try {
        const newInvFuel = await InvFuel.create({
            fuel_type: req.body.fuel_type,
            quantity: req.body.quantity,
            amount_paid: req.body.amount_paid,
            fueled_at: req.body.fueled_at,
            fueling_date: req.body.fueling_date,
        });
        res.status(201).json(newInvFuel);
    } catch (error) {
        console.error('Error adding fuel record:', error);
        res.status(500).send('Internal server error');
    }
});

// Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const inv_fuels = await InvFuel.findAll();
        res.json(inv_fuels);
    } catch (error) {
        console.error('Error fetching fuel records:', error);
        res.status(500).send('Internal server error');
    }
});

// Update
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const inv_fuel = await InvFuel.findByPk(req.params.id);

        if (!inv_fuel) {
            res.status(404).send('Fuel record not found');
        } else {
            await inv_fuel.update({
                fuel_type: req.body.name || inv_fuel.fuel_type,
                quantity: req.body.quantity || inv_fuel.fuel_type,
                amount_paid: req.body.amount_paid || inv_fuel.fuel_type,
                fueled_at: req.body.fueled_at || inv_fuel.fuel_type,
                fueling_date: req.body.fueling_date || inv_fuel.fuel_type,
            });

            res.json(inv_fuel);
        }
    } catch (error) {
        console.error('Error updating fuel record:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Delete
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const inv_fuel = await InvFuel.findByPk(req.params.id);

        if (!inv_fuel) {
            res.status(404).send('Fuel record not found');
        } else {
            await inv_fuel.destroy();
            res.status(204).send();
        }
    } catch (error) {
        console.error('Error deleting fuel record:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
