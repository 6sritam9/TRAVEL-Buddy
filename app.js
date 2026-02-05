const express=require("express");
const app=express();
const mongoose=require("mongoose")
const mongo_Url=('mongodb://127.0.0.1:27017/travel');
const Listing=require("./models/listing.js")
const path=require("path")
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate")
const asyncWrap=require("./utils/wrapAsync.js")
app.engine("ejs",ejsMate)
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname,"views"))

app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))

main().then(res=>{
    console.log("connecting to database");
    
}).catch(err=>console.log(err))





async function main(){

    await mongoose.connect(mongo_Url)
}




app.listen(8080,()=>{
    console.log("running on port 8080")
})

app.get("/",(req,res)=>{
    res.send("working")
})

// app.get("/test", async (req,res)=>{
//      let newListing = new Listing({
//         title:"goa",
//      description:"beach on side",
//         price:40000,
//         location:"goa",
//         country:"india"
//     })

//     await newListing.save();
//     console.log("saved")
//     res.send("succcesfull")

// })

app.get("/listings",async(req,res)=>{
  const content= await Listing.find({})
    res.render("listings/index.ejs",{content})
})



// to view details
app.get("/listing/:id",async (req,res)=>{
    let {id}=req.params;
    const data=await Listing.findById(id);
    console.log(data)
    res.render("listings/showing.ejs",{data})

})

// to add details

app.get("/listings/new",(req,res)=>
{
    res.render("listings/newData.ejs")
})

// upload new details

app.post("/details/add",asyncWrap(async(req,res,next)=>{

    let{title,description,price,location,country,image}=req.body;
    const newList=new Listing(
        {title:title,description:description,price:price,location:location,country:country,image:image

        }
    )
    await Listing.insertMany(newList)
    res.redirect("/listings")



}))

app.get("/listings/:id/edit",async(req,res)=>{
    const {id}=req.params;
    const data= await Listing.findById(id)

    res.render("listings/edit.ejs",{data})

}) 

app.put("/listings/:id",async(req,res)=>{
 const {id}=req.params;
 let{price}=req.body;
 await Listing.findByIdAndUpdate(id,{...req.body.data},{new:true})

// await Listing.findByIdAndUpdate(id,{price:price

// })

 
 res.redirect("/listings")
})


app.delete("/listings/:id/delete",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id)
    res.redirect('/listings')

})

app.get("/privacy",(req,res)=>{
    res.render("listings/privacy.ejs")
})

app.get("/listings/reviews",(req,res)=>{
    res.render("reviews.ejs")
})

app.post("/listings/:id/reviews",(req,res)=>{
    
})

app.use((err,req,res,next)=>{
    res.send("some thing went wrong")
})