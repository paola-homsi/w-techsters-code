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