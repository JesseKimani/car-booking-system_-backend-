import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class AssetService extends Model {
    public id!: number;
    public asset_id!: number;
    public area_office!: string
    public service_type!: string;
    public done_by!: string;
    public date_in!: Date;
    public date_out!: Date;
    public invoice_number!: string;
    public total_cost!: number;
    public mileage!: number;
    public description!: string;
}

AssetService.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        asset_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        area_office: {
            type: DataTypes.STRING
        },
        service_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        done_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_in: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date_out: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        invoice_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_cost: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        mileage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'AssetService',
    }
);

export default AssetService;