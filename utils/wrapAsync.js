module.exports=(fn)=>{
    return function(err,req,res){
        fn(err,req,res).catch(err)
    }

}