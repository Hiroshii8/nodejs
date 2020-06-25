
function PetShopResource(redis, sequelize, mongo) {

    async function createOwner(name, role) {
        const ownerData = {
            name: name,
            role: role
        };
        return sequelize.owners.create(ownerData)
            .then(newUser => {
                console.log(`New user ${newUser.name}, with id ${newUser.id} has been created.`);
                return res.json(newUser);
            })
            .catch((err) => {
                return res.status(500).json({
                    error: err.message
                })
            });
    }

    async function getOwnerByCondition(ownerData) {
        let condition = {};

        if (ownerData === ownerData.name) {
            condition.name = ownerData.name;
        } else {
            condition.id = ownerData.id;
        }

        return await sequelize.owners.findOne(condition)
            .then(newUser => {
                console.log(`New user ${newUser.name}, with id ${newUser.id} has been created.`);
                return newUser;
            })
            .catch((err) => {
                throw new Error(`resource.getOwnerByCondition : ${err}`);
            });
    }

    async function findAllOwner(...object){
        const condition = object == null ? {} : object;
        return await sequelize.owners.findAlll(condition)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                throw new Error(`resource.findAllOwner : ${err}`);
            })
    }

    async function updateOwner(ownerData) {

        let updateAttribute = {};
        for (const [key, value] of Object.entries(ownerData)) {
            if (key === 'name' || key === 'role'){
                updateAttribute.key = value;
            }
        }
        let condition = {
            id: ownerData.id
        };
        return await sequelize.owners.update(updateAttribute, { where: condition })
            .then(updatedOwner => {
                return updatedOwner;
            })
            .catch(err => {
                throw new Error(`resource.updateOwner : ${err}`);
            })
    }

    async function deleteOwner(ownerID) {
        return await sequelize.owners.destroy({})
            .then(deletedData => {
                return deletedData == 1 ? true : false;
            })
            .catch(err => {
                throw new Error(`resource.deleteOwner : ${err}`);
            })
    }

    async function getOwnerInfoByID(ownerID) {
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

    async function getPetsByOwnerID(ownerID) {
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

