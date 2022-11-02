
const product = require("./src/models/fraazo.model");
const productsdata = require("./src/product")

const Defaultdata = async()=>{
    try{
        const storeData =  await product.insertMany(productsdata)
    }catch(err){
    console.log("error"+err.message)
    }
}


module.exports = Defaultdata