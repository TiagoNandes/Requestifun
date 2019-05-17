//require do modelo
const items = require('../models/item.model.js');

function readItems(req, res) {
    items.item.find({}, (err, result)=> {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

function readItemsId(req, res) {
    items.item.findById(req.params.id, (err, result)=> {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

function saveItemshops(req,res){
    let newItem = items.item({
    
    name: req.body.name,
    state:req.body.state,
    model:req.body.model,
    urlImage:req.body.urlImage,
    category:req.body.Category,
    subCategory:req.body.subCategory,
    })
    newItem.save((err)=> {
        if (err) {
            res.send(err);
        } else {
            res.send("Success");
        }
    })
}

module.exports = {
    readItems: readItems,
    readItemsId: readItemsId,
    saveItems: saveItems

};