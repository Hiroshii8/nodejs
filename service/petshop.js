function PetShopService(resource) {

    // createOwner create new data for owner
    async function createOwner(name, role) {
        return await resource.createOwner(name, role)
            .catch((err) => {
                console.log(err);
                throw err;
            })
    }

    async function getOwners() {
        return await resource.findAllOwner({});
    }

    // getOwnerByID return information about owner by owner ID
    async function getOwnerByID (ownerID)  {
    return await resource.getOwnerInfoByID(ownerID)
        .catch((err) => {
            console.log(`PetShopService.getOwnerByID => ${err}`);
            throw err;
        })
    }

    // getPetsByOwnerID return pets information by ownerID
    async function getPetsByOwnerID (ownerID) {
    return await resource.getPetsByOwnerID(ownerID)
        .catch((err) => {
            console.log(`PetShopService.getPetsByOwnerID => ${err.message}`);
            throw err;
        })
    }

    return {
        createOwner,
        getOwners,
        getPetsByOwnerID,
        getOwnerByID
    }
}

// create new instance from PetShopService
function Init(resource) {
    return new PetShopService(resource);
}

module.exports.Init = (petShopResource) => Init(petShopResource);
