
   
  function postReq(userName,password) {
     
    mongoose.connect('mongodb://localhost:27017/StickyNotes',{
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    
    const userData=new mongoose.Schema({

          usr:{type:String,
                required:true
           },
           pswd:{type:String,
             required:true  
          }
    })
    
    const User=new mongoose.model("User",userData)
   
    const dd = async()=> {
      try
      {
        const d1=new User({
          usr:"Hello",
          pswd:"1"
        })
       // const result=new User.insertOne([d1]);
        //console.log(result)
        d1.save();
      }
      catch(error){console.log(error)}
     
    }
  
      dd();
   }
   
   export default postReq


const express=require('express')
require('./cnn')
const app=express();
const port=process.env.PORT||8000

app.post("/student",(req,res)=>{
  res.send('hello from server')
})

app.listen(port,()=>{
  console.log(`listening at port ${port}`)
})
 


