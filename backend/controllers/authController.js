const User = require('../models/user');
const bcrypt = require("bcrypt");

const authController = {
    //register
    registerUser: async(req,res)=>{ 
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            //create new user
            const newUser = await new User({
                username: req.body.username,
                password: hashed,
                name: req.body.name,
                position: req.body.position,
                phone: req.body.phone
            });

        //save to DB
        const user = await newUser.save();
        res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //LOGIN 
    loginUser: async(req ,res)=>  {
        try {
            const password =  req.body.password;
            const user = await User.findOne({username: req.body.username})
            if(!user){
                res.status(404).json("Wrong username!")
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            // console.log(password,user.password)
            console.log(validPassword);
            if(!validPassword){
                res.status(404).json("Wrong password!")
            }
            
            if(user && validPassword ){
                res.status(200).json(user);
            }
            
        } catch (error) {
            res.status(500).json(error);
        }
    },

    userLogout: async(req, res) =>{
        // res.clearCookie("refeshToken");
        refeshTokens = refeshTokens.filters(token => token !== req.cookies.refeshToken);
        res.status(200).json("Logged out !");
    }
}

module.exports =authController;