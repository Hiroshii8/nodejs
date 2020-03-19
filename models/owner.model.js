'use strict'
module.exports = (sequelize, DataTypes) => {
    const Owner = sequelize.define('Owner', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        role: {
            type: DataTypes.ENUM,
            values: ['user', 'admin', 'disabled']
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        paranoid: true, // deleted row will not return in future query
        underscored: true,
        tableName: "Owner"
    });
    // hook
    // Owner.beforeDestroy()
    return Owner;
}