import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class Asset extends Model {
    public id!: number;
    public reg_no!: string;
    public make!: number;
    public model!: string;
    public year_of_manufacture!: number;
    public buying_price!: number;
    public date_bought!: Date;
    public region!: number;
    public chasis_number!: string;
    public current_mileage!: number;
    public logbook_name!: string;
    public is_active!: boolean;
}


Asset.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        reg_no: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        make: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year_of_manufacture: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        buying_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        date_bought: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        region: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        chasis_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        current_mileage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        logbook_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    
    {
        sequelize,
        modelName: 'Asset',
    }
);

export default Asset;
