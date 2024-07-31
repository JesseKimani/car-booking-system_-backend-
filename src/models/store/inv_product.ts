
import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class InvProduct extends Model {
    public id!: number;
    public product_image!: Buffer;
    public name!: string;
    public category!: string;
    public quantity!: number;
    public supplied_by!: number;
    public date_introduced!: Date;
}


InvProduct.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_image: {
            type: DataTypes.BLOB('long'),
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        supplied_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_introduced: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'InvProduct',
    }
);

export default InvProduct;

