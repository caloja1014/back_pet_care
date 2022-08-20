const relationSetup = (sequelize) => {
    const { Owner, Local, Pet, Product, Sale, Service } = sequelize.models;
    Owner.hasMany(Pet);
    Pet.belongTo(Owner);
    Local.hasMany(Service);
    Service.belongTo(Local);
    Local.hasMany(Product);
    Product.belongTo(Local);
    Pet.belongsToMany(Service, { through: Sale });
    Service.belongsToMany(Pet, { through: Sale });

}