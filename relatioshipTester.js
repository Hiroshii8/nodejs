const dbSequelize = require('./database/Sequelize/sequelize');
const pets = dbSequelize.pets;
const owner = dbSequelize.owners;
const Op = dbSequelize.Sequelize.Op;

owner.findAll({
    include: [pets],
    where: {
        [Op.or]: [
            {name: "Padmeswari"},
            {name: "Suryanto"}
        ]
    }
}).then(result => {
    console.log(JSON.stringify(result))
})
.catch(err => console.log(err.message))