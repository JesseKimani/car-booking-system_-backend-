
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class InvFuel extends Model {
    public id!: number;
    public fuel_type!: number;
    public quantity!: number;
    public amount_paid!: number;
    public fueled_at!: string;
    public fueling_date!: Date;
}


InvFuel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fuel_type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        amount_paid: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },     
        fueled_at: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fueling_date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'InvFuel',
    }
);

export default InvFuel;

