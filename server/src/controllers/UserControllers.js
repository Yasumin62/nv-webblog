const {User} = require('../models');

module.exports = {
    async index(req, res){
       // res.send('เรียกข้อมูลผู้ใช้ทั้งหมด');
       try{
           const users = await User.findAll();
           res.send(users);
       }
       catch(err){
           res.send(500).send({
               error: 'The users information was incorrect'
           });
       }
    },
    async create(req, res){
        try{
            const user = await Users.create(req.body);
            res.send(user.toJSON());
        }catch(err){
            res.send(500).send({
                error: 'The users information was incorrect'
            });
        }
    },
    async put(req, res){
        try{
            await update(req.body, {
                where:{
                    id: req.params.userId
                }
            })
            res.send(req.body);
        }
        catch(err){
            res.send(500).send({
                error: 'The users information was incorrect'
            });
        }
    },
    async remove(req, res){
        try{
            const user = await Users.findOne({
                where:{
                    id: req.params.userId
                }
            })

            if(!user){
                return res.status(403).send({
                error: 'The users information was incorrect'
            })
        }

        await user.destory()
        res.send(user)
    }catch(err){
            res.send(500).send({
                error: 'The users information was incorrect'
            });
    }
},
    //create user
    async show(req, res){
        try{
            const user = await User.findByPk(req.params.userId);
            res.send(user);
        }catch(err){
            res.status(500).send({
                error: 'The users information was incorrect'
            });
        }
    }
}