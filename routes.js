//require do controller
const router= require('express').Router();
const controllerUsers = require('./controllers/users.controller.js');
const controllerAuth = require('./controllers/auth.controller.js');
const jwt = require('./assets/scripts/jwt.js');

router.get('/', function(req,res){
    res.send(console.log("A definir posteriormente com o professor."));
    res.end();
});

//rotas para autenticação
router.post('/login', controllerAuth.login);

//tokens
router.get('/token', (req,res) => jwt.validateToken(req, res, controllerUsers.readUsers));
//router.get('/refreshtoken', jwt.refreshToken);

//rota para users
router.get('/users', controllerUsers.readUsers);
router.get('/users/:id', controllerUsers.readUsersId);
router.post('/users', controllerUsers.saveUsers);
router.put('/users/:id', controllerUsers.updateUsers);
//router.delete('/users', (req,res) => jwt.validateToken(req, res, controllerUsers.deleteFisicUsers));
//router.delete('/users/:id', (req,res) => jwt.validateToken(req, res, controllerUsers.deleteFisicUsersId));
//router.put('/users/delete/:id', (req,res) => jwt.validateToken(req, res, controllerUsers.deleteLogicUsers));
router.put('/users/delete/:id',  controllerUsers.deleteLogicUsers);
router.put('/users/activate/:id',  controllerUsers.reactivateLogicUsers);

//exportar router
module.exports = router;