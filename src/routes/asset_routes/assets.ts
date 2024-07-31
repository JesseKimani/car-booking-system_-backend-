import { Router, Request, Response } from 'express';
import Asset from '../../models/assets/asset';

const router = Router();


let assets: Asset[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newAsset = await Asset.create({
            reg_no: req.body.reg_no,
            make: req.body.make,
            model: req.body.model,
            year_of_manufacture: req.body.year_of_manufacture,
            buying_price: req.body.buying_price,
            date_bought: req.body.date_bought,
            region: req.body.region,
            chasis_number: req.body.chasis_number,
            current_mileage: req.body.current_mileage,
            logbook_name: req.body.logbook_name,
            is_active: req.body.is_active,

        });

        res.status(201).json(newAsset);
    } catch (error) {
        console.error('Error adding asset:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all assets
router.get('/', async (req: Request, res: Response) => {
    try {
        const assets = await Asset.findAll();
        res.json(assets);
    } catch (error) {
        console.error('Error fetching assets:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single asset
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const asset = await Asset.findByPk(req.params.id);
  
      if (!asset) {
        res.status(404).send('Asset not found');
      } else {
        res.json(asset);
      }
    } catch (error) {
      console.error('Error fetching asset:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update an asset by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const asset = await Asset.findByPk(req.params.id);
  
      if (!asset) {
        res.status(404).send('Asset not found');
      } else {
        await asset.update({
          reg_no: req.body.reg_no || asset.reg_no,
          make: req.body.make || asset.make,
          model: req.body.model || asset.model,
          year_of_manufacture: req.body.year_of_manufacture || asset.year_of_manufacture,
          buying_price: req.body.buying_price || asset.buying_price,
          date_bought: req.body.date_bought || asset.date_bought,
          region: req.body.region || asset.region,
          chasis_number: req.body.chasis_number || asset.chasis_number,
          current_mileage: req.body.current_mileage || asset.current_mileage,
          logbook_name: req.body.logbook_name || asset.logbook_name,
          is_active: req.body.is_active || asset.is_active,
          
        });
  
        res.json(asset);
      }
    } catch (error) {
      console.error('Error updating asset:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete an asset by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const asset = await Asset.findByPk(req.params.id);
  
      if (!asset) {
        res.status(404).send('Asset not found');
      } else {
        await asset.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting asset:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
