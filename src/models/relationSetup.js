const relationSetup = (sequelize) => {
    const { petowner, local, pet, product, sale, service, inventory,owner } = sequelize.models;
    petowner.hasMany(pet);
    pet.belongsTo(petowner);
    owner.hasMany(local);
    local.belongsTo(owner);
    local.hasMany(service);
    service.belongsTo(local);
    local.belongsToMany(product, { through: inventory});
    product.belongsToMany(local, { through: inventory});
    pet.belongsToMany(service, { through: sale });
    service.belongsToMany(pet, { through: sale });

}

module.exports = {relationSetup};