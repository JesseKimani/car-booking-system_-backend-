import { Router, Request, Response } from 'express';
import AssetService from '../../models/assets/asset_service';

const router = Router();

let assets_services: AssetService[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newAssetService = await AssetService.create({
            asset_id: req.body.asset_id,
            area_office: req.body.area_office,
            service_type: req.body.service_type,
            done_by: req.body.done_by,
            date_in: req.body.date_in,
            date_out: req.body.date_out,
            invoice_number: req.body.invoice_number,
            total_cost: req.body.total_cost,
            mileage: req.body.mileage,
            description: req.body.description
        });

        res.status(201).json(newAssetService);
    } catch (error) {
        console.error('Error adding asset service:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all assets
router.get('/', async (req: Request, res: Response) => {
    try {
        const assets_services = await AssetService.findAll();
        res.json(assets_services);
    } catch (error) {
        console.error('Error fetching assets services:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single asset
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const asset_service = await AssetService.findByPk(req.params.id);
  
      if (!asset_service) {
        res.status(404).send('Asset Service not found');
      } else {
        res.json(asset_service);
      }
    } catch (error) {
      console.error('Error fetching asset service:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update an asset by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const asset_service = await AssetService.findByPk(req.params.id);
  
      if (!asset_service) {
        res.status(404).send('Asset service not found');
      } else {
        await asset_service.update({
          asset_id: req.body.asset_id || asset_service.asset_id,
          area_office: req.body.area_office || asset_service.area_office,
          service_type: req.body.service_type || asset_service.service_type,
          done_by: req.body.done_by || asset_service.done_by,
          date_in: req.body.date_in || asset_service.date_in,
          date_out: req.body.date_out || asset_service.date_out,
          invoice_number: req.body.invoice_number || asset_service.invoice_number,
          total_cost: req.body.total_cost || asset_service.total_cost,
          mileage: req.body.mileage || asset_service.mileage,
          description: req.body.description || asset_service.description
        });
  
        res.json(asset_service);
      }
    } catch (error) {
      console.error('Error updating asset service:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete an asset by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const asset_service = await AssetService.findByPk(req.params.id);
  
      if (!asset_service) {
        res.status(404).send('Asset service not found');
      } else {
        await asset_service.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting asset service:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
