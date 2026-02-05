const mongoose=require("mongoose")
const initData=require("./data.js")
const Listing=require("../models/listing.js")
const mongo_Url=('mongodb://127.0.0.1:27017/travel');
main().then(res=>{
    console.log(res);
    
}).catch(err=>console.log(err))





async function main(){

    await mongoose.connect(mongo_Url)
}

const initDB=async()=>{
    await Listing.deleteMany({});
    try{
    await Listing.insertMany(initData.data)
    console.log("succesfully pushed")
    }
    catch (err) {
        console.log(`validation error ${err} `)
    }
    
}
initDB();