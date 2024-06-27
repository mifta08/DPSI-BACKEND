const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const OrderDetail = require('./orderDetail');
const Product = sequelize.define('Product', {
    productID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    supplierID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoryID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: false
});
// Definisikan relasi antara Product dan Category
Product.hasMany(OrderDetail, { foreignKey: 'productID' });
OrderDetail.belongsTo(Product, { foreignKey: 'productID' });

module.exports = Product;
