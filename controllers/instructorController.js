// const jsend = require("../utils/jsend");
const instructorSchema = require("../models/instructors.js");

exports.create = (req, res) => {
    const newInstructor = new instructorModel(req.body);

    newInstructor.save((err, instructorId) => {
        if (err) {
            return res.status(500).send(
                jsend(500, {
                    message: "Some error occured and a new Instructor could not be created!",
                })
            );
        }

        res.status(201).send(
            jsend(201, {
                instructorId,
            })
        );
    });
};


exports.getById = (req, res) => {
  InstructorModel.findOne({ _id: req.params.instructorId })
    .then((instructor) => {
      if (!instructor) {
        return res.status(404).send(
          jsend(404, {
            message: "Instructor not found!",
          })
        );
      }

      res.status(200).send(
        jsend(200, {
          instructor,
        })
      );
    })
    .catch((err) => {
      res.status(404).send(
        jsend(404, {
          message: "Instructor not found!",
        })
      );
    });
};


instructorModel.findOneAndUpdate({ _id: req.params.instructorId }, req.body)
    .then((instructor) => {
      if (!instructor) {
        return res.status(404).send(
          jsend(404, {
            message: "instructor not found!",
          })
        );
      }

      res.status(200).send(
        jsend(200, {
          instructor,
        })
      );
    })
    .catch((err) => {
      res.status(404).send(
        jsend(404, {
          message: "instructor not found!",
        })
      );
    });