function PetShopService(resource) {

    // getOwnerByID return information about owner by owner ID
    async function getOwnerByID (ownerID)  {
    return await resource.getOwnerInfoByID(ownerID)
        .catch((err) => {
            console.log(`PetShopService.getOwnerByID => ${err}`);
            return null;
            // throw new Error(`PetShopService.getOwnerByID => ${err}`);
        })
    };

    // getPetsByOwnerID return pets information by ownerID
    async function getPetsByOwnerID (ownerID) {
    return await resource.getPetsByOwnerID(ownerID)
        .catch((err) => {
            console.log(`PetShopService.getPetsByOwnerID => ${err.message}`);
           return [];
            // throw new Error(`PetShopService.getPetsByOwnerID => ${err.message}`);
        })
    };

    return {
        getPetsByOwnerID,
        getOwnerByID
    }
}

// create new instance from PetShopService
function Init(resource) {
    return new PetShopService(resource);
}

module.exports.Init = (petShopResource) => Init(petShopResource);
