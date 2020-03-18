module.exports = (app, db) => {
    app.post('/owner', (req, res) => {
      const ownerData = {
        name: req.body.name,
        role: req.body.role
      };
      db.owners.create(ownerData)
          .then(newUser => {
            console.log(`New user ${newUser.name}, with id ${newUser.id} has been created.`);
            return res.json(newUser);
          })
          .catch((err) => {
            return res.status(500).json({
              error: err.message
            })
          })
    });

  app.get('/owner-condition', (req, res) => {
    let condition = {};
    switch (req.body) {
      case req.body.name:
        condition.name = req.body.name;
        break;
      default:
        condition.id = req.body.id;
    }
    db.owners.findOne(condition)
        .then(newUser => {
          console.log(`New user ${newUser.name}, with id ${newUser.id} has been created.`);
          return res.json(newUser);
        })
        .catch((err) => {
          return res.status(500).json({
            error: err.message
          })
        })
  });

  app.get('/findAllOwner', (req, res) => {
    db.owners.findAll({})
        .then(newUser => {
          console.log(`New user ${newUser.name}, with id ${newUser.id} has been created.`);
          return res.json(newUser);
        })
        .catch((err) => {
          return res.status(500).json({
            error: err.message
          })
        })
  });

  app.patch('/owner', (req, res) => {
    let newOwnerName = {
      name: req.body.name
    };
    let condition = {
      id: req.body.id
    };
    db.owners.update(newOwnerName, { where: condition })
        .then(updatedOwner => {
          console.log("SUccess update owner name !");
          return res.json(updatedOwner)
        })
        .catch(err => {
          return res.status(500).json({
            error: err.message
          })
        })
  });

    app.patch('/owner-role', (req, res) => {
        let newOwnerRole = {
            role: req.body.role
        };
        let condition = {
            id: req.body.id
        };
        db.owners.update(newOwnerRole, { where: condition })
            .then(updatedOwner => {
                console.log("SUccess update owner Role !");
                return res.json(updatedOwner)
            })
            .catch(err => {
                return res.status(500).json({
                    error: err.message
                })
            })
    });
  app.delete('/owner-condition', (req, res) => {
      let condition = {
          name: req.body.name
      };
      db.owners.destroy({
          where: condition
      })
          .then(deletedData => {
              return res.send(`Has the Owner been deleted? 1 means yes, 0 means no: ${deletedData}`)
          })
          .catch(err => {
              return res.status(500).send(err.message);
          })
  })
  app.delete('/owners', (req, res) => {
      db.owners.destroy({})
          .then(deletedData => {
              return res.send(`Has the Owners been deleted? 1 means yes, 0 means no: ${deletedData}`)
          })
          .catch(err => {
              return res.status(500).send(err.message);
          })
  });
  console.log("Owner Sequelize is Ready!");
};