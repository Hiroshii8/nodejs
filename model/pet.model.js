'use strict'
module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('pet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            required: true,
        },
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM,
            values: ['dog', 'cat', 'minx']
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        paranoid: true,
        underscored: true
    });
    return Pet;
}