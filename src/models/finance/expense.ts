import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class Expense extends Model {
    public id!: number;
    public expense_type!: number;
    public asset_id!: number; 
    public amount!: number;
    public action_date!: Date;  
    public client_id!: number; 
    public company_id!: string;  
    public description!: string;
}

Expense.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        expense_type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        asset_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        action_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        company_id: {
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
        modelName: 'Expense',
    }
);

export default Expense;