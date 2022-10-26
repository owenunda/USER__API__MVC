const userServices = require("../services/user.services")


const getUserAll = async (req, res) =>{
  try {
  const users = await userServices.getAll()
  console.log(users)
  res.send(users)
  } catch (error) {
    console.log(error);
  }
}

const createUSer = async(req, res)  =>{
  try {
    const newUser = req.body
    const result = await userServices.createUSer(newUser)
    res.sendStatus(result)
  } catch (error) {
    console.log(error)
  }
}

const updateUser = async(req, res) =>{
  try {
    const updateUser = req.body
    const {id} = req.params
    const result = await userServices.update(updateUser, id)
    res.sendStatus(result)
  } catch (error) {
    console.log(error)
  }
}

const deleteUser = async(req, res) =>{
  try {
    const {id} = req.params
    const result = await userServices.userDelete(id)
    res.sendStatus(result)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getUserAll,
  createUSer,
  updateUser,
  deleteUser
}