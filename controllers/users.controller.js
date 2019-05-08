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
    let newUser = users.user({

        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10, ((err, hash) => {
            if (err) res.send(err)
            else return hash
        })),
        email: req.body.email.toLowerCase(),
        type: req.body.type,
    })
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
                if (user[item] || user[item] == null) {
                    if (item == "password") {
                        user[item] = req.body[item];
                    } else {
                        user[item] = req.body[item];
                    }
                }
            }
            user.save((err) => {
                if (err) res.send(err);
                else res.send("Success")
            })
        }
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

module.exports = {
    readUsers: readUsers,
    readUsersId: readUsersId,
    deleteFisicUsers: deleteFisicUsers,
    deleteFisicUsersId: deleteFisicUsersId,
    deleteLogicUsers: deleteLogicUsers,
    saveUsers: saveUsers,
    updateUsers: updateUsers
};