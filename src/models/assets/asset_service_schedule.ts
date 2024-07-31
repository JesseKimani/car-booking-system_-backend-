import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class AssetServiceSchedule extends Model {
    public id!: number;
    public status!: string;
    public asset_id!: number;
    public area_office!: string
    public service_type!: string;
    public expected_service_date!: Date;
    public scheduled_by!: string;
    public description!: string;
}

AssetServiceSchedule.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
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
        expected_service_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        scheduled_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'AssetServiceSchedule',
    }
);

export default AssetServiceSchedule;
