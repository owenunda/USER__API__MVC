const path = require("path")
const fs  = require("fs/promises")

const jsonPath = path.resolve("./src/data.json")


const getLastId = (dataArray) => {
  const lastElementIndex = dataArray.length - 1;
  return dataArray[lastElementIndex].id + 1;
};


class userServices{

  static async getAll () {
    try {
      const jsonFile = await fs.readFile(jsonPath, "utf-8")
      console.log(jsonFile);
      return jsonFile
    } catch (error) {
      throw(error)
    }
  }

  static async createUSer(newUser){
    try {
      const userArray =  JSON.parse(await fs.readFile(jsonPath, "utf-8"))
      userArray.push({...newUser, id: getLastId(userArray)})
      await fs.writeFile(jsonPath, JSON.stringify(userArray))
      return 201
    } catch (error) {
      throw(error)
    }
  }

  static async update(updateUser, id){
    try {
      const {name, password} = updateUser
      const userArray = JSON.parse(await fs.readFile(jsonPath, "utf-8"))
      const  lasstIndex = userArray.findIndex(user => user.id === parseInt(id))
      userArray[lasstIndex].name = name
      userArray[lasstIndex].password = password
      await fs.writeFile(jsonPath, JSON.stringify(userArray))
      return 200
    } catch (error) {
      throw(error)
    }
  }

  static async userDelete(id){
    try {
      const userArray = JSON.parse(await fs.readFile(jsonPath, "utf-8"))
      const  lasstIndex = userArray.findIndex(user => user.id === parseInt(id))
      userArray.splice(lasstIndex, 1)
      await fs.writeFile(jsonPath, JSON.stringify(userArray))
      return 200
    } catch (error) {
      throw(error)
    }
  }


}

module.exports = userServices;