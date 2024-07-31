import express , {Request , Response} from 'express';
import authRoutes from './routes/auth_routes/auth';
import dotenv from 'dotenv';

// Assets
import assetRoutes from './routes/asset_routes/assets';
import assetServiceRoutes from './routes/asset_routes/assets_services';
import assetServiceScheduleRoutes from './routes/asset_routes/assets_services_schedule'

// Customers
import custClientRoutes from './routes/cust_routes/cust_clients';
import custCompanyRoutes from './routes/cust_routes/cust_companies';

// Suppliers
import supplierVendorRoutes from './routes/supplier_routes/supplier_vendors';

// Store
import invProductRoutes from './routes/store_routes/inv_products'
import invFuelRoutes from './routes/store_routes/inv_fuels'

// Bookings
import carRentalRoutes from './routes/booking_routes/car_rentals'
import distributionRoutes from './routes/booking_routes/distributions'
import leaseRoutes from './routes/booking_routes/leases'
import transferRoutes from './routes/booking_routes/transfers'

// Finance
import revenueRoutes from './routes/finance_routes/revenues'
import expenseRoutes from './routes/finance_routes/expenses'

// Reports
import { getCarRentalReports } from './routes/reports/car_rental_reports';

// Settings
import assetMakeRoutes from './routes/settings_routes/asset_makes';
import areaOfficeRoutes from './routes/settings_routes/area_offices'
import assetGroupRoutes from './routes/settings_routes/asset_groups';
import departmentRoutes from './routes/settings_routes/departments';
import driverRoutes from './routes/settings_routes/drivers'
import empPositionRoutes from './routes/settings_routes/emp_positions'
import expenseTypeRoutes from './routes/settings_routes/expense_types'
import fuelTypeRoutes from './routes/settings_routes/fuel_types'
import paymentMethodRoutes from './routes/settings_routes/payment_methods'
import supplierCategoryRoutes from './routes/settings_routes/supplier_categories'

import cors from 'cors';

const app = express();
const port = process.env.PORT;
const host = process.env.DB_HOST;

app.use(cors());
app.use(express.json()); // Place this middleware before your routes


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


app.use('/auth', authRoutes)

app.use('/assets', assetRoutes);
app.use('/assets_services', assetServiceRoutes);
app.use('/assets_services_schedule', assetServiceScheduleRoutes)

app.use('/cust_clients', custClientRoutes);
app.use('/cust_companies', custCompanyRoutes);

app.use('/supplier_vendors', supplierVendorRoutes);

app.use('/inv_products', invProductRoutes);
app.use('/inv_fuels', invFuelRoutes)

app.use('/car_rentals', carRentalRoutes)
app.use('/distributions', distributionRoutes)
app.use('/leases', leaseRoutes)
app.use('/transfers', transferRoutes)

app.use('/revenues', revenueRoutes)
app.use('/expenses', expenseRoutes)

app.use('/car_rental_reports', getCarRentalReports)

app.use('/assets_makes', assetMakeRoutes);
app.use('/asset_groups', assetGroupRoutes);
app.use('/area_offices', areaOfficeRoutes);
app.use('/departments', departmentRoutes);
app.use('/drivers', driverRoutes);
app.use('/positions', empPositionRoutes);
app.use('/expense_types', expenseTypeRoutes);
app.use('/fuel_types', fuelTypeRoutes);
app.use('/payment_methods', paymentMethodRoutes);
app.use('/supplier_categories', supplierCategoryRoutes);

app.get ('/', (req: Request, res: Response) => {
    res.send('API active!');
});

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);

});
