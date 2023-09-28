const User = require("../models/user")

const addUser = async (req, res) => {
    const {username,password,name,position,phone} =req.body;
    try {
        const add = await User.create({username,password,name,position,phone})
        console.log(add);
        return res.status(201).json(add)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteUser = async (req,res) => {
    const {username} = req.body;
    try {
        const id = await User.findOneAndDelete({username});
        console.log(id);
        return res.status(200).json(id)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const editUser = async (req,res) =>{
    const {username,password,name,position,phone} = req.body;
    console.log(req.body);
    try {
        const edit =await User.findOneAndUpdate({username},{password,name,position,phone}, {new: true});
        return res.status(200).json(edit)
    } catch (error) {
        return res.status(500).json(error)
    }
}



module.exports = {addUser,deleteUser,editUser};