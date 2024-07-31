import { Router, Request, Response } from 'express';
import AssetGroup from '../../models/settings/asset_group';

const router = Router();

let asset_groups: AssetGroup[] = [];

// CRUD Implementation start

// Create
router.post('/', async(req: Request, res: Response) => {
    try{
        const newAssetGroup = await AssetGroup.create({
            name: req.body.name,
            description: req.body.description,
        });

        res.status(201).json(newAssetGroup);
    } catch (error) {
        console.error('Error adding asset group:', error);
        res.status(500).send('Internal server error');
    }
});

//  Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const asset_groups = await AssetGroup.findAll();
        res.json(asset_groups);
    } catch (error) {
        console.error('Error fetching asset groups:', error);
        res.status(500).send('Internal server error');
    }
});


// Read a single row
router.get('/:id', async (req: Request, res: Response) => {
    try {
      const asset_group = await AssetGroup.findByPk(req.params.id);
  
      if (!asset_group) {
        res.status(404).send('Asset group not found');
      } else {
        res.json(asset_group);
      }
    } catch (error) {
      console.error('Error fetching group:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a row by ID
  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const asset_group = await AssetGroup.findByPk(req.params.id);
  
      if (!asset_group) {
        res.status(404).send('Asset group not found');
      } else {
        await asset_group.update({
            name: req.body.name || asset_group.name,
            description: req.body.address || asset_group.description,
        });
  
        res.json(asset_group);
      }
    } catch (error) {
      console.error('Error updating group:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a row by ID
  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const asset_group = await AssetGroup.findByPk(req.params.id);
  
      if (!asset_group) {
        res.status(404).send('Asset group not found');
      } else {
        await asset_group.destroy();
        res.status(204).send();
      }
    } catch (error) {
      console.error('Error deleting asset group:', error);
      res.status(500).send('Internal Server Error');
    }
  });


// CRUD Implementation end

export default router;
