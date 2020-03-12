const Service = require('./service/service');

module.exports = {
    redisGet: async (req, res) => {
        console.log("GET - REDIS");
        let result = await Service.redis.getValueByKey(req.body.key);
        return res.send(result);
    },
    redisIncr: async (req, res) => {
        console.log("INCR - REDIS");
        let result = await Service.redis.increment(req.body.key);
        return res.send(result);
    },
    redisSet: async (req, res) => {
        console.log("SET - REDIS");
        let result = await Service.redis.setValue(req.body.key, req.body.value);
        return res.send(result);
    },
    mongoFindBiodata: async (req, res) => {
        //return res.send(await Model.Biodata.find(req.body));
    },
    mongoCreateBiodata: (req, res) => {
        // let dataBiodata = new Model.Biodata({
        //     name: req.body.name,
        //     age: req.body.age,
        //     bio: req.body.bio,
        //     date: Date.now()
        // });
        // dataBiodata.save(function (err) {
        //     if (err) {
        //         return res.status(400).send(err);
        //     }
        // });
        // return res.send(result);
    },
    findAllProduct:  async (req, res) => {
        // let result
        // try {
        //     //await sequelize.authenticate()
        //     result = await modelSequelize.Product.findAll();
        //     console.log('Success')
        // }
        // catch (err) {
        //     result = {};
        //     console.error("Error : ", err);
        // }
        // return res.send(result);
    },
    createProduct: async (req, res) => {
        // let newProducts = req.body.newProducts;
        // let newCategory = req.body.newCategory;
        // try {
        //     let result = await createCatWithProds(newCategory, newProducts);
        //     return res.send(result);
        // } catch (e) {
        //     return res.status(400).send(e)
        // }
    }
}


// let createCatWithProds = async(catObj, prodArr) => {
//     let catId = await modelSequelize.Category.create({
//         name: catObj.name,
//         description: catObj.description
//     }).then(cat => cat.id).catch(err => console.log(err));
//     await prodArr.map(pr => {
//         return modelSequelize.Product.create({
//             sku: pr.sku,
//             name: pr.name,
//             pr: pr.price,
//             CategoryId: catId
//         }).catch(err => console.log(err))
//     });
//     return;
// }
