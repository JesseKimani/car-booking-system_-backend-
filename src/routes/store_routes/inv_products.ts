import { Router, Request, Response } from 'express';
import InvProduct from '../../models/store/inv_product';

const router = Router();

// Create
router.post('/', async (req: Request, res: Response) => {
    try {
        const newInvProduct = await InvProduct.create({
            product_image: Buffer.from(req.body.product_image.split(',')[1], 'base64'),
            name: req.body.name,
            category: req.body.category,
            quantity: req.body.quantity,
            supplied_by: req.body.supplied_by,
            date_introduced: req.body.date_introduced,
        });
        res.status(201).json(newInvProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).send('Internal server error');
    }
});

// Read all
router.get('/', async (req: Request, res: Response) => {
    try {
        const inv_products = await InvProduct.findAll();

        const productsWithImages = inv_products.map(product => ({
            ...product.dataValues,
            product_image: product.product_image ? `data:image/jpeg;base64,${product.product_image.toString('base64')}` : null
        }));

        res.json(productsWithImages);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal server error');
    }
});

// Update
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const inv_product = await InvProduct.findByPk(req.params.id);

        if (!inv_product) {
            res.status(404).send('Product not found');
        } else {
            await inv_product.update({
                product_image: req.body.product_image ? Buffer.from(req.body.product_image.split(',')[1], 'base64') : inv_product.product_image,
                name: req.body.name || inv_product.name,
                category: req.body.category || inv_product.category,
                quantity: req.body.quantity || inv_product.quantity,
                supplied_by: req.body.supplied_by || inv_product.supplied_by,
                date_introduced: req.body.date_introduced || inv_product.date_introduced,
            });

            res.json(inv_product);
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Delete
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const inv_product = await InvProduct.findByPk(req.params.id);

        if (!inv_product) {
            res.status(404).send('Product not found');
        } else {
            await inv_product.destroy();
            res.status(204).send();
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
