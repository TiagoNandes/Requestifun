//require do modelo
const requisitions = require('../models/requisition.model.js');

function readRequisitions(req, res) {
    requisitions.requisition.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

function readRequisitionsId(req, res) {
    requisitions.requisition.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

function saveRequisitions(req, res) {
    let newRequisition = requisitions.requisition({

        requisitionDate: req.body.requisitionDate,
        returnDate: req.body.returnDate,
        itemCode: req.body.itemCode,
        amount: req.body.amount,
        info: req.body.info,
    })
    newRequisition.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Success");
        }
    })
}

function updateRequisitions(req, res) {
    requisitions.requisition.findById(req.params.id, (err, requisition) => {
        if (err) res.send(err);
        else {
            for (let item in req.body) {
                if (requisition[item] || requisition[item] == null) {
                    requisition[item] = req.body[item];
                }
            }
            requisition.save((err) => {
                if (err) res.send(err);
                else res.send("Success")
            })
        }
    })

}

function deleteLogicRequisitions(req, res) {
    requisitions.requisition.findOneAndUpdate({ _id: req.params.id }, { state: "canceled" }, (err) => {
        if (err) res.send(err)
        else res.send("A requisição foi cancelada.")
    })
}

function deleteFisicRequisitions(req, res) {
    requisitions.requisition.deleteMany({}, (err) => {
        if (err) res.send(err)
        else res.send("Todos as requisições foram apagadas.")
    })
}

function deleteFisicRequisitionsId(req, res) {
    requisitions.requisition.findOneAndDelete({ _id: req.params.id }, (err) => {
        if (err) res.send(err)
        else res.send("A requisição foi apagada com sucesso.")
    })
}


module.exports = {
    readRequisitions: readRequisitions,
    readRequisitionsId: readRequisitionsId,
    saveRequisitions: saveRequisitions,
    updateRequisitions: updateRequisitions,
    deleteLogicRequisitions: deleteLogicRequisitions,
    deleteFisicRequisitions: deleteFisicRequisitions,
    deleteFisicRequisitionsId: deleteFisicRequisitionsId,
};