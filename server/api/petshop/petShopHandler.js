function PetShopHandler(PetShopService) {

    async function getOwnerAndPetsData(req, res) {
        const { owner_id } = req.body;
        console.log(owner_id)
        let ownerData = await PetShopService.getOwnerByID(owner_id);
        if (!ownerData || ownerData==null){
            return res.json({
                data: null,
                message: "No data found"
            });
        }
        let petsData = await PetShopService.getPetsByOwnerID(owner_id);
        const combineData = {
            ownerData,
            petsData
        }
        return res.json(combineData);
    }

    async function PING(req, res) {
        return res.json("I can reach petShopHandler");
    }

    return {
        getOwnerAndPetsData,
        PING
    }
}

module.exports.Init = (PetShopService) => PetShopHandler(PetShopService);
