const relationSetup = (sequelize) => {
    const { owner, local, pet, product, sale, service } = sequelize.models;
    owner.hasMany(pet);
    pet.belongsTo(owner);
    local.hasMany(service);
    service.belongsTo(local);
    local.hasMany(product);
    product.belongsTo(local);
    pet.belongsToMany(service, { through: sale });
    service.belongsToMany(pet, { through: sale });

}

module.exports = {relationSetup};