const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Product = require('./product');
const Category = sequelize.define('Category', {
    categoryID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});

Category.hasMany(Product, { foreignKey: 'categoryID' });
Product.belongsTo(Category, { foreignKey: 'categoryID' });

module.exports = Category;