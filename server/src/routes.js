const UserAuthenController = require('./controllers/UserAuthenController');
const UserControllers = require('./controllers/UserControllers')
const UserController = require('./controllers/UserControllers')
const isAuthenController = require('./authen/isAuthenController')
const BlogController = require('./controllers/BlogController')
const CommentController = require('./controllers/CommentController')

module.exports = (app) =>{
    app.post('/user',UserControllers.create);
    app.put('/user/:userId',UserControllers.put);
    app.delete('./user/:userId',UserControllers.remove);
    app.get('/user/:userId',UserControllers.show);
    app.get('/users',isAuthenController, UserControllers.index);
    
    app.post('/login',UserAuthenController.login);

    app.post('/blog', BlogController.create);
    app.put('/blog/:blogId', BlogController.put);
    app.delete('/blog/:blogId', BlogController.remove);
    app.get('/blog/:blogId', BlogController.show);
    app.get('/blogs', BlogController.index);

    app.post('/comment', CommentController.create);
    app.put('/comment/:commentId', CommentController.put);
    app.delete('/comment/:blogId', CommentController.remove);
    app.get('/comment/:blogId', CommentController.show);
    app.get('/comments', CommentController.index);
}