import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class AssetMake extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
}


AssetMake.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
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
        modelName: 'AssetMake',
    }
);

export default AssetMake;
