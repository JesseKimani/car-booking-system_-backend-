import { Request, Response } from 'express';
import { Op } from 'sequelize';
import CarRental from '../../models/bookings/car_rental';
import Asset from '../../models/assets/asset';
import CustClient from '../../models/cust/cust_client';

export const getCarRentalReports = async (req: Request, res: Response): Promise<void> => {
  try {
    const { start_date, end_date, asset_ids, client_ids, page, pageSize } = req.query;

    if (!start_date || !end_date) {
      res.status(400).json({ error: "Start date and end date are required" });
      return;
    }

    const whereClause: any = {
      action_date: {
        [Op.between]: [new Date(start_date as string), new Date(end_date as string)],
      },
      ...(asset_ids && { asset_id: { [Op.in]: (asset_ids as string).split(',').map(id => parseInt(id)) } }),
      ...(client_ids && { client_id: { [Op.in]: (client_ids as string).split(',').map(id => parseInt(id)) } }),
    };

    const { rows, count } = await CarRental.findAndCountAll({
      where: whereClause,
      include: [
        { model: Asset, as: 'asset' },
        { model: CustClient, as: 'client' },
      ],
      offset: (parseInt(page as string) - 1) * parseInt(pageSize as string),
      limit: parseInt(pageSize as string),
    });

    const reports = rows.map(row => ({
      id: row.id,
      client_email: row.client_email,
      client_company_id: row.client_company_id,
      driver_name: row.driver_name,
      from_address: row.from_address,
      to_address: row.to_address,
      start_date: row.start_date,
      end_date: row.end_date,
      amount: row.amount,
      description: row.description,
      action_date: row.action_date,
    }));

    res.json({ rows: reports, count });
  } catch (error) {
    console.error("Error fetching car rental reports:", error);
    // res.status(500).json({ error: "Internal server error", details: error.message });
  }
};
