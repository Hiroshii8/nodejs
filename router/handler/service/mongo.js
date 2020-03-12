const Model = require('../../../database/mongoDB/model/model')

class Mongo {
    constructor(mongoClient) {
        this.mongoClient = mongoClient;
    }
    async FindBiodata (Name, Age, Bio, Date) {
        let dataBiodata = new Model.Biodata({
            name: Name,
            age: Age,
            bio: Bio,
            date: Date
        });
        try {
            dataBiodata.save();
        } catch (err) {
            return ""
        }
        dataBiodata.save(function (err) {
            if (err) {

            }
        });
    }
}
