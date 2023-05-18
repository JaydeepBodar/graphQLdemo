module.exports=(DataTypes,sequelize)=>{
    const customers=sequelize.define("customers",{
        id:{type:DataTypes.INTEGER,primaryKey:true},
        customerName:{type:DataTypes.STRING},
        contactLastName:{type:DataTypes.STRING},
        contactFirstName:{type:DataTypes.STRING},
        phone:{type:DataTypes.STRING},
        addressLine1:{type:DataTypes.STRING},
        addressLine2:{type:DataTypes.STRING},
        city:{type:DataTypes.STRING},
        state:{type:DataTypes.STRING},
        postalCode:{type:DataTypes.STRING},
        country:{type:DataTypes.STRING},
        salesRepEmployeeNumber:{type:DataTypes.INTEGER},
    },{timestamps:false})
    return customers
}