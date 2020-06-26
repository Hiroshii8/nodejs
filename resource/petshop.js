const sequelizeHelper = require('../lib/common/sequelizeHelper');

function PetShopResource(redis, sequelize, mongo) {

    function createOwner(name, role) {
        const ownerData = {
            name: name,
            role: role
        };
        return sequelize.owners.create(ownerData);
    }

    function getOwnerByCondition(ownerData) {
        let condition = {};

        if (ownerData === ownerData.name) {
            condition.name = ownerData.name;
        } else {
            condition.id = ownerData.id;
        }

        return sequelize.owners.findOne(condition);
    }

    function findAllOwner(...object){
        const condition = object == null ? {} : object;
        return sequelize.owners.findAll(condition)
            .then((result) => sequelizeHelper.mapValues('id', 'name', 'role')(result));
    }

    function updateOwner(ownerData) {
        let updateAttribute = {};
        for (const [key, value] of Object.entries(ownerData)) {
            if (key === 'name' || key === 'role'){
                updateAttribute.key = value;
            }
        }
        let condition = {
            id: ownerData.id
        };
        return sequelize.owners.update(updateAttribute, { where: condition });
    }

    function deleteOwner(ownerID) {
        return sequelize.owners.destroy({})
            .then(deletedData => {
                return deletedData == 1 ? true : false;
            });
    }

    function getOwnerInfoByID(ownerID) {
        return sequelize.owners.findByPk(ownerID)
            .then(User => {
                console.log(`Result => ${User}`);
                return User;
            })
            .catch((err) => {
                console.log(`PetShopService.getOwnerInfo => ${err.message}`);
                throw new Error(`PetShopService.getOwnerInfo => ${err.message}`)
            });
    };

    function getPetsByOwnerID(ownerID) {
        const condition = {
            owner_id: ownerID
        };

        return sequelize.pets.findAll({where: condition})
            .then((res) => {
                console.log(`Result => ${res}`);
                return res;
            })
            .catch((err) => {
                console.log(`PetShopResource.getPetsByOwnerID => ${err.message}`);
                throw new Error(`PetShopResource.getPetsByOwnerID => ${err.message}`);
            })
    }
    return {
        //Owner
        createOwner,
        getOwnerByCondition,
        findAllOwner,
        updateOwner,
        deleteOwner,

        // Pets
        getPetsByOwnerID,
        getOwnerInfoByID
    }
}

module.exports.Init = (redis, sequelize, mongo) => PetShopResource(redis, sequelize, mongo);

