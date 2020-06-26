const peopleService = require('../helper/service/init_petshop_service').petShopService;

require('mocha');
const chai = require('chai');

chai.should();

describe('PetShop Service', () => {
    const test = {
        name: "A1",
        role: "user"
    };
    it('Should return new owner with user role', async () => {
        const createOwner = await peopleService.createOwner(test.name, test.role);
        const result = createOwner.toJSON();
        chai.expect(result).to.be.a('object');
        chai.expect(result).to.have.property('name');
        chai.expect(result).to.have.property('role');
        chai.expect(result.name).to.be.equal(test.name);
        chai.expect(result.role).to.be.equal(test.role);
    });

    it('Should return new owner data', async () => {
       const getOwner = await peopleService.getOwners();
       chai.expect(getOwner).to.be.an('array');
    });
});
