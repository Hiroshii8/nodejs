// const db = require("../../../database/Sequelize");
//
// const tutorial = db.tutorials;
//
// const Op = db.Sequelize.Op;
//
// // Create and Save a new Tutorial
// exports.create = (req, res) => {
//   if (!req.body.title) {
//       return res.status(400).send({
//           message: "Content can not be empty!"
//       });
//       return;
//   }
//   // Create tutorial object
//   const tutorialObject = {
//       title: req.body.title,
//       description: req.body.description,
//       published: req.body.published ? true : false
//   }
//
//   tutorial.create(tutorialObject)
//     .then((data)=>{
//         return res.json(data);
//     })
//     .catch((err) => {
//         return res.status(500).json({
//             message: err.message || "Some error occurred while creating the Tutorial."
//         })
//     });
// };
//
// // Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
//     const title = req.query.title;
//     var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
//     tutorial.findAll({where: condition})
//     .then((data) => {
//         return res.json(data);
//     })
//     .catch((err) => {
//         return res.status(500).json({
//             message: err.message || "pokoknya ada error"
//         })
//     });
// };
//
// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;
//   tutorial.findByPk(id)
//     .then((data) => {
//       return res.send(data);
//     })
//     .catch(err => {
//       return res.status(500).send({
//         message: "Error retrieving Tutorial with id=" + id
//       });
//     });
// };
//
// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//     const id = req.params.id;
//
//     tutorial.update(req.body, {
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Tutorial was updated successfully."
//           });
//         } else {
//           res.send({
//             message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Tutorial with id=" + id
//         });
//       });
// };
//
// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;
//
//     tutorial.destroy({
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Tutorial was deleted successfully!"
//           });
//         } else {
//           res.send({
//             message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete Tutorial with id=" + id
//         });
//       });
// };
//
// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//     tutorial.destroy({
//         where: {}, // this is for all data
//         truncate: false
//       })
//         .then(nums => {
//           res.send({ message: `${nums} Tutorials were deleted successfully!` });
//         })
//         .catch(err => {
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while removing all tutorials."
//           });
//         });
// };
//
// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//     tutorial.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };