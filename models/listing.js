const { urlencoded } = require("express");
const mongoose=require("mongoose")
const Schema=mongoose.Schema;

// const ListingSchema=new Schema(
//     {
//         title:{type:String,
//             required:true},
//         description:String,

//         image:{type:String},
//         // image:{
//         //     filename:String,
//         //     url:String,

//         //     default:"https://www.google.com/search?q=unsplash+images&sca_esv=2e2d5a80f5c2708e&udm=2&biw=1536&bih=695&sxsrf=AE3TifMgReXnTJoCic2l-UOiCCWB5rLZ3w%3A1761241994728&ei=imv6aImaLP-TseMPyoDaoAI&oq=unsplash&gs_lp=Egtnd3Mtd2l6LWltZyIIdW5zcGxhc2gqAggBMggQABiABBixAzINEAAYgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAEMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAESMgiUABY_xBwAXgAkAEAmAH5AaABzguqAQUwLjQuNLgBAcgBAPgBAZgCCaACygyoAgrCAgoQIxgnGMkCGOoCwgIHECMYJxjJAsICDhAAGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYgwGYAxWSBwUxLjQuNKAH1imyBwUwLjQuNLgHtQzCBwMzLTnIB2M&sclient=gws-wiz-img#vhid=EYvEaTQh6GUIpM&vssid=mosaic"
//         //     ,
          
//         //     set:(v)=>v===""?"https://www.google.com/search?q=unsplash+images&sca_esv=2e2d5a80f5c2708e&udm=2&biw=1536&bih=695&sxsrf=AE3TifMgReXnTJoCic2l-UOiCCWB5rLZ3w%3A1761241994728&ei=imv6aImaLP-TseMPyoDaoAI&oq=unsplash&gs_lp=Egtnd3Mtd2l6LWltZyIIdW5zcGxhc2gqAggBMggQABiABBixAzINEAAYgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyBRAAGIAEMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAESMgiUABY_xBwAXgAkAEAmAH5AaABzguqAQUwLjQuNLgBAcgBAPgBAZgCCaACygyoAgrCAgoQIxgnGMkCGOoCwgIHECMYJxjJAsICDhAAGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYgwGYAxWSBwUxLjQuNKAH1imyBwUwLjQuNLgHtQzCBwMzLTnIB2M&sclient=gws-wiz-img#vhid=EYvEaTQh6GUIpM&vssid=mosaic":v,
        
        
//         // },
//         price:Number,
//         location:String,
//         country:String



//     }
// )
const ListingSchema=new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
  reviews:[
    {
      type:Schema.Types.ObjectId,
      ref:"Review"
    }
  ],
  image: {
    filename: { type: String },
    url: { type: String }
  }
});

const Listing=mongoose.model("Listing",ListingSchema)

module.exports=Listing;