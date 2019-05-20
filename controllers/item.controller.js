//require do modelo
const items = require('../models/item.model.js');

function readItems(req, res) {
    items.item.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

function readItemsId(req, res) {
    items.item.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

function saveItems(req, res) {
    let newItem = items.item({

        name: req.body.name,
        state: req.body.state,
        model: req.body.model,
        code: req.body.code,
        urlImage: req.body.urlImage,
        category: req.body.category,
        subCategory: req.body.subCategory,
    })
    newItem.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Success");
        }
    })
}

function updateItems(req, res) {
    items.item.findById(req.params.id, (err, item) => {
        if (err) res.send(err);
        else {
            for (let item in req.body) {
                if (item[item] || item[item] == null) {
                    item[item] = req.body[item];
                }
            }
            item.save((err) => {
                if (err) res.send(err);
                else res.send("Success")
            })
        }
    })

}

function deleteLogicItems(req, res) {
    items.item.findOneAndUpdate({ _id: req.params.id }, { state: "Not available" }, (err) => {
        if (err) res.send(err)
        else res.send("O item foi desativado.")
    })
}

function deleteFisicItems(req, res) {
    items.item.deleteMany({}, (err) => {
        if (err) res.send(err)
        else res.send("Todos os items foram apagados.")
    })
}

function deleteFisicItemsId(req, res) {
    items.item.findOneAndDelete({ _id: req.params.id }, (err) => {
        if (err) res.send(err)
        else res.send("O item foi apagado com sucesso.")
    })
}

function reactivateLogicItems(req, res) {
    items.item.findOneAndUpdate({ _id: req.params.id }, { state: "Available" }, (err) => {
        if (err) res.send(err)
        else res.send("O utilizador foi reativado.")
    })
}

module.exports = {
    readItems: readItems,
    readItemsId: readItemsId,
    saveItems: saveItems,
    updateItems: updateItems,
    deleteLogicItems: deleteLogicItems,
    deleteFisicItems: deleteFisicItems,
    deleteFisicItemsId: deleteFisicItemsId,
    reactivateLogicItems: reactivateLogicItems,
};