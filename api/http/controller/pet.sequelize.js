module.exports = (app, db) => {
    app.post('/pets', (req, res) => {
        let newPetData = {
            name: req.body.name,
            owner_id: req.body.owner_id,
            type: req.body.type,
            created_at: Date.now()
        }
        db.pets.create(newPetData)
            .then(newPet => {
                console.log("Created pet success !");
                return res.json(newPet)
            })
            .catch(err => {
                console.log("Error : " + err);
                return res.status(500).send(err.message);
            })
    });
    app.get('/pets', (req, res) => {
        db.pets.findAll({})
            .then(result => {
                return res.json(result)
            })
            .catch(err => {
                console.log("Error : " + err);
                return res.status(500).send(err.message);
            })
    });

    app.delete('/pets', (req, resp) => {
        let condition = {
            owner_id: req.body.owner_id
        }
        db.pets.destroy({
            where: condition
        }).then(result => {
            console.log("isSuccess : " + result);
            return resp.send(result);
        })
    })
    console.log("Pet Sequelize is Ready!");
};