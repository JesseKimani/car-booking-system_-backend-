import { DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

class Email extends Model {
    public id!: number;
    public sent_by!: number;
    public from_name!: string;
    public from_email!: string;  
    public to_name!: string;
    public subject!: string; 
    public message!: string;
    public date_queued!: Date; 
    public date_created!: Date;
    
}


Email.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        sent_by: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        from_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        from_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        to_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_queued: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
        },
       
    },
    {
        sequelize,
        modelName: 'Email',
    }
);

export default Email;
