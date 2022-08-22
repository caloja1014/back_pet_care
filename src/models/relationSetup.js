const relationSetup = (sequelize) => {
    const { petowner, local, pet, product, sale, service, inventory,owner } = sequelize.models;
    petowner.hasMany(pet);
    pet.belongsTo(petowner);
    owner.hasMany(local);
    local.belongsTo(owner);
    local.hasMany(service);
    service.belongsTo(local);
    local.belongsToMany(product, { through: inventory, unique: false});
    product.belongsToMany(local, { through: inventory, unique: false});
    pet.hasMany(sale);
    sale.belongsTo(pet);
    service.hasMany(sale);
    sale.belongsTo(service);


}

module.exports = {relationSetup};