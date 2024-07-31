import { Router, Request, Response } from 'express';
import AssetMake from '../../models/settings/asset_make';
const router = Router();

let assets_makes: AssetMake[] = [];


// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newAssetMake = await AssetMake.create({
            name: req.body.name,
            description: req.body.description,
           
        });

        res.status(201).json(newAssetMake);
    } catch (error) {
        console.error('Error adding asset make:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const assets_makes = await AssetMake.findAll();
        res.json(assets_makes);
    } catch (error) {
        console.error('Error fetching assets makes:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const asset_make = await AssetMake.findByPk(req.params.id);
  
      if (!asset_make) {
        res.status(404).send('Asset make not found');
      } else {
        res.json(asset_make);
      }
    } catch (error) {
      console.error('Error fetching asset make:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const asset_make = await AssetMake.findByPk(req.params.id);
  
      if (!asset_make) {
        res.status(404).send('Asset make not found');
      } else {
        await asset_make.update({
          name: req.body.asset_id || asset_make.name,
          description: req.body.description || asset_make.description,
        });
  
        res.json(asset_make);
      }
    } catch (error) {
      console.error('Error updating asset asset make:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const asset_make = await AssetMake.findByPk(req.params.id);
  
      if (!asset_make) {
        res.status(404).send('Asset make not found');
      } else {
        await asset_make.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting asset make:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
