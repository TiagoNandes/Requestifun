//require do modelo
const users = require('../models/user.model.js');
const bcrypt = require('bcrypt');

function readUsers(req, res) {
    users.user.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

function readUsersId(req, res) {
    users.user.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}


function saveUsers(req, res) {
    console.log("entrei")
    console.log(req.body)
    let newUser = users.user({

        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, 10, ((err, hash) => {
            if (err) res.send(err)
            else return hash
        })),
        email: req.body.email.toLowerCase(),
        type: req.body.type,
        address: req.body.address

    })

    console.log(newUser)
    newUser.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Success");
        }
    })
}

function updateUsers(req, res) {
    users.user.findById(req.params.id, (err, user) => {
        if (err) res.send(err);
        else {
            for (let item in req.body) {
                console.log(item);
                if (user[item] || user[item] == null) {
                    if (item == "password") {
                        user[item] = req.body[item];
                    }
                    else if (item == "status") {
                        console.log("entri aqui")
                        if (req.body[item] == 'false') {
                            user[item] = false;
                        }
                        else if (req.body[item] == 'true') {
                            user[item] = true;
                        }
                    }
                    else {
                        user[item] = req.body[item];
                        if (item == "status") {
                            user[item] == true;
                            console.log("useritem true: ", user[item])
                        }
                        else if (req.body[item] == 'false') {
                            user[item] == false;
                            console.log("useritem false: ", user[item])
                        }
                        console.log("entri no else")
                    }
                }
            }
        }
        console.log(req.body)

        user.save((err) => {
            if (err) res.send(err);
            else res.send("Success")
        })
    })
}

function deleteFisicUsers(req, res) {
    users.user.deleteMany({}, (err) => {
        if (err) res.send(err)
        else res.send("Todos os utilizadores foram apagados.")
    })
}

function deleteFisicUsersId(req, res) {
    users.user.findOneAndDelete({ _id: req.params.id }, (err) => {
        if (err) res.send(err)
        else res.send("O utilizador foi apagado com sucesso.")
    })
}

function deleteLogicUsers(req, res) {
    users.user.findOneAndUpdate({ _id: req.params.id }, { status: false }, (err) => {
        if (err) res.send(err)
        else res.send("O utilizador foi desativado.")
    })
}


function reactivateLogicUsers(req, res) {
    users.user.findOneAndUpdate({ _id: req.params.id }, { status: true }, (err) => {
        if (err) res.send(err)
        else res.send("O utilizador foi reativado.")
    })
}

module.exports = {
    readUsers: readUsers,
    readUsersId: readUsersId,
    deleteFisicUsers: deleteFisicUsers,
    deleteFisicUsersId: deleteFisicUsersId,
    deleteLogicUsers: deleteLogicUsers,
    saveUsers: saveUsers,
    updateUsers: updateUsers,
    reactivateLogicUsers: reactivateLogicUsers
};