const {Blog} = require('../models');

module.exports = {
    async index(req, res){
       try{
           const blogs = await Blog.findAll();
           res.send(blogs);
       }
       catch(err){
           res.send(500).send({
               error: 'The blogs information was incorrect'
           });
       }
    },
    async create(req, res){
        try{
            const blog = await Blog.create(req.body);
            res.send(blog.toJSON());
        }catch(err){
            res.send(500).send({
                error: 'The users information was incorrect'
            });
        }
    },
    async put(req, res){
        try{
            await Blog.update(req.body, {
                where:{
                    id: req.params.blogId
                }
            })
            res.send(req.body);
        }
        catch(err){
            res.send(500).send({
                error: 'Update blog incorrect'
            });
        }
    },
    async remove(req, res){
        try{
            const blog = await Blog.findOne({
                where:{
                    id: req.params.blogId
                }
            })

            if(!blog){
                return res.status(403).send({
                error: 'The blog information was incorrect'
            })
        }

        await blog.destory()
        res.send(blog)
    }catch(err){
            res.send(500).send({
                error: 'The blog information was incorrect'
            });
    }
},
    //create user
    async show(req, res){
        try{
            const blog = await Blog.findByPk(req.params.userId);
            res.send(blog);
        }catch(err){
            res.status(500).send({
                error: 'The blog information was incorrect'
            });
        }
    }
}