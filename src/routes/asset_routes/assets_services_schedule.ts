import { Router, Request, Response } from 'express';
import AssetServiceSchedule from '../../models/assets/asset_service_schedule';

const router = Router();

let assets_services_schedule: AssetServiceSchedule[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newAssetServiceSchedule = await AssetServiceSchedule.create({
            status: req.body.status,
            asset_id: req.body.asset_id,
            area_office: req.body.area_office,
            service_type: req.body.service_type,
            expected_service_date: req.body.expected_service_date,
            scheduled_by: req.body.scheduled_by,
            description: req.body.description
        });

        res.status(201).json(newAssetServiceSchedule);
    } catch (error) {
        console.error('Error adding asset service schedule:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all assets
router.get('/', async (req: Request, res: Response) => {
    try {
        const assets_services_schedule = await AssetServiceSchedule.findAll();
        res.json(assets_services_schedule);
    } catch (error) {
        console.error('Error fetching assets services schedule:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single asset
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const asset_service_schedule = await AssetServiceSchedule.findByPk(req.params.id);
  
      if (!asset_service_schedule) {
        res.status(404).send('Asset Service Schedule not found');
      } else {
        res.json(asset_service_schedule);
      }
    } catch (error) {
      console.error('Error fetching asset service schedule:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update an asset by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const asset_service_schedule = await AssetServiceSchedule.findByPk(req.params.id);
  
      if (!asset_service_schedule) {
        res.status(404).send('Asset service schedule not found');
      } else {
        await asset_service_schedule.update({
          status: req.body.status || asset_service_schedule.status,
          asset_id: req.body.asset_id || asset_service_schedule.asset_id,
          area_office: req.body.area_office || asset_service_schedule.area_office,
          service_type: req.body.service_type || asset_service_schedule.service_type,
          expected_service_date: req.body.expected_service_date || asset_service_schedule.expected_service_date,
          scheduled_by: req.body.scheduled_by || asset_service_schedule.scheduled_by,
          description: req.body.description || asset_service_schedule.description
        });
  
        res.json(asset_service_schedule);
      }
    } catch (error) {
      console.error('Error updating asset service schedule:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete an asset by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const asset_service_schedule = await AssetServiceSchedule.findByPk(req.params.id);
  
      if (!asset_service_schedule) {
        res.status(404).send('Asset service schedule not found');
      } else {
        await asset_service_schedule.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting asset service schedule:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
