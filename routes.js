//require do controller
const router = require('express').Router();
const controllerUsers = require('./controllers/users.controller.js');
const controllerAuth = require('./controllers/auth.controller.js');
const controllerItems = require('./controllers/item.controller.js');
const controllerRequisitions = require('./controllers/requisitions.controller.js');
const jwt = require('./assets/scripts/jwt.js');

router.get('/', function(req, res) {
    res.send(console.log("A definir posteriormente com o professor."));
    res.end();
});

//rotas para autenticação
router.post('/login', controllerAuth.login);

//tokens
router.get('/token', (req, res) => jwt.validateToken(req, res, controllerUsers.readUsers));
//router.get('/refreshtoken', jwt.refreshToken);

//rota para users
router.get('/users', controllerUsers.readUsers);
router.get('/users/:id', controllerUsers.readUsersId);
router.post('/users', controllerUsers.saveUsers);
router.put('/users/:id', controllerUsers.updateUsers);
//router.delete('/users', (req,res) => jwt.validateToken(req, res, controllerUsers.deleteFisicUsers));
//router.delete('/users/:id', (req,res) => jwt.validateToken(req, res, controllerUsers.deleteFisicUsersId));
//router.put('/users/delete/:id', (req,res) => jwt.validateToken(req, res, controllerUsers.deleteLogicUsers));
router.put('/users/delete/:id', controllerUsers.deleteLogicUsers);
router.put('/users/activate/:id', controllerUsers.reactivateLogicUsers);

//Rotas para items
router.get('/items/', controllerItems.readItems);
router.get('/items/:id', controllerItems.readItemsId);
router.post('/items/', controllerItems.saveItems);
router.put('/items/:id', controllerItems.updateItems);
//router.delete('/items', (req,res) => jwt.validateToken(req, res, controllerUsers.deleteFisicItems));
//router.delete('/items/:id', (req,res) => jwt.validateToken(req, res, controllerUsers.deleteFisicItemsId));
//router.put('/items/delete/:id', (req,res) => jwt.validateToken(req, res, controllerItems.deleteLogicItems));
router.put('/items/delete/:id', controllerItems.deleteLogicItems);
router.put('/items/activate/:id', controllerItems.reactivateLogicItems);

//Rotas para Requisitions
router.get('/requisitions/', controllerRequisitions.readRequisitions);
router.get('/requisitions/:id', controllerRequisitions.readRequisitionsId);
router.post('/requisitions/', controllerRequisitions.saveRequisitions);
router.put('/requisitions/:id', controllerRequisitions.updateRequisitions);
//router.delete('/requisitions', (req,res) => jwt.validateToken(req, res, controllerRequisitions.deleteFisicRequisitions));
//router.delete('/requisitions/:id', (req,res) => jwt.validateToken(req, res, controllerRequisitions.deleteFisicRequisitionsId));
//router.put('/requisitions/delete/:id', (req,res) => jwt.validateToken(req, res, controllerRequisitions.deleteLogicRequisitions));
router.put('/requisitions/delete/:id', controllerRequisitions.deleteLogicRequisitions);

//Rotas para classrooms
router.get('/classrooms/', controllerClassrooms.readClassrooms);
router.get('/classrooms/:id', controllerClassrooms.readClassroomsId);
router.post('/classrooms/', controllerClassrooms.saveClassrooms);
router.put('/classrooms/:id', controllerClassrooms.updateClassrooms);
//router.delete('/classrooms', (req,res) => jwt.validateToken(req, res, controllerClassrooms.deleteFisicClassrooms));
//router.delete('/classrooms/:id', (req,res) => jwt.validateToken(req, res, controllerClassrooms.deleteFisicClassroomsId));
//router.put('/classrooms/delete/:id', (req,res) => jwt.validateToken(req, res, controllerClassrooms.deleteLogicClassrooms));
router.put('/classrooms/delete/:id', controllerClassrooms.deleteLogicClassrooms);


//exportar router
module.exports = router;
