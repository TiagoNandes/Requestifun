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
    let newWorkshop = workshops.workshop({
    
    nameItem: req.body.nameItem,
    state:req.body.state,
    model:req.body.model,
    image:req.body.image,
    category:req.body.idTeacher,
    })
    newWorkshop.save((err)=> {
        if (err) {
            res.send(err);
        } else {
            res.send("Success");
        }
    })
}