const db = require('../database/database')
db.Database.mongoDB.Promise = global.Promise;

const Model = require('../database/mongoDB/model/model')
// Op is required for make operation in queries
const { Sequelize, Op } = require('sequelize');
const sequelize = new Sequelize('postgres://mixer:mixer@localhost:5432/practiceSequelize');
const modelSequelize = require('../models');

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

module.exports = (app) => {

    app.get('/redis-get', async (req, res) => {
        console.log("GET - REDIS")
        return res.send(await db.Database.redis.get(req.query.key));
    })
    app.post('/redis-incr', async (req, res) => {
        console.log("INCR - REDIS")
        return res.send(await db.Database.redis.incr(req.body.key));
    })
    app.post('/redis-set', async (req, res) => {
        console.log("SET - REDIS")
        return res.send(await db.Database.redis.set(req.body.key, req.body.value));
    })

    app.get('/mongoDB', async (req, res) => {
        return res.send(await Model.find({}));
    })
    app.post('/mongoDB', (req, res) => {
        let dataBiodata = new Model({
            name: req.body.name,
            age: req.body.age,
            bio: req.body.bio,
            date: Date.now()
        })
        dataBiodata.save(function (err, result) {
            if (err) {
                return res.status(400).send(err)
            }
            return res.send(result)
        })
    })
    app.get('/psql-seq', async (req, res) => {
        try {
            //await sequelize.authenticate()
            modelSequelize.Product.findAll().then(pr => console.log(pr));
            console.log('Success')
        }
        catch (err) {
            console.error("Error : ", err);
        }
        return res.send("hai");
    })

    app.post('/psql-seq', async (req, res) => {
        // let newProducts = req.body.newProducts;
        // let newCategory = req.body.newCategory;
        // try {
        //     let result = await createCatWithProds(newCategory, newProducts);
        //     return res.send(result);
        // } catch (e) {
        //     return res.status(400).send(e)
        // }
    })


}
