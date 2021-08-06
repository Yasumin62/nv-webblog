const UserControllers = require('./controllers/UserControllers')
const UserController = require('./controllers/UserControllers')

module.exports = (app) =>{
    app.post('/user',UserControllers.create);
    app.put('/user/:userId',UserControllers.put);
    app.delete('./user/:userId',UserControllers.remove);
    app.get('/user/:userId',UserControllers.show);
    app.get('/users',UserControllers.index);
}