const models = require('./models');
const User = models.User;
const Company = models.Company;
const WorkingDays = models.WorkingDay;

Company.create({
    name: "My super company"
}).then((newCompany) => {
    console.log(newCompany.get());
}).catch((err) => {
    console.log("Error while company creation : ", err)
})


// User.bulkCreate([
//     {email: 'john-doe@domain.com', firstName: 'John',  lastName: 'DOE', companyId: 1},
//     {email: 'log_w@domain.com', firstName: 'Logan',  lastName: 'WOLVERINE', companyId: 1},
//     {email: 'john-connor@domain.com', firstName: 'John',  lastName: 'CONNOR', companyId: 1}
// ]).then((newUsers) => {
//     console.log(newUsers)
// }).catch((err) => {
//     console.log("Error while users creation : ", err)
// })
//

// 1:1
// Get the company linkedi to a given user

// User.findOne({
//     where: {email: 'john-connor@domain.com'}, include: 'company'
// })
// .then((findedUser) => {
//     // Get the user with company datas included
//     console.log(findedUser)
//     // get the company record only
// })
// .catch((err) => {
//     console.log("Error while find user : ", err)
// })
