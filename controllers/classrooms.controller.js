//require do modelo
const classrooms = require('../models/classroom.model.js');

function readClassrooms(req, res) {
    classrooms.classroom.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

function readClassroomsId(req, res) {
    classrooms.classroom.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

function saveClassrooms(req, res) {
    let newClassroom = classrooms.classroom({
        name: req.body.name,
        state: req.body.state,
    })
    newClassroom.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Success");
        }
    })
}

function updateClassrooms(req, res) {
    classrooms.classroom.findById(req.params.id, (err, classroom) => {
        if (err) res.send(err);
        else {
            for (let item in req.body) {
                if (classroom[item] || classroom[item] == null) {
                    classroom[item] = req.body[item];
                }
            }
            classroom.save((err) => {
                if (err) res.send(err);
                else res.send("Success")
            })
        }
    })

}

function deleteLogicClassrooms(req, res) {
    classrooms.classroom.findOneAndUpdate({ _id: req.params.id }, { state: "Not available" }, (err) => {
        if (err) res.send(err)
        else res.send("A sala foi desativada.")
    })
}

function deleteFisicClassrooms(req, res) {
    classrooms.classroom.deleteMany({}, (err) => {
        if (err) res.send(err)
        else res.send("Todos as salas foram apagadas.")
    })
}

function deleteFisicClassroomsId(req, res) {
    classrooms.classroom.findOneAndDelete({ _id: req.params.id }, (err) => {
        if (err) res.send(err)
        else res.send("A sala foi apagada com sucesso.")
    })
}

function reactivateLogicClassrooms(req, res) {
    classrooms.classroom.findOneAndUpdate({ _id: req.params.id }, { state: "Available" }, (err) => {
        if (err) res.send(err)
        else res.send("A sala foi reativada.")
    })
}

module.exports = {
    readClassrooms: readClassrooms,
    readClassroomsId: readClassroomsId,
    saveClassrooms: saveClassrooms,
    updateClassrooms: updateClassrooms,
    deleteLogicClassrooms: deleteLogicClassrooms,
    deleteFisicClassrooms: deleteFisicClassrooms,
    deleteFisicClassroomsId: deleteFisicClassroomsId,
    reactivateLogicClassrooms: reactivateLogicClassrooms,
};